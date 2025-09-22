"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ButtonCTA from "@/components/ButtonCTA";
import CTAbaspage from "@/components/CTAbaspage";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Globe, Eye, Target, Cog, Search, Palette, Shield, Zap, Award, ChevronLeft, ChevronRight, Star, Quote, Rocket, Users, BarChart3, Clock, Check, Settings, TrendingUp, Phone, Mail, MapPin, Calendar, Wrench, Lightbulb, DollarSign, ThumbsUp, FileText, HelpCircle, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Sites ultra-rapides",
    description: "Performance optimisée pour les Core Web Vitals de Google. Vos clients ne quittent plus votre site."
  },
  {
    icon: Users,
    title: "Design qui convertit",
    description: "Interface utilisateur pensée pour maximiser vos taux de conversion et fidéliser vos visiteurs."
  },
  {
    icon: BarChart3,
    title: "SEO professionnel intégré",
    description: "Référencement naturel optimisé dès la conception pour dominer les résultats de recherche."
  },
  {
    icon: Clock,
    title: "Livraison express",
    description: "De l'idée au lancement en 4-6 semaines maximum. Nous respectons nos délais."
  }
];

const technologies = [
  {
    name: "WordPress",
    description: "CMS flexible et évolutif pour une gestion autonome de votre contenu.",
    benefits: ["Gestion autonome", "Écosystème riche", "Évolutivité infinie"]
  },
  {
    name: "Next.js",
    description: "Framework moderne pour des performances exceptionnelles et un SEO optimal.",
    benefits: ["Performance maximale", "SEO natif", "Technologie avancée"]
  }
];

