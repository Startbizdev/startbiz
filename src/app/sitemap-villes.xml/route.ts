import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { City } from "@/lib/models/City";

export async function GET() {
  await connectToDatabase();
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.startbiz.fr";
  const cities = await City.find({}, { slug: 1 }).lean();
  const urls = cities
    .map((c) => `<url><loc>${base}/${c.slug}</loc></url>`) 
    .join("");
  const body = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
  <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">${urls}</urlset>`;
  return new NextResponse(body, { headers: { "content-type": "application/xml" } });
}

