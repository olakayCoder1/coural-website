"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import BadgeWithImage from "./BadgeWithImage";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Viewport detection refs
  const badgeRef = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const faqListRef = useRef(null);

  // Viewport detection hooks
  const badgeInView = useInView(badgeRef, { once: true, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const descriptionInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px",
  });
  const faqListInView = useInView(faqListRef, { once: true, margin: "-100px" });

  const faqs = [
    {
      id: 1,
      question: "What is Cuoral used for?",
      answer:
        "Cuoral is an intelligent customer experience platform that helps businesses detect friction, understand customer behavior, and unify every interaction across channels. It’s built to make support, engagement, and trust measurable in real time.",
    },
    {
      id: 2,
      question: "Is Cuoral suitable for startups?",
      answer:
        "Absolutely. Cuoral is perfect for startups laying the foundation for proactive customer engagement. It scales effortlessly as your user base grows, giving you enterprise-grade visibility without enterprise complexity",
    },
    {
      id: 3,
      question: "Does Cuoral support multiple agents?",
      answer:
        "Yes. Cuoral supports unlimited agents and teams. Assign conversations, collaborate seamlessly, and manage performance from one unified workspace designed for transparency and speed.",
    },
    {
      id: 4,
      question: "Can I integrate Cuoral with my CRM or website?",
      answer:
        "Cuoral offers extensive integration capabilities with popular CRMs, websites, and business tools.Our APIs and pre-built integrations make setup simple, ensuring your workflows stay connected and insights stay unified. integrations make it easy to connect with your existing workflow and systems.",
    },
    {
      id: 5,
      question: "Is there free trial?",
      answer:
        "Yes, we offer a free trial so you can explore Cuoral firsthand. Experience the platform’s full capabilities before you commit with no credit card required.",
    },
    {
      id: 6,
      question: "How secure is Cuoral?",
      answer:
        "Cuoral is built with enterprise-grade security at its core. All data is encrypted in transit and at rest, with strict access controls and compliance with global data protection standards.",
    },
    {
      id: 7,
      question: "Can I customize Cuoral for my business needs?",
      answer:
        "Yes. Cuoral is fully configurable, from dashboards and workflows to notifications and reports. You can tailor every aspect to match your operations and customer experience goals.",
    },
    {
      id: 8,
      question: "How does onboarding and support work?",
      answer:
        "Getting started is seamless. Our team guides you through setup, integration, and adoption, ensuring your transition is smooth. With in-app chat and dedicated support, we’re with you every step as your customer operations evolve.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Header Content */}
          <div>
            {/* Badge */}
            <motion.div
              ref={badgeRef}
              className="mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={
                badgeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <BadgeWithImage text="FAQ's" />
            </motion.div>

            {/* Header */}
            <motion.h2
              ref={headerRef}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0c2857] mb-4 lg:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={
                headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Everything You Need to Know, All in One Place
            </motion.h2>

            {/* Description */}
            <motion.p
              ref={descriptionRef}
              className="text-base sm:text-lg text-[#232937] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={
                descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              Got questions about how Cuoral works? We've got the answers.
              Simple, clear and built around your growth.
            </motion.p>
          </div>

          {/* Right Side - FAQ Items */}
          <div ref={faqListRef} className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-blue-50 rounded-xl lg:rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={
                  faqListInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        y: 40,
                        scale: 0.95,
                      }
                }
                transition={{
                  duration: 0.6,
                  delay: faqListInView ? 0.6 + index * 0.1 : 0,
                  ease: "easeOut",
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 sm:px-6 py-4 lg:py-5 text-left flex items-center justify-between hover:bg-blue-100 transition-colors duration-200"
                >
                  <span className="text-base sm:text-lg font-medium text-[#0c2857] pr-3 sm:pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
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
                      <div className="px-4 sm:px-6 pb-4 lg:pb-5 pt-0">
                        <p className="text-sm sm:text-base text-[#232937] leading-relaxed">
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