const testimonials = [
  {
    name: "Marie Dubois",
    company: "Cabinet Dubois Avocats",
    testimonial: "Notre site vitrine Startbiz nous apporte 3 fois plus de demandes de devis. La qualité du design et du contenu a considérablement renforcé notre image professionnelle.",
    result: "+300% demandes de contact",
    rating: 5
  },
  {
    name: "Jean-Pierre Martin",
    company: "Martin & Associés Architecture",
    testimonial: "Le site reflète parfaitement notre expertise. Les leads qualifiés ont augmenté de 250% et nos clients apprécient la modernité de notre présence digitale.",
    result: "+250% leads qualifiés",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    company: "Laurent Consulting RH",
    testimonial: "Une équipe professionnelle qui comprend nos besoins. Le site génère des contacts de qualité supérieure et notre notoriété s'est considérablement développée.",
    result: "+180% nouveaux clients",
    rating: 5
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Création Site Vitrine Professionnel",
  "description": "Création de site vitrine professionnel sur mesure avec WordPress ou Next.js. Design responsive, SEO intégré, performance optimale.",
  "provider": {
    "@type": "Organization",
    "name": "Startbiz",
    "url": "https://startbiz.fr"
  },
  "areaServed": "FR",
  "serviceType": "Web Development"
};

export default function SiteVitrinePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const start = currentTestimonial * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    <main className="min-h-screen">
        {/* Hero Section - Impactant et orienté conversion */}
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#01579b]/10 text-[#01579b] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Globe className="h-4 w-4" />
                Site vitrine professionnel
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Création de <span className="text-[#01579b]">sites vitrines</span> professionnels
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                  Développez votre présence digitale avec des sites web performants,
                  optimisés pour le référencement et conçus pour convertir vos visiteurs en clients.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Design qui convertit</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">SEO professionnel</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Performance maximale</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Support technique</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <ButtonCTA />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/testimonials/undraw_building-websites_k2zp.svg"
                  alt="Site vitrine professionnel moderne - Startbiz"
                  className="w-full h-auto max-w-2xl mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Avantages stratégiques - Style agence moderne */}
      <section className="py-20 sm:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-primary leading-tight">
              Pourquoi choisir un site vitrine professionnel ?
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed max-w-2xl mx-auto">
                Découvrez les bénéfices concrets d'un site web moderne et optimisé pour votre activité
            </p>
          </motion.div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                    key={index}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:border-[#01579b]/20 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#01579b]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-[#374151] group-hover:text-[#01579b] transition-colors duration-300" />
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-brand-primary mb-3 group-hover:text-[#01579b] transition-colors duration-300">
                      {benefit.title}
                    </h4>

                      <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

        {/* Technologies utilisées - Sans prix */}
      <section className="py-20 sm:py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-primary leading-tight">
              WordPress ou Next.js : <span className="text-[#01579b]">quelle technologie choisir ?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed max-w-2xl mx-auto">
                Comparez les deux solutions leaders du développement web pour trouver celle qui correspond à votre projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {technologies.map((tech, index) => (
                <motion.div
                key={tech.name}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-brand-primary mb-3">{tech.name}</h4>
                <p className="text-[#444444] mb-4 leading-relaxed">{tech.description}</p>
                <div className="space-y-2">
                  {tech.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#666]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#01579b]"></div>
                      {benefit}
                    </div>
                  ))}
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Témoignages clients - Carrousel simple */}
        <section className="py-20 sm:py-24 bg-green-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Award className="h-4 w-4" />
                98% de clients satisfaits
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ils nous font confiance
            </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez les témoignages de nos clients satisfaits et leurs résultats concrets
            </p>
          </motion.div>

              <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
              {getCurrentTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:border-gray-300 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-yellow-200 opacity-30">
                    <Quote className="h-8 w-8" />
                    </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                  <blockquote className="text-base text-gray-700 leading-relaxed mb-6 font-medium">
                    "{testimonial.testimonial}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="font-bold text-gray-900 text-base">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
          </div>

                    <div className="bg-[#01579b] text-white px-2 py-1 rounded-full text-xs font-semibold border border-[#01579b]/50 whitespace-nowrap">
                      {testimonial.result}
        </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

            {/* Stats section simplifiée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#01579b] mb-2">600+</div>
                <div className="text-sm text-gray-600">Sites créés</div>
          </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#01579b] mb-2">98%</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#01579b] mb-2">4.9/5</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#01579b] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
          </motion.div>
        </div>
      </section>

        {/* Process de création détaillé - Section SEO importante */}
        <section className="py-20 sm:py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
              className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-[#01579b]/10 text-[#01579b] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Settings className="h-4 w-4" />
                Notre méthodologie
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-primary leading-tight">
                Notre méthode de travail
            </h2>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed max-w-2xl mx-auto">
                Un accompagnement complet en 6 étapes pour transformer votre vision en réalité digitale
            </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: Search,
                  title: "Audit stratégique complet",
                  description: "Analyse approfondie de votre secteur, concurrence et objectifs business pour définir la stratégie digitale optimale.",
                  details: ["Analyse concurrentielle détaillée", "Étude des mots-clés stratégiques", "Audit de votre présence actuelle", "Définition des personas clients"]
                },
                {
                  step: "02",
                  icon: Palette,
                  title: "Design UX/UI personnalisé",
                  description: "Création d'une identité visuelle unique qui reflète vos valeurs et maximise l'engagement utilisateur.",
                  details: ["Maquettes haute-fidélité", "Design system cohérent", "Optimisation mobile-first", "Tests utilisateurs itératifs"]
                },
                {
                  step: "03",
                  icon: Settings,
                  title: "Développement technique",
                  description: "Codage professionnel avec les dernières technologies pour des performances exceptionnelles.",
                  details: ["Architecture technique optimisée", "Développement WordPress/Next.js", "Intégrations API nécessaires", "Tests de sécurité approfondis"]
                },
                {
                  step: "04",
                  icon: Search,
                  title: "Optimisation SEO avancée",
                  description: "Intégration complète du référencement naturel dès la conception pour dominer les résultats Google.",
                  details: ["Structure sémantique optimisée", "Contenu SEO longue traîne", "Données structurées Schema.org", "Optimisation Core Web Vitals"]
                },
                {
                  step: "05",
                  icon: TrendingUp,
                  title: "Tests et déploiement",
                  description: "Validation rigoureuse de toutes les fonctionnalités avant le lancement officiel de votre site.",
                  details: ["Tests cross-browser complets", "Audit SEO final", "Optimisation performances", "Formation à l'utilisation"]
                },
                {
                  step: "06",
                  icon: BarChart3,
                  title: "Suivi et optimisation continue",
                  description: "Monitoring permanent et optimisations pour maximiser vos résultats business.",
                  details: ["Analytics et rapports détaillés", "Optimisations basées sur les données", "Support technique réactif", "Maintenance évolutive"]
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-300 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#01579b] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base lg:text-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                    </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#01579b]/10 rounded-xl flex items-center justify-center group-hover:bg-[#01579b]/20 transition-colors duration-300">
                      <process.icon className="h-7 w-7 text-[#01579b]" />
                    </div>
                    </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#01579b] transition-colors duration-300">
                    {process.title}
                    </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {process.description}
                  </p>

                  <div className="space-y-2">
                    {process.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-brand-primary">Délai de réalisation : 4 à 6 semaines</h3>
                <p className="text-[#444444] mb-6">
                  De l'audit stratégique au lancement optimisé, nous respectons nos délais pour vous permettre de lancer rapidement votre présence digitale.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="font-bold text-lg sm:text-xl lg:text-2xl text-[#01579b] mb-1">1-2</div>
                    <div className="text-[#666666]">semaines audit</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="font-bold text-lg sm:text-xl lg:text-2xl text-[#01579b] mb-1">2-3</div>
                    <div className="text-[#666666]">semaines design</div>
                </div>
                  <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="font-bold text-lg sm:text-xl lg:text-2xl text-[#01579b] mb-1">3-4</div>
                    <div className="text-[#666666]">semaines développement</div>
          </div>
                  <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="font-bold text-lg sm:text-xl lg:text-2xl text-[#01579b] mb-1">1</div>
                    <div className="text-[#666666]">semaine tests & lancement</div>
                  </div>
                </div>
                </div>
          </motion.div>
        </div>
      </section>

        {/* Études de cas détaillées - Section SEO puissante */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-[#01579b]/10 text-[#01579b] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <TrendingUp className="h-4 w-4" />
                Résultats clients
              </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-primary leading-tight">
                Résultats clients
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed max-w-2xl mx-auto">
                Découvrez comment nos réalisations ont impacté positivement les performances de nos clients
            </p>
          </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {[
                {
                  client: "Fontarome",
                  industry: "Industrie & Fabrication",
                  challenge: "Présence digitale inexistante dans un secteur B2B traditionnel, difficulté à atteindre les décideurs industriels",
                  solution: "Site vitrine WordPress avec tunnel de démonstration produit, génération de leads qualifiés et optimisation SEO sectoriel",
                  results: [
                    "+400% de leads qualifiés générés",
                    "Position 1-2 sur 'fabricant professionnel Marseille'",
                    "+300% de demandes de devis",
                    "ROI de 600% en 8 mois"
                  ],
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  client: "Atelier Euclide",
                  industry: "Architecture & Design",
                  challenge: "Portfolio créatif difficile à valoriser, absence de présence digitale moderne dans le secteur du design d'intérieur",
                  solution: "Site vitrine WordPress avec galerie interactive 3D, système de prise de rendez-vous et optimisation mobile pour iPad",
                  results: [
                    "+350% de demandes de consultation",
                    "Temps de chargement &lt; 1.5 secondes",
                    "+280% de conversions sur mobile",
                    "Prix 'Meilleur site architecte 2024'"
                  ],
                  image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  client: "Webdental Formation",
                  industry: "Formation & Éducation",
                  challenge: "Plateforme de formation dentaire avec faible taux d'inscription, contenu pédagogique mal valorisé",
                  solution: "Site vitrine WordPress avec LMS intégré, témoignages vidéo de praticiens et optimisation SEO médical",
                  results: [
                    "+500% d'inscriptions aux formations",
                    "+600% de trafic organique",
                    "Certification qualité pédagogique",
                    "ROI de 450% en 6 mois"
                  ],
                  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  client: "Rôtisserie Montaigne",
                  industry: "Restauration Premium",
                  challenge: "Marque haut de gamme avec site dépassé, difficulté à attirer la clientèle cible et gérer les réservations en ligne",
                  solution: "Site e-commerce WordPress avec système de réservation intégré, optimisation SEO local et stratégie de contenu gastronomique",
                  results: [
                    "+320% de réservations en ligne",
                    "Position 1 sur 'restaurant gastronomique Paris'",
                    "+250% de commandes take-away",
                    "Note moyenne Google 4.8/5"
                  ],
                  image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  client: "Armenak",
                  industry: "Mode & Luxe",
                  challenge: "Marque de mode émergente avec faible visibilité digitale, difficulté à se positionner face aux géants du e-commerce",
                  solution: "Site e-commerce PrestaShop avec expérience d'achat immersive, optimisation mobile-first et stratégie SEO concurrentielle",
                  results: [
                    "+450% de ventes en ligne",
                    "Temps de chargement &lt; 2 secondes",
                    "+380% de trafic organique",
                    "Expansion internationale réussie"
                  ],
                  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  client: "Phyto 3000",
                  industry: "Santé & Bien-être",
                  challenge: "Marque de compléments alimentaires avec site institutionnel dépassé, faible taux de conversion et manque de crédibilité digitale",
                  solution: "Site e-commerce WordPress avec contenu expert SEO, certifications affichées et tunnel d'achat optimisé",
                  results: [
                    "+280% de ventes en ligne",
                    "+400% de trafic qualifié",
                    "Certification e-commerce validée",
                    "ROI de 380% en 4 mois"
                  ],
                  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                }
              ].map((caseStudy, index) => (
              <motion.div
                  key={caseStudy.client}
                  className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-[#01579b]/30 hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                  {/* Header avec image et info client */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={`${caseStudy.client} - Étude de cas Startbiz`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Badge secteur */}
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                        <div className="w-2 h-2 bg-[#01579b] rounded-full"></div>
                        {caseStudy.industry}
                  </div>
                </div>

                    {/* Nom client */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
                        {caseStudy.client}
                      </h4>
                      <div className="w-12 h-1 bg-[#01579b] rounded-full"></div>
                    </div>
                  </div>

                  {/* Contenu détaillé */}
                  <div className="p-8 space-y-8">
                    {/* Situation initiale */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-gray-900">Situation initiale</h5>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-11">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Notre approche */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-gray-900">Notre approche</h5>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-11">
                        {caseStudy.solution}
                      </p>
                    </div>

                    {/* Résultats obtenus */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-[#01579b]">Résultats obtenus</h5>
                      </div>
                      <div className="pl-11 space-y-3">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#01579b] rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                              {result}
                  </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Indicateur de succès */}
                  <div className="px-8 pb-8">
                    <div className="flex items-center justify-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Succès validé par le client
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 text-center"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-brand-primary">Votre succès, notre priorité</h3>
              <p className="text-[#444444] mb-8 max-w-2xl mx-auto">
                Chaque projet est une opportunité de créer de la valeur pour votre entreprise.
                Nos résultats parlent pour nous : plus de 600 sites déployés, des milliers de clients satisfaits.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#01579b] mb-1">600+</div>
                  <div className="text-xs sm:text-sm text-[#666666]">Sites créés</div>
        </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#01579b] mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-[#666666]">Clients satisfaits</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#01579b] mb-1">4.9/5</div>
                  <div className="text-xs sm:text-sm text-[#666666]">Note moyenne</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#01579b] mb-1">300%</div>
                  <div className="text-xs sm:text-sm text-[#666666]">Augmentation moyenne leads</div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

        {/* FAQ complète - Section SEO essentielle */}
        <section className="py-20 sm:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-[#01579b]/10 text-[#01579b] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <HelpCircle className="h-4 w-4" />
                Questions fréquentes
              </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-primary leading-tight">
                Questions fréquentes
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed max-w-2xl mx-auto">
                Trouvez les réponses aux questions que vous vous posez sur notre processus et nos services
            </p>
          </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Combien coûte la création d'un site vitrine professionnel ?",
                  answer: "Le coût dépend de vos besoins spécifiques : de 4 500€ à 15 000€ pour un site Next.js premium, ou de 2 500€ à 8 000€ pour WordPress selon la complexité. Nous proposons toujours un devis personnalisé gratuit après analyse de votre projet."
                },
                {
                  question: "WordPress ou Next.js : lequel choisir pour mon activité ?",
                  answer: "Choisissez WordPress si vous souhaitez gérer votre contenu seul et avez un budget plus accessible. Optez pour Next.js si les performances SEO absolues et la scalabilité sont vos priorités. Nous vous conseillons selon vos objectifs business."
                },
                {
                  question: "Quel est le délai de réalisation d'un site vitrine ?",
                  answer: "Notre processus structuré prend entre 4 et 6 semaines : 1-2 semaines d'audit, 2-3 semaines de design, 3-4 semaines de développement, et 1 semaine de tests et lancement. Nous respectons toujours nos délais."
                },
                {
                  question: "Mon site sera-t-il optimisé pour les moteurs de recherche ?",
                  answer: "Absolument. Nous intégrons le SEO dès la conception : structure sémantique optimisée, contenu stratégique, données structurées Schema.org, optimisation Core Web Vitals, et stratégie de mots-clés longue traîne."
                },
                {
                  question: "Proposez-vous la maintenance après la création ?",
                  answer: "Oui, nous proposons des formules de maintenance complète incluant : mises à jour de sécurité, sauvegardes automatiques, monitoring des performances, corrections techniques, et support technique réactif."
                },
                {
                  question: "Le site sera-t-il compatible mobile et tablette ?",
                  answer: "Tous nos sites sont développés en approche mobile-first, garantissant une expérience utilisateur optimale sur tous les appareils. Nous testons sur plus de 20 configurations différentes."
                },
                {
                  question: "Pouvez-vous intégrer mes outils existants ?",
                  answer: "Oui, nous maîtrisons l'intégration avec tous les outils business : CRM (HubSpot, Pipedrive), analytics (Google Analytics 4), marketing automation, solutions e-commerce, ERP, et bien d'autres selon vos besoins."
                },
                {
                  question: "Comment mesurez-vous les résultats de mon site ?",
                  answer: "Nous mettons en place un suivi complet avec rapports mensuels détaillés : trafic organique, taux de conversion, leads générés, performance SEO, Core Web Vitals, et ROI de votre investissement digital."
                },
                {
                  question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
                  answer: "Nous garantissons votre satisfaction avec une période de révisions gratuites de 30 jours après livraison. Si le résultat ne correspond pas à vos attentes, nous effectuons toutes les modifications nécessaires gratuitement."
                },
                {
                  question: "Proposez-vous des formations pour gérer mon site ?",
                  answer: "Oui, toutes nos prestations incluent une formation personnalisée pour vous et votre équipe. Nous vous formons à la gestion du contenu, aux mises à jour, et à l'utilisation des fonctionnalités avancées."
                }
              ].map((faq, index) => (
              <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#01579b]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-[#01579b] mt-1 flex-shrink-0" />
                    {faq.question}
                </h3>
                  <p className="text-gray-600 leading-relaxed ml-8">
                    {faq.answer}
                  </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Garanties et avantages concurrentiels */}
        <section className="py-20 sm:py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
              className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-[#01579b]/10 text-[#01579b] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Shield className="h-4 w-4" />
                Nos garanties
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-primary leading-tight">
                Nos engagements
            </h2>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed max-w-2xl mx-auto">
                Découvrez nos garanties et engagements pour vous accompagner dans la réussite de votre projet
            </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Clock,
                  title: "Respect des délais garantis",
                  description: "Nous livrons toujours dans les temps annoncés. Pas de retard, pas de surprise."
                },
                {
                  icon: ThumbsUp,
                  title: "Satisfaction client garantie",
                  description: "30 jours de révisions gratuites. Si vous n'êtes pas satisfait, nous corrigeons gratuitement."
                },
                {
                  icon: Shield,
                  title: "Sécurité maximale",
                  description: "Protection avancée contre les cybermenaces avec monitoring 24/7 et mises à jour régulières."
                },
                {
                  icon: TrendingUp,
                  title: "Résultats prouvés",
                  description: "600+ sites créés, 98% de clients satisfaits, résultats mesurables et garantis."
                },
                {
                  icon: Settings,
                  title: "Support technique inclus",
                  description: "Support technique réactif et formations pour vous accompagner dans la durée."
                },
                {
                  icon: Award,
                  title: "Expertise reconnue",
                  description: "Plus de 10 ans d'expérience, technologies de pointe, méthodologie éprouvée."
                }
              ].map((guarantee, index) => (
              <motion.div
                  key={guarantee.title}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                  <div className="w-16 h-16 bg-[#01579b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="h-8 w-8 text-[#01579b]" />
            </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                  <p className="text-gray-600">{guarantee.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Avantages Concurrentiels Création Site Vitrine
                </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Audit stratégique offert</strong>
                        <p className="text-gray-600 text-sm">Analyse complète de 50+ pages incluse gratuitement</p>
                  </div>
                </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Formation équipe incluse</strong>
                        <p className="text-gray-600 text-sm">Sessions personnalisées pour votre équipe</p>
                </div>
          </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Support 6 mois gratuit</strong>
                        <p className="text-gray-600 text-sm">Accompagnement post-livraison complet</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Optimisation Core Web Vitals</strong>
                        <p className="text-gray-600 text-sm">Performance garantie &lt; 3 secondes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-[#01579b] text-white rounded-xl p-6 mb-6">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">10 ans</div>
                    <div className="text-sm text-blue-100">d'expérience</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Plus de 600 projets réussis<br />
                    98% de clients satisfaits<br />
                    Présent dans toute la France
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* CTA du bas - Prêt à lancer votre projet ? */}
      <CTAbaspage
        variant="photo-gauche"
        title="Prêt à lancer votre projet ?"
        description="Rejoignez nos 600+ clients qui ont choisi l'excellence technique. Votre site vitrine professionnel, c'est maintenant."
        primaryCTA={{
          text: "Demander un devis - c'est gratuit !",
          href: "/contact"
        }}
      />
    </main>
    </>
  );
}
