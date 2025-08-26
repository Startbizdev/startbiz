import { City, type ICity } from "@/lib/models/City";
import { Service, type IService } from "@/lib/models/Service";
import { connectToDatabase } from "@/lib/db";
import Link from "next/link";

export const revalidate = 86400;

type Params = { params: { city: string } };

export async function generateStaticParams() {
  if (!process.env.MONGODB_URI) return [] as { city: string }[];
  await connectToDatabase();
  const cities = (await City.find({}, { slug: 1 }).lean()) as unknown as Pick<ICity, "slug">[];
  return cities.map((c) => ({ city: c.slug }));
}

export default async function CityHubPage({ params }: Params) {
  await connectToDatabase();
  const city = (await City.findOne({ slug: params.city }).lean()) as ICity | null;
  const services = (await Service.find({}, { slug: 1, title: 1 }).lean()) as unknown as Pick<IService, "slug" | "title">[];
  if (!city) return <div className="container py-16">Ville introuvable</div>;
  return (
    <main className="container py-16 space-y-6">
      <h1 className="text-4xl font-semibold">{city.name}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <li key={s.slug} className="rounded-xl border p-4">
            <Link href={`/${city.slug}/${s.slug}`} className="text-[var(--accent)]">{s.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

