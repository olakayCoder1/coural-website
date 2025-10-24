import { Check } from "lucide-react"
import BadgeWithImage from "./BadgeWithImage";
import { CircleCheck } from "lucide-react";

import { motion } from "framer-motion";
interface PricingPlan {
  name: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
  buttonVariant?: "default" | "outline"
}

const plans: PricingPlan[] = [
  {
    name: "Pay-as-you-go",
    price: 280,
    description: "Perfect for small businesses or startups, our Starter Plan gives you the essential tools.",
    features: [
      "All Starter Plan features",
      "Advanced analytics with AI",
      "Enhanced workflow automation",
      "Multi-channel engagement tools",
      "Available for 1 person",
    ],
  },
  {
    name: "Core Subscription",
    price: 560,
    description: "Ideal for growing teams, our Pro Plan offers expanded capabilities and smarter tools.",
    features: [
      "All Pro Plan features",
      "Custom reporting and insights",
      "Team collaboration tools",
      "Priority support",
      "Available for up to 10 users",
    ],
    isPopular: true,
    buttonVariant: "default",
  },
  {
    name: "Professional",
    price: 480,
    description: "Ideal for growing teams, our Professional Plan offers expanded capabilities and smarter tools.",
    features: [
      "All Professional Plan features",
      "Custom reporting and insights",
      "Team collaboration tools",
      "Priority support",
      "Available for up to 5 users",
    ],
  },
  {
    name: "Enterprise & Custom",
    price: 900,
    description: "Built for medium organizations, the Business Plan delivers robust performance and advanced features.",
    features: [
      "All Business Plan features",
      "Dedicated account manager",
      "Advanced security and compliance",
      "Scalable integrations and APIs",
      "Available for up to 50 users",
    ],
  },
  {
    name: "Enterprise",
    price: 1200,
    description: "Built for large organizations, the Enterprise Plan delivers robust performance.",
    features: [
      "All Enterprise Plan features",
      "Dedicated account manager",
      "Advanced security and compliance",
      "Scalable integrations and APIs",
      "Unlimited users",
    ],
  },
]

export function PricingV2() {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
                  {/* Badge */}
        <div className="text-center mb-6">
          <BadgeWithImage text="Pricing" />
        </div>

        {/* Header */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#0c2857] text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Flexible plans built for growth
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg text-[#232937] text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you’re a growing startup or an enterprise, Cuoral scales with
          you. Start with the essentials, pay as you go, or go fully custom.
        </motion.p>

        </div>

        {/* Pricing Cards - Changed grid to 3 columns on desktop, 2 on bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 w-full max-w-sm ${
                plan.isPopular
                  ? "bg-[#eef6ff] lg:scale-105"
                  : "bg-white border border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-600 ml-2">/month</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-8 leading-relaxed">{plan.description}</p>

                {/* CTA Button */}
            
                <div className="mt-auto mb-8">
                <button
                //   href={plan.isPopular}
                //   target="_blank"
                  className={`block text-center w-full py-3 px-6 rounded-full font-medium transition-colors duration-200 text-sm sm:text-base cursor-pointer ${
                    plan.isPopular
                      ? "bg-gray-900 hover:bg-black text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
