"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, User, Building, DollarSign, MessageSquare, Shield } from "lucide-react";
import Link from "next/link";

interface LeadFormProps {
  context?: {
    serviceSlug?: string;
    citySlug?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    appointmentDateTime?: string;
    leadType?: string;
  };
  className?: string;
  onSuccess?: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  budgetRange: string;
  timeline: string;
  projectSummary: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  budgetRange: "",
  timeline: "",
  projectSummary: ""
};

// Configuration des étapes
const steps = [
  {
    id: 1,
    title: "Qui êtes-vous ?",
    subtitle: "Commençons par faire connaissance",
    icon: User,
    fields: ["firstName", "lastName", "email", "phone"]
  },
  {
    id: 2,
    title: "Votre entreprise",
    subtitle: "Parlez-nous de votre contexte",
    icon: Building,
    fields: ["company", "role"]
  },
  {
    id: 3,
    title: "Votre projet",
    subtitle: "Cadrons vos besoins ensemble",
    icon: DollarSign,
    fields: ["budgetRange", "timeline"]
  },
  {
    id: 4,
    title: "Décrivez votre vision",
    subtitle: "Racontez-nous votre projet en détail",
    icon: MessageSquare,
    fields: ["projectSummary"]
  }
];

// Styles communs pour les inputs
const inputClasses = "h-11 w-full rounded-lg border border-gray-300 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200";
const selectClasses = "h-11 w-full rounded-lg border border-gray-300 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200";
const textareaClasses = "min-h-[120px] w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none";

