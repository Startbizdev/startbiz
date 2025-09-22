import { MessageCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-h1-responsive text-gray-900 mb-6">
            Parlons de votre projet
          </h1>
          
          <p className="text-body-responsive text-xl mb-8">
            Vous avez un projet digital en tête ? Nous sommes là pour vous accompagner de l&apos;idée à la réalisation.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
              Réponse sous 24h
            </span>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
              Devis gratuit
            </span>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
              Conseil personnalisé
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              Décrire mon projet
            </Link>
            
            <Link
              href="tel:+33123456789"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 border border-gray-200 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              Appel direct
            </Link>
            
            <Link
              href="mailto:contact@startbiz.fr"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 border border-gray-200 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
              Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
