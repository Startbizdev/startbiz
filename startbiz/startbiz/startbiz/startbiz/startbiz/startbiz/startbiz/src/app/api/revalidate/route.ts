import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { revalidateSchema } from "@/lib/validation";

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
  const parsed = revalidateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }
  revalidatePath(parsed.data.path);
  return NextResponse.json({ revalidated: true });
}

