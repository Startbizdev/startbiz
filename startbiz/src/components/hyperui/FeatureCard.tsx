"use client";

import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  className = ""
}: FeatureCardProps) {
  const CardContent = () => (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-brand-cyan/20 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-[#444444]">{description}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
