'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface BadgeWithImageProps {
  text: string
  className?: string
  baseClassName?: string
  extendBaseClass?: boolean // If true, extends base classes; if false, completely overrides
  imageSrc?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  imageClassName?: string
  animationDelay?: number
  animationDuration?: number
}

export default function BadgeWithImage({ 
  text,
  className,
  baseClassName = "inline-flex items-center px-4 py-2 bg-white border border-white rounded-full text-blue-700 text-sm font-medium mb-8 shadow-sm",
  extendBaseClass = false,
  imageSrc = "/images/badge.svg",
  imageAlt = "Badge icon",
  imageWidth = 24,
  imageHeight = 24,
  imageClassName = "h-4 w-4 w-auto mr-2",
  animationDelay = 0,
  animationDuration = 0.6
}: BadgeWithImageProps) {
  // Determine final className based on the approach:
  // 1. If no className provided, use baseClassName
  // 2. If className provided and extendBaseClass is true, combine them
  // 3. If className provided and extendBaseClass is false, override completely
  const finalClassName = !className 
    ? baseClassName 
    : extendBaseClass 
      ? `${baseClassName} ${className}` 
      : className;

  return (
    <motion.div
      className={finalClassName}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: animationDuration, delay: animationDelay }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className={imageClassName}
      />
      {text}
    </motion.div>
  )
}