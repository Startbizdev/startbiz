"use client";

import Button from "./Button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  background?: 'gradient' | 'blue' | 'white';
  className?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
  className = ""
}: CTASectionProps) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-brand-primary via-brand-primary to-brand-cyan',
    blue: 'bg-brand-primary',
    white: 'bg-white'
  };

  const textColor = background === 'white' ? 'text-gray-900' : 'text-white';
  const subtitleColor = background === 'white' ? 'text-[#444444]' : 'text-white/90';

  return (
    <section className={`${backgroundClasses[background]} py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold ${textColor} sm:text-4xl`}>
            {title}
          </h2>
          <p className={`mt-4 text-lg ${subtitleColor}`}>
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href={primaryCTA.href} variant="primary" size="lg" showArrow>
              {primaryCTA.text}
            </Button>

            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="outline" size="lg">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
