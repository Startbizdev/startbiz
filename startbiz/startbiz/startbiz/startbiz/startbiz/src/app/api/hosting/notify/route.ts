import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { HostingAsset } from "@/lib/models/HostingAsset";
import { sendMail } from "@/lib/mailer";

function isAdmin(req: NextRequest) {
  const email = req.headers.get("x-user-email");
  const allowed = process.env.BACKOFFICE_PROTECTED_EMAIL;
  return email && allowed && email === allowed;
}

function daysUntil(date: Date) {
  const ms = date.getTime() - Date.now();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

type NotifyResult = { id: string; sent: boolean; type: "J-60" | "J-30" | "J-7" };

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  await connectToDatabase();

  const now = new Date();
  const soon = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);

  const assets = await HostingAsset.find({
    expiresAt: { $gte: now, $lte: soon },
    status: { $in: ["active", "renewal"] },
  }).lean();

  const results: NotifyResult[] = [];
  for (const a of assets) {
    const d = daysUntil(new Date(a.expiresAt));
    let type: "J-60" | "J-30" | "J-7" | null = null;
    if (d === 60) type = "J-60";
    else if (d === 30) type = "J-30";
    else if (d === 7) type = "J-7";
    if (!type) continue;

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;padding:24px">
        <h3>Rappel hébergement ${type}</h3>
        <p>Client: ${a.clientName}</p>
        <p>Domaine: ${a.domain}</p>
        <p>Expiration: ${new Date(a.expiresAt).toLocaleDateString("fr-FR")}</p>
      </div>
    `;
    // Note: Requires customer email in data model in future; here we only log
    try {
      await sendMail({ to: process.env.BACKOFFICE_PROTECTED_EMAIL || "", subject: `Rappel hébergement ${type} — ${a.domain}`, html });
      results.push({ id: String((a as { _id: unknown })._id), sent: true, type });
    } catch {
      results.push({ id: String((a as { _id: unknown })._id), sent: false, type });
    }
  }

  return NextResponse.json({ ok: true, results });
}

