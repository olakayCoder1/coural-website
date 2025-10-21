"use client";

import { motion } from "framer-motion";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

export function LinkButton({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
}: LinkButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base";
  
  const variantClasses = {
    primary: "bg-[#4F7EFF] text-white hover:bg-[#3D6BFF] focus:ring-[#4F7EFF] shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#232937] border-2 border-[#E5E7EB] hover:border-[#E5E7EB] hover:text-[#4F7EFF] focus:outline-none shadow-md hover:shadow-lg"
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}