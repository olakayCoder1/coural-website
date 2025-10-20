"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BadgeWithImage from "./BadgeWithImage";
import { Button } from "./Button";
import { LinkButton } from "./LinkButton";
import Header from "./Header";

interface BackgroundLayer {
  type: "image" | "gradient" | "color";
  src?: string;
  alt?: string;
  gradient?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  blendMode?: string;
}

interface HeroV2Props {
  backgroundLayers?: BackgroundLayer[];
  useDefaultGradient?: boolean;
  badge?: {
    text: string;
    className?: string;
  };
  title: string;
  subtitle: string;
  primaryButton?: {
    text: string;
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    className?: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    className?: string;
  };
  dashboardImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  };
  showFloatingElements?: boolean;
  className?: string;
}

export default function HeroV2({
  backgroundLayers = [],
  badge,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  dashboardImage,
  className = "",
}: HeroV2Props) {
  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>

      {/* Background Images Layer */}
      <div className="absolute inset-0 w-full h-full">
        {/* Default gradient background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(179deg, rgba(255, 255, 255, 1) 0%, rgba(129, 175, 249, 1) 96%, rgba(35, 76, 144, 1) 100%)",
          }}
        />

        {/* Custom background layers */}
        {backgroundLayers.map((layer, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full ${
              layer.className || ""
            }`}
            style={{
              ...layer.style,
              opacity: layer.opacity || 1,
              mixBlendMode:
                (layer.blendMode as React.CSSProperties["mixBlendMode"]) ||
                "normal",
            }}
          >
            {layer.type === "image" && layer.src && (
              <Image
                src={layer.src}
                alt={layer.alt || `Background layer ${index + 1}`}
                fill
                className="w-full h-full"
                style={{
                  objectFit: layer.style?.objectFit || "cover",
                  objectPosition: layer.style?.objectPosition || "center",
                  ...layer.style,
                }}
                priority={index === 0}
              />
            )}
            {layer.type === "gradient" && (
              <div
                className="w-full h-full"
                style={{ background: layer.gradient }}
              />
            )}
            {layer.type === "color" && (
              <div
                className="w-full h-full"
                style={{ backgroundColor: layer.color }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bubble SVG Background */}
        <div className="absolute inset-0 w-full h-full opacity-60">
          <Image
            src="/images/Bubble.svg.svg"
            alt="Bubble background decoration"
            fill
            className="w-full h-full object-cover object-center"
            style={{ mixBlendMode: "overlay" }}
          />
        </div>

        {/* Animated floating elements - hidden on mobile for performance */}
        <motion.div
          className="hidden sm:block absolute top-32 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-white/40 rounded-full blur-sm shadow-lg"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="hidden sm:block absolute top-1/2 left-1/6 w-6 sm:w-8 h-6 sm:h-8 bg-white/30 rounded-full blur-sm shadow-md"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-1/4 right-1/6 w-4 sm:w-6 h-4 sm:h-6 bg-white/25 rounded-full blur-sm shadow-sm"
          animate={{
            y: [0, -12, 0],
            x: [0, 6, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 sm:pt-20 lg:pt-36">
        <div className="text-center px-4 sm:px-0">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8"
            >
              <BadgeWithImage
                text={badge.text}
                className={
                  badge.className ||
                  "inline-flex items-center px-3 sm:px-4 py-2 bg-white border border-gray-50 rounded-full text-gray-700 text-xs sm:text-sm font-medium shadow-sm"
                }
              />
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#0c2857] mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-[#232937] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />

          {/* CTA Buttons */}
          {(primaryButton || secondaryButton) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {primaryButton && (
                <LinkButton
                  href={primaryButton.href}
                  target={primaryButton.target}
                  className="w-full sm:w-auto"
                >
                  {primaryButton.text}
                </LinkButton>
              )}
              {secondaryButton && (
                <LinkButton
                  href={secondaryButton.href}
                  target={secondaryButton.target}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {secondaryButton.text}
                </LinkButton>
              )}
            </motion.div>
          )}

          {/* Dashboard/Preview Image */}
          {dashboardImage && (
            <motion.div
              className="relative max-w-6xl mx-auto px-3 sm:px-6 lg:px-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="relative">
                {/* Enhanced shadow container for better mobile presentation */}
                <div className="relative rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl overflow-hidden shadow-xl sm:shadow-2xl lg:shadow-3xl">
                  <Image
                    src={dashboardImage.src}
                    alt={dashboardImage.alt}
                    width={dashboardImage.width || 1200}
                    height={dashboardImage.height || 800}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                  {/* Subtle overlay for better mobile contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none sm:hidden" />
                </div>

                {/* Enhanced visual effects for mobile */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl blur-sm opacity-30 sm:opacity-50 -z-10" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
