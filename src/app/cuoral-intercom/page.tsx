"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";
// Using placeholder icons for visual appeal
import {
  CheckCircleIcon,
  XCircleIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
  GlobeAmericasIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

// Define a common paragraph style class for consistency
const paragraphClass = "text-[#64748b] leading-relaxed";

// Comparison data focused on key differentiators
const comparisonData = [
  {
    feature: "Pricing Model & Affordability",
    cuoral:
      "Flexible Pay-as-you-go and Core Subscriptions. Highly affordable for startups and high-volume, cost-sensitive markets (e.g., Africa).",
    intercom:
      "Tiered, high-cost plans often required upfront. Pricing complexity increases rapidly with feature needs.",
    cuoralIcon: CheckCircleIcon,
    intercomIcon: XCircleIcon,
  },
  {
    feature: "Core Focus",
    cuoral:
      "AI-Driven Customer Intelligence, Friction Detection, and Proactive Trust-Building.",
    intercom: "Basic In-App Messaging and Conversational Support.",
    cuoralIcon: CpuChipIcon,
    intercomIcon: XCircleIcon,
  },
  {
    feature: "Scalability and Flexibility",
    cuoral:
      "Unlimited agents and teams. Scales seamlessly from local markets to multi-national operations without complex enterprise tiers.",
    intercom:
      "Agent pricing model can make scaling expensive and unpredictable.",
    cuoralIcon: ScaleIcon,
    intercomIcon: XCircleIcon,
  },
  {
    feature: "Local Market Relevance (Africa)",
    cuoral:
      "Designed for global flexibility, supporting unique payment and communication needs relevant to emerging economies.",
    intercom:
      "Primarily US/European-centric feature set; may lack specific local integration needs.",
    cuoralIcon: GlobeAmericasIcon,
    intercomIcon: XCircleIcon,
  },
];

// Helper Component for the Comparison Row
const ComparisonRow = ({
  feature,
  cuoral,
  intercom,
  cuoralIcon: CuoralIcon,
  intercomIcon: IntercomIcon,
}: any) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-5 border-b border-gray-100 items-start">
    <div className="text-lg font-semibold text-[#0c2857]">{feature}</div>
    <div className="flex items-start">
      <CuoralIcon className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0" />
      <p className={paragraphClass}>{cuoral}</p>
    </div>
    <div className="flex items-start">
      <IntercomIcon className="w-5 h-5 mt-1 mr-2 text-red-500 flex-shrink-0" />
      <p className={paragraphClass}>{intercom}</p>
    </div>
  </div>
);

export default function CuoralVsIntercomPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        {/* Hero Section - Competitor Focus */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Gradient - consistent styling */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(179deg, rgba(255, 255, 255, 1) 0%, rgba(129, 175, 249, 1) 96%, rgba(35, 76, 144, 1) 100%)",
            }}
          />

          {/* Decorative Elements (static version) */}
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
              <p className="text-sm font-semibold text-[#0c2857] uppercase tracking-wider mb-2">
                The Intelligent Alternative
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c2857] mb-6">
                Cuoral vs. Intercom: Built for Modern Growth, Not Legacy Pricing
              </h1>
              <p className="text-lg sm:text-xl text-[#64748b] max-w-3xl mx-auto">
                Discover the platform engineered for AI-driven customer
                intelligence and scalable affordability - perfect for ambitious
                businesses globally, especially those scaling in Africa.
              </p>

              {/* Primary Hero CTA */}
              <div className="mt-8">
                <a
                  href="https://app.cuoral.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0c2857] hover:bg-[#234c90] transition duration-150"
                >
                  Start Your Free Trial
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Comparison Table Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-[#0c2857] mb-8 text-center">
                Why Cuoral is the Smarter Choice
              </h2>

              {/* Table Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4 border-b-2 border-[#0c2857]">
                <div className="text-lg font-bold text-[#0c2857]">
                  Key Feature Differentiator
                </div>
                <div className="text-lg font-bold text-[#0c2857]">
                  Cuoral (Recommended)
                </div>
                <div className="text-lg font-bold text-[#0c2857]">
                  Intercom Alternative
                </div>
              </div>

              {/* Comparison Rows */}
              {comparisonData.map((data, index) => (
                <ComparisonRow
                  key={index}
                  feature={data.feature}
                  cuoral={data.cuoral}
                  intercom={data.intercom}
                  cuoralIcon={data.cuoralIcon}
                  intercomIcon={data.intercomIcon}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Deep Dive: AI and Customer Intelligence */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CpuChipIcon className="w-12 h-12 text-[#0c2857] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2857] mb-4">
              Beyond Chat: True Customer Intelligence
            </h2>
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto mb-10">
              While others focus on messaging, Cuoral’s core is built around
              predicting user behavior and detecting friction. We give you the
              data to act proactively, not just reactively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-t-[#0c2857]">
                <h3 className="text-xl font-bold text-[#0c2857] mb-2">
                  Friction Detection
                </h3>
                <p className={paragraphClass}>
                  See exactly where customers drop off or struggle with session
                  replays and heatmaps, a critical step Intercom misses.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-t-[#0c2857]">
                <h3 className="text-xl font-bold text-[#0c2857] mb-2">
                  Unified Trust Stack
                </h3>
                <p className={paragraphClass}>
                  Bring together support, sales, and product insights into one
                  intelligent flow to build lasting customer confidence.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-t-[#0c2857]">
                <h3 className="text-xl font-bold text-[#0c2857] mb-2">
                  Budget-Friendly Scaling
                </h3>
                <p className={paragraphClass}>
                  Our usage-based pricing in addition to core plans allows
                  high-growth companies to scale affordably without punitive
                  agent costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action: Switch Now */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-10 bg-[#81AFF9]/20 rounded-xl">
            <h2 className="text-3xl font-extrabold text-[#0c2857] mb-4">
              Ready to Upgrade Your Customer Experience?
            </h2>
            <p className="text-xl text-[#64748b] mb-8">
              Stop paying for bloated features you don't use. Switch to Cuoral
              for smarter, more affordable, and more proactive customer
              engagement.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://app.cuoral.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0c2857] hover:bg-[#234c90] transition duration-150"
              >
                Try Cuoral for Free
              </a>
              <a
                href="https://calendly.com/team-cuoral/cuoral-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0c2857] bg-white border-2 border-[#0c2857] hover:bg-gray-100 transition duration-150"
              >
                Request a Personalized Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer is typically included after the main content */}
      <Footer />
    </div>
  );
}
