import { Metadata } from "next";
import ServicesHub from "./ServicesHub";

export const metadata: Metadata = {
  title: "Services Agence Web | Développement Digital Complet | Startbiz",
  description: "Découvrez tous nos services d'agence web : création de sites vitrines, e-commerce, développement web sur mesure, applications mobiles, SEO, maintenance et branding. Devis gratuit.",
  keywords: [
    "services agence web",
    "développement web",
    "site internet",
    "e-commerce",
    "application mobile",
    "SEO référencement",
    "maintenance site web",
    "identité visuelle",
    "branding",
    "Startbiz",
    "agence digitale",
    "développement sur mesure",
    "création site web",
    "stratégie digitale"
  ],
  authors: [{ name: "Startbiz - Agence Web" }],
  creator: "Startbiz",
  publisher: "Startbiz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://startbiz.fr'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Services Agence Web | Développement Digital Complet | Startbiz",
    description: "Agence web complète : sites vitrines, e-commerce, développement sur mesure, apps mobiles, SEO. Plus de 600 projets réussis. Devis gratuit.",
    url: 'https://startbiz.fr/services',
    siteName: 'Startbiz - Agence Web',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Startbiz - Services Agence Web',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Services Agence Web | Développement Digital Complet | Startbiz",
    description: "Agence web complète : sites vitrines, e-commerce, développement sur mesure, apps mobiles, SEO. Devis gratuit.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicesPage() {
  return <ServicesHub />;
}