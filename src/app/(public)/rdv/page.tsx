export const revalidate = 86400;

export default function RdvPage() {
  return (
    <main className="container py-16 space-y-6">
      <h1 className="text-4xl font-semibold">Réserver un appel</h1>
      <div className="aspect-video w-full rounded-xl overflow-hidden border">
        <iframe
          src="https://cal.com/startbiz/30min"
          className="w-full h-full"
          title="Calendly"
        />
      </div>
    </main>
  );
}

