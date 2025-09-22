import { Metadata } from "next";
import SiteVitrinePage from "./SiteVitrinePage";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Création Site Vitrine Professionnel",
      "description": "Création de site vitrine professionnel sur mesure avec WordPress ou Next.js. Design responsive, SEO intégré, performance optimale.",
      "provider": {
        "@type": "Organization",
        "name": "Startbiz",
        "url": "https://startbiz.fr",
        "logo": "https://startbiz.fr/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "FR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "availableLanguage": "French",
          "telephone": "+33-1-XX-XX-XX-XX",
          "email": "contact@startbiz.fr"
        }
      },
      "areaServed": "FR",
      "serviceType": "Web Development",
      "category": "Site Vitrine",
      "offers": {
        "@type": "Offer",
        "priceRange": "€€€",
        "description": "Devis personnalisé selon vos besoins"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "600",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://startbiz.fr/#organization",
      "name": "Startbiz",
      "alternateName": "Startbiz - Agence Web",
      "url": "https://startbiz.fr",
      "logo": "https://startbiz.fr/logo.png",
      "description": "Agence digitale spécialisée dans la création de sites vitrines professionnels avec WordPress et Next.js. Expertise SEO, design responsive et performance optimale.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressRegion": "Île-de-France"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.8566",
        "longitude": "2.3522"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-1-XX-XX-XX-XX",
        "contactType": "Customer Service",
        "availableLanguage": "French",
        "email": "contact@startbiz.fr"
      },
      "sameAs": [
        "https://www.linkedin.com/company/startbiz",
        "https://twitter.com/startbiz"
      ],
      "foundingDate": "2014",
      "priceRange": "€€€"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien coûte la création d'un site vitrine professionnel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le coût dépend de vos besoins spécifiques, de la complexité du design et des fonctionnalités requises. Pour WordPress : 2,500€ - 8,000€. Pour Next.js : 4,500€ - 15,000€. Nous proposons des formules adaptées à chaque budget d'entreprise. Contactez-nous pour un devis personnalisé gratuit."
          }
        },
        {
          "@type": "Question",
          "name": "WordPress ou Next.js : lequel choisir pour mon site vitrine ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choisissez WordPress si vous souhaitez gérer votre contenu seul sans développeur, avec un budget limité et des mises à jour fréquentes. Optez pour Next.js si les performances SEO sont votre priorité absolue, avec une forte croissance attendue et des intégrations complexes. Nous vous conseillons selon vos objectifs spécifiques."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le délai de création d'un site internet professionnel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selon la complexité du projet, nos sites vitrines sont généralement livrés entre 4 et 8 semaines. Cela inclut l'audit stratégique complet, le design créatif, le développement technique, les tests rigoureux et la mise en ligne optimisée pour garantir un résultat parfait."
          }
        },
        {
          "@type": "Question",
          "name": "Mon site sera-t-il optimisé pour les moteurs de recherche ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolument. Nous intégrons le SEO dès la conception avec une structure technique optimisée, des contenus stratégiques, des balises meta pertinentes et toutes les bonnes pratiques recommandées par Google pour maximiser votre visibilité naturelle."
          }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous la maintenance du site après sa création ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, nous proposons des formules de maintenance complète incluant les mises à jour de sécurité, les corrections techniques, l'optimisation des performances, les sauvegardes automatiques et le support technique réactif pour assurer la pérennité de votre présence digitale."
          }
        },
        {
          "@type": "Question",
          "name": "Le site sera-t-il compatible mobile et tablette ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tous nos sites sont développés selon l'approche mobile-first, garantissant une parfaite compatibilité et une excellente expérience utilisateur sur tous les appareils. Votre site s'adaptera automatiquement aux écrans desktop, tablette et mobile."
          }
        },
        {
          "@type": "Question",
          "name": "Pouvez-vous intégrer mon site existant avec mes autres outils ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, nous maîtrisons l'intégration avec de nombreux outils professionnels : CRM, outils marketing automation, réseaux sociaux, solutions e-commerce, ERP et bien d'autres selon vos besoins métier spécifiques pour une expérience utilisateur fluide."
          }
        },
        {
          "@type": "Question",
          "name": "Comment mesurez-vous les résultats de mon site vitrine ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nous mettons en place un suivi complet des performances avec Google Analytics, Search Console, et des rapports personnalisés mensuels. Vous pourrez suivre en temps réel l'évolution du trafic, des leads générés, des taux de conversion et du ROI de votre investissement digital."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Comment créer un site vitrine professionnel en 5 étapes",
      "description": "Guide complet pour créer un site vitrine performant avec Startbiz",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Audit stratégique et analyse digitale",
          "text": "Phase d'audit digital complet : analyse de concurrence, mots-clés stratégiques, performance du site actuel, persona clients et stratégie SEO personnalisée.",
          "position": 1
        },
        {
          "@type": "HowToStep",
          "name": "Design UX/UI et architecture technique",
          "text": "Conception des maquettes avec approche UX/UI centrée utilisateur, architecture technique SEO-friendly et optimisation Core Web Vitals.",
          "position": 2
        },
        {
          "@type": "HowToStep",
          "name": "Développement technique et optimisation",
          "text": "Développement avec WordPress ou Next.js, optimisation performances, sécurité renforcée et intégrations techniques avancées.",
          "position": 3
        },
        {
          "@type": "HowToStep",
          "name": "Contenu stratégique et optimisation SEO",
          "text": "Création de contenu longue traîne, optimisation mots-clés, données structurées Schema.org et optimisation pour la recherche vocale.",
          "position": 4
        },
        {
          "@type": "HowToStep",
          "name": "Tests qualité et lancement",
          "text": "Tests rigoureux, optimisation post-lancement, monitoring 24/7 et accompagnement pour garantir le succès durable du site.",
          "position": 5
        }
      ],
      "totalTime": "P8W"
    }
  ]
};

export const metadata: Metadata = {
  title: "Création Site Vitrine Professionnel | Agence Web Startbiz | Devis Gratuit",
  description: "Création de site vitrine professionnel sur mesure. Design responsive, SEO intégré, performance optimale. Plus de 600 sites vitrines réussis. Devis gratuit.",
  keywords: [
    "création site vitrine",
    "site internet professionnel",
    "agence web France",
    "développement web",
    "site vitrine WordPress",
    "site vitrine Next.js",
    "SEO site web",
    "design responsive",
    "site internet entreprise",
    "développeur web Paris",
    "agence digitale",
    "création site internet",
    "site vitrine e-commerce",
    "développement application web",
    "optimisation SEO",
    "site vitrine performant",
    "agence web SEO",
    "développement site web professionnel"
  ],
  authors: [{ name: "Startbiz" }],
  creator: "Startbiz",
  publisher: "Startbiz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Création Site Vitrine Professionnel | Agence Web Startbiz",
    description: "Création de site vitrine professionnel sur mesure. Design responsive, SEO intégré, performance optimale. Plus de 600 sites vitrines réussis.",
    url: "https://startbiz.fr/services/creation-site-vitrine",
    siteName: "Startbiz - Agence Web",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://startbiz.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Startbiz - Création Site Vitrine Professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création Site Vitrine Professionnel | Agence Web Startbiz",
    description: "Création de site vitrine professionnel sur mesure. Design responsive, SEO intégré, performance optimale.",
    images: ["https://startbiz.fr/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function SiteVitrine() {
  return <SiteVitrinePage />;
}
