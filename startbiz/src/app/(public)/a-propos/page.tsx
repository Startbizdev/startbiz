import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "À propos de Startbiz - Agence web experte depuis 2014",
  description: "Découvrez l'histoire de Startbiz, agence web fondée en 2014. Plus de 600 projets réussis en création de sites web et applications mobiles. Expertise technique complète : React, Next.js, Node.js, AWS.",
  keywords: "agence web, Startbiz, développement web, React, Next.js, Node.js, AWS, expertise technique, certifications, méthodologie, valeurs entreprise",
  openGraph: {
    title: "À propos de Startbiz - Agence web experte depuis 2014",
    description: "Découvrez l'histoire de Startbiz, agence web fondée en 2014. Plus de 600 projets réussis en création de sites web et applications mobiles.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de Startbiz - Agence web experte depuis 2014",
    description: "Découvrez l'histoire de Startbiz, agence web fondée en 2014. Plus de 600 projets réussis en création de sites web et applications mobiles.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
