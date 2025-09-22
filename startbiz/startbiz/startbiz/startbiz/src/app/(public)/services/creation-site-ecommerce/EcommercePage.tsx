"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShoppingCart, TrendingUp, Award, Zap, CreditCard, Package, Truck, BarChart3, Globe, Users } from "lucide-react";

const platforms = [
  {
    name: "Shopify",
    description: "Plateforme e-commerce leader avec thèmes professionnels et apps puissantes pour créer rapidement une boutique performante.",
    price: "À partir de 29€/mois",
    features: ["Thèmes premium", "Apps marketplace", "Paiements intégrés", "Support 24/7"]
  },
  {
    name: "WooCommerce",
    description: "Solution open-source flexible sur WordPress avec contrôle total pour des boutiques e-commerce évolutives.",
    price: "Gratuit + hébergement",
    features: ["Personnalisation totale", "Extensions gratuites", "SEO optimisé", "Communauté active"]
  },
  {
    name: "Solution Sur Mesure",
    description: "Développement e-commerce personnalisé pour besoins spécifiques avec architecture scalable et haute performance.",
    price: "Sur devis",
    features: ["Architecture scalable", "Fonctionnalités bespoke", "API intégrations", "Performance maximale"]
  }
];

const features = [
  {
    icon: ShoppingCart,
    title: "Catalogue Produits Intelligent",
    description: "Gestion avancée de votre inventaire avec catégories, variantes, recherche intelligente et optimisation automatique pour maximiser vos ventes."
  },
  {
    icon: CreditCard,
    title: "Paiement Sécurisé Multi-Devises",
    description: "Intégration Stripe, PayPal, Apple Pay et autres solutions de paiement avec conformité PCI DSS pour des transactions sécurisées."
  },
  {
    icon: Package,
    title: "Gestion des Stocks Automatisée",
    description: "Suivi en temps réel des inventaires, alertes rupture de stock, et synchronisation multi-canal pour une gestion logistique optimale."
  },
  {
    icon: Truck,
    title: "Logistique & Livraison Optimisée",
    description: "Calcul automatique des frais de port, intégrations transporteurs, et suivi des commandes en temps réel pour une expérience client parfaite."
  },
  {
    icon: BarChart3,
    title: "Analytics E-commerce Avancé",
    description: "Tableaux de bord complets avec KPIs e-commerce, analyses comportementales et rapports automatisés pour optimiser vos performances."
  },
  {
    icon: Globe,
    title: "Commerce Mondial Scalable",
    description: "Support multi-devises, multi-langues et optimisation pour les marchés internationaux avec expansion globale facilitée."
  }
];

const strategicBenefits = [
  {
    icon: Globe,
    title: "Commerce 24/7 Mondial",
    description: "Vendez dans le monde entier sans interruption, capturant des clients dans tous les fuseaux horaires avec présence digitale continue."
  },
  {
    icon: TrendingUp,
    title: "Croissance Exponentielle",
    description: "Éliminez les contraintes physiques et développez votre business à l'échelle mondiale avec un potentiel de croissance illimité."
  },
  {
    icon: Users,
    title: "Base Clients Internationale",
    description: "Construisez une communauté globale de clients fidèles avec des expériences personnalisées et un service client international."
  },
  {
    icon: Zap,
    title: "Automatisation Complète",
    description: "Automatisez vos processus de vente, marketing, logistique et service client pour une efficacité maximale et une scalabilité parfaite."
  }
];

export default function EcommercePage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 sm:py-24">
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
                <ShoppingCart className="h-4 w-4" />
                E-commerce Professionnel
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Boutique <span className="text-[#01579b]">en ligne</span>
                <br />
                qui vend 24h/24
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Développez votre business e-commerce avec une plateforme performante et scalable.
                Shopify, WooCommerce ou solution sur mesure : nous créons la boutique qui booste
                vos ventes avec plus de 250 projets e-commerce réussis.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Paiements sécurisés</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Gestion des stocks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Analytics avancés</span>
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
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-[#01579b] bg-[#01579b] text-white hover:bg-[#01579b]/90 hover:border-[#01579b]/90 focus:ring-[#01579b] hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-lg gap-4"
                >
                  Demander un devis - c'est gratuit
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#plateformes"
                  className="inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500 px-8 py-4 text-lg gap-4"
                >
                  Découvrir les plateformes
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
                  alt="Boutique e-commerce moderne et performante"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Ventes actives</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "250+", label: "Boutiques créées" },
              { number: "95%", label: "Taux de conversion moyen" },
              { number: "€2.5M", label: "CA généré pour nos clients" },
              { number: "24/7", label: "Ventes automatisées" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="plateformes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre <span className="text-[#01579b]">plateforme e-commerce</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Du prêt-à-vendre aux solutions enterprise, nous maîtrisons toutes les plateformes
              pour créer la boutique qui correspond à votre stratégie commerciale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt={platform.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-medium">{platform.price}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-gray-600 mb-4">{platform.description}</p>

                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 px-4 py-3 text-center border-[#01579b] bg-[#01579b] text-white hover:bg-[#01579b]/90"
                  >
                    Demander un devis
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Avantages stratégiques du <span className="text-[#01579b]">commerce en ligne</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi les entreprises leaders choisissent l'e-commerce
              pour accélérer leur croissance et conquérir de nouveaux marchés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:border-[#01579b]/20 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-[#374151] group-hover:text-[#01579b] transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-semibold text-brand-primary mb-3 group-hover:text-[#01579b] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-[#444444] sm:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités <span className="text-[#01579b]">e-commerce avancées</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Toutes les fonctionnalités nécessaires pour gérer efficacement votre boutique en ligne
              et optimiser vos performances commerciales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:border-[#01579b]/20 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-[#374151] group-hover:text-[#01579b] transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3 group-hover:text-[#01579b] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#444444] sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#01579b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à lancer votre boutique e-commerce ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Démarrons votre transformation digitale dès aujourd'hui. De l'audit stratégique
              au lancement, nous vous accompagnons pour maximiser vos ventes en ligne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-white bg-white text-[#01579b] hover:bg-blue-50 focus:ring-white px-8 py-4 text-lg gap-4"
              >
                Demander un devis - c'est gratuit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="tel:+33123456789"
                className="inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-transparent bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg gap-4"
              >
                Nous appeler
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}