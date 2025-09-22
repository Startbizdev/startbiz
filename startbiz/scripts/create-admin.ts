import "dotenv/config";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/lib/models/User";
import { hashPassword } from "@/lib/auth";

async function main() {
  const email = process.env.BACKOFFICE_PROTECTED_EMAIL;
  const pass = process.env.ADMIN_PASSWORD || "admin123";
  if (!email) throw new Error("BACKOFFICE_PROTECTED_EMAIL required");
  await connectToDatabase();
  const hash = await hashPassword(pass);
  await User.updateOne({ email }, { $set: { email, hash, role: "admin" } }, { upsert: true });
  console.log(`Admin ready for ${email}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

