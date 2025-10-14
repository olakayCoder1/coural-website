'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface BadgeWithImageProps {
  text: string
  className?: string
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
  className = "inline-flex items-center px-4 py-2 bg-white border border-white rounded-full text-blue-700 text-sm font-medium mb-8 shadow-sm",
  imageSrc = "/images/badge.svg",
  imageAlt = "Badge icon",
  imageWidth = 24,
  imageHeight = 24,
  imageClassName = "h-4 w-4 w-auto mr-2",
  animationDelay = 0,
  animationDuration = 0.6
}: BadgeWithImageProps) {
  return (
    <motion.div
      className={className}
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