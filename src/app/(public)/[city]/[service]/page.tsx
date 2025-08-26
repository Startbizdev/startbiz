import { Page, type IPage } from "@/lib/models/Page";
import { City, type ICity } from "@/lib/models/City";
import { Service, type IService } from "@/lib/models/Service";
import { connectToDatabase } from "@/lib/db";
import type { Metadata } from "next";

export const revalidate = 86400;

type Params = { params: { city: string; service: string } };

export async function generateStaticParams() {
  if (!process.env.MONGODB_URI) return [] as Array<{ city: string; service: string }>;
  await connectToDatabase();
  const cities = (await City.find({}, { slug: 1 }).lean()) as unknown as Pick<ICity, "slug">[];
  const services = (await Service.find({}, { slug: 1 }).lean()) as unknown as Pick<IService, "slug">[];
  const params: Array<{ city: string; service: string }> = [];
  for (const c of cities) {
    for (const s of services) params.push({ city: c.slug, service: s.slug });
  }
  return params;
}

export default async function CityServicePage({ params }: Params) {
  await connectToDatabase();
  const url = `/${params.city}/${params.service}`;
  const page = (await Page.findOne({ url }).lean()) as IPage | null;
  if (!page) return <div className="container py-16">Page introuvable</div>;
  return (
    <main className="container py-16 space-y-6">
      <h1 className="text-4xl font-semibold">{page.h1 || page.title}</h1>
      {page.intro && <p className="text-[var(--muted-800)] max-w-2xl">{page.intro}</p>}
      {page.faq && page.faq.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <ul className="divide-y">
            {page.faq.map((f, i) => (
              <li key={i} className="py-3">
                <p className="font-medium">{f.q}</p>
                <p className="text-[var(--muted-800)]">{f.a}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  await connectToDatabase();
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.startbiz.fr";
  const url = `${base}/${params.city}/${params.service}`;
  const page = (await Page.findOne({ url: `/${params.city}/${params.service}` }).lean()) as IPage | null;
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription || undefined,
    robots: { index: !page.noindex },
    alternates: { canonical: page.canonical || url },
    openGraph: {
      title: page.title,
      description: page.metaDescription || undefined,
      url,
      type: "article",
    },
  };
}

