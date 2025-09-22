import { useState } from "react";

export function LeadForm({ serviceSlug, citySlug }: { serviceSlug?: string; citySlug?: string }) {
  const [status, setStatus] = useState<"idle"|"submitting"|"success"|"error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...payload,
          serviceSlug,
          citySlug,
          pageUrl: typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setError("Une erreur est survenue. Merci de réessayer.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="firstName" placeholder="Prénom" className="border rounded-xl p-3" required />
        <input name="lastName" placeholder="Nom" className="border rounded-xl p-3" required />
      </div>
      <input name="email" type="email" placeholder="Email" className="border rounded-xl p-3 w-full" required />
      <input name="phone" placeholder="Téléphone (optionnel)" className="border rounded-xl p-3 w-full" />
      <input name="company" placeholder="Société (optionnel)" className="border rounded-xl p-3 w-full" />
      <select name="role" className="border rounded-xl p-3 w-full">
        <option value="">Rôle</option>
        <option value="Dirigeant">Dirigeant</option>
        <option value="CTO">CTO</option>
        <option value="Responsable">Responsable</option>
        <option value="Autre">Autre</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <select name="budgetRange" className="border rounded-xl p-3 w-full">
          <option value="">Budget</option>
          <option value="5-10k">5-10k</option>
          <option value="10-25k">10-25k</option>
          <option value="25-50k">25-50k</option>
          <option value="50-100k">50-100k</option>
          <option value="100k+">100k+</option>
        </select>
        <select name="timeline" className="border rounded-xl p-3 w-full">
          <option value="">Timeline</option>
          <option value="urgent">urgent</option>
          <option value="1-3m">1-3m</option>
          <option value=">3m">&gt;3m</option>
          <option value="tbd">tbd</option>
        </select>
      </div>
      <textarea name="projectSummary" placeholder="Votre projet" className="border rounded-xl p-3 w-full min-h-32" required />
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button disabled={status === "submitting"} className="rounded-xl bg-[var(--accent)] text-white px-4 py-3">
        {status === "submitting" ? "Envoi…" : "Discutons de votre projet"}
      </button>
      {status === "success" && <p className="text-green-600">Merci, nous revenons vers vous rapidement.</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}