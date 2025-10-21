"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";

// Define a common paragraph style class for consistency
const paragraphClass = "text-[#64748b] leading-relaxed";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        {/* Hero Section - Adapted for Terms of Service Title */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Gradient - kept for consistent styling */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(179deg, rgba(255, 255, 255, 1) 0%, rgba(129, 175, 249, 1) 96%, rgba(35, 76, 144, 1) 100%)",
            }}
          />

          {/* Decorative Elements - kept for consistent styling */}
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
            <div className="absolute top-32 right-1/4 w-12 h-12 bg-white/40 rounded-full blur-sm shadow-lg" />
            <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-white/30 rounded-full blur-sm shadow-md" />
            <div className="absolute bottom-1/4 right-1/6 w-6 h-6 bg-white/25 rounded-full blur-sm shadow-sm" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0c2857] mb-4">
                Terms of Service
              </h1>
              <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto">
                Last Updated: 01/04/2025
              </p>
              <p className={`${paragraphClass} mt-6 max-w-3xl mx-auto`}>
                Welcome to Cuoral! Please read these Terms of Service
                (&ldquo;Terms&rdquo;) carefully before using the Cuoral platform
                (&ldquo;Service&rdquo;). By accessing or using the Service, you
                agree to be bound by these Terms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section - Terms of Service Details */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none space-y-12"
            >
              {/* Section 1: Agreement to Terms */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  1. Agreement to Terms
                </h2>
                <p className={paragraphClass}>
                  These Terms constitute a legally binding agreement between you
                  and Cuoral concerning your use of the Service. You must be at
                  least 18 years of age to use the Service. If you are agreeing
                  to these Terms on behalf of an organization, you represent
                  that you have the authority to bind that organization to these
                  Terms.
                </p>
              </div>

              {/* Section 2: User Accounts */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  2. User Accounts
                </h2>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  a. Account Responsibility
                </h3>
                <p className={paragraphClass}>
                  You are responsible for safeguarding the password and for all
                  activities that occur under your account. You agree to notify
                  Cuoral immediately of any unauthorized use of your account.
                </p>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  b. Accuracy of Information
                </h3>
                <p className={paragraphClass}>
                  All information you provide to create or manage your account
                  must be accurate, current, and complete. Failure to do so
                  constitutes a breach of the Terms, which may result in
                  immediate termination of your account.
                </p>
              </div>

              {/* Section 3: Subscription and Payments */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  3. Subscription and Payments
                </h2>
                <ul className="list-disc list-inside text-[#64748b] space-y-2">
                  <li>
                    Billing: You agree to pay all fees and charges to your
                    account in accordance with the billing terms in effect at
                    the time a fee or charge is due and payable.
                  </li>
                  <li>
                    Auto-Renewal: Unless otherwise stated, your subscription
                    will automatically renew for the same duration. You can
                    cancel auto-renewal at any time before the next billing
                    cycle.
                  </li>
                  <li>
                    Refunds: Payments are non-refundable, except as expressly
                    provided in these Terms or required by law.
                  </li>
                </ul>
              </div>

              {/* Section 4: Acceptable Use Policy */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  4. Acceptable Use Policy
                </h2>
                <p className={paragraphClass}>
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-[#64748b] space-y-2">
                  <li>
                    Upload or transmit any unlawful, harmful, or objectionable
                    material.
                  </li>
                  <li>
                    Violate any applicable local, state, national, or
                    international law or regulation.
                  </li>
                  <li>
                    Interfere with or disrupt the integrity or performance of
                    the Service or data contained therein.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to the Service or its
                    related systems or networks.
                  </li>
                </ul>
              </div>

              {/* Section 5: Intellectual Property */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  5. Intellectual Property
                </h2>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  a. Cuoral IP
                </h3>
                <p className={paragraphClass}>
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Cuoral and its licensors. Our trademarks and trade dress may
                  not be used in connection with any product or service without
                  the prior written consent of Cuoral.
                </p>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  b. User Data
                </h3>
                <p className={paragraphClass}>
                  You retain all ownership rights to the content and data you
                  submit to the Service. You grant Cuoral a worldwide,
                  royalty-free license to use, reproduce, and display your data
                  solely for the purpose of providing the Service to you.
                </p>
              </div>

              {/* Section 6: Termination */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  6. Termination
                </h2>
                <p className={paragraphClass}>
                  We may terminate or suspend your account immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms. Upon
                  termination, your right to use the Service will immediately
                  cease.
                </p>
              </div>

              {/* Section 7: Limitation of Liability */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  7. Limitation of Liability
                </h2>
                <p className={paragraphClass}>
                  In no event shall Cuoral, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from (i)
                  your access to or use of or inability to access or use the
                  Service; (ii) any conduct or content of any third party on the
                  Service; (iii) any content obtained from the Service.
                </p>
              </div>

              {/* Section 8: Governing Law */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  8. Governing Law
                </h2>
                <p className={paragraphClass}>
                  These Terms shall be governed and construed in accordance with
                  the laws of [Your Jurisdiction, e.g., the State of Delaware]
                  without regard to its conflict of law provisions.
                </p>
              </div>

              {/* Section 9: Changes to Terms */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  9. Changes to Terms
                </h2>
                <p className={paragraphClass}>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. We will provide at least 30
                  days' notice prior to any new terms taking effect. By
                  continuing to access or use our Service after those revisions
                  become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              {/* Section 10: Contact Us */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  10. Contact Us
                </h2>
                <p className={`${paragraphClass} mb-2`}>
                  If you have any questions about these Terms, please contact
                  us:
                </p>
                <address className="not-italic text-[#0c2857] font-medium">
                  <br />
                  Email: contact@cuoral.com
                  <br />
                </address>
              </div>
            </motion.div>
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
          text: "Proactive Engagement",
        }}
        title="Connect Better with Your Customers"
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
