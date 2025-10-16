'use client';

import { motion } from 'framer-motion';
import BadgeWithImage from './BadgeWithImage';
import { Button } from './Button';
import CuoralSocialHero from './CuoralSocialHero';
import Image from 'next/image';
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
export default function IntegrationsSection(
  {
    backgroundLayers = [],
  }: {
    backgroundLayers?: BackgroundLayer[];
  }
) {
  return (
    <section className="py-10  relative overflow-hidden">
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

      <div className="relative z-10">  {/* New wrapper: relative + z-index */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <BadgeWithImage text="Integrations" />

          {/* Header */}
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Integrate with tools of<br />your choice
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cuoral helps businesses engage, support, and<br />
            grow with a unified customer platform.
          </motion.p>

          {/* Explore Button */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button>Explore</Button>
          </motion.div>
          <CuoralSocialHero />
        </div>
      </div>
    </section>
  );
}