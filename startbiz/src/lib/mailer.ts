import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 465);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const from = process.env.SMTP_FROM || "Startbiz <contact@startbiz.fr>";

if (!host || !user || !pass) {
  // Don't throw on import to allow build; throw when sending
}

function createTransport() {
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendMail(options: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}): Promise<void> {
  if (!host || !user || !pass) {
    throw new Error("SMTP configuration missing");
  }
  const transport = createTransport();
  await transport.sendMail({ from, ...options });
}

