"use client";

import { motion } from "framer-motion";
import Button from "./hyperui/Button";

interface ButtonCTAProps {
  text?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function ButtonCTA({
  text = <>Demander un devis - <em>c'est gratuit !</em></>,
  href = "/contact",
  className = "",
}: ButtonCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`flex flex-row items-center ${className}`}
    >
      <Button
        href={href}
        variant="primary"
        size="lg"
        className=""
      >
        {text}
      </Button>
    </motion.div>
  );
}
