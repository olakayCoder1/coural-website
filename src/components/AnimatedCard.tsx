'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        bg-white/10 backdrop-blur-md border border-white/20 
        rounded-2xl p-6 shadow-xl hover:shadow-2xl 
        transition-shadow duration-300 cursor-pointer
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}