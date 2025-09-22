export function CityCard({ name, href }: { name: string; href: string }) {
  return (
    <a href={href} className="block rounded-xl border p-6 hover:shadow-sm transition">
      <h3 className="text-xl font-semibold">{name}</h3>
    </a>
  );
}