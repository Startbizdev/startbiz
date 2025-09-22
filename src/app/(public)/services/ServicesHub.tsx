"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award, Shield, Zap, Globe, Smartphone, Search, Palette, Wrench, ShoppingCart } from "lucide-react";

const services = [
  {
    id: "creation-site-vitrine",
    title: "Site Vitrine Professionnel",
    subtitle: "Présence digitale impeccable",
    description: "Créez une vitrine digitale qui impressionne vos visiteurs et convertit vos prospects en clients.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    features: ["Design responsive", "Performance optimale", "SEO intégré", "CMS intuitif"],
    benefits: ["Visibilité 24/7", "Crédibilité renforcée", "Génération de leads", "ROI mesurable"]
  },
  {
    id: "creation-site-ecommerce",
    title: "Site E-commerce",
    subtitle: "Boutique en ligne performante",
    description: "Développez votre business en ligne avec une plateforme e-commerce sur mesure ou clé en main.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    features: ["Shopify/WooCommerce", "Paiement sécurisé", "Gestion des stocks", "Analytics intégrés"],
    benefits: ["Ventes 24/7", "Portée mondiale", "Réduction des coûts", "Croissance scalable"]
  },
  {
    id: "developpement-web",
    title: "Développement Web Sur Mesure",
    subtitle: "Solutions techniques avancées",
    description: "Applications web complexes et sur mesure avec les dernières technologies pour des besoins spécifiques.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    features: ["Next.js/Node.js", "API performantes", "Tests unitaires", "CI/CD"],
    benefits: ["Performance optimale", "Évolutivité garantie", "Maintenance facilitée", "Innovation technologique"]
  },
  {
    id: "application-mobile",
    title: "Application Mobile",
    subtitle: "Expérience mobile native",
    description: "Développez votre présence mobile avec des applications iOS et Android de qualité professionnelle.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    features: ["React Native/Flutter", "iOS & Android", "App Store optimisé", "Maintenance incluse"],
    benefits: ["Engagement client", "Notoriété renforcée", "Monétisation possible", "Expérience premium"]
  },
  {
    id: "seo-referencement",
    title: "SEO & Référencement",
    subtitle: "Dominez les moteurs de recherche",
    description: "Optimisez votre visibilité en ligne et attirez du trafic qualifié grâce à notre expertise SEO.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    features: ["Audit SEO complet", "Optimisation technique", "Stratégie contenu", "Suivi performance"],
    benefits: ["Trafic qualifié", "Positionnement durable", "ROI long terme", "Avantage concurrentiel"]
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    subtitle: "Accompagnement continu",
    description: "Assurez la pérennité de vos projets avec notre service de maintenance technique et support.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    features: ["Monitoring 24/7", "Mises à jour sécurité", "Support technique", "Optimisations continues"],
    benefits: ["Sécurité garantie", "Performance maintenue", "Évolutivité assurée", "Tranquillité d'esprit"]
  },
  {
    id: "branding-identite-visuelle",
    title: "Branding & Identité Visuelle",
    subtitle: "Marque mémorable",
    description: "Créez une identité de marque forte et cohérente qui vous démarque de la concurrence.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    features: ["Charte graphique", "Logo professionnel", "Identité digitale", "Stratégie de marque"],
    benefits: ["Reconnaissance instantanée", "Confiance client", "Différenciation", "Valeur perçue accrue"]
  }
];

const stats = [
  { number: "600+", label: "Projets Réalisés", icon: Award },
  { number: "98%", label: "Clients Satisfaits", icon: Users },
  { number: "24/7", label: "Support Technique", icon: Shield },
  { number: "47M€", label: "CA Généré", icon: TrendingUp }
];

export default function ServicesHub() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Optimisé SEO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#01579b]/10 text-[#01579b] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="h-4 w-4" />
              Services Complets d'Agence Web
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tous nos <span className="text-[#01579b]">services digitaux</span>
              <br />
              pour votre réussite en ligne
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              De la création de sites web à l'accompagnement stratégique, découvrez notre gamme complète de services
              conçus pour propulser votre business dans l'ère digitale. Chaque solution est adaptée à vos besoins spécifiques.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-[#01579b] bg-[#01579b] text-white hover:bg-[#01579b]/90 hover:border-[#01579b]/90 focus:ring-[#01579b] hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-lg gap-4"
              >
                Demander un devis gratuit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500 px-8 py-4 text-lg gap-4"
              >
                Découvrir nos services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#01579b]/10 mb-4">
                  <stat.icon className="h-6 w-6 text-[#01579b]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services <span className="text-[#01579b]">phares</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque service est conçu pour répondre à des besoins spécifiques et maximiser votre retour sur investissement digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#01579b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#01579b] font-medium mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-[#01579b] font-medium hover:text-[#01579b]/80 transition-colors group"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="text-[#01579b]">méthodologie</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus éprouvé en 4 étapes pour garantir la réussite de vos projets digitaux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Stratégie",
                description: "Étude approfondie de vos besoins, analyse concurrentielle et définition d'une stratégie digitale sur mesure.",
                icon: Search
              },
              {
                step: "02",
                title: "Conception & Design",
                description: "Création d'une expérience utilisateur optimale avec un design moderne et des interfaces intuitives.",
                icon: Palette
              },
              {
                step: "03",
                title: "Développement & Tests",
                description: "Développement technique rigoureux avec tests continus pour garantir performance et sécurité.",
                icon: Zap
              },
              {
                step: "04",
                title: "Lancement & Support",
                description: "Déploiement professionnel suivi d'un accompagnement continu pour optimiser vos résultats.",
                icon: TrendingUp
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#01579b]/10 mb-4">
                  <phase.icon className="h-8 w-8 text-[#01579b]" />
                </div>
                <div className="text-2xl font-bold text-[#01579b] mb-2">{phase.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous <span className="text-[#01579b]">font confiance</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de clients satisfaits qui ont transformé leur business avec nos services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vahe & Azad Chahinian",
                company: "Rotisserie Montaigne",
                testimonial: "Startbiz nous a accompagnés dans la création de notre marketplace digitale. Leur expertise technique et leur vision stratégique ont dépassé nos attentes.",
                rating: 5
              },
              {
                name: "Nicolas Rovera",
                company: "Aviaco France",
                testimonial: "L'équipe de Startbiz maîtrise parfaitement les enjeux du e-commerce. Notre plateforme génère désormais 40% de notre CA total.",
                rating: 5
              },
              {
                name: "Marie Dubois",
                company: "TechCorp Solutions",
                testimonial: "Du développement web sur mesure à la maintenance continue, Startbiz assure un suivi impeccable. Service client exemplaire.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "{testimonial.testimonial}"
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-[#01579b]">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01579b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à digitaliser votre business ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Quel que soit votre projet, nous avons l'expertise pour le réaliser.
              Discutons ensemble de vos objectifs et trouvons la solution idéale.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-white bg-white text-[#01579b] hover:bg-blue-50 focus:ring-white px-8 py-4 text-lg gap-4"
            >
              Demander un devis gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
