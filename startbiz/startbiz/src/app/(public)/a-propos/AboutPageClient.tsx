"use client";

import {
  Rocket, Award, Target, Sparkles, TrendingUp, Cloud, Database, Code, Zap, Users, Globe, Star, BarChart3, Calendar,
  Clock, Shield, Lock, ChevronDown, ShoppingCart
} from "lucide-react";
import {
  // Frontend
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTailwindcss, SiTypescript,
  // Backend
  SiNodedotjs, SiPython, SiPhp, SiLaravel, SiMongodb, SiPostgresql,
  // Mobile
  SiFlutter, SiSwift, SiExpo, SiKotlin, SiIonic,
  // E-commerce & CMS
  SiShopify, SiWordpress, SiWoocommerce, SiMagento, SiPrestashop, SiStripe,
  // Tools & Cloud
  SiDocker, SiVercel, SiFirebase, SiGithub, SiRender,
  // Certifications & Analytics
  SiGoogleanalytics, SiGoogleads
} from "react-icons/si";
import { FaReact, FaAws, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "@/components/hyperui/HeroSection";
import CTASection from "@/components/hyperui/CTASection";
import Button from "@/components/hyperui/Button";
import Section from "@/components/hyperui/Section";


const values = [
  {
    icon: Rocket,
    title: "Innovation technologique",
    description: "Nous investissons constamment dans la R&D pour maîtriser les technologies émergentes : IA, Web3, edge computing. Chaque projet bénéficie des dernières avancées techniques pour un avantage concurrentiel durable.",
    color: "from-[#01579b] to-[#01579b]",
    details: ["Veille technologique quotidienne", "Partenariats tech leaders", "Certification continue équipe"]
  },
  {
    icon: Users,
    title: "Partenaires stratégiques",
    description: "Nous ne livrons pas que du code, nous accompagnons votre croissance. Strategy digitale, optimisation business, formation équipe : nous sommes votre partenaire de long terme.",
    color: "from-[#01579b] to-[#01579b]",
    details: ["Conseil stratégique inclus", "Formation équipe gratuite", "Support 6 mois post-livraison"]
  },
  {
    icon: Zap,
    title: "Performance & Excellence",
    description: "Chaque solution est optimisée pour les Core Web Vitals de Google. Sécurité renforcée, architecture scalable, expérience utilisateur exceptionnelle : la qualité n'est pas négociable.",
    color: "from-[#01579b] to-[#01579b]",
    details: ["Core Web Vitals optimisés", "Sécurité RGPD/HDS", "Architecture cloud-native"]
  },
  {
    icon: Target,
    title: "ROI mesurable",
    description: "Nous travaillons avec des KPIs clairs. Chaque euro investi génère des résultats tangibles : augmentation du CA, réduction des coûts, amélioration de la satisfaction client.",
    color: "from-[#01579b] to-[#01579b]",
    details: ["KPIs définis dès le brief", "Reporting mensuel", "Optimisation continue"]
  },
  {
    icon: Award,
    title: "Transparence totale",
    description: "Pas de mauvaises surprises. Communication claire, planning respecté, budget maîtrisé. Vous savez exactement où va votre argent et l'avancement de votre projet.",
    color: "from-[#01579b] to-[#01579b]",
    details: ["Devis détaillé gratuit", "Planning transparent", "Communication hebdomadaire"]
  },
  {
    icon: Globe,
    title: "Impact positif",
    description: "Au-delà du business, nous contribuons à un numérique responsable. Code éthique, accessibilité numérique, réduction de l'empreinte carbone de nos solutions.",
    color: "from-[#01579b] to-[#01579b]",
    details: ["Accessibilité WCAG 2.1", "Optimisation énergétique", "Code éthique strict"]
  }
];

const stats = [
  { number: "600+", label: "Projets déployés", icon: Code },
  { number: "47M€", label: "CA généré", icon: TrendingUp },
  { number: "99.9%", label: "Uptime garanti", icon: Zap },
  { number: "4.8★", label: "Satisfaction client", icon: Award }
];


export default function AboutPageClient() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Design HyperUI */}
      <HeroSection
        title={<>Transformer <span className="text-[#01579b]">vos idées</span><br className="hidden sm:block" /> en succès digital</>}
        description="Depuis une décennie, nous révolutionnons le développement web avec une approche méthodique : **innovation**, **performance**, **résultats mesurables**."
        primaryCTA={{
          text: <>Demander un devis - <em>C'est gratuit !</em></>,
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Voir nos réalisations",
          href: "/portfolio"
        }}
      />


      {/* Nos valeurs - Design Startbiz moderne */}
      <section className="py-20 sm:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Nos valeurs
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Les principes qui guident chacune de nos décisions et actions au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                ...values[0],
                gradient: "bg-gray-100",
                hoverGradient: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50"
              },
              {
                ...values[1],
                gradient: "bg-gray-100",
                hoverGradient: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50"
              },
              {
                ...values[2],
                gradient: "bg-gray-100",
                hoverGradient: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50"
              },
              {
                ...values[3],
                gradient: "bg-gray-100",
                hoverGradient: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50"
              },
              {
                ...values[4],
                gradient: "bg-gray-100",
                hoverGradient: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50"
              },
              {
                ...values[5],
                gradient: "bg-gray-100",
                hoverGradient: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50"
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:border-#01579b/20 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Background gradient subtil */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative">
                    {/* Icône avec fond coloré personnalisé */}
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-7 w-7 text-[#374151] group-hover:text-[#01579b] transition-colors duration-300" />
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-semibold text-brand-primary mb-3 group-hover:text-[#01579b] transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#444444] sm:text-base leading-relaxed mb-4">
                      {value.description}
                    </p>

                    {/* Points clés si disponibles */}
                    {value.details && value.details.length > 0 && (
                      <ul className="space-y-2">
                        {value.details.slice(0, 2).map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-[#666]">
                            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: value.accentColor }} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agence Web Startbiz - Section SEO optimisée avec design premium */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        {/* Éléments décoratifs subtils */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-32 h-32 border border-#01579b rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-brand-orange rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-brand-primary rounded-full"></div>
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            {/* Contenu texte avec design sophistiqué */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* Titre avec identité cohérente au hero */}
              <h2 className="text-4xl font-bold text-brand-primary md:text-5xl leading-tight mb-6">
                L'agence web Startbiz
                <br />votre partenaire digital
              </h2>

              {/* Description avec meilleur espacement */}
              <div className="space-y-4 text-[#01579b] leading-relaxed text-base">
                <p>
                  Spécialisée dans le développement d'applications web modernes, notre agence digitale accompagne
                  <span className="font-semibold text-brand-primary"> startups et PME </span>
                  dans leur transformation numérique.
                </p>
                <p>
                  Du développement <span className="font-semibold text-[#01579b]">React/Next.js</span> aux solutions
                  <span className="font-semibold text-[#01579b]"> e-commerce performantes</span>, nous créons des expériences
                  digitales qui convertissent et fidélisent vos clients.
                </p>
                <p className="text-[#444444]">
                  Notre expertise couvre l'intégralité du spectre digital : sites vitrines, applications web,
                  plateformes SaaS, et boutiques en ligne optimisées.
                </p>
              </div>

              {/* CTA avec design premium */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-10"
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

            {/* Images avec design moderne */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Image principale avec overlay */}
                <motion.div
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative col-span-2 mb-4 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#01579b]/20 to-[#01579b]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    alt="Équipe de développeurs travaillant sur des projets digitaux innovants dans un environnement moderne"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-sm font-medium text-brand-primary">Notre équipe</p>
                  </div>
                </motion.div>

                {/* Deuxième image */}
                <motion.div
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group"
                >
                  <img
                    alt="Ordinateur portable affichant une interface d'application web moderne avec code et design responsive"
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    className="w-full h-40 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-medium text-brand-primary">Innovation</p>
                  </div>
                </motion.div>

                {/* Troisième image */}
                <motion.div
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group"
                >
                  <img
                    alt="Interface utilisateur moderne avec design system et composants réutilisables"
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    className="w-full h-40 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-medium text-brand-primary">Créativité</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies & Expertise */}
      <section className="py-20 sm:py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Notre expertise technique
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Notre maîtrise technologique complète : du développement frontend à l'infrastructure cloud,
              nous utilisons les meilleures technologies pour créer des solutions performantes et évolutives.
            </p>
          </div>

          {/* Technologies par catégorie - Design professionnel */}
          <div className="space-y-8">
            {[
              {
                category: "Frontend",
                technologies: [
                  { name: "React", icon: SiReact },
                  { name: "Next.js", icon: SiNextdotjs },
                  { name: "Vue.js", icon: SiVuedotjs },
                  { name: "Angular", icon: SiAngular },
                  { name: "Tailwind", icon: SiTailwindcss },
                  { name: "TypeScript", icon: SiTypescript },
                ]
              },
              {
                category: "Backend & Base de données",
                technologies: [
                  { name: "Node.js", icon: SiNodedotjs },
                  { name: "Python", icon: SiPython },
                  { name: "MongoDB", icon: SiMongodb },
                  { name: "PostgreSQL", icon: SiPostgresql },
                  { name: "PHP", icon: SiPhp },
                  { name: "Laravel", icon: SiLaravel },
                ]
              },
              {
                category: "Mobile & Applications",
                technologies: [
                  { name: "React Native", icon: FaReact },
                  { name: "Expo", icon: SiExpo },
                  { name: "Flutter", icon: SiFlutter },
                  { name: "Swift", icon: SiSwift },
                  { name: "Kotlin", icon: SiKotlin },
                  { name: "Ionic", icon: SiIonic },
                ]
              },
              {
                category: "E-commerce & CMS",
                technologies: [
                  { name: "Shopify", icon: SiShopify },
                  { name: "WordPress", icon: SiWordpress },
                  { name: "WooCommerce", icon: SiWoocommerce },
                  { name: "PrestaShop", icon: SiPrestashop },
                  { name: "Magento", icon: SiMagento },
                  { name: "Stripe", icon: SiStripe },
                ]
              },
              {
                category: "DevOps & Cloud",
                technologies: [
                  { name: "Docker", icon: SiDocker },
                  { name: "Vercel", icon: SiVercel },
                  { name: "AWS", icon: FaAws },
                  { name: "Firebase", icon: SiFirebase },
                  { name: "GitHub", icon: SiGithub },
                  { name: "Render", icon: SiRender },
                ]
              }
            ].map((stack, stackIndex) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stackIndex * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`group/category ${stackIndex > 0 ? 'mt-6' : ''}`}
              >
                {/* Titre de catégorie */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-brand-primary mr-3 sm:mr-4">
                    {stack.category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#01579b]/20 to-transparent"></div>
                </div>

                {/* Grille des technologies */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                  {stack.technologies.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group/tech bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 sm:p-4 md:p-5 hover:bg-white hover:border-#01579b/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                    >
                      {/* Icône */}
                      <div className="w-full aspect-square flex items-center justify-center mb-3">
                        <tech.icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 opacity-80 group-hover/tech:opacity-100 group-hover/tech:text-[#01579b] transition-all duration-300" />
                      </div>

                      {/* Nom */}
                      <h4 className="text-xs font-medium text-brand-primary sm:text-xs md:text-sm group-hover/tech:text-[#01579b] transition-colors duration-300 leading-tight">
                        {tech.name}
                      </h4>

                      {/* Ring d'accent au hover */}
                      <div className="absolute inset-0 rounded-lg ring-1 ring-transparent group-hover/tech:ring-[#01579b]/20 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Nos compétences clés - Section indépendante Startbiz */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Nos compétences clés
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Les expertises qui font notre différence dans chaque projet et nous permettent de livrer des solutions d'exception
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: Code,
                title: "Développement Full-Stack",
                description: "Maîtrise complète du développement web moderne : front-end réactif, back-end scalable, API robustes et bases de données optimisées pour des performances exceptionnelles.",
                color: "bg-gray-100",
                hoverColor: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50",
                details: ["React/Next.js experts", "API REST & GraphQL", "Bases de données NoSQL/SQL"]
              },
              {
                icon: Zap,
                title: "Performance & Innovation",
                description: "Optimisation des performances, Core Web Vitals excellents, architectures serverless et solutions cloud-native pour une expérience utilisateur optimale.",
                color: "bg-gray-100",
                hoverColor: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50",
                details: ["Core Web Vitals <90", "Architecture serverless", "Solutions cloud-native"]
              },
              {
                icon: Target,
                title: "Accompagnement stratégique",
                description: "Conseil technique, audit de performance, stratégie digitale et formation pour pérenniser vos investissements et maximiser votre ROI.",
                color: "bg-gray-100",
                hoverColor: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50",
                details: ["Audit technique complet", "Stratégie digitale", "Formation équipe"]
              }
            ].map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:border-#01579b/20 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Background gradient subtil */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${expertise.bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative">
                    {/* Icône avec fond coloré personnalisé */}
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${expertise.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-7 w-7 text-[#374151] group-hover:text-[#01579b] transition-colors duration-300" />
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-semibold text-brand-primary mb-3 group-hover:text-[#01579b] transition-colors duration-300">
                      {expertise.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#444444] sm:text-base leading-relaxed mb-4">
                      {expertise.description}
                    </p>

                    {/* Points clés si disponibles */}
                    {expertise.details && expertise.details.length > 0 && (
                      <ul className="space-y-2">
                        {expertise.details.slice(0, 3).map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-[#666]">
                            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: expertise.accentColor }} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact & Résultats - Design Startbiz moderne */}
      <section className="py-20 sm:py-24 bg-yellow-50 relative overflow-hidden">
        {/* Background Pattern subtil */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 w-40 h-40 border border-brand-primary rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-#01579b rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-brand-orange rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Notre impact mesuré
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Des résultats concrets qui transforment votre business grâce à notre expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                number: "600+",
                label: "Projets réussis",
                icon: Award
              },
              {
                number: "2014",
                label: "Entreprises accompagnées depuis",
                icon: Calendar
              },
              {
                number: "47M€",
                label: "CA généré",
                icon: TrendingUp
              },
              {
                number: "99.9%",
                label: "Uptime garanti",
                icon: Zap
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Icône minimaliste avec fond */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 mb-4">
                    <IconComponent className="h-6 w-6 text-gray-600" />
                  </div>

                  {/* Nombre */}
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-medium text-[#444444] leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & expertise reconnues - Layout simple et propre */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Certifications & expertise reconnues
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Notre engagement qualité validé par les certifications des leaders technologiques mondiaux
            </p>
          </motion.div>

          {/* Layout simple : Grid responsive 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Google Analytics Certified",
                description: "Maîtrise avancée de l'analyse de données et du tracking comportemental pour optimiser les performances.",
                icon: SiGoogleanalytics,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                title: "Google Ads Certified",
                description: "Expertise en publicité digitale avec optimisation des campagnes et maximisation du ROI.",
                icon: SiGoogleads,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                title: "AWS Solutions Architect",
                description: "Architecture cloud scalable et sécurisée sur la plateforme leader du cloud computing.",
                icon: FaAws,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                title: "MongoDB Certified Developer",
                description: "Maîtrise des bases de données NoSQL et optimisation des performances de données.",
                icon: SiMongodb,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                title: "React Certified Developer",
                description: "Expertise en développement d'interfaces utilisateur modernes et réactives.",
                icon: SiReact,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                title: "Node.js Certified",
                description: "Développement de serveurs performants et d'APIs robustes avec JavaScript moderne.",
                icon: SiNodedotjs,
                color: "bg-gray-100",
                accentColor: "#374151"
              }
            ].map((cert, index) => {
              const IconComponent = cert.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    {/* Design horizontal avec icône à gauche */}
                    <div className="flex items-start gap-4">
                      {/* Icône stylisée */}
                      <div className={`flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-7 w-7 text-[#374151] group-hover:text-[#01579b] transition-colors duration-300" />
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-[#01579b] transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-[#666] leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      {/* Indicateur coloré */}
                      <div className={`flex-shrink-0 h-3 w-3 rounded-full mt-2`} style={{ backgroundColor: cert.accentColor }}></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre méthodologie éprouvée - Section Startbiz */}
      <section className="py-20 sm:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Notre méthodologie éprouvée
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Un processus structuré et éprouvé pour garantir la réussite de chaque projet
            </p>
          </motion.div>

          {/* Layout en grille responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                phase: "01",
                title: "Audit & Stratégie",
                description: "Analyse approfondie de votre business, concurrence et objectifs. Définition d'une stratégie digitale sur mesure.",
                duration: "1 semaine",
                icon: Target,
                color: "bg-gray-100",
                hoverColor: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50",
                deliverables: ["Rapport d'audit complet", "Recommandations stratégiques", "Plan d'action priorisé"]
              },
              {
                phase: "02",
                title: "Conception & Design",
                description: "Création d'expériences utilisateur exceptionnelles. Wireframes, maquettes et prototypes interactifs.",
                duration: "2-3 semaines",
                icon: Sparkles,
                color: "bg-gray-100",
                hoverColor: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50",
                deliverables: ["Maquettes haute-fidélité", "Prototype fonctionnel", "Guide de style"]
              },
              {
                phase: "03",
                title: "Développement",
                description: "Codage avec les meilleures pratiques. Architecture scalable, tests automatisés, sécurité renforcée.",
                duration: "4-8 semaines",
                icon: Code,
                color: "bg-gray-100",
                hoverColor: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50",
                deliverables: ["Code source optimisé", "Tests unitaires/intégration", "Documentation technique"]
              },
              {
                phase: "04",
                title: "Déploiement & Optimisation",
                description: "Mise en production, monitoring et optimisation continue des performances.",
                duration: "1 semaine",
                icon: Rocket,
                color: "bg-gray-100",
                hoverColor: "bg-gray-200",
                accentColor: "#374151",
                bgHover: "bg-gray-100/50",
                deliverables: ["Site/application en ligne", "Formation équipe", "Plan de maintenance"]
              }
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:border-#01579b/20 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Background gradient subtil */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative">
                    {/* Header avec numéro et icône */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${phase.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-7 w-7 text-[#374151] group-hover:text-[#01579b] transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-brand-primary group-hover:text-[#01579b] transition-colors duration-300">{phase.phase}</span>
                          <span className="h-px bg-gradient-to-r from-[#01579b] to-transparent flex-1"></span>
                        </div>
                        <h3 className="text-xl font-semibold text-brand-primary mb-1 group-hover:text-[#01579b] transition-colors duration-300">{phase.title}</h3>
                        <p className="text-sm text-[#01579b] font-medium">{phase.duration}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#444444] sm:text-base leading-relaxed mb-6">{phase.description}</p>

                    {/* Livrables */}
                    <div>
                      <h4 className="text-sm font-semibold text-brand-primary mb-3 group-hover:text-[#01579b] transition-colors duration-300">Livrables clés :</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center gap-3 text-sm text-[#666]">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#01579b] group-hover:bg-[#01579b] transition-colors duration-300 flex-shrink-0"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Questions fréquentes - Section Startbiz */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-base text-[#444444] sm:text-lg max-w-2xl mx-auto">
              Découvrez les réponses aux questions les plus courantes sur nos services et notre approche.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Quels sont vos délais de livraison moyens pour un projet web ?",
                answer: "Nos délais varient selon la complexité du projet. Un site vitrine simple prend généralement 4-6 semaines, tandis qu'une plateforme SaaS complexe peut nécessiter 3-6 mois. Nous établissons toujours un planning réaliste avec des jalons clairs pour maintenir la transparence tout au long du développement.",
                icon: Clock,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                question: "Proposez-vous une maintenance après livraison du projet ?",
                answer: "Absolument ! Nous proposons des contrats de maintenance mensuels ou annuels qui incluent les mises à jour de sécurité, les corrections de bugs, les optimisations de performance et l'accompagnement technique. Notre objectif est d'assurer la pérennité et la performance continue de votre plateforme.",
                icon: Shield,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                question: "Comment assurez-vous la sécurité des applications que vous développez ?",
                answer: "La sécurité est au cœur de notre approche de développement. Nous implémentons les meilleures pratiques OWASP, utilisons des frameworks sécurisés, effectuons des audits de code réguliers et mettons en place des mesures de protection contre les vulnérabilités courantes. Chaque projet fait l'objet d'une revue de sécurité approfondie.",
                icon: Lock,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                question: "Quelles technologies utilisez-vous pour développer des applications modernes ?",
                answer: "Nous maîtrisons l'écosystème JavaScript moderne : React/Next.js pour le front-end, Node.js pour le back-end, et TypeScript pour la sécurité du code. Pour les bases de données, nous utilisons MongoDB, PostgreSQL et Redis. Nos applications sont optimisées avec les dernières technologies cloud (AWS, Vercel) et suivent les meilleures pratiques de performance.",
                icon: Code,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                question: "Comment optimisez-vous le référencement SEO de vos projets ?",
                answer: "Notre approche SEO commence dès la conception : architecture technique optimisée, balises méta stratégiques, contenu structuré, et optimisation des performances. Nous utilisons les dernières techniques SEO techniques (Core Web Vitals, schema.org) et travaillons le contenu pour maximiser votre visibilité sur Google et autres moteurs de recherche.",
                icon: TrendingUp,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                question: "Proposez-vous des solutions e-commerce et marketplace ?",
                answer: "Oui, nous développons des boutiques en ligne performantes avec Shopify, WooCommerce, Magento et PrestaShop. Nos solutions incluent l'intégration de paiements sécurisés (Stripe, PayPal), la gestion des stocks, et l'optimisation des taux de conversion. Nous créons également des marketplaces sur mesure pour connecter vendeurs et acheteurs.",
                icon: ShoppingCart,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                question: "Comment mesurez-vous la réussite de vos projets ?",
                answer: "Nous définissons des KPIs clairs dès le départ : taux de conversion, performance technique (Core Web Vitals), trafic organique, et ROI. Nous fournissons des rapports mensuels avec des métriques actionnables et ajustons notre stratégie pour maximiser vos résultats. Notre objectif : des résultats mesurables et durables.",
                icon: BarChart3,
                color: "bg-gray-100",
                accentColor: "#374151"
              },
              {
                question: "Travaillez-vous avec des startups et PME ?",
                answer: "Absolument ! Nous accompagnons startups et PME dans leur croissance digitale depuis 2014. Notre approche flexible s'adapte à votre budget et vos besoins, avec des solutions scalables qui évoluent avec votre entreprise. De nombreux clients ont commencé avec nous et ont grandi ensemble.",
                icon: Users,
                color: "bg-gray-100",
                accentColor: "#374151"
              }
            ].map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <details className="group [&_summary::-webkit-details-marker]:hidden bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer hover:bg-gray-100/50 transition-colors duration-200">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${faq.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-5 w-5 text-[#374151] group-hover:text-[#01579b] transition-colors duration-300" />
                        </div>
                        <h3 className="text-base font-medium text-brand-primary group-hover:text-[#01579b] transition-colors duration-300 pr-4">
                          {faq.question}
                        </h3>
                      </div>

                      <ChevronDown className="flex-shrink-0 h-5 w-5 text-[#666] group-open:rotate-180 transition-transform duration-300" />
                    </summary>

                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-sm text-[#444444] sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformons votre vision en succès digital - Nouveau design avec image */}
      <section className="overflow-hidden bg-blue-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >

            <h2 className="text-4xl font-bold text-black md:text-5xl leading-tight">
              Transformons votre vision en <span className="text-[#01579b]">succès digital</span> mesurable
            </h2>

            <p className="hidden text-[#444444] md:mt-4 md:block text-sm sm:text-base">
              Depuis 2014, nous accompagnons les entreprises dans leur transformation digitale.
              De l'idée au lancement, nous créons des solutions sur mesure qui génèrent des résultats mesurables.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-4 md:mt-8"
            >
              <Button
                href="/contact"
                variant="primary"
                size="md"
                showArrow
                className="w-full sm:w-auto text-sm sm:text-base min-w-[180px] sm:min-w-[200px] px-4 sm:px-6 py-3 sm:py-4"
              >
                <>Demander un devis - <em>C'est gratuit !</em></>
              </Button>
            </motion.div>
            </motion.div>
          </div>
        </div>

        <img
          alt="Équipe de développeurs travaillant sur des projets digitaux innovants"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>

    </main>
  );
}
