'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import BadgeWithImage from './BadgeWithImage'
import Image from 'next/image'

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  })

  const steps = [
    {
      step: "Step 1",
      title: "Create Your Workspace",
      description: "Set up your Cuoral dashboard and connect your existing platforms & tools, from website to mobile app to CRM and start capturing the full customer journey in one streamlined view.",
      icon: "/images/icons/how-it-works/settings.png",
      // use background gradient
      bgColor: "bg-gradient-to-r from-blue-100/50 to-blue-200/50",
      iconColor: "text-blue-500"
    },
    {
      step: "Step 2", 
      title: "See What Your Users Experience",
      description: "Replay user sessions, visualize friction in real time, and detect silent issues before they become visible complaints. Every click, delay and interaction becomes actionable insight.",
      icon: "/images/icons/how-it-works/chat.png",
      // use background gradient
      bgColor: "bg-gradient-to-r from-red-100/50 to-red-200/50",
      iconColor: "text-red-500"
    },
    {
      step: "Step 3",
      title: "Act, Learn and Iterate",
      description: "Turn intelligence into growth. Resolve issues faster, automate recovery and measure the impact of every fix with data that strengthens trust and long-term retention.",
      icon: "/images/icons/how-it-works/growth.png",
      // use background gradient
      bgColor: "bg-gradient-to-r from-green-100/50 to-green-200/50",
      iconColor: "text-green-500"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-white max-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-20">
          <BadgeWithImage text="How it Works" />

          <div className="flex justify-between items-start">
            <motion.h2
              className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Customer Intelligence 
              <br />
              Journey
            </motion.h2>

            <motion.p
              className="text-lg  text-[#232937] max-w-sm mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From detection to resolution, Cuoral keeps every user interaction 
              reliable, transparent and trusted
            </motion.p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`${step.bgColor} rounded-3xl p-8 text-left relative h-[450px] flex flex-col overflow-hidden`}
              initial={{ 
                opacity: 0,
                scale: 0.8,
                rotateY: -15,
                z: -index * 20,
                x: index * 30,
                y: index * 10
              }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.8,
                rotateY: isInView ? 0 : -15,
                z: isInView ? 0 : -index * 20,
                x: isInView ? 0 : index * 30,
                y: isInView ? 0 : index * 10
              }}
              transition={{ 
                duration: 0.8, 
                delay: isInView ? 0.1 + index * 0.3 : index * 0.1,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Step Badge */}
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : -30,
                  scale: isInView ? 1 : 0.8
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: isInView ? 0.8 + index * 0.3 : 0,
                  type: "spring",
                  stiffness: 150
                }}
              >
                <BadgeWithImage text={step.step} className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium mb-16 shadow-sm w-fit" />
              </motion.div>

              {/* Icon */}
              <motion.div 
                className="flex justify-center mb-16"
                initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  scale: isInView ? 1 : 0,
                  rotateZ: isInView ? 0 : -180
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: isInView ? 1.1 + index * 0.3 : 0,
                  type: "spring",
                  stiffness: 120,
                  damping: 12
                }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center ">
                  {/* <step.icon className={`w-10 h-10 ${step.iconColor}`} /> */}
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                    className='w-8 h-8'
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="mt-auto text-center"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 30,
                  scale: isInView ? 1 : 0.9
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: isInView ? 1.4 + index * 0.3 : 0,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#232937] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}