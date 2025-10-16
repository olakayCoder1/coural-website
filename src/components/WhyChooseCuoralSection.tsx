'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BadgeWithImage from './BadgeWithImage';
import ChatInterfaceWhyChooseUs from './ChatInterfaceWhyChooseUs';

export default function WhyChooseCuoralSection() {
  const leftColumnFeatures = [
    {
      id: 'unified-communication',
      title: 'Unified Communication',
      description: 'Manage chat, email, and automation in one central platform - no more switching between tools.',
      icon: '/images/icons/message-1.jpg'
    },
    {
      id: 'smart-automation',
      title: 'Smart Automation',
      description: 'Automate repetitive workflows and let Cuoral handle responses, routing and ticketing effortlessly.',
      icon: '/images/icons/setting.png'
    },
    {
      id: 'advance-analytics',
      title: 'Advance Analytics',
      description: 'Track Performance, customer satisfaction, and engagement metrics with real-time insights.',
      icon: '/images/icons/chart.png'
    }
  ];

  const rightColumnFeatures = [
    {
      id: 'ai-powered-support',
      title: 'AI-Powered Support',
      description: 'Leverage intelligent bots that assist customers instantly and escalate only when needed.',
      icon: '/images/icons/support.png'
    },
    {
      id: 'proactive-engagement',
      title: 'Proactive Engagement',
      description: 'Reach out before issues arise with real-time monitoring and proactive notifications.',
      icon: '/images/icons/notification.png'
    },
    {
      id: 'customer-intelligence',
      title: 'Customer Intelligence',
      description: 'Gain deeper understanding of customer behavior to create personalized experiences.',
      icon: '/images/icons/brain.png'
    }
  ];

  // Combined features for mobile layout
  const allFeatures = [...leftColumnFeatures, ...rightColumnFeatures];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <BadgeWithImage text="Features"  />
          

          {/* Header */}
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why choose Cuoral
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Designed for speed, built for scale - Cuoral helps your business<br />
            grow through smarter customer relationships.
          </motion.p>
        </div>

        {/* Features Layout */}
        <div className="relative">
          {/* Mobile/Tablet Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop 3-Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4  rounded-3xl ">
            {/* Left Column - Features */}
            <div className="flex flex-col justify-center ">
              {leftColumnFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="bg-white p-4 transition-all duration-300 "
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 ">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Center Column - Chat Interface */}
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <ChatInterfaceWhyChooseUs />
            </div>

            {/* Right Column - Features */}
            <div className="flex flex-col justify-center ">
              {rightColumnFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="bg-white p-4   transition-all duration-300  "
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 ">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}