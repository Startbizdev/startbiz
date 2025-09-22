import { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Agence Web | Développement Web & Digital | Startbiz",
  description: "Agence web spécialisée dans le développement d'applications web modernes, sites e-commerce et solutions digitales. Plus de 600 projets réussis. Devis gratuit.",
  keywords: [
    "agence web",
    "développement web",
    "site internet",
    "application web",
    "e-commerce",
    "développement mobile",
    "SEO",
    "Startbiz",
    "agence digitale",
    "création site web",
    "développeur web"
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
    canonical: '/',
  },
  openGraph: {
    title: "Agence Web | Développement Web & Digital | Startbiz",
    description: "Agence web spécialisée dans le développement d'applications web modernes. Plus de 600 projets réussis depuis 2014. Devis gratuit.",
    url: 'https://startbiz.fr',
    siteName: 'Startbiz - Agence Web',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Startbiz - Agence Web France',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence Web | Développement Web & Digital | Startbiz",
    description: "Agence web spécialisée dans le développement d'applications web modernes. Plus de 600 projets réussis. Devis gratuit.",
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

export default function HomePage() {
  return <HomePageClient />;
}
