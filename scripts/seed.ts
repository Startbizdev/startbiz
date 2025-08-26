/*
  Seed script: services, cities, and pages (service×ville)
  Run with: pnpm dlx tsx scripts/seed.ts
*/
import "dotenv/config";
import { connectToDatabase } from "@/lib/db";
import { Service } from "@/lib/models/Service";
import { City } from "@/lib/models/City";
import { Page } from "@/lib/models/Page";

const SERVICES = [
  "agence-digitale",
  "agence-web",
  "creation-site-internet",
  "developpement-application-mobile",
  "developpement-plateforme-saas",
  "developpement-marketplace",
  "agence-ecommerce-premium",
  "developpement-logiciel-sur-mesure",
  "integration-api-erp-crm",
  "application-mvp-startup",
  "refonte-site-internet",
  "hebergement-hds-sante",
  "strategie-digitale-conseil",
  "seo-sea-growth",
] as const;

const CITIES: { slug: string; name: string; region: string; sectorHints: string[] }[] = [
  { slug: "paris", name: "Paris", region: "Île-de-France", sectorHints: ["Fintech", "Retail"] },
  { slug: "lyon", name: "Lyon", region: "Auvergne-Rhône-Alpes", sectorHints: ["Industrie", "Biotech"] },
  { slug: "marseille", name: "Marseille", region: "Provence-Alpes-Côte d'Azur", sectorHints: ["Santé", "Tourisme"] },
  { slug: "toulouse", name: "Toulouse", region: "Occitanie", sectorHints: ["Aéro", "Spatial"] },
  { slug: "bordeaux", name: "Bordeaux", region: "Nouvelle-Aquitaine", sectorHints: ["Luxe", "Vin"] },
  { slug: "lille", name: "Lille", region: "Hauts-de-France", sectorHints: ["Retail", "Logistique"] },
  { slug: "nantes", name: "Nantes", region: "Pays de la Loire", sectorHints: ["Tech"] },
  { slug: "nice", name: "Nice", region: "Provence-Alpes-Côte d'Azur", sectorHints: ["Tourisme"] },
  { slug: "strasbourg", name: "Strasbourg", region: "Grand Est", sectorHints: ["Institutions", "Transfrontalier"] },
  { slug: "montpellier", name: "Montpellier", region: "Occitanie", sectorHints: ["Santé", "Tech"] },
  { slug: "rennes", name: "Rennes", region: "Bretagne", sectorHints: ["Telecom", "Cyber"] },
  { slug: "grenoble", name: "Grenoble", region: "Auvergne-Rhône-Alpes", sectorHints: ["Recherche", "Industrie"] },
];

async function main() {
  await connectToDatabase();

  // Services upsert
  for (const slug of SERVICES) {
    const title = slug
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
    await Service.updateOne(
      { slug },
      {
        $set: {
          title,
          metaTitle: `${title} — Startbiz`,
          metaDescription: `${title} par Startbiz. Plateformes web et mobiles sur mesure.`,
          pillar: true,
        },
      },
      { upsert: true }
    );
  }

  // Cities upsert
  for (const c of CITIES) {
    await City.updateOne(
      { slug: c.slug },
      { $set: { name: c.name, region: c.region, sectorHints: c.sectorHints } },
      { upsert: true }
    );
  }

  // Pages generation (service × city)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.startbiz.fr";
  for (const c of CITIES) {
    for (const s of SERVICES) {
      const url = `/${c.slug}/${s}`;
      const title = `${c.name} — ${s.replace(/-/g, " ")}`;
      const intro = `À ${c.name}, nous accompagnons les acteurs ${c.sectorHints.join(", ")} sur leurs projets numériques.`;
      const useCases = [
        { title: "Refonte e‑commerce premium", body: `Optimisation UX et performance (Core Web Vitals) pour un acteur ${c.sectorHints[0]}.` },
        { title: "MVP SaaS local", body: `Cadrage rapide et itérations pour valider le product‑market fit à ${c.name}.` },
        { title: "Intégration ERP/CRM", body: `Connexion des systèmes existants et automatisation des flux opérationnels.` },
      ];
      const faq = [
        { q: `Quels délais moyens à ${c.name} ?`, a: "De 4 à 12 semaines selon le périmètre." },
        { q: "Quelles technologies ?", a: "Next.js, React Native, Node.js, MongoDB, Stripe, Cloud." },
        { q: "Accompagnement après mise en ligne ?", a: "Run, monitoring, QA continue et évolutions roadmap." },
      ];
      await Page.updateOne(
        { url },
        {
          $set: {
            serviceSlug: s,
            citySlug: c.slug,
            url,
            title,
            h1: title,
            metaDescription: `${title} — Agence digitale Startbiz.`,
            intro,
            useCases,
            methodology: ["Cadrage", "UX/UI", "Dev", "QA", "Déploiement", "Run"],
            faq,
            canonical: `${baseUrl}${url}`,
            noindex: false,
            schemaType: "Service",
          },
        },
        { upsert: true }
      );
    }
  }

  console.log("Seed completed.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

