"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Client = {
  name: string;
  slug: string;
  logoUrl?: string;
  sector?: string;
  projects?: { title: string; description?: string; url?: string }[];
};

export default function AdminClientsPage() {
  const [items, setItems] = useState<Client[]>([]);
  const [form, setForm] = useState<Client>({ name: "", slug: "", logoUrl: "", sector: "", projects: [] });
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/clients");
    if (res.ok) setItems(await res.json());
  }

  useEffect(() => {
    load();
  }, []);

  async function save() {
    setLoading(true);
    const method = items.find((i) => i.slug === form.slug) ? "PUT" : "POST";
    const res = await fetch("/api/admin/clients", {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setForm({ name: "", slug: "", logoUrl: "", sector: "", projects: [] });
      load();
    }
  }

  async function remove(slug: string) {
    if (!confirm("Supprimer ?")) return;
    await fetch(`/api/admin/clients?slug=${encodeURIComponent(slug)}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Clients</h2>
      <div className="rounded-xl border p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border rounded-xl p-3" placeholder="Nom" />
          <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="border rounded-xl p-3" placeholder="Slug" />
          <input value={form.logoUrl} onChange={(e) => setForm({ ...form, logoUrl: e.target.value })} className="border rounded-xl p-3" placeholder="Logo URL (Cloudinary)" />
          <input value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} className="border rounded-xl p-3" placeholder="Secteur" />
        </div>
        <button disabled={loading} onClick={save} className="rounded-xl bg-[var(--accent)] text-white px-4 py-3">{loading ? "Enregistrement…" : "Enregistrer"}</button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((c) => (
          <li key={c.slug} className="rounded-xl border p-4">
            <div className="flex gap-3 items-center">
              {c.logoUrl && <Image src={c.logoUrl} alt={c.name} width={40} height={40} style={{ objectFit: "contain" }} />}
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-[var(--muted-800)]">{c.sector}</div>
              </div>
              <div className="ml-auto flex gap-2">
                <button onClick={() => setForm(c)} className="px-3 py-2 rounded border">Éditer</button>
                <button onClick={() => remove(c.slug)} className="px-3 py-2 rounded border">Supprimer</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

