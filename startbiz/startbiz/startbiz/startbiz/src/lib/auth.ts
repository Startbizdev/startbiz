import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { User, type IUser } from "@/lib/models/User";
import { connectToDatabase } from "@/lib/db";

const AUTH_COOKIE = "sb_admin";
const AUTH_SECRET = (process.env.AUTH_SECRET || "change-me") as string;

export async function hashPassword(plain: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}

export async function signSession(payload: { email: string }) {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(new TextEncoder().encode(AUTH_SECRET));
  return jwt;
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(AUTH_SECRET));
    return payload as { email: string };
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const session = await getSession();
  const allowed = process.env.BACKOFFICE_PROTECTED_EMAIL || "";
  if (!session || session.email !== allowed) return null;
  return session;
}

export async function login(email: string, password: string) {
  await connectToDatabase();
  const allowed = process.env.BACKOFFICE_PROTECTED_EMAIL || "";
  if (email !== allowed) return false;
  const user = (await User.findOne({ email }).lean()) as IUser | null;
  if (!user) return false;
  const ok = await verifyPassword(password, user.hash);
  if (!ok) return false;
  const token = await signSession({ email });
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  return true;
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
}

