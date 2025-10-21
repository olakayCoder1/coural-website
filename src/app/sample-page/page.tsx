"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";

export default function SamplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Gradient - only for hero section */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(179deg, rgba(255, 255, 255, 1) 0%, rgba(129, 175, 249, 1) 96%, rgba(35, 76, 144, 1) 100%)",
            }}
          />

          {/* Decorative Elements - only for hero section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Bubble SVG Background */}
            <div className="absolute inset-0 w-full h-full opacity-60">
              <Image
                src="/images/Bubble.svg.svg"
                alt="Bubble background decoration"
                fill
                className="w-full h-full object-cover object-center"
                style={{ mixBlendMode: "overlay" }}
              />
            </div>

            {/* Animated floating elements */}
            <motion.div
              className="absolute top-32 right-1/4 w-12 h-12 bg-white/40 rounded-full blur-sm shadow-lg"
              animate={{
                y: [0, -15, 0],
                x: [0, 8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/6 w-8 h-8 bg-white/30 rounded-full blur-sm shadow-md"
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/6 w-6 h-6 bg-white/25 rounded-full blur-sm shadow-sm"
              animate={{
                y: [0, -12, 0],
                x: [0, 6, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c2857] mb-6">
                Sample Page
              </h1>
              <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto">
                This is a sample page template that can be cloned and customized
                for other pages like Privacy Policy, Terms and Conditions, etc.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  Introduction
                </h2>
                <p className="text-[#64748b] leading-relaxed mb-6">
                  Welcome to our sample page. This template provides a clean,
                  professional layout that can be easily customized for various
                  types of content pages. The design follows modern web
                  standards and maintains consistency with your main website.
                </p>
                <p className="text-[#64748b] leading-relaxed">
                  You can replace this content with your specific page content
                  such as privacy policies, terms and conditions, about us
                  information, or any other static content you need.
                </p>
              </div>

              {/* Sample Section 1 */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  Section 1: Sample Content
                </h2>
                <p className="text-[#64748b] leading-relaxed mb-4">
                  This is where you would add your main content. The typography
                  and spacing are optimized for readability and user experience.
                </p>
                <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-6">
                  <li>Clean and professional design</li>
                  <li>Responsive layout that works on all devices</li>
                  <li>Consistent with your brand styling</li>
                  <li>Easy to customize and maintain</li>
                </ul>
              </div>

              {/* Sample Section 2 */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  Section 2: Additional Information
                </h2>
                <p className="text-[#64748b] leading-relaxed mb-6">
                  You can add as many sections as needed for your content. Each
                  section maintains proper spacing and typography hierarchy.
                </p>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-4">
                  Subsection Example
                </h3>
                <p className="text-[#64748b] leading-relaxed mb-4">
                  This demonstrates how subsections can be structured within
                  your content. The heading hierarchy helps with both
                  readability and SEO.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

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
