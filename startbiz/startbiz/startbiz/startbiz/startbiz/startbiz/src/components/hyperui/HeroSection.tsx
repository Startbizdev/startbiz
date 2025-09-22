"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Award, Code, Calendar } from "lucide-react";
import Button from "./Button";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  primaryCTA: {
    text: React.ReactNode;
    href: string;
  };
  secondaryCTA?: {
    text: React.ReactNode;
    href: string;
  };
  backgroundPattern?: boolean;
  stats?: Array<{
    number: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundPattern = true,
  stats
}: HeroSectionProps) {
  // Icônes par défaut pour les stats si non fournies
  const defaultIcons = [Code, Calendar, Zap];

  return (
    <section className="relative bg-white overflow-hidden lg:min-h-screen lg:flex lg:items-center">
      {/* Container principal avec responsive padding et centrage vertical */}
      <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:py-24 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-left sm:text-center">
            {/* Sous-titre simple */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl font-medium text-[#444444] mb-4 sm:mb-6 block"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Titre principal - Design épuré et parfaitement centré */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-bold text-[#0f0d0a] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight max-w-4xl mx-auto"
            >
              {title}
            </motion.h1>

            {/* Description - Améliorée avec meilleur line-height */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base text-[#444444] sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            />

            {/* Stats - Design sophistiqué et homogène avec le hero */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 sm:mt-12"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-6 sm:px-0 max-w-2xl mx-auto">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon || defaultIcons[index] || TrendingUp;
                    // Palette de couleurs premium avec variations subtiles

                    return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="group flex flex-col items-center gap-2 sm:gap-3 text-center"
              >
                {/* Icône simple sans fond */}
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#01579b] group-hover:scale-110 transition-transform duration-300" />

                {/* Texte en ligne */}
                <span className="text-sm sm:text-base font-bold text-[#0f0d0a] leading-tight">
                  {stat.number.includes('+') ? stat.number : `+${stat.number}`} {stat.label}
                </span>
              </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* CTAs - Design minimaliste */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-start sm:justify-center gap-4 sm:gap-6"
            >
              <Button
                href={primaryCTA.href}
                variant="primary"
                size="md"
                showArrow
                className="w-full sm:w-auto text-sm sm:text-base min-w-[180px] sm:min-w-[200px] px-4 sm:px-6 py-3 sm:py-4"
              >
                {primaryCTA.text}
              </Button>
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </motion.div>

          </div>
        </div>
      </div>


      {/* Pattern de fond minimaliste */}
      {backgroundPattern && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* Cercles subtils sans couleur */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-brand-cyan rounded-full"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-brand-primary rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-brand-cyan rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-brand-primary rounded-full"></div>
          </div>
        </div>
      )}
    </section>
  );
}
