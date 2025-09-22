import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container py-8">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Startbiz Admin</h1>
        <nav className="text-sm text-[var(--muted-800)]">Modules: Leads · CMS · Newsletters · Hosting</nav>
      </header>
      {children}
    </div>
  );
}