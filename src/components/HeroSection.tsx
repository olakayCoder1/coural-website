'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import BadgeWithImage from './BadgeWithImage'

export default function HeroSection() {
  return (
    <section className="relative pt-20 px-6 lg:px-8 overflow-hidden">
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
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <BadgeWithImage
           text="Empower your Business with AI-Powered Insights" 
           className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium mb-12 shadow-sm"
           />

          {/* Main Headline */}
          <motion.h1
            className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-blue-900 mb-8 leading-tight max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Connect Better with{' '}
            <br />
            Your Customers
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Curoal helps businesses engage, support, and{' '}
            <br />
            grow with a unified customer platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Try for Free
            </motion.button>
            <motion.button
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 shadow-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Demo
            </motion.button>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative">
               <Image
                 src="/images/dashboard.svg"
                 alt="Curoal Dashboard"
                 width={1200}
                 height={800}
                 className="w-full h-auto rounded-t-2xl shadow-2xl"
                 priority
               />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}