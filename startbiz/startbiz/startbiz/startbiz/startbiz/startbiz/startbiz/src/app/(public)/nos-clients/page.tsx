import { connectToDatabase } from "@/lib/db";
import { Client } from "@/lib/models/Client";
import Image from "next/image";

export const revalidate = 86400;
export const dynamic = "force-dynamic";

export default async function NosClientsPage() {
  let clients: { name: string; slug: string; logoUrl?: string; sector?: string }[] = [];
  if (process.env.MONGODB_URI) {
    await connectToDatabase();
    clients = (await Client.find({}, { name: 1, slug: 1, logoUrl: 1, sector: 1 }).lean()) as unknown as {
      name: string;
      slug: string;
      logoUrl?: string;
      sector?: string;
    }[];
  }
  return (
    <main className="container py-16 space-y-6">
      <h1 className="text-4xl font-semibold">Nos clients</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clients.map((c) => (
          <li key={c.slug} className="rounded-xl border p-6 flex items-center justify-center h-28">
            {c.logoUrl ? (
              <Image src={c.logoUrl} alt={c.name} width={160} height={64} style={{ objectFit: "contain", maxHeight: 64 }} />
            ) : (
              <span className="font-medium">{c.name}</span>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

