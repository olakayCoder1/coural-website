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
  CpuChipIcon,
  BoltIcon,
  LinkIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

// Define a common paragraph style class for consistency
const paragraphClass = "text-[#64748b] leading-relaxed";

// Comparison data focused on key differentiators vs. free tools
const comparisonData = [
  {
    feature: "Core Purpose & Functionality",
    cuoral:
      "An Intelligent Customer Experience (CX) Platform focused on friction detection, proactive engagement, and unified data.",
    tawkto:
      "Basic Live Chat and Messaging Widget designed primarily for reactive support and lead capture.",
    cuoralIcon: CpuChipIcon,
    tawktoIcon: XCircleIcon,
  },
  {
    feature: "Data Unification & CRM",
    cuoral:
      "Deep Unified Customer Timeline that connects chat, email, user sessions, and support history across all tools.",
    tawkto:
      "Limited data unification; acts mostly as a standalone chat tool with basic CRM synchronization.",
    cuoralIcon: LinkIcon,
    tawktoIcon: XCircleIcon,
  },
  {
    feature: "Proactive Intelligence",
    cuoral:
      "Real-time Session Replays and friction detection to spot user struggles before they initiate a chat.",
    tawkto:
      "Primarily reactive; relies on the user initiating the conversation or basic trigger rules.",
    cuoralIcon: BoltIcon,
    tawktoIcon: XCircleIcon,
  },
  {
    feature: "Scalable Automation & AI",
    cuoral:
      "Smart Automation, AI-Powered Routing, and instant resolution models that mature with your business.",
    tawkto:
      "Limited automation via canned responses and simple triggers; advanced AI features are often absent or costly add-ons.",
    cuoralIcon: ChartBarIcon,
    tawktoIcon: XCircleIcon,
  },
];

// Helper Component for the Comparison Row
const ComparisonRow = ({
  feature,
  cuoral,
  tawkto,
  cuoralIcon: CuoralIcon,
  tawktoIcon: TawktoIcon,
}: any) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-5 border-b border-gray-100 items-start">
    <div className="text-lg font-semibold text-[#0c2857]">{feature}</div>
    <div className="flex items-start">
      <CuoralIcon className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0" />
      <p className={paragraphClass}>{cuoral}</p>
    </div>
    <div className="flex items-start">
      <TawktoIcon className="w-5 h-5 mt-1 mr-2 text-red-500 flex-shrink-0" />
      <p className={paragraphClass}>{tawkto}</p>
    </div>
  </div>
);

export default function CuoralVsTawkToPage() {
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
                The Intelligent Upgrade from Simple Chat
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c2857] mb-6">
                Cuoral vs. tawk.to: Move from Reactive Chat to Proactive
                Intelligence
              </h1>
              <p className="text-lg sm:text-xl text-[#64748b] max-w-3xl mx-auto">
                Ready to go beyond basic messaging? Cuoral unifies your data,
                detects customer friction, and drives revenue - something simple
                free chat cannot do.
              </p>

              {/* Primary Hero CTA */}
              <div className="mt-8">
                <a
                  href="https://app.cuoral.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0c2857] hover:bg-[#234c90] transition duration-150"
                >
                  Start Your Intelligent Trial Now
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
                The Clear Difference: Visibility and Unification
              </h2>

              {/* Table Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4 border-b-2 border-[#0c2857]">
                <div className="text-lg font-bold text-[#0c2857]">
                  Key Feature Differentiator
                </div>
                <div className="text-lg font-bold text-[#0c2857]">
                  Cuoral (The Intelligent Platform)
                </div>
                <div className="text-lg font-bold text-[#0c2857]">
                  tawk.to (Basic Live Chat)
                </div>
              </div>

              {/* Comparison Rows */}
              {comparisonData.map((data, index) => (
                <ComparisonRow
                  key={index}
                  feature={data.feature}
                  cuoral={data.cuoral}
                  tawkto={data.tawkto}
                  cuoralIcon={CheckCircleIcon}
                  tawktoIcon={XCircleIcon}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Deep Dive: The Cost of "Free" */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CurrencyDollarIcon className="w-12 h-12 text-[#0c2857] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2857] mb-4">
              The Hidden Cost of Simple Chat Tools
            </h2>
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto mb-10">
              A basic chat widget saves money, but it costs you data and growth.
              Cuoral provides the unified insights needed to turn support into a
              revenue driver.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-t-[#0c2857]">
                <h3 className="text-xl font-bold text-[#0c2857] mb-2">
                  Data Silos Eliminated
                </h3>
                <p className={paragraphClass}>
                  We unify your customer data across channels, ensuring every
                  agent has full context, unlike fragmented chat solutions.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-t-[#0c2857]">
                <h3 className="text-xl font-bold text-[#0c2857] mb-2">
                  Measurable ROI on CX
                </h3>
                <p className={paragraphClass}>
                  Cuoral’s analytics link CX efforts directly to retention and
                  revenue, providing measurable ROI beyond ticket counts.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-t-[#0c2857]">
                <h3 className="text-xl font-bold text-[#0c2857] mb-2">
                  Prepared for Scale
                </h3>
                <p className={paragraphClass}>
                  Our platform scales with your growth, offering
                  enterprise-grade visibility and AI without requiring major
                  platform migrations later.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action: Switch Now */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-10 bg-[#81AFF9]/20 rounded-xl">
            <h2 className="text-3xl font-extrabold text-[#0c2857] mb-4">
              Ready to Turn Support into an Intelligence Hub?
            </h2>
            <p className="text-xl text-[#64748b] mb-8">
              It's time to upgrade from a basic chat widget to a platform that
              genuinely detects friction, unifies data, and drives retention.
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
