'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BadgeWithImage from './BadgeWithImage';
import { Button } from './Button';

interface BackgroundLayer {
  type: 'image' | 'gradient' | 'color';
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
    onClick?: () => void;
    className?: string;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
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

export default function HeroCTA({
  backgroundLayers = [],
  badge,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  dashboardImage,
  className = ''
}: HeroV2Props) {
  return (
    <section className={`relative min-h-screen flex flex-col justify-center items-center px-6 lg:px-8 overflow-hidden ${className}`}>
      {/* Background Images Layer */}
      <div className="absolute inset-0 w-full h-full">
        {/* Default gradient background */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(179deg, rgba(255, 255, 255, 1) 0%, rgba(129, 175, 249, 1) 96%, rgba(35, 76, 144, 1) 100%)'
          }}
        />
        
        {/* Custom background layers */}
        {backgroundLayers.map((layer, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full ${layer.className || ''}`}
            style={{
              ...layer.style,
              opacity: layer.opacity || 1,
              mixBlendMode: (layer.blendMode as React.CSSProperties['mixBlendMode']) || 'normal'
            }}
          >
            {layer.type === 'image' && layer.src && (
              <Image
                src={layer.src}
                alt={layer.alt || `Background layer ${index + 1}`}
                fill
                className="w-full h-full"
                style={{
                  objectFit: layer.style?.objectFit || 'cover',
                  objectPosition: layer.style?.objectPosition || 'center',
                  ...layer.style
                }}
                priority={index === 0}
              />
            )}
            {layer.type === 'gradient' && (
              <div 
                className="w-full h-full"
                style={{ background: layer.gradient }}
              />
            )}
            {layer.type === 'color' && (
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
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-32 right-1/4 w-12 h-12 bg-white/40 rounded-full blur-sm shadow-lg"
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
          className="absolute top-1/2 left-1/6 w-8 h-8 bg-white/30 rounded-full blur-sm shadow-md"
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
          className="absolute bottom-1/4 right-1/6 w-6 h-6 bg-white/25 rounded-full blur-sm shadow-sm"
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
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <BadgeWithImage
                text={badge.text}
                className={badge.className || "inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium shadow-sm"}
              />
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-6 leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-lg lg:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />

          {/* CTA Buttons */}
          {(primaryButton || secondaryButton) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {primaryButton && (
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button onClick={primaryButton.onClick}>
                    {primaryButton.text}
                  </Button>
                </motion.div>
              )}
              {secondaryButton && (
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button onClick={secondaryButton.onClick} variant="secondary">
                    {secondaryButton.text}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}