'use client';

import { motion } from 'framer-motion';
import BadgeWithImage from './BadgeWithImage';
import { Button } from './Button';

export default function IntegrationsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <BadgeWithImage text="Integrations"  />

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

        {/* Integration Icons Layout */}
        <motion.div
          className="relative max-w-5xl mx-auto h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Central Cuoral Logo with blue circle background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-white font-bold">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="text-center text-sm">Cuoral</div>
              </div>
            </div>
          </div>

          {/* Left side icons */}
          {/* Slack icon - far left */}
          <div className="absolute top-20 left-4">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Facebook icon - left middle */}
          <div className="absolute top-32 left-16">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
            </div>
          </div>

          {/* Facebook icon - bottom left */}
          <div className="absolute bottom-32 left-16">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
            </div>
          </div>

          {/* Facebook icon - bottom far left */}
          <div className="absolute bottom-20 left-4">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
            </div>
          </div>

          {/* Facebook icon - left of center */}
          <div className="absolute top-1/2 left-20 transform -translate-y-1/2">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
            </div>
          </div>

          {/* Right side icons */}
          {/* WhatsApp icon - right of center */}
          <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
            </div>
          </div>

          {/* WhatsApp icon - bottom right */}
          <div className="absolute bottom-32 right-16">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
            </div>
          </div>

          {/* WhatsApp icon - bottom far right */}
          <div className="absolute bottom-20 right-4">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
            </div>
          </div>

          {/* Slack icon - top right */}
          <div className="absolute top-20 right-4">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Facebook icon - top right middle */}
          <div className="absolute top-32 right-16">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
            </div>
          </div>

          {/* Far right icons */}
          {/* Facebook icon - far right top */}
          <div className="absolute top-24 -right-4">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
            </div>
          </div>

          {/* Facebook icon - far right bottom */}
          <div className="absolute bottom-24 -right-4">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}