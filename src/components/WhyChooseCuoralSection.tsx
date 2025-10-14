'use client';

import { motion } from 'framer-motion';
import Badge from './Badge';
import ChatInterface from './ChatInterface';
import BadgeWithImage from './BadgeWithImage';

export default function WhyChooseCuoralSection() {
  const features = [
    {
      id: 'unified-communication',
      title: 'Unified Communication',
      description: 'Manage chat, email, and automation in one central platform - no more switching between tools.',
      icon: '💬',
      position: 'top-left'
    },
    {
      id: 'ai-powered-support',
      title: 'AI-Powered Support',
      description: 'Leverage intelligent bots that assist customers instantly and escalate only when needed.',
      icon: '🤖',
      position: 'top-right'
    },
    {
      id: 'smart-automation',
      title: 'Smart Automation',
      description: 'Automate repetitive workflows and let Cuoral handle responses, routing and ticketing effortlessly.',
      icon: '⚙️',
      position: 'middle-left'
    },
    {
      id: 'proactive-engagement',
      title: 'Proactive Engagement',
      description: 'Reach out before issues arise with real-time monitoring and proactive notifications.',
      icon: '🔔',
      position: 'middle-right'
    },
    {
      id: 'advance-analytics',
      title: 'Advance Analytics',
      description: 'Track Performance, customer satisfaction, and engagement metrics with real-time insights.',
      icon: '📊',
      position: 'bottom-left'
    },
    {
      id: 'customer-intelligence',
      title: 'Customer Intelligence',
      description: 'Gain deeper understanding of customer behavior to create personalized experiences.',
      icon: '🧠',
      position: 'bottom-right'
    }
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'lg:absolute lg:top-0 lg:left-0 lg:w-80';
      case 'top-right':
        return 'lg:absolute lg:top-0 lg:right-0 lg:w-80';
      case 'middle-left':
        return 'lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:w-80';
      case 'middle-right':
        return 'lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:w-80';
      case 'bottom-left':
        return 'lg:absolute lg:bottom-0 lg:left-0 lg:w-80';
      case 'bottom-right':
        return 'lg:absolute lg:bottom-0 lg:right-0 lg:w-80';
      default:
        return '';
    }
  };

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
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
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

          {/* Desktop Layout with Central Chat */}
          <div className="hidden lg:block relative h-[600px] items-center text-center bg-blue-50">
            {/* Central Chat Interface */}
            <ChatInterface />

            {/* Feature Cards positioned around the chat */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`${getPositionClasses(feature.position)} bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
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
        </div>
      </div>
    </section>
  );
}