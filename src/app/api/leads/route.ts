import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { leadSchema } from "@/lib/validation";
import { scoreLead, statusFromScore } from "@/lib/scoring";
import { Lead } from "@/lib/models/Lead";
import { createRateLimiter } from "@/lib/rateLimit";
import { sendMail } from "@/lib/mailer";

const rateLimit = createRateLimiter({ windowMs: 60_000, max: 5 });

export async function POST(req: Request) {
  const limited = await rateLimit(req);
  if (!limited.ok) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": String(limited.retryAfter) } });
  }

  const json = await req.json().catch(() => ({}));

  // Turnstile verify if token provided
  if (json?.token && process.env.TURNSTILE_SECRET_KEY) {
    try {
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: json.token }),
      });
      const result = await verify.json();
      if (!result.success) return NextResponse.json({ error: "captcha_failed" }, { status: 400 });
    } catch {}
  }
  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input", details: parsed.error.format() }, { status: 400 });
  }

  const input = parsed.data;

  await connectToDatabase();

  // dedupe: email + serviceSlug in last 45 days
  const since = new Date(Date.now() - 45 * 24 * 60 * 60 * 1000);
  const exists = await Lead.findOne({
    email: input.email,
    serviceSlug: input.serviceSlug,
    createdAt: { $gte: since },
  }).lean();
  if (exists) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const score = scoreLead(input);
  const status = statusFromScore(score);

  const lead = await Lead.create({
    status: status === "qualified" ? "qualified" : status === "review" ? "new" : "cold",
    score,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    phone: input.phone,
    company: input.company,
    role: input.role,
    serviceSlug: input.serviceSlug,
    citySlug: input.citySlug,
    budgetRange: input.budgetRange,
    timeline: input.timeline,
    projectSummary: input.projectSummary,
    pageUrl: input.pageUrl,
    utm: {
      source: input.utm_source,
      medium: input.utm_medium,
      campaign: input.utm_campaign,
    },
    consentAt: new Date(),
    consentIpHash: (req.headers.get("x-forwarded-for") || "").split(",")[0],
  });

  // Fire-and-forget transactional emails
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.startbiz.fr";
  const adminEmail = process.env.BACKOFFICE_PROTECTED_EMAIL || "";

  const prospectHtml = `
    <div style="font-family:Inter,Arial,sans-serif;padding:24px">
      <h2>Merci — parlons de votre projet</h2>
      <p>Nous avons bien reçu votre demande. Nous revenons vers vous rapidement.</p>
      <p><a href="${siteUrl}/rdv" target="_blank">Réserver un appel</a></p>
    </div>
  `;

  const internalHtml = `
    <div style="font-family:Inter,Arial,sans-serif;padding:24px">
      <h3>Nouveau lead Startbiz</h3>
      <p><strong>${lead.firstName} ${lead.lastName}</strong> — ${lead.email}</p>
      <p>Service: ${lead.serviceSlug || "n/a"} · Ville: ${lead.citySlug || "n/a"}</p>
      <p>Budget: ${lead.budgetRange || "n/a"} · Timeline: ${lead.timeline || "n/a"}</p>
      <p>Score: ${lead.score} · Statut: ${lead.status}</p>
      <p>${lead.projectSummary || ""}</p>
      <p><a href="${siteUrl}/admin/leads" target="_blank">Ouvrir le back-office</a></p>
    </div>
  `;

  Promise.allSettled([
    sendMail({ to: lead.email, subject: "Merci — parlons de votre projet", html: prospectHtml }),
    adminEmail ? sendMail({ to: adminEmail, subject: "Nouveau lead Startbiz", html: internalHtml }) : Promise.resolve(),
  ]).catch(() => {});

  // Optional Slack webhook
  const hook = process.env.WEBHOOK_SLACK_URL;
  if (hook) {
    fetch(hook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: `Nouveau lead: ${lead.firstName} ${lead.lastName} — ${lead.email} (score ${score})` }),
    }).catch(() => {});
  }

  return NextResponse.json({ ok: true });
}

