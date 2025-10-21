"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";
import HeroV2 from "@/components/HeroV2";
import PricingSection from "@/components/PricingSection";
import BadgeWithImage from "@/components/BadgeWithImage";
import TrustedBySection from "@/components/TrustedBySection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { FeatureComparisonTable } from "@/components/FeatureComparisonTable";

export default function SamplePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroV2
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
          text: "Pricing Plan",
        }}
        title="Discover the Perfect Fit for Your Business"
        subtitle="Leverage cutting-edge artificial intelligence to automate, optimize, and scale your business—no coding required."
        showFloatingElements={false}
        className="px-2 sm:px-2 lg:px-2 "
      />

      <PricingSection />


      {/* Main Content */}
      <main className="max-w-7xl mx-auto pt-20 lg:pt-24">
        <div className="text-center mb-6">
          <BadgeWithImage text="Compare" />
        </div>

        {/* Header */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#0c2857] text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What makes up different
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg text-[#232937] text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover the experienced leaders driving our company's vision, innovation, and success.
        </motion.p>

        {/* Comparison Table */}
        <FeatureComparisonTable />
      </main>


      {/* Trusted By Section */}
      <TrustedBySection />

      {/* FAQ Section */}
      <FAQSection />

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
          text: "Let’s Connect with Us",
        }}
        title="Efficiency and Boost Revenue with AI-Driven Sales Tactics."
        subtitle="Cuoral brings your tools, teams and touchpoints together, creating one intelligent flow where insight, action and trust move as one."
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

      {/* Footer */}
      <Footer />
    </div>
  );
}