'use client';

import { motion } from 'framer-motion';
import BadgeWithImage from './BadgeWithImage';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-800/20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <svg
              className="w-4 h-4 text-white mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span className="text-white font-medium">Integrations</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Connect Better with
          <br />
          Your Customers
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cuoral helps businesses engage, support, and grow with a unified customer platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Primary Button - Try for Free */}
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Try for Free
          </button>

          {/* Secondary Button - Book a Demo */}
          <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
            Book a Demo
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
    </section>
  );
}