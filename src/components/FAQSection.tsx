'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BadgeWithImage from './BadgeWithImage';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is Cuoral used for?",
      answer: "Cuoral is a comprehensive customer communication platform that helps businesses manage all their customer interactions in one centralized dashboard. It's designed to streamline support channels, improve response times, and enhance team collaboration."
    },
    {
      id: 2,
      question: "Is Cuoral suitable for startups?",
      answer: "Absolutely! Cuoral is perfect for startups looking to establish professional customer communication from day one. Our scalable platform grows with your business, offering essential tools without overwhelming complexity."
    },
    {
      id: 3,
      question: "Does Cuoral support multiple agents?",
      answer: "Yes, Cuoral supports unlimited team members and agents. You can assign conversations, collaborate on responses, and manage workloads efficiently across your entire support team."
    },
    {
      id: 4,
      question: "Can I integrate Cuoral with my CRM or website?",
      answer: "Cuoral offers extensive integration capabilities with popular CRMs, websites, and business tools. Our API and pre-built integrations make it easy to connect with your existing workflow and systems."
    },
    {
      id: 5,
      question: "Is there free trial?",
      answer: "Yes, we offer a free trial so you can experience Cuoral's features firsthand. No credit card required to get started - simply sign up and explore all the capabilities our platform has to offer."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header Content */}
          <div>
            {/* Badge */}
            <div className="mb-8">
              <BadgeWithImage text="FAQ's" />
            </div>

            {/* Header */}
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything You Need to Know, All in One Place
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose a plan that&apos;s fits your business needs and budget. No hidden fees, no surprises - just straightforward pricing.
            </motion.p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-blue-50 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-100 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}