import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Client } from "@/lib/models/Client";
import { jwtVerify } from "jose";

const AUTH_COOKIE = "sb_admin";
const AUTH_SECRET = (process.env.AUTH_SECRET || "change-me") as string;

async function ensureAdmin(req: NextRequest) {
  const token = req.cookies.get(AUTH_COOKIE)?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(AUTH_SECRET));
    return true;
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  if (!(await ensureAdmin(req))) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  await connectToDatabase();
  const items = await Client.find({}).sort({ createdAt: -1 }).lean();
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  if (!(await ensureAdmin(req))) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  await connectToDatabase();
  const data = await req.json().catch(() => ({}));
  if (!data.name || !data.slug) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  const created = await Client.create(data);
  return NextResponse.json(created);
}

export async function PUT(req: NextRequest) {
  if (!(await ensureAdmin(req))) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  await connectToDatabase();
  const data = await req.json().catch(() => ({}));
  if (!data.slug) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  await Client.updateOne({ slug: data.slug }, { $set: data });
  const updated = await Client.findOne({ slug: data.slug }).lean();
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  if (!(await ensureAdmin(req))) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  await Client.deleteOne({ slug });
  return NextResponse.json({ ok: true });
}

