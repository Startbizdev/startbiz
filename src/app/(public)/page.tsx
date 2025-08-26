export const revalidate = 86400;

export default function HomePage() {
  return (
    <main className="container py-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold">Agence digitale sur mesure</h1>
        <p className="text-lg text-[var(--muted-800)] max-w-2xl">
          Nous concevons des plateformes web et mobiles qui accélèrent la croissance des entreprises.
        </p>
      </section>
      <section aria-label="KPIs" className="kpi-strip mt-12">
        <div className="rounded-xl border p-6">+600 projets</div>
        <div className="rounded-xl border p-6">15 pays</div>
        <div className="rounded-xl border p-6">20k users HDS</div>
        <div className="rounded-xl border p-6">3M€ marketplace</div>
      </section>
    </main>
  );
}

