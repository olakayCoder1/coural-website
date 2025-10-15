'use client';

import { motion } from 'framer-motion';
import BadgeWithImage from './BadgeWithImage';

export default function PricingSection() {
  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: 300,
      description: 'Perfect for small businesses or startups, our Starter plan gives you the essential tools.',
      isPopular: false,
      features: [
        'Live Chat',
        'Reporting & Analysis',
        'Unlimited Integrations',
        'Unlimited Integrations',
        'Unlimited Integrations'
      ]
    },
    {
      name: 'Pro Plan',
      price: 300,
      description: 'Perfect for small businesses or startups, our Starter plan gives you the essential tools.',
      isPopular: true,
      features: [
        'Live Chat',
        'Reporting & Analysis',
        'Unlimited Integrations',
        'Unlimited Integrations',
        'Unlimited Integrations'
      ]
    },
    {
      name: 'Basic Plan',
      price: 300,
      description: 'Perfect for small businesses or startups, our Starter plan gives you the essential tools.',
      isPopular: false,
      features: [
        'Live Chat',
        'Reporting & Analysis',
        'Unlimited Integrations',
        'Unlimited Integrations',
        'Unlimited Integrations'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <BadgeWithImage text="Pricing" />
        </div>

        {/* Header */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transparent pricing
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose a plan that&apos;s fits your business needs and budget. No hidden fees, no surprises - just straightforward pricing.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-8  ${
                plan.isPopular 
                  ? 'bg-blue-50 ' 
                  : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >


              {/* Plan Name */}
              <div className=' flex items-center justify-between'>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {plan.name} 
                
                </h3>
                {plan.isPopular && (
                  <BadgeWithImage 
                  text="Most Popular" 
                  className = "inline-flex items-center px-4 py-2 bg-white border border-white rounded-full text-gray-700 text-sm font-medium mb-8 shadow-sm"
                  />
                )}
              </div>
              

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600 ml-2">/ month</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Get Started Button */}
              <button
                className={`w-full py-3 px-6 rounded-full font-medium transition-colors duration-200 mb-8 ${
                  plan.isPopular
                    ? 'bg-gray-800 hover:bg-gray-900 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Get Started
              </button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}