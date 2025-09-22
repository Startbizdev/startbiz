"use client";

import { motion } from "framer-motion";

interface Stat {
  number: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  title: string;
  subtitle?: string;
  stats: Stat[];
  background?: 'white' | 'gray' | 'blue';
  className?: string;
}

export default function StatsSection({
  title,
  subtitle,
  stats,
  background = 'white',
  className = ""
}: StatsSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-brand-primary'
  };

  const textColor = background === 'blue' ? 'text-white' : 'text-gray-900';
  const subtitleColor = background === 'blue' ? 'text-white/90' : 'text-[#444444]';
  const statNumberColor = background === 'blue' ? 'text-brand-cyan' : 'text-brand-cyan';
  const statLabelColor = background === 'blue' ? 'text-white' : 'text-[#0f0d0a]';
  const statDescColor = background === 'blue' ? 'text-white/70' : 'text-[#444444]';

  return (
    <section className={`${backgroundClasses[background]} py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center">
            {title && (
              <h2 className={`text-3xl font-bold tracking-tight ${textColor} sm:text-4xl`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-lg ${subtitleColor}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="mt-16">
          <div className="flex items-center justify-center gap-12 px-4 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 min-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
              >
                {/* Icône à gauche */}
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  {/* Espace pour icône si nécessaire */}
                </div>

                {/* Texte à droite */}
                <div className="flex flex-col">
                  <div className={`text-3xl font-bold ${statNumberColor}`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm font-medium ${statLabelColor} uppercase tracking-wide`}>
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className={`text-xs ${statDescColor} leading-tight mt-1`}>
                      {stat.description}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
