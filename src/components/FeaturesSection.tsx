'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import ChatInterface from './ChatInterface'
import BadgeWithImage from './BadgeWithImage'

export default function FeaturesSection() {
  const headerRef = useRef(null)
  const headerControls = useAnimation()
  const headerInView = useInView(headerRef, { margin: '-100px' })

  const featuresRef = useRef(null)
  const featuresControls = useAnimation()
  const featuresInView = useInView(featuresRef, { margin: '-100px' })

  const chatRef = useRef(null)
  const chatControls = useAnimation()
  const chatInView = useInView(chatRef, { margin: '-100px' })

  useEffect(() => {
    headerControls.start(headerInView ? 'visible' : 'hidden')
  }, [headerInView, headerControls])

  useEffect(() => {
    featuresControls.start(featuresInView ? 'visible' : 'hidden')
  }, [featuresInView, featuresControls])

  useEffect(() => {
    chatControls.start(
      chatInView
        ? { opacity: 1, scale: 1, transition: { duration: 0.8 } }
        : { opacity: 0, scale: 0.95, transition: { duration: 0.8 } }
    )
  }, [chatInView, chatControls])

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i:number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
      },
    }),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.div
            initial="hidden"
            animate={headerControls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <BadgeWithImage 
                text="Features"  
              />
            </motion.div>
            
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0c2857] mb-6 leading-tight"
            >
              Power Your Customer Intelligence with{' '}
              <br />
              Cuoral
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#232937] max-w-2xl mx-auto leading-relaxed"
            >
              Your Trust Stack starts here, with real-time visibility, effortless intelligence, 
              and experience customers can trust.

            </motion.p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="flex justify-between items-center ">
          {/* Left Content - Features */}
          <motion.div
            ref={featuresRef}
            className="lg:col-span-3 space-y-8"
            initial="hidden"
            animate={featuresControls}
            variants={containerVariants}
          >
            {/* See Every Customer Moment */}
            <motion.div
              custom={0}
              variants={featureVariants}
              className="border-l-2 border-blue-400 pl-6"
            >
              <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                See Every Customer Moment
              </h3>
              <p className="text-[#232937] mb-4 leading-relaxed text-sm max-w-sm">
                Spot friction as it happens. Watch live sessions, act instantly and keep every interaction seamless.
              </p>
              <ul className="space-y-1 text-[#232937] text-sm">
                <li className="flex items-center text-[#0c2857]">
                  <span className="text-[#0c2857] mr-2 font-medium">1.</span>
                  Live Session Replays
                </li>
                <li className="flex items-center text-[#0c2857]">
                  <span className="text-[#0c2857] mr-2 font-medium">2.</span>
                  Real-Time Journey Insights
                </li>
                <li className="flex items-center text-[#0c2857]">
                  <span className="text-gray-900 mr-2 font-medium">3.</span>
                  Smart Escalation Hub
                </li>
              </ul>
            </motion.div>

            {/* Support That Thinks Ahead */}
            <motion.div
              custom={1}
              variants={featureVariants}
              className="border-l-2 border-gray-100 pl-6"
            >
              <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                Support That Thinks Ahead
              </h3>
              <p className="text-[#232937] leading-relaxed text-sm max-w-sm">
                Predict issues, automate fixes, and turn every response into renewed trust
              </p>
            </motion.div>

            {/* Turn Insight into Retention */}
            <motion.div
              custom={2}
              variants={featureVariants}
              className="border-l-2 border-gray-100 pl-6"
            >
              <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                Turn Insight into Retention
              </h3>
              <p className="text-[#232937] leading-relaxed text-sm max-w-sm">
                Understand what drives loyalty and use data to build lasting customer confidence.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Chat Interface */}
          <motion.div
            ref={chatRef}
            className="p-8 px-12 flex justify-center bg-blue-50 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={chatControls}
          >
            <ChatInterface />
          </motion.div>
        </div>
      </div>
    </section>
  )
}