import { Service, type IService } from "@/lib/models/Service";
import { connectToDatabase } from "@/lib/db";
import type { Metadata } from "next";

export const revalidate = 86400;

type Params = { params: { service: string } };

export async function generateStaticParams() {
  if (!process.env.MONGODB_URI) return [] as { service: string }[];
  await connectToDatabase();
  const services = (await Service.find({}, { slug: 1 }).lean()) as unknown as Pick<IService, "slug">[];
  return services.map((s) => ({ service: s.slug }));
}

export default async function ServicePage({ params }: Params) {
  await connectToDatabase();
  const svc = (await Service.findOne({ slug: params.service }).lean()) as IService | null;
  if (!svc) return <div className="container py-16">Service introuvable</div>;
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-semibold">{svc.title}</h1>
      {svc.metaDescription && (
        <p className="mt-4 text-[var(--muted-800)] max-w-2xl">{svc.metaDescription}</p>
      )}
    </main>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  await connectToDatabase();
  const svc = (await Service.findOne({ slug: params.service }).lean()) as IService | null;
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.startbiz.fr";
  if (!svc) return {};
  const url = `${base}/${params.service}`;
  return {
    title: svc.metaTitle || `${svc.title} — Startbiz`,
    description: svc.metaDescription || undefined,
    alternates: { canonical: url },
    openGraph: {
      title: svc.metaTitle || svc.title,
      description: svc.metaDescription || undefined,
      url,
      images: svc.ogImage ? [{ url: svc.ogImage }] : undefined,
      type: "website",
    },
  };
}

