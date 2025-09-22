import { NextRequest, NextResponse } from "next/server";
import { createSignedUploadParams } from "@/lib/cloudinary";

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
  const folder = body.folder || "startbiz";
  const params = createSignedUploadParams(folder, body.options || {});
  return NextResponse.json(params);
}

