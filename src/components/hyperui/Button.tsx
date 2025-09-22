"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = "",
  showArrow = false,
  disabled = false,
  type = 'button',
  onClick,
  fullWidth = false,
  ...rest
}: ButtonProps) {

  const baseClasses = "inline-flex items-center justify-center rounded-lg border font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed force-syne";

  const variantClasses = {
    primary: "border-[#01579b] bg-[#01579b] text-white hover:bg-[#01579b]/90 hover:border-[#01579b]/90 focus:ring-[#01579b] hover:shadow-lg hover:-translate-y-0.5",
    secondary: "border-gray-200 bg-white text-[#444444] hover:bg-gray-50 hover:text-[#0f0d0a] focus:ring-gray-500 hover:shadow-md",
    outline: "border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary hover:shadow-md",
    ghost: "border-transparent bg-transparent text-[#444444] hover:bg-gray-100 hover:text-[#0f0d0a] focus:ring-gray-500"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-3",
    lg: "px-8 py-4 text-lg gap-4"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
}
