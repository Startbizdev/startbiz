import Link from "next/link";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">Startbiz</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/nos-clients">Nos clients</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-8 text-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>© {new Date().getFullYear()} Startbiz</div>
        <nav className="flex gap-4">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
        </nav>
      </div>
    </footer>
  );
}

