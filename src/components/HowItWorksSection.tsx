'use client'

import { motion } from 'framer-motion'
import { Cog6ToothIcon, ChatBubbleLeftRightIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import BadgeWithImage from './BadgeWithImage'

export default function HowItWorksSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Set Up Your Account",
      description: "Create your Cuoral workspace, invite your team, and integrate your favorite tools – all in one place.",
      icon: Cog6ToothIcon,
      bgColor: "bg-blue-100/50",
      iconColor: "text-blue-500"
    },
    {
      step: "Step 2", 
      title: "Engage Your Customers",
      description: "Start real-time conversations via chat, email, or automation – keeping every customer interaction unified.",
      icon: ChatBubbleLeftRightIcon,
      bgColor: "bg-red-100/50",
      iconColor: "text-red-500"
    },
    {
      step: "Step 3",
      title: "Track & Optimize",
      description: "Measure customer satisfaction, monitor performance, and improve engagement with intelligent insights.",
      icon: ChartBarIcon,
      bgColor: "bg-green-100/50", 
      iconColor: "text-green-500"
    }
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
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
              Focus on Growth,
              <br />
              We'll Handle the Rest.
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 max-w-sm mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get started in minutes and connect
              <br />
              seamlessly with your customers.
            </motion.p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`${step.bgColor} rounded-3xl p-8 text-left relative h-[400px] flex flex-col`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            >
              {/* Step Badge */}
         
              <BadgeWithImage text={step.step} className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium mb-16 shadow-sm w-fit" />

              {/* Icon */}
              <div className="flex justify-center mb-16">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
                  <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}