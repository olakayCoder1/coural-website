"use client";

import { motion } from "framer-motion";
import BadgeWithImage from "./BadgeWithImage";
import { CircleCheck } from "lucide-react";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Core Subscription",
      description:
        "Access Cuoral’s essential tools for customer success, engagement, analytics, and workflow automation, everything you need to understand and support customers better.",
      isPopular: true,
      features: [
        "All core modules included",
        "Unlimited team members",
        "Customer timeline & analytics",
        "In-app messaging & chat",
        "Proactive support automation",
      ],
      buttonText: "Start Free Trial",
      planLink: "https://app.cuoral.com",
    },
    {
      name: "Pay-as-you-go",
      description:
        "Perfect for businesses that scale dynamically. Pay only for what you use. messages, emails, whatsapp, sms, or API calls. No lock-ins, no hidden fees.",
      isPopular: false,
      features: [
        "Flexible usage-based pricing",
        "SMS & email messaging",
        "Webhook and API access",
        "Real-time billing dashboard",
        "Instant top-ups & controls",
      ],
      buttonText: "Get Started",
      planLink: "https://app.cuoral.com",
    },
    {
      name: "Enterprise & Custom",
      description:
        "For larger organizations needing tailored deployment, advanced analytics, and dedicated support. Built to match your unique internal product workflows.",
      isPopular: false,
      features: [
        "Custom onboarding & SLAs",
        "Dedicated success manager",
        "Private cloud or on-premise",
        "Advanced integrations",
        "Custom AI models & analytics",
      ],
      buttonText: "Request a Demo",
      planLink: "https://calendly.com/team-cuoral/cuoral-meeting",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                plan.isPopular
                  ? "bg-blue-50 border border-blue-100 shadow-md hover:shadow-xl"
                  : "bg-white border border-gray-200 hover:shadow-md"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Top Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-3 sm:space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-gray-800"
                    >
                      <CircleCheck className="text-green-500 w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button — aligned across cards */}
              <div className="mt-auto">
                <a
                  href={plan.planLink}
                  target="_blank"
                  className={`block text-center w-full py-3 px-6 rounded-full font-medium transition-colors duration-200 text-sm sm:text-base ${
                    plan.isPopular
                      ? "bg-gray-900 hover:bg-black text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
