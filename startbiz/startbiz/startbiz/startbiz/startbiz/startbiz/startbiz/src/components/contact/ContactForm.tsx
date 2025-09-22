"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  budget: "",
  timeline: "",
  message: ""
};

const inputClasses = "h-11 w-full rounded-lg border border-gray-300 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200";
const selectClasses = "h-11 w-full rounded-lg border border-gray-300 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200";
const textareaClasses = "min-h-[120px] w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        ...formData,
        projectSummary: formData.message,
        role: "Contact",
        budgetRange: formData.budget,
        pageUrl: window.location.href
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="contact-form" className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-sm text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Message envoyé avec succès !
              </h3>
              <p className="text-gray-600 mb-6">
                Merci pour votre message. Nous vous recontacterons dans les 24 heures.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200"
              >
                Envoyer un autre message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informations et avantages */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Décrivez-nous votre projet
              </h2>
              <p className="text-base leading-7 text-gray-600 mb-6">
                Plus vous nous en direz, mieux nous pourrons vous conseiller et vous proposer une solution adaptée à vos besoins.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Réponse personnalisée</h3>
                  <p className="text-sm text-gray-600">Nous étudions chaque demande individuellement pour vous proposer la meilleure approche.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Échange constructif</h3>
                  <p className="text-sm text-gray-600">Nous vous recontactons pour discuter ensemble de votre projet et de vos objectifs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Send className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Devis détaillé</h3>
                  <p className="text-sm text-gray-600">Nous vous proposons un devis précis et transparent adapté à votre cahier des charges.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <form onSubmit={handleSubmit} className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet de la demande
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="">Sélectionner un sujet</option>
                    <option value="nouveau-projet">Nouveau projet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="conseil">Conseil technique</option>
                    <option value="maintenance">Maintenance/Support</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={selectClasses}
                    >
                      <option value="">Sélectionner</option>
                      <option value="5-15k">5k - 15k €</option>
                      <option value="15-30k">15k - 30k €</option>
                      <option value="30-60k">30k - 60k €</option>
                      <option value="60k+">60k+ €</option>
                      <option value="à définir">À définir</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Timeline souhaitée
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={selectClasses}
                    >
                      <option value="">Sélectionner</option>
                      <option value="urgent">Urgent</option>
                      <option value="1-3m">1-3 mois</option>
                      <option value=">3m">&gt;3 mois</option>
                      <option value="tbd">À définir</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos objectifs, vos contraintes..."
                    className={textareaClasses}
                  />
                </div>

                {error && (
                  <div className="rounded-lg bg-red-50 text-red-800 p-3 flex items-center gap-2" role="alert" aria-live="polite">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-blue-600 text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Envoyer mon message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Vos données sont protégées et ne seront jamais partagées avec des tiers.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}



