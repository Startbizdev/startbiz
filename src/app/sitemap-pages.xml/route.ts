import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Page } from "@/lib/models/Page";

export async function GET() {
  await connectToDatabase();
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.startbiz.fr";
  const pages = await Page.find({}, { url: 1 }).lean();
  const urls = pages
    .map((p) => `<url><loc>${base}${p.url}</loc></url>`) 
    .join("");
  const body = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
  <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">${urls}</urlset>`;
  return new NextResponse(body, { headers: { "content-type": "application/xml" } });
}

