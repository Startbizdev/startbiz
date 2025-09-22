import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de Startbiz - Agence web experte depuis 2014",
  description: "Découvrez l'histoire de Startbiz, agence web fondée en 2014. Plus de 600 projets réussis en création de sites web et applications mobiles.",
  keywords: "agence web, Startbiz, développement web, histoire entreprise",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">À propos de Startbiz</h1>
        <p className="text-lg text-center mb-12">
          Agence web fondée en 2014, spécialisée dans le développement digital.
        </p>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
          <p className="text-gray-600">
            Transformer vos idées en solutions digitales performantes et rentables.
          </p>
        </div>

        <Link
          href="/contact"
          className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Contactez-nous
        </Link>
      </div>
    </main>
  );
}
