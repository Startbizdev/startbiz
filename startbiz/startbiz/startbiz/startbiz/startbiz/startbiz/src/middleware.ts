import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const AUTH_COOKIE = "sb_admin";
const AUTH_SECRET = (process.env.AUTH_SECRET || "change-me") as string;

export async function middleware(req: NextRequest) {
  // Security headers
  const res = NextResponse.next();
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "SAMEORIGIN");
  res.headers.set("X-XSS-Protection", "0");

  if (req.nextUrl.pathname.startsWith("/admin")) {
    const token = req.cookies.get(AUTH_COOKIE)?.value;
    if (!token) return NextResponse.redirect(new URL("/admin/login", req.url));
    try {
      await jwtVerify(token, new TextEncoder().encode(AUTH_SECRET));
    } catch {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
  return res;
}

export const config = {
  matcher: ["/admin/:path*"],
};

