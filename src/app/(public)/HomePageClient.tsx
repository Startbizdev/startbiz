"use client";

import { motion } from "framer-motion";
import HeroHome from "@/components/hyperui/HeroHome";
import Button from "@/components/hyperui/Button";
import {
  Rocket,
  Users,
  TrendingUp,
  Award,
  Code,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Clock,
  Heart,
  Monitor,
  ShoppingCart,
  Palette,
  Settings
} from "lucide-react";

const stats = [
  {
    number: "600+",
    label: "Projets réussis",
    icon: Award
  },
  {
    number: "2014",
    label: "Depuis notre création",
    icon: Clock
  },
  {
    number: "47M€",
    label: "CA généré pour nos clients",
    icon: TrendingUp
  },
  {
    number: "99.9%",
    label: "Uptime garanti",
    icon: Shield
  }
];

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Applications web modernes avec React, Next.js, Node.js. Architecture scalable et performante.",
    features: ["React/Next.js", "API REST & GraphQL", "Tests unitaires", "CI/CD"]
  },
  {
    icon: Monitor,
    title: "Site Vitrine",
    description: "Sites web institutionnels, landing pages, portfolios. Présence digitale professionnelle.",
    features: ["Design responsive", "CMS intégré", "SEO optimisé", "Performance optimale"]
  },
  {
    icon: ShoppingCart,
    title: "Sites E-commerce",
    description: "Boutiques en ligne performantes avec Shopify, WooCommerce, solutions sur mesure.",
    features: ["Shopify", "WooCommerce", "Paiement intégré", "SEO e-commerce"]
  },
  {
    icon: Palette,
    title: "Identité visuelle & Branding",
    description: "Création d'identité de marque complète, charte graphique, logo, stratégie de communication digitale.",
    features: ["Logo & charte graphique", "Identité de marque", "Stratégie digitale", "Design système"]
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Apps natives et hybrides pour iOS et Android. Expérience utilisateur optimale.",
    features: ["React Native", "Flutter", "Swift/Kotlin", "Expo"]
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Support technique continu, mises à jour, monitoring et optimisation de vos applications.",
    features: ["Support 24/7", "Mises à jour sécurité", "Monitoring performance", "Optimisations continues"]
  }
];

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CEO, TechStart",
    company: "TechStart",
    content: "L'agence web France Startbiz a transformé notre vision en réalité. Leur expertise technique et leur accompagnement nous ont permis de lancer notre plateforme en seulement 3 mois.",
    rating: 5
  },
  {
    name: "Pierre Martin",
    role: "Directeur Commercial",
    company: "E-commerce Plus",
    content: "Depuis notre collaboration avec Startbiz, notre chiffre d'affaires a augmenté de 300%. Leur approche méthodique et leurs solutions e-commerce sont exceptionnelles.",
    rating: 5
  },
  {
    name: "Sophie Bernard",
    role: "Fondatrice",
    company: "Green Solutions",
    content: "Startbiz comprend parfaitement les enjeux des startups. Leur réactivité et leur qualité de développement nous ont aidés à lever nos premiers fonds.",
    rating: 5
  }
];

