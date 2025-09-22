import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img
            src="https://www.startbiz.fr/wp-content/uploads/2024/12/Agence-web-logo-blanc-startbiz.png"
            alt="Startbiz - Agence digitale"
            className="h-8 w-auto filter brightness-0"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
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
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-[#01579b] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#01579b]/90 whitespace-nowrap"
                href="/contact"
              >
                Demander un devis
              </Link>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-900 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
