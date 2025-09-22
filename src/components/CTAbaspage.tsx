"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/hyperui/Button";

interface CTAbaspageProps {
  variant?: "photo-droite" | "photo-gauche" | "hiérarchie" | "centré" | "minimal" | "stats";
  title: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href?: string;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
  };
  image?: string;
  backgroundColor?: string;
  className?: string;
  stats?: Array<{
    number: string;
    label: string;
    icon?: React.ComponentType<any>;
  }>;
}

export default function CTAbaspage({
  variant = "photo-droite",
  title,
  description,
  primaryCTA = { text: "Demander un devis - c'est gratuit !", href: "/contact" },
  secondaryCTA,
  image = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  backgroundColor = "bg-blue-50",
  className = "",
}: CTAbaspageProps) {
  const renderContent = () => {
    switch (variant) {
      case "photo-gauche":
        return (
          <section className={`overflow-hidden ${backgroundColor} sm:grid sm:grid-cols-2 ${className}`}>
            <div className="relative">
              <Image
                alt="Équipe de développeurs travaillant sur des projets digitaux innovants"
                src={image}
                className="h-56 w-full object-cover sm:h-full"
                width={800}
                height={600}
              />
            </div>
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold text-black md:text-5xl leading-tight">
                    {title}
                  </h2>

                  {description && (
                    <p className="hidden text-[#444444] md:mt-4 md:block text-sm sm:text-base">
                      {description}
                    </p>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-4 md:mt-8"
                  >
                    <Button
                      href={primaryCTA.href || "/contact"}
                      variant="primary"
                      size="md"
                      showArrow
                      className="w-full sm:w-auto text-sm sm:text-base min-w-[180px] sm:min-w-[200px] px-4 sm:px-6 py-3 sm:py-4"
                    >
                      {primaryCTA.text}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );

      case "hiérarchie":
        return (
          <section className={`${backgroundColor} py-24 sm:py-32 relative overflow-hidden ${className}`}>
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute top-20 left-10 w-32 h-32 border border-[#01579b] rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#01579b] rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-[#01579b] rounded-full"></div>
            </div>

            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#01579b]/10 text-[#01579b] rounded-full text-sm font-medium">
                      <div className="w-2 h-2 bg-[#01579b] rounded-full"></div>
                      Expertise reconnue
                    </div>

                    <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl leading-tight">
                      {title}
                    </h2>

                    {description && (
                      <p className="text-lg text-[#444444] leading-relaxed">
                        {description}
                      </p>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Button
                        href={primaryCTA.href || "/contact"}
                        variant="primary"
                        size="lg"
                        showArrow
                        className="min-w-[220px] px-6 py-4 text-lg shadow-lg hover:shadow-xl"
                      >
                        {primaryCTA.text}
                      </Button>

                      {secondaryCTA && (
                        <Button
                          href={secondaryCTA.href || "/portfolio"}
                          variant="secondary"
                          size="lg"
                          className="min-w-[220px] px-6 py-4 text-lg"
                        >
                          {secondaryCTA.text}
                        </Button>
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-[#01579b] mb-2">600+</div>
                      <div className="text-sm text-gray-600">Projets réussis</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-4">
                      <div className="text-2xl font-bold text-[#01579b] mb-2">4.9/5</div>
                      <div className="text-sm text-gray-600">Satisfaction client</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 -mt-4">
                      <div className="text-2xl font-bold text-[#01579b] mb-2">47M€</div>
                      <div className="text-sm text-gray-600">CA généré</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-[#01579b] mb-2">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime garanti</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );

      case "centré":
        return (
          <section className={`relative overflow-hidden ${className}`}>
            {/* Fond dégradé dynamique */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#01579b]/5 via-white to-[#01579b]/10"></div>

            {/* Éléments décoratifs flottants */}
            <div className="absolute inset-0 opacity-[0.05]">
              <div className="absolute top-16 left-16 w-20 h-20 border border-[#01579b] rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-24 w-16 h-16 border border-[#01579b] rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-[#01579b] rounded-full animate-pulse delay-2000"></div>
              <div className="absolute bottom-32 right-16 w-24 h-24 border border-[#01579b] rounded-full animate-pulse delay-3000"></div>
            </div>

            <div className="relative py-20 sm:py-32">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20"
                >
                  {/* Badge décoratif */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#01579b]/10 text-[#01579b] rounded-full text-sm font-medium mb-6"
                  >
                    <div className="w-2 h-2 bg-[#01579b] rounded-full animate-pulse"></div>
                    Solution professionnelle
                  </motion.div>

                  <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl leading-tight mb-6">
                    {title}
                  </h2>

                  {description && (
                    <p className="text-base text-[#444444] sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                      {description}
                    </p>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Button
                      href={primaryCTA.href || "/contact"}
                      variant="primary"
                      size="lg"
                      showArrow
                      className="min-w-[220px] px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      {primaryCTA.text}
                    </Button>

                    {secondaryCTA && (
                      <Button
                        href={secondaryCTA.href || "/portfolio"}
                        variant="secondary"
                        size="lg"
                        className="min-w-[220px] px-8 py-4 text-lg hover:bg-white hover:text-[#01579b] hover:border-[#01579b] transition-all duration-300"
                      >
                        {secondaryCTA.text}
                      </Button>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );

      case "minimal":
        return (
          <section className={`${backgroundColor} py-16 sm:py-20 ${className}`}>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl leading-tight mb-4">
                  {title}
                </h2>

                {description && (
                  <p className="text-sm text-[#666666] sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                    {description}
                  </p>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Button
                    href={primaryCTA.href || "/contact"}
                    variant="primary"
                    size="md"
                    showArrow
                    className="min-w-[200px] px-6 py-3"
                  >
                    {primaryCTA.text}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );

      case "stats":
        return (
          <section className={`${backgroundColor} py-20 sm:py-24 ${className}`}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl leading-tight mb-6">
                    {title}
                  </h2>

                  {description && (
                    <p className="text-base text-[#444444] sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                      {description}
                    </p>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                  >
                    <Button
                      href={primaryCTA.href || "/contact"}
                      variant="primary"
                      size="md"
                      showArrow
                      className="min-w-[200px] px-6 py-3"
                    >
                      {primaryCTA.text}
                    </Button>

                    {secondaryCTA && (
                      <Button
                        href={secondaryCTA.href || "/portfolio"}
                        variant="secondary"
                        size="md"
                        className="min-w-[200px] px-6 py-3"
                      >
                        {secondaryCTA.text}
                      </Button>
                    )}
                  </motion.div>
                </motion.div>
              </div>

              {stats && stats.length > 0 && (
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        className="text-center p-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        {IconComponent && (
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#01579b]/10 mb-3">
                            <IconComponent className="h-5 w-5 text-[#01579b]" />
                          </div>
                        )}

                        <div className="text-2xl md:text-3xl font-bold text-black mb-1">
                          {stat.number}
                        </div>

                        <div className="text-xs font-medium text-[#444444] leading-tight">
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        );

      default: // "photo-droite"
        return (
          <section className={`overflow-hidden ${backgroundColor} sm:grid sm:grid-cols-2 ${className}`}>
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold text-black md:text-5xl leading-tight">
                    {title}
                  </h2>

                  {description && (
                    <p className="hidden text-[#444444] md:mt-4 md:block text-sm sm:text-base">
                      {description}
                    </p>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-4 md:mt-8"
                  >
                    <Button
                      href={primaryCTA.href || "/contact"}
                      variant="primary"
                      size="md"
                      showArrow
                      className="w-full sm:w-auto text-sm sm:text-base min-w-[180px] sm:min-w-[200px] px-4 sm:px-6 py-3 sm:py-4"
                    >
                      {primaryCTA.text}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="relative">
              <Image
                alt="Équipe de développeurs travaillant sur des projets digitaux innovants"
                src={image}
                className="h-56 w-full object-cover sm:h-full"
                width={800}
                height={600}
              />
            </div>
          </section>
        );
    }
  };

  return renderContent();
}