export default function HomePageClient() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Optimisé SEO */}
      <HeroHome
        title={<>L'<span className="text-[#01579b]">agence web</span> qui propulse votre business en ligne<span className="text-[#01579b] text-6xl">.</span></>}
        description="Startbiz, agence web de référence, transforme vos idées en solutions digitales performantes. Plus de 600 projets réussis, expertise complète : sites web, e-commerce, applications mobiles."
        primaryCTA={{
          text: <>Demander un devis - <em>c'est gratuit !</em></>,
          href: "/contact"
        }}
      />

      {/* Identité Startbiz & KPIs - Section stratégique */}
      <section className="py-20 sm:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl mb-6">
              L'agence web qui fait la différence
            </h2>
            <p className="text-lg text-[#444444] leading-relaxed max-w-3xl mx-auto">
              Depuis 2014, <strong>Startbiz</strong> révolutionne le développement web en France. Notre approche méthodique,
              notre expertise technique pointue et notre accompagnement personnalisé nous distinguent des autres agences.
              Nous transformons vos ambitions en succès digital concret.
            </p>
          </motion.div>

          {/* KPIs avec design premium */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Icône minimaliste avec fond */}
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white mb-4 shadow-sm">
                    <IconComponent className="h-8 w-8 text-[#01579b]" />
                  </div>

                  {/* Nombre */}
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-medium text-[#444444] leading-tight max-w-[120px] mx-auto">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Message différenciant */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base text-[#666] leading-relaxed max-w-2xl mx-auto">
              <strong className="text-[#01579b]">Chaque projet</strong> est une opportunité d'innover,
              d'optimiser et de créer des solutions qui dépassent les attentes de nos clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services - Section optimisée SEO */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Nos services d'agence web
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Expertise complète en développement web et mobile. De l'idée au lancement, nous créons des solutions digitales qui convertissent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#01579b]/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Gros icône en arrière-plan avec opacité */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <IconComponent className="h-32 w-32 text-[#01579b]" />
                  </div>

                  {/* Background gradient subtil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#01579b]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <h3 className="text-lg font-bold text-brand-primary mb-3 group-hover:text-[#01579b] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[#444444] leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[#01579b] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-[#666] leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Présentation Agence - Disposition unique */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-primary md:text-5xl leading-tight mb-6">
              L'agence web qui comprend votre business
            </h2>
            <p className="text-lg text-[#444444] leading-relaxed max-w-3xl mx-auto">
              Depuis 2014, <strong>Startbiz</strong> accompagne startups et PME dans leur transformation digitale.
              Notre approche méthodique combine expertise technique et vision stratégique.
            </p>
          </motion.div>

          {/* Disposition verticale unique avec image centrale */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#01579b]/10 mb-4">
                  <Target className="h-6 w-6 text-[#01579b]" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-3">Approche méthodique</h3>
                <p className="text-[#666] leading-relaxed">
                  Chaque projet suit une méthodologie éprouvée : analyse, conception, développement, optimisation continue.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#01579b]/10 mb-4">
                  <Heart className="h-6 w-6 text-[#01579b]" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-3">Accompagnement humain</h3>
                <p className="text-[#666] leading-relaxed">
                  Nous nous adaptons à votre rythme avec formation, support technique et évolution continue.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#01579b]/20 to-[#01579b]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  alt="Équipe Startbiz - Agence web spécialisée dans le développement digital"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <p className="text-sm font-semibold text-brand-primary">Notre équipe passionnée</p>
                  <p className="text-xs text-[#666]">Experts en développement web</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#01579b]/10 mb-4">
                  <Rocket className="h-6 w-6 text-[#01579b]" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-3">Technologies modernes</h3>
                <p className="text-[#666] leading-relaxed">
                  React, Next.js, Node.js, Python. Solutions scalables et performantes pour votre avenir digital.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Button
                  href="/a-propos"
                  variant="primary"
                  size="md"
                  className="w-full text-sm sm:text-base min-w-[180px] sm:min-w-[200px] px-4 sm:px-6 py-3 sm:py-4"
                >
                  Découvrez notre histoire
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages - Social proof optimisé SEO */}
      <section className="py-20 sm:py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Ils nous font confiance
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits. Agence web reconnue pour la qualité de ses prestations.
            </p>
          </motion.div>

          <div className="relative">
            {/* Background décoratif */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute top-10 left-10 w-20 h-20 border border-[#01579b] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#01579b] rounded-full"></div>
            </div>

            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Quote mark décoratif */}
                  <div className="absolute -top-2 -left-2 text-6xl text-[#01579b]/10 font-serif leading-none">"</div>

                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                    {/* Rating stars */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center gap-1 bg-[#01579b]/5 px-3 py-1 rounded-full">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-xs text-[#666] ml-2 font-medium">5.0</span>
                      </div>
                    </div>

                    <blockquote className="text-[#444444] leading-relaxed text-center mb-8 italic">
                      {testimonial.content}
                    </blockquote>

                    {/* Avatar et info */}
                    <div className="flex items-center justify-center">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#01579b] to-[#01579b]/80 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4 text-center">
                        <p className="text-sm font-bold text-brand-primary">{testimonial.name}</p>
                        <p className="text-xs text-[#666]">{testimonial.role}</p>
                        <p className="text-xs font-medium text-[#01579b]">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Ligne décorative */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#01579b]/30 to-transparent rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs - Différenciation */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
              Pourquoi choisir <span className="text-[#01579b]">Startbiz</span> ?
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              L'agence web France qui allie expertise technique et accompagnement humain pour votre réussite digitale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Approche méthodique",
                description: "Chaque projet suit une méthodologie éprouvée : analyse, conception, développement, optimisation."
              },
              {
                icon: Heart,
                title: "Accompagnement personnalisé",
                description: "Nous nous adaptons à votre rythme et vos besoins. Formation, support technique, évolution."
              },
              {
                icon: Rocket,
                title: "Technologies modernes",
                description: "React, Next.js, Node.js, Python. Solutions scalables et performantes pour l'avenir."
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:border-[#01579b]/20 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 mb-4">
                      <IconComponent className="h-6 w-6 text-gray-600 opacity-80 group-hover:opacity-100 group-hover:text-[#01579b] transition-all duration-300" />
                    </div>

                    <h3 className="text-lg font-semibold text-brand-primary mb-3 group-hover:text-[#01579b] transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-sm text-[#444444] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final - Optimisé conversion */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black md:text-5xl leading-tight mb-6">
              Prêt à donner vie à votre projet digital ?
            </h2>

            <p className="text-lg text-[#444444] leading-relaxed mb-8 max-w-2xl mx-auto">
              Contactez <strong>Startbiz, agence web</strong>, pour un devis gratuit et personnalisé.
              Transformons votre vision en succès digital mesurable.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Button
                href="/contact"
                variant="primary"
                size="md"
                showArrow
                className="w-full sm:w-auto text-sm sm:text-base min-w-[180px] sm:min-w-[200px] px-4 sm:px-6 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <>Demander un devis - <em>C'est gratuit !</em></>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
