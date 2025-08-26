"use client";
import { useState } from "react";
import { TurnstileWidget } from "@/components/Turnstile";

export default function ContactPage() {
  const [token, setToken] = useState<string | undefined>(undefined);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...payload, token }),
    });
    if (res.ok) alert("Merci, nous revenons vers vous.");
  }
  return (
    <main className="container py-16 space-y-6">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 max-w-xl">
        <input name="firstName" placeholder="Prénom" className="border rounded-xl p-3" required />
        <input name="lastName" placeholder="Nom" className="border rounded-xl p-3" required />
        <input name="email" type="email" placeholder="Email" className="border rounded-xl p-3" required />
        <textarea name="projectSummary" placeholder="Votre projet" className="border rounded-xl p-3" required />
        <TurnstileWidget onVerify={setToken} />
        <button className="rounded-xl bg-[var(--accent)] text-white px-4 py-3 w-fit">Envoyer</button>
      </form>
    </main>
  );
}

