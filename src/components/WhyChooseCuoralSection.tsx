'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import BadgeWithImage from './BadgeWithImage';
import ChatInterfaceWhyChooseUs from './ChatInterfaceWhyChooseUs';

export default function WhyChooseCuoralSection() {
  const headerRef = useRef(null);
  const headerControls = useAnimation();
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  const mobileFeaturesRef = useRef(null);
  const mobileFeaturesControls = useAnimation();
  const mobileFeaturesInView = useInView(mobileFeaturesRef, { once: true, margin: '-100px' });

  const leftRef = useRef(null);
  const leftControls = useAnimation();
  const leftInView = useInView(leftRef, { once: true, margin: '-100px' });

  const rightRef = useRef(null);
  const rightControls = useAnimation();
  const rightInView = useInView(rightRef, { once: true, margin: '-100px' });

  const centerRef = useRef(null);
  const centerControls = useAnimation();
  const centerInView = useInView(centerRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    }
  }, [headerInView, headerControls]);

  useEffect(() => {
    if (mobileFeaturesInView) {
      mobileFeaturesControls.start('visible');
    }
  }, [mobileFeaturesInView, mobileFeaturesControls]);

  useEffect(() => {
    if (leftInView) {
      leftControls.start('visible');
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start('visible');
    }
  }, [rightInView, rightControls]);

  useEffect(() => {
    if (centerInView) {
      centerControls.start({ opacity: 1, scale: 1, transition: { duration: 0.8 } });
    }
  }, [centerInView, centerControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headerTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileFeatureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const leftFeatureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i:number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
      },
    }),
  };

  const rightFeatureVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i:number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
      },
    }),
  };

  const leftColumnFeatures = [
    {
      id: 'unified-communication',
      title: 'Unified Communication',
      description: 'All your customer interactions, chat, email, automation, in one intelligent view. No silos, no switching, just clarity.',
      icon: '/images/icons/message-1.jpg'
    },
    {
      id: 'smart-automation',
      title: 'Smart Automation',
      description: 'Let Cuoral handle the repetitive. Intelligent routing, human responses, zero lag in customer care.',
      icon: '/images/icons/setting.png'
    },
    {
      id: 'advance-analytics',
      title: 'Advance Analytics',
      description: 'See what your dashboards miss. Real-time insights that help you act faster and grow smarter.',
      icon: '/images/icons/chart.png'
    }
  ];

  const rightColumnFeatures = [
    {
      id: 'ai-powered-support',
      title: 'AI-Powered Support',
      description: 'Instant, reliable assistance powered by AI that knows when to help and when to escalate.',
      icon: '/images/icons/support.png'
    },
    {
      id: 'proactive-engagement',
      title: 'Proactive Engagement',
      description: 'Detect friction early. Respond with context, not crisis. Stay ahead of every customer moment.',
      icon: '/images/icons/notification.png'
    },
    {
      id: 'customer-intelligence',
      title: 'Customer Intelligence',
      description: 'Understand users beyond the data. Their behavior, emotions, and trust triggers.',
      icon: '/images/icons/brain.png'
    }
  ];

  // Combined features for mobile layout
  const allFeatures = [...leftColumnFeatures, ...rightColumnFeatures];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial="hidden"
            animate={headerControls}
            variants={containerVariants}
          >
            <motion.div variants={headerItemVariants}>
              <BadgeWithImage text="Features"  />
            </motion.div>

            {/* Header */}
            <motion.h2
              variants={headerTitleVariants}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0c2857] mb-4 sm:mb-6 px-4 sm:px-0"
            >
              Why choose Cuoral
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={headerItemVariants}
              className="text-base sm:text-lg text-[#232937] max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
            Growth begins with trust.
            Cuoral unifies visibility, intelligence, and 
            <br className="hidden sm:block" />
              reliability across every customer moment.
            </motion.p>
          </motion.div>
        </div>

        {/* Features Layout */}
        <div className="relative">
          {/* Mobile/Tablet Grid Layout */}
          <motion.div
            ref={mobileFeaturesRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:hidden"
            initial="hidden"
            animate={mobileFeaturesControls}
            variants={containerVariants}
          >
            {allFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                className="bg-white p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                variants={mobileFeatureVariants}
                
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#232937] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop 3-Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4 rounded-3xl">
            {/* Left Column - Features */}
            <motion.div
              ref={leftRef}
              className="flex flex-col justify-center"
              initial="hidden"
              animate={leftControls}
              variants={containerVariants}
            >
              {leftColumnFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  custom={index}
                  variants={leftFeatureVariants}
                  className="bg-white p-4 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#0c2857] mb-3 leading-tight ml-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed ml-2">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Center Column - Chat Interface */}
            <motion.div
              ref={centerRef}
              className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={centerControls}
            >
              <ChatInterfaceWhyChooseUs />
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
              ref={rightRef}
              className="flex flex-col justify-center"
              initial="hidden"
              animate={rightControls}
              variants={containerVariants}
            >
              {rightColumnFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  custom={index}
                  variants={rightFeatureVariants}
                  className="bg-white p-4 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#0c2857] mb-3 leading-tight ml-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed ml-2">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}