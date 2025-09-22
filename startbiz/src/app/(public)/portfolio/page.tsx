import type { Metadata } from "next";
import { ExternalLink, Eye, Star, Calendar, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio - Nos réalisations en création de sites web et applications | Startbiz",
  description: "Découvrez notre portfolio de projets : sites vitrines, e-commerce Shopify, applications mobiles. Plus de 600 projets réussis depuis 2014.",
  keywords: "portfolio agence web, réalisations, projets, sites internet, e-commerce, applications mobiles",
  openGraph: {
    title: "Portfolio Startbiz - Nos réalisations digitales",
    description: "Plus de 600 projets de création de sites web et applications mobiles réussis.",
    url: "https://www.startbiz.fr/portfolio",
    type: "website",
  },
};

const projects = [
  {
    id: 1,
    title: "E-commerce mode premium",
    client: "Mode & Style",
    category: "E-commerce Shopify",
    description: "Boutique en ligne haut de gamme avec gestion des stocks avancée et expérience d'achat personnalisée.",
    image: "/api/placeholder/600/400",
    technologies: ["Shopify", "Liquid", "JavaScript", "Stripe"],
    results: "+180% ventes",
    duration: "8 semaines",
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "Application de livraison",
    client: "FoodExpress",
    category: "Application mobile",
    description: "App mobile pour commande et livraison de repas avec géolocalisation temps réel.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    results: "4.8★ App Store",
    duration: "12 semaines",
    year: "2024",
    featured: true
  },
  {
    id: 3,
    title: "Site vitrine architecte",
    client: "Studio Dubois",
    category: "Site vitrine",
    description: "Portfolio élégant avec galerie d'images optimisée et formulaire de contact professionnel.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    results: "+250% leads",
    duration: "3 semaines",
    year: "2024",
    featured: false
  },
  {
    id: 4,
    title: "Plateforme SaaS RH",
    client: "HR Solutions",
    category: "Développement sur mesure",
    description: "Solution complète de gestion des ressources humaines avec tableau de bord analytique.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    results: "99.9% uptime",
    duration: "16 semaines",
    year: "2023",
    featured: true
  },
  {
    id: 5,
    title: "Marketplace immobilier",
    client: "ImmoConnect",
    category: "Plateforme web",
    description: "Plateforme de mise en relation entre particuliers et professionnels de l'immobilier.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Node.js", "MongoDB", "Mapbox"],
    results: "500+ annonces",
    duration: "20 semaines",
    year: "2023",
    featured: false
  },
  {
    id: 6,
    title: "Site institutionnel",
    client: "Clinique Saint-Joseph",
    category: "Site vitrine médical",
    description: "Site web institutionnel conforme RGPD avec prise de rendez-vous en ligne.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind CSS", "Calendly API", "Vercel"],
    results: "+300% demandes",
    duration: "6 semaines",
    year: "2024",
    featured: false
  }
];

const categories = [
  { name: "Tous", count: projects.length },
  { name: "E-commerce", count: projects.filter(p => p.category.includes("E-commerce")).length },
  { name: "Applications", count: projects.filter(p => p.category.includes("Application")).length },
  { name: "Sites vitrines", count: projects.filter(p => p.category.includes("Site vitrine")).length },
  { name: "Sur mesure", count: projects.filter(p => p.category.includes("sur mesure")).length }
];

export default function PortfolioPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F5F7FA] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-[#00B8D9]">portfolio</span>
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed max-w-3xl mx-auto mb-8">
            Découvrez plus de 600 projets réussis en création de sites web, e-commerce et applications mobiles.
            Chaque réalisation est le fruit d'une collaboration étroite avec nos clients.
          </p>
          <Link
            href="/contact"
            className="bg-[#00B8D9] hover:bg-[#00A8C9] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 inline-flex items-center gap-2"
          >
            Démarrer votre projet
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Projets phares
            </h2>
            <p className="text-xl text-[#444444] max-w-2xl mx-auto">
              Découvrez nos réalisations les plus impactantes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B8D9]/20 to-[#FF6F00]/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="h-12 w-12 text-white/70" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#00B8D9]/10 text-[#00B8D9] px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-sm text-[#444444] flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-[#444444] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-[#F5F7FA] text-[#444444] px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="font-medium text-[#00B8D9]">{project.results}</span>
                      </div>
                      <div className="text-sm text-[#444444]">
                        {project.duration}
                      </div>
                    </div>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="text-[#01579b] hover:text-[#00B8D9] font-semibold transition-colors duration-300"
                    >
                      Voir le projet →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#F5F7FA] text-[#444444] px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#444444]">{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-[#444444] text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#00B8D9]">
                    {project.results}
                  </span>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="text-[#01579b] hover:text-[#00B8D9] text-sm font-medium transition-colors duration-300"
                  >
                    Détails →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[#01579b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">600+</div>
              <div className="text-white/80">Projets livrés</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">47M€</div>
              <div className="text-white/80">CA généré</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Satisfaction client</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-white/80">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies maîtrisées
            </h2>
            <p className="text-xl text-[#444444] max-w-2xl mx-auto">
              Nous utilisons les outils les plus performants pour garantir la qualité de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Next.js", "React", "Node.js", "TypeScript",
              "Shopify", "Tailwind CSS", "MongoDB", "PostgreSQL"
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <div className="text-lg font-semibold text-gray-900">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Votre projet mérite le meilleur
          </h2>
          <p className="text-xl text-[#444444] mb-8 leading-relaxed">
            Rejoignez nos 600+ clients satisfaits. Discutons de votre vision
            et créons ensemble la solution digitale qui propulsera votre business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#00B8D9] hover:bg-[#00A8C9] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/services"
              className="border-2 border-[#01579b] text-[#01579b] hover:bg-[#01579b] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

