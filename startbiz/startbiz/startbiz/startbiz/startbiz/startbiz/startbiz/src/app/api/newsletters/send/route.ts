import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { newsletterSendSchema } from "@/lib/validation";
import { Lead } from "@/lib/models/Lead";
import { sendMail } from "@/lib/mailer";

function isAdmin(req: NextRequest) {
  const email = req.headers.get("x-user-email");
  const allowed = process.env.BACKOFFICE_PROTECTED_EMAIL;
  return email && allowed && email === allowed;
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const parsed = newsletterSendSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  await connectToDatabase();

  const query: Record<string, unknown> = parsed.data.segmentQuery;
  const leads = await Lead.find(query, { email: 1 }).lean();
  const recipients = leads.map((l) => l.email).filter(Boolean);

  await Promise.allSettled(
    recipients.map((to) =>
      sendMail({ to, subject: parsed.data.subject, html: parsed.data.html })
    )
  );

  return NextResponse.json({ ok: true, count: recipients.length });
}

