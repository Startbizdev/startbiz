"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function DynamicHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Classes de base du header
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHomePage
      ? isScrolled
        ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
        : "bg-transparent"
      : "bg-white/80 backdrop-blur-md border-b border-gray-200"
  }`;

  // Classes du texte selon l'état
  const textClasses = `transition-colors duration-300 ${
    isHomePage && !isScrolled ? "text-white" : "text-gray-900"
  }`;

  const linkClasses = `transition-colors duration-300 ${
    isHomePage && !isScrolled
      ? "text-white/80 hover:text-white"
      : "text-gray-600 hover:text-gray-900"
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-all duration-300">
            <img 
              src="https://www.startbiz.fr/wp-content/uploads/2024/12/Agence-web-logo-blanc-startbiz.png"
              alt="Startbiz - Agence digitale"
              className={`h-10 w-auto transition-all duration-300 ${
                isHomePage && !isScrolled 
                  ? "filter-none" 
                  : "filter brightness-0"
              }`}
            />
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/nos-clients" className={linkClasses}>
              Nos clients
            </Link>
            <Link href="/contact" className={linkClasses}>
              Contact
            </Link>
            <Link 
              href="/rdv"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-white text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Réserver un appel
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link 
              href="/rdv"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-white text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              RDV
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
