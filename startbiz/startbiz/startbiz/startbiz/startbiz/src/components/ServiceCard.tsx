export function ServiceCard({ title, href, description }: { title: string; href: string; description?: string }) {
  return (
    <a href={href} className="block rounded-xl border p-6 hover:shadow-sm transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      {description && <p className="mt-2 text-[var(--muted-800)]">{description}</p>}
    </a>
  );
}