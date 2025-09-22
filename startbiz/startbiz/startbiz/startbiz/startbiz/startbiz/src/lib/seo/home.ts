import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.startbiz.fr";

export const homeMetadata: Metadata = {
  title: "Startbiz – Agence digitale sur mesure | Développement Web & Mobile",
  description: "Depuis 2014, Startbiz accompagne entrepreneurs et entreprises dans la création de plateformes web, applications mobiles et solutions cloud sur mesure. +600 projets réalisés.",
  keywords: ["agence digitale", "développement web", "application mobile", "plateforme SaaS", "marketplace", "e-commerce"],
  openGraph: {
    title: "Startbiz – Agence digitale sur mesure",
    description: "Depuis 2014, Startbiz accompagne entrepreneurs et entreprises dans la création de plateformes web, applications mobiles et solutions cloud sur mesure. +600 projets réalisés.",
    url: baseUrl,
    siteName: "Startbiz",
    images: [
      {
        url: `${baseUrl}/assets/og/home.png`,
        width: 1200,
        height: 630,
        alt: "Startbiz - Agence digitale sur mesure"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Startbiz – Agence digitale sur mesure",
    description: "Depuis 2014, Startbiz accompagne entrepreneurs et entreprises dans la création de plateformes web, applications mobiles et solutions cloud sur mesure.",
    images: [`${baseUrl}/assets/og/home.png`]
  },
  alternates: {
    canonical: baseUrl
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Startbiz",
      alternateName: "Startbiz - Agence digitale",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 60
      },
      description: "Agence digitale spécialisée dans le développement de plateformes web, applications mobiles et solutions cloud sur mesure depuis 2014.",
      foundingDate: "2014",
      serviceArea: {
        "@type": "Place",
        name: "France"
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "French"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Startbiz",
      description: "Agence digitale sur mesure - Développement Web & Mobile",
      publisher: {
        "@id": `${baseUrl}/#organization`
      },
      inLanguage: "fr-FR"
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#services`,
      provider: {
        "@id": `${baseUrl}/#organization`
      },
      serviceType: "Digital Development Services",
      name: "Services de développement digital",
      description: "Développement de plateformes SaaS, applications mobiles, marketplaces, e-commerce et logiciels sur mesure",
      areaServed: {
        "@type": "Country",
        name: "France"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Startbiz",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Développement SaaS",
              description: "Architecture scalable, sécurité, time-to-market"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Applications mobiles",
              description: "iOS & Android, UX performante"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Marketplace",
              description: "Paiement, KYC, logistique, SEO"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-commerce premium",
              description: "Performance, conversion, intégrations"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Logiciel sur mesure",
              description: "Automatisation, productivité, ROI"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hébergement & conformité HDS",
              description: "Fiabilité, protection des données"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Travaillez-vous avec des TPE/entrepreneurs ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Nous accompagnons les projets ambitieux, du solo founder à la PME, sur un modèle entièrement sur mesure."
          }
        },
        {
          "@type": "Question",
          name: "Quels budgets traitez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selon le périmètre et les enjeux : de 5k à 100k+. Le cadrage initial permet d'ajuster précisément la portée."
          }
        },
        {
          "@type": "Question",
          name: "Quelles technologies utilisez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Next.js, React Native, Node.js, MongoDB/Atlas, intégrations (Stripe, etc.), Cloud, conformité HDS si besoin."
          }
        },
        {
          "@type": "Question",
          name: "Proposez-vous un accompagnement long terme ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Conseil, maintenance, évolutions et optimisation continue après la mise en production."
          }
        }
      ]
    }
  ]
};



