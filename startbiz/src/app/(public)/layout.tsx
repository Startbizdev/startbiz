import Link from "next/link";
import { Phone } from "lucide-react";
import Header from "@/components/hyperui/Header";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}



function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & description */}
            <div className="md:col-span-2">
              <Link href="/" className="text-xl font-semibold text-gray-900 mb-4 block">
                Startbiz
              </Link>
              <p className="text-gray-600 mb-4 max-w-md">
                Agence digitale sur mesure depuis 2014. Nous concevons des plateformes web et mobiles qui accélèrent la croissance des entreprises.
              </p>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/developpement-plateforme-saas" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Développement SaaS
                  </Link>
                </li>
                <li>
                  <Link href="/developpement-application-mobile" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Applications mobiles
                  </Link>
                </li>
                <li>
                  <Link href="/developpement-marketplace" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Nous contacter
                  </Link>
                </li>
                <li>
                  <Link href="/rdv" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Réserver un appel
                  </Link>
                </li>
                <li>
                  <Link href="/cas-clients" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Nos réalisations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-500">
            <div>© {new Date().getFullYear()} Startbiz. Tous droits réservés.</div>
            <nav className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-gray-700 transition-colors duration-200">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="hover:text-gray-700 transition-colors duration-200">
                Politique de confidentialité
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

