"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";
import { useState } from "react";
import {
  ChevronDownIcon,
  PlayIcon,
  BoltIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

const FeatureCard = ({ title, description, icon: Icon }: any) => (
  <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md">
    <Icon className="w-8 h-8 text-[#0c2857] mb-3" />
    <h3 className="text-lg font-semibold text-[#0c2857] mb-2">{title}</h3>
    <p className="text-sm text-[#64748b]">{description}</p>
  </div>
);

// Define FAQ data
const faqs = [
  {
    id: 1,
    question: "What is Cuoral used for?",
    answer:
      "Cuoral is an intelligent customer experience platform that helps businesses detect friction, understand customer behavior, and unify every interaction across channels. It’s built to make support, engagement, and trust measurable in real time.",
  },
  {
    id: 2,
    question:
      "Is Cuoral suitable for startups and growing businesses in Africa and globally?",
    answer:
      "Absolutely. Cuoral is perfect for startups laying the foundation for proactive customer engagement, regardless of location. It scales effortlessly as your user base grows across emerging or established markets, giving you enterprise-grade visibility without enterprise complexity. Our flexible, pay-as-you-go model is specifically designed to support dynamic growth.",
  },
  {
    id: 3,
    question: "Does Cuoral support multiple agents and teams?",
    answer:
      "Yes. Cuoral supports unlimited agents and teams. Assign conversations, collaborate seamlessly, and manage performance from one unified workspace designed for transparency and speed. Our platform ensures your entire customer support operation is aligned, whether you have a local team or a globally distributed one.",
  },
  {
    id: 4,
    question: "Can I integrate Cuoral with my CRM or website?",
    answer:
      "Cuoral offers extensive integration capabilities with popular CRMs (like Salesforce), websites (via a simple widget/API), and core business tools. Our APIs and pre-built integrations make setup simple, ensuring your workflows stay connected and insights stay unified.",
  },
  {
    id: 5,
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a free trial so you can explore Cuoral firsthand. Experience the platform’s full capabilities before you commit with no credit card required. Start transforming your customer experience today.",
  },
  {
    id: 6,
    question:
      "How secure is Cuoral with respect to global data standards (e.g., GDPR, local regulations)?",
    answer:
      "Cuoral is built with enterprise-grade security at its core. All data is encrypted in transit and at rest, with strict access controls and compliance with global data protection standards. We prioritize data integrity and privacy for all our global users.",
  },
  {
    id: 7,
    question:
      "Can I customize Cuoral for my specific business needs and workflows?",
    answer:
      "Yes. Cuoral is fully configurable, from dashboards and workflows to notifications and reports. You can tailor every aspect to match your operations and customer experience goals, ensuring the platform works for your unique market requirements.",
  },
  {
    id: 8,
    question: "How does onboarding and ongoing support work?",
    answer:
      "Getting started is seamless. Our team guides you through setup, integration, and adoption, ensuring your transition is smooth. With in-app chat, dedicated support, and regional success teams (where applicable), we’re with you every step as your customer operations evolve.",
  },
];

// Helper Component for the Accordion Item
const FAQItem = ({ faq, isOpen, toggleFAQ }: any) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left transition duration-300 hover:text-[#234c90]"
        onClick={toggleFAQ}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${faq.id}`}
      >
        <h3 className="text-lg font-semibold text-[#0c2857] leading-relaxed pr-4">
          {faq.question}
        </h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-[#81AFF9] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        id={`faq-content-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[#64748b] leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id: any) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        {/* Hero Section - FAQ Focus */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Gradient - consistent styling */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(179deg, rgba(255, 255, 255, 1) 0%, rgba(129, 175, 249, 1) 96%, rgba(35, 76, 144, 1) 100%)",
            }}
          />

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 w-full h-full opacity-60">
              <Image
                src="/images/Bubble.svg.svg"
                alt="Bubble background decoration"
                fill
                className="w-full h-full object-cover object-center"
                style={{ mixBlendMode: "overlay" }}
              />
            </div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Main Title - SEO Focused */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c2857] mb-6">
                Frequently Asked Questions
              </h1>
              {/* Subtitle - Positioning Cuoral & Global Scope */}
              <p className="text-lg sm:text-xl text-[#64748b] max-w-3xl mx-auto">
                Everything you need to know about Cuoral, the intelligent
                platform trusted by businesses across Africa and the globe to
                build customer trust and drive revenue growth.
              </p>

              {/* Quick CTA */}
              <div className="mt-8">
                <a
                  href="https://app.cuoral.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0c2857] hover:bg-[#234c90] transition duration-150"
                >
                  Start Your Free Trial
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* High-Level Context/SEO Header */}
              <h2 className="sr-only">
                Detailed Answers on Cuoral's Features, Integrations, and
                Security
              </h2>

              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
                {faqs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openId === faq.id}
                    toggleFAQ={() => toggleFAQ(faq.id)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Features and Metrics Section --- */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2857] text-center mb-4">
              Power Your Customer Intelligence with Cuoral
            </h2>
            <p className="text-xl text-[#64748b] text-center max-w-3xl mx-auto mb-12">
              Your Trust Stack starts here, with real-time visibility,
              effortless intelligence, and experience customers can trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <FeatureCard
                title="See Every Customer Moment"
                description="Spot friction as it happens. Watch live sessions, act instantly, and keep every interaction seamless."
                icon={PlayIcon}
              />
              <FeatureCard
                title="Support That Thinks Ahead"
                description="Predict issues, automate fixes, and turn every response into renewed trust. Use AI to stay proactive."
                icon={BoltIcon}
              />
              <FeatureCard
                title="Turn Insight into Retention"
                description="Understand what drives loyalty and use data to build lasting customer confidence and higher lifetime value."
                icon={ChartBarIcon}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <HeroCTA
          backgroundLayers={[
            {
              type: "image",
              src: "/images/Background.png",
              alt: "Main background",
              className: "z-0",
            },
            {
              type: "image",
              src: "/images/vector-left.png",
              alt: "Left vector overlay",
              className: "z-10",
              style: {
                objectPosition: "left center",
                objectFit: "contain",
              },
            },
            {
              type: "image",
              src: "/images/vector-right.png",
              alt: "Right vector overlay",
              className: "z-10",
              style: {
                objectPosition: "right center",
                objectFit: "contain",
              },
            },
          ]}
          badge={{
            text: "Proactive Engagement",
          }}
          title="Connect Better with Your Customers"
          subtitle="Turn every customer moment into a trust-building experience
              powered by Cuoral Intelligence, helping your team detect friction
              early, respond proactively, and create connections that last."
          primaryButton={{
            text: "Try for Free",
            href: "https://app.cuoral.com/",
            target: "_blank",
          }}
          secondaryButton={{
            text: "Book a Demo",
            href: "https://calendly.com/team-cuoral/cuoral-meeting",
            target: "_blank",
          }}
          showFloatingElements={true}
          className="pt-20"
        />
      </main>

      {/* Footer is typically included after the main content */}
      <Footer />
    </div>
  );
}
