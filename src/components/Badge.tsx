'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface BadgeProps {
  text: string
  className?: string
  iconSrc?: string
  showIcon?: boolean
  animationDelay?: number
}

export default function Badge({ 
  text, 
  className = "", 
  iconSrc = "/images/Group.svg",
  showIcon = true,
  animationDelay = 0
}: BadgeProps) {
  return (
    <motion.div
      className={`inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
    >
      {showIcon && (
        <Image
          src={iconSrc}
          alt="Badge icon"
          width={8}
          height={8}
          className="mr-2"
        />
      )}
      {text}
    </motion.div>
  )
}