export default function LeadForm({ context, className = "", onSuccess }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validation des champs requis pour une étape
  const validateStep = (stepId: number): boolean => {
    const step = steps.find(s => s.id === stepId);
    if (!step) return false;

    const requiredFields = step.fields.filter(field => {
      // Champs obligatoires
      return ["firstName", "lastName", "email", "projectSummary"].includes(field);
    });

    return requiredFields.every(field => formData[field as keyof FormData].trim() !== "");
  };

  // Navigation vers l'étape suivante
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setError(null);
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps(prev => [...prev, currentStep]);
      }
      if (currentStep < steps.length) {
        setCurrentStep(prev => prev + 1);
      }
    } else {
      setError("Veuillez remplir tous les champs requis");
    }
  };

  // Navigation vers l'étape précédente
  const prevStep = () => {
    if (currentStep > 1) {
      setError(null);
      setCurrentStep(prev => prev - 1);
    }
  };

  // Progression en pourcentage
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  // Rendu du contenu de chaque étape
  const renderStepContent = () => {
    const step = steps.find(s => s.id === currentStep);
    if (!step) return null;

    switch (currentStep) {
      case 1:
        return (
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
                  placeholder="John"
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
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email professionnel *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="john@entreprise.com"
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
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Nom de votre entreprise
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Ma super entreprise"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Votre rôle dans l&apos;entreprise
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={selectClasses}
              >
                <option value="">Sélectionner votre rôle</option>
                <option value="CEO/Dirigeant">CEO / Dirigeant</option>
                <option value="CTO">CTO</option>
                <option value="Directeur Digital">Directeur Digital</option>
                <option value="Responsable Marketing">Responsable Marketing</option>
                <option value="Chef de projet">Chef de projet</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-1">
                Budget envisagé pour ce projet
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className={selectClasses}
              >
                <option value="">Sélectionner un budget</option>
                <option value="5-15k">5 000 - 15 000 €</option>
                <option value="15-30k">15 000 - 30 000 €</option>
                <option value="30-60k">30 000 - 60 000 €</option>
                <option value="60-100k">60 000 - 100 000 €</option>
                <option value="100k+">100 000+ €</option>
                <option value="à définir">À définir ensemble</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                Quand souhaitez-vous démarrer ?
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className={selectClasses}
              >
                <option value="">Sélectionner une timeline</option>
                <option value="urgent">Dès que possible (urgent)</option>
                <option value="1-3m">Dans 1 à 3 mois</option>
                <option value="3-6m">Dans 3 à 6 mois</option>
                <option value=">6m">Plus de 6 mois</option>
                <option value="tbd">À définir</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="projectSummary" className="block text-sm font-medium text-gray-700 mb-1">
                Décrivez votre projet en quelques lignes *
              </label>
              <textarea
                id="projectSummary"
                name="projectSummary"
                required
                rows={6}
                value={formData.projectSummary}
                onChange={handleChange}
                placeholder="Exemple : Nous voulons créer une plateforme SaaS pour gérer les rendez-vous médicaux. L'objectif est d'automatiser la prise de RDV et d'améliorer l'expérience patient..."
                className={textareaClasses}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        ...formData,
        pageUrl: window.location.href,
        serviceSlug: context?.serviceSlug || null,
        citySlug: context?.citySlug || null,
        appointmentDate: context?.appointmentDate || null,
        appointmentTime: context?.appointmentTime || null,
        appointmentDateTime: context?.appointmentDateTime || null,
        leadType: context?.leadType || "lead",
        utm: {
          source: new URLSearchParams(window.location.search).get("utm_source"),
          medium: new URLSearchParams(window.location.search).get("utm_medium"),
          campaign: new URLSearchParams(window.location.search).get("utm_campaign")
        }
      };

      // Debug: vérifier les données de RDV
      console.log("📅 Données RDV envoyées:", {
        appointmentDate: payload.appointmentDate,
        appointmentTime: payload.appointmentTime,
        appointmentDateTime: payload.appointmentDateTime,
        leadType: payload.leadType
      });

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
      
      // Appeler le callback de succès si fourni
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`rounded-xl border border-gray-300 bg-white p-6 shadow-sm w-full ${className}`}>
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Merci pour votre demande !
          </h3>
          <p className="text-gray-600 mb-4">
            Nous revenons vers vous sous 24h.
          </p>
          <Link
            href="/rdv"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200"
          >
            Réserver un appel
          </Link>
        </div>
      </div>
    );
  }

  const currentStepData = steps.find(s => s.id === currentStep);
  const IconComponent = currentStepData?.icon;

  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm w-full">
        {/* Header avec progression */}
        <div className="mb-6">
          {/* Barre de progression */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-600">Étape {currentStep} sur {steps.length}</span>
              <span className="text-xs font-medium text-blue-600">{Math.round(progress)}% complété</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Titre de l'étape */}
          <div className="flex items-center gap-3 mb-2">
            {IconComponent && (
              <div className="inline-flex p-2 rounded-lg bg-blue-100">
                <IconComponent className="h-5 w-5 text-blue-600" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {currentStepData?.title}
              </h3>
              <p className="text-sm text-gray-600">
                {currentStepData?.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Contenu de l'étape */}
        <form onSubmit={currentStep === steps.length ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
          {renderStepContent()}

          {/* Messages d'erreur */}
          {error && (
            <div className="mt-4 rounded-lg bg-red-50 text-red-800 p-3 flex items-center gap-2" role="alert" aria-live="polite">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Bouton Précédent */}
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                Précédent
              </button>
            ) : (
              <div></div>
            )}

            {/* Bouton Suivant/Envoyer */}
            {currentStep < steps.length ? (
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                Continuer
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-green-600 text-white hover:bg-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Envoyer ma demande
                  </>
                )}
              </button>
            )}
          </div>

          {/* Footer info */}
          {currentStep === 1 && (
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <Shield className="h-3 w-3" />
                Vos données sont sécurisées et ne seront jamais partagées
              </p>
            </div>
          )}

          {currentStep === steps.length && (
            <p className="text-xs text-gray-500 text-center mt-3">
              En envoyant ce formulaire, vous acceptez nos{" "}
              <Link href="/politique-de-confidentialite" className="underline hover:no-underline">
                conditions de confidentialité
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}