import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.startbiz.fr";
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap><loc>${base}/sitemap-services.xml</loc></sitemap>
    <sitemap><loc>${base}/sitemap-villes.xml</loc></sitemap>
    <sitemap><loc>${base}/sitemap-pages.xml</loc></sitemap>
  </sitemapindex>`;
  return new NextResponse(body, { headers: { "content-type": "application/xml" } });
}

