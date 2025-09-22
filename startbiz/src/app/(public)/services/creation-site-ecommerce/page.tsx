import { Metadata } from "next";
import EcommercePage from "./EcommercePage";

export const metadata: Metadata = {
  title: "Création Site E-commerce | Boutique en Ligne Shopify WooCommerce | Startbiz",
  description: "Création de site e-commerce professionnel avec Shopify et WooCommerce. Boutique en ligne performante, paiement sécurisé, optimisation conversion. Devis gratuit.",
  keywords: [
    "création site e-commerce",
    "boutique en ligne",
    "site marchand",
    "Shopify",
    "WooCommerce",
    "commerce électronique",
    "site de vente en ligne",
    "e-commerce France",
    "développement e-commerce",
    "plateforme e-commerce",
    "Startbiz",
    "site e-commerce clé en main",
    "développement Shopify",
    "création WooCommerce"
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
    canonical: '/services/creation-site-ecommerce',
  },
  openGraph: {
    title: "Création Site E-commerce | Boutique en Ligne Shopify WooCommerce",
    description: "Site e-commerce professionnel clé en main. Shopify, WooCommerce, paiement sécurisé, optimisation conversion. Devis gratuit.",
    url: 'https://startbiz.fr/services/creation-site-ecommerce',
    siteName: 'Startbiz - Agence Web',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Startbiz - Création Site E-commerce',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Création Site E-commerce | Boutique en Ligne Shopify WooCommerce",
    description: "Site e-commerce professionnel clé en main. Shopify, WooCommerce. Devis gratuit.",
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

export default function Ecommerce() {
  return <EcommercePage />;
}
