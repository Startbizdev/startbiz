import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact - Startbiz | Parlons de votre projet digital",
  description: "Contactez Startbiz pour discuter de votre projet digital. Développement web, applications mobiles, solutions sur mesure. Réponse sous 24h.",
  keywords: "contact startbiz, agence digitale contact, devis développement, projet digital",
  robots: "index, follow",
  openGraph: {
    title: "Contact - Startbiz",
    description: "Contactez Startbiz pour discuter de votre projet digital. Réponse sous 24h.",
    url: "https://www.startbiz.fr/contact",
    type: "website",
  },
};

export const revalidate = 86400;

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}