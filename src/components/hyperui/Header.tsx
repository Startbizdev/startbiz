"use client";

import Link from "next/link";
import { Headphones } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
          <img
            src="https://www.startbiz.fr/wp-content/uploads/2024/12/Agence-web-logo-blanc-startbiz.png"
            alt="Startbiz - Agence digitale"
            className="h-8 w-auto filter brightness-0"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/a-propos">
                  À propos
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/nos-clients">
                  Clients
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:0757801013"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Headphones className="h-4 w-4" />
              <span className="text-sm">07 57 80 10 13</span>
            </a>
            <Link
              className="force-syne block rounded-md bg-[#01579b] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#01579b]/90 whitespace-nowrap"
              href="/contact"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-6 space-y-4">
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    href="/a-propos"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    href="/portfolio"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    href="/nos-clients"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="border-t border-gray-200 pt-4 space-y-4">
              <a
                href="tel:0757801013"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Headphones className="h-5 w-5" />
                <span className="text-sm font-medium">07 57 80 10 13</span>
              </a>

              <Link
                className="force-syne block w-full rounded-md bg-[#01579b] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-[#01579b]/90"
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
