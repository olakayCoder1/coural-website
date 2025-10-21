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
import WhyChooseCuoralSection from "@/components/WhyChooseCuoralSection";

export default function FeaturePage() {
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
          text: "Features",
        }}
        title="Powerful features"
        subtitle="Leverage cutting-edge artificial intelligence to automate, optimize, and scale your business—no coding required."
        // subtitle="Curoal helps businesses engage, support, and<br />grow with a unified customer platform."
        
        dashboardImage={{
          src: "/images/dashboard-v1.svg",
          alt: "Curoal Dashboard Overview",
          width: 1200,
          height: 800,
        }}
        showFloatingElements={true}
        className=""
      />

      {/* Trusted By Section */}
      <TrustedBySection />


      {/* Why Choose Cuoral Section */}
      <WhyChooseCuoralSection />



      {/* Main Content */}
      <main className="max-w-7xl mx-auto pt-20 lg:pt-24">
      
      </main>




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