'use client'

import { motion } from 'framer-motion'
import ChatInterface from './ChatInterface'
import BadgeWithImage from './BadgeWithImage'

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <BadgeWithImage text="Features"  />
          
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Power your customer growth with{' '}
            <br />
            Cuoral
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover powerful tools that simplify customer communication,
            automate workflows, and deliver real-time insights.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="flex justify-between items-center ">
          {/* Left Content - Features */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Real-time Engagement */}
            <div className="border-l-2 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-time Engagement
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm max-w-sm">
                Connect with your customers instantly and understand their
                journey in real time.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-center">
                  <span className="text-gray-900 mr-2 font-medium">1.</span>
                  Live Chat
                </li>
                <li className="flex items-center">
                  <span className="text-gray-900 mr-2 font-medium">2.</span>
                  Live Visitors Feed
                </li>
                <li className="flex items-center">
                  <span className="text-gray-900 mr-2 font-medium">3.</span>
                  Escalation Channel
                </li>
              </ul>
            </div>

            {/* Intelligent Support & Automation */}
            <div className="border-l-2 border-gray-100 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Intelligent Support & Automation
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
                Automate repetitive tasks and provide smarter, faster support that
                anticipates user needs.
              </p>
            </div>

            {/* Marketing & Growth Tools */}
            <div className="border-l-2 border-gray-100 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Marketing & Growth Tools
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
                Effortlessly onboard, engage, and retain customers with targeted
                communication and smart lead management.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Chat Interface */}
          <motion.div
            className="p-8 flex justify-center bg-blue-50 rounded"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ChatInterface />
          </motion.div>
        </div>
      </div>
    </section>
  )
}