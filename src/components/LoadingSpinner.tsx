'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: number
  color?: string
}

export default function LoadingSpinner({ size = 40, color = 'text-purple-500' }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${color} flex space-x-1`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="rounded-full bg-current"
            style={{ width: size / 4, height: size / 4 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}