'use client'

import { motion } from 'framer-motion'

export default function BackgroundElements() {
  return (
    <>
      {/* Background Gradient - exact Figma match */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(179deg, rgba(255, 255, 255, 1) 0%, rgba(129, 175, 249, 1) 96%, rgba(35, 76, 144, 1) 100%)'
        }}
      />
      
      {/* Decorative Vector Elements - exact Figma positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Vector - exact Figma specs */}
        <div 
          className="absolute opacity-40"
          style={{
            left: '0px',
            top: '200px',
            width: '815px',
            height: '739px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 38%, rgba(255, 255, 255, 0) 76%)',
            borderRadius: '50%',
            filter: 'blur(100px)'
          }}
        />
        
        {/* Right Vector - exact Figma specs */}
        <div 
          className="absolute opacity-40"
          style={{
            right: '0px',
            top: '200px',
            width: '815px',
            height: '739px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 38%, rgba(255, 255, 255, 0) 76%)',
            borderRadius: '50%',
            filter: 'blur(100px)'
          }}
        />
        
        {/* White bubble elements - matching Figma */}
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
    </>
  )
}