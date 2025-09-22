"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Sous quel délai pouvez-vous me répondre ?",
    answer: "Nous nous engageons à répondre à toute demande dans les 24 heures ouvrées. Pour les demandes urgentes, n'hésitez pas à nous appeler directement."
  },
  {
    question: "Le premier échange est-il gratuit ?",
    answer: "Oui, absolument ! Le premier échange est toujours gratuit. Nous prenons le temps de comprendre votre projet et de vous donner un premier niveau de conseil sans aucun engagement."
  },
  {
    question: "Comment se déroule un projet avec Startbiz ?",
    answer: "Nous commençons par un échange pour comprendre vos besoins. Puis nous vous proposons un devis détaillé. Une fois validé, nous planifions le projet en phases avec des points d'étape réguliers."
  },
  {
    question: "Travaillez-vous avec des entreprises de toutes tailles ?",
    answer: "Oui, nous accompagnons aussi bien les startups et TPE que les PME et grandes entreprises. Nos solutions s'adaptent à vos besoins et à votre budget."
  },
  {
    question: "Proposez-vous de la maintenance après livraison ?",
    answer: "Bien sûr ! Nous proposons des contrats de maintenance et d'évolution pour assurer la pérennité de votre solution digitale et son évolution avec vos besoins."
  },
  {
    question: "Dans quelles régions intervenez-vous ?",
    answer: "Nous sommes basés en région parisienne mais nous travaillons avec des clients dans toute la France et à l'international. La plupart de nos échanges se font en visioconférence."
  }
];

export default function ContactFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-base leading-7 text-gray-600 max-w-2xl mx-auto">
            Vous avez une question ? Nous avons probablement la réponse
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openItems.includes(index);
              
              return (
                <div key={index} className="border-b border-gray-200 bg-white rounded-xl">
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex items-center justify-between w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-base font-medium text-gray-900 pr-4">
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-6 animate-in slide-in-from-top-1"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              Posez-nous votre question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



