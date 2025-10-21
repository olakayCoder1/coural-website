"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";
// Assuming you have Heroicons installed for simple icons
import {
  EnvelopeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

// Define a common paragraph style class for consistency
const paragraphClass = "text-[#64748b] leading-relaxed";

// Define contact channels for easy layout
const contactChannels = [
  {
    icon: BriefcaseIcon,
    title: "Sales & Partnerships",
    description:
      "Interested in a partnership or want to discuss pricing for your team? Our sales team is ready to help you drive revenue.",
    linkText: "Email Sales Team",
    linkHref: "mailto:team@cuoral.com",
    bgColor: "bg-blue-50",
    iconColor: "text-[#0c2857]",
  },
  {
    icon: CalendarDaysIcon,
    title: "Book a Personalized Demo",
    description:
      "See Cuoral in action with a tailored walkthrough of features that match your specific customer engagement goals.",
    linkText: "Schedule a Demo Now",
    linkHref: "https://calendly.com/team-cuoral/cuoral-meeting",
    target: "_blank",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: EnvelopeIcon,
    title: "Support & Technical Help",
    description:
      "Need technical assistance or have a question about setting up an integration? Reach out to our dedicated support team.",
    linkText: "Email Support Team",
    linkHref: "mailto:team@cuoral.com",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        {/* Hero Section - Contact Focus */}
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
            {/* Animated floating elements (static version) */}
            <div className="absolute top-32 right-1/4 w-12 h-12 bg-white/40 rounded-full blur-sm shadow-lg" />
            <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-white/30 rounded-full blur-sm shadow-md" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c2857] mb-4">
                Get in Touch with Cuoral
              </h1>
              <p className="text-lg sm:text-xl text-[#64748b] max-w-3xl mx-auto">
                We're here to help you revolutionize your customer experience.
                Select the option below that best fits your inquiry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Channels Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {contactChannels.map((channel, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl ${channel.bgColor}`}
                >
                  <channel.icon
                    className={`w-10 h-10 mb-4 ${channel.iconColor}`}
                  />
                  <h2 className="text-xl font-bold text-[#0c2857] mb-3">
                    {channel.title}
                  </h2>
                  <p className={paragraphClass + " mb-6"}>
                    {channel.description}
                  </p>
                  <a
                    href={channel.linkHref}
                    target={channel.target || "_self"}
                    rel={channel.target ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center text-sm font-semibold text-[#81AFF9] hover:text-[#0c2857] transition duration-150"
                  >
                    {channel.linkText} &rarr;
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* General Information & Location */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* General Email */}
              <div>
                <EnvelopeIcon className="w-8 h-8 text-[#0c2857] mb-4" />
                <h3 className="text-2xl font-bold text-[#0c2857] mb-3">
                  General Inquiries
                </h3>
                <p className={paragraphClass + " mb-4"}>
                  For media, press, or non-specific questions about Cuoral, use
                  our general email address.
                </p>
                <a
                  href="mailto:contact@cuoral.com"
                  className="text-lg font-semibold text-[#81AFF9] hover:text-[#0c2857] transition duration-150"
                >
                  team@cuoral.com
                </a>
              </div>

              {/* Headquarters */}
              <div>
                <MapPinIcon className="w-8 h-8 text-[#0c2857] mb-4" />
                <h3 className="text-2xl font-bold text-[#0c2857] mb-3">
                  Headquarters
                </h3>
                <p className={paragraphClass}>
                  Cuoral is designed to serve a global customer base with
                  operations focused on providing scalable, intelligence-driven
                  solutions worldwide.
                </p>
                <address className="not-italic text-[#0c2857] font-medium mt-4">
                  Cuoral Inc.
                  <br />
                  US: 16192 Coastal Highway, lewes, DE, Sussex County, US, 19958
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section - Reused from original component */}
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
          text: "Proactive customer success",
        }}
        title="Smarter Customer Experience & Retention"
        subtitle="Cuoral brings proactive support, real-time engagement and rich user insights
                            into one intelligent platform, built for fast-growing teams."
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
