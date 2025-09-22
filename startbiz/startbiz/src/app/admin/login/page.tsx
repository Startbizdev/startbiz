"use client";
import { useState } from "react";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    setLoading(false);
    if (res.ok) {
      window.location.href = "/admin";
    } else {
      setError("Identifiants invalides");
    }
  }

  return (
    <main className="container py-16 max-w-md">
      <h1 className="text-2xl font-semibold mb-6">Connexion Admin</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input name="email" type="email" className="border rounded-xl p-3 w-full" placeholder="Email" required />
        <input name="password" type="password" className="border rounded-xl p-3 w-full" placeholder="Mot de passe" required />
        <button disabled={loading} className="rounded-xl bg-[var(--accent)] text-white px-4 py-3">Se connecter</button>
      </form>
      {error && <p className="text-red-600 mt-3">{error}</p>}
    </main>
  );
}

