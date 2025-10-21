"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";

// Define a common paragraph style class for consistency
const paragraphClass = "text-[#64748b] leading-relaxed";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        {/* Hero Section - Adapted for Privacy Policy Title */}
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

            {/* Animated floating elements - simplified to remove Framer Motion for static pages */}
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
                Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto">
                Effective Date: 01/04/2025
              </p>
              <p className={`${paragraphClass} mt-6 max-w-3xl mx-auto`}>
                Cuoral (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and protect your
                information when you use our platform (&ldquo;Service&rdquo;).
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section - Privacy Policy Details */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none space-y-12"
            >
              {/* Section 1: Information We Collect */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  1. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  a. Personal Information
                </h3>
                <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-6">
                  <li>
                    Name, email address, phone number, and company details
                    provided when creating or managing your profile.
                  </li>
                  <li>
                    Customer details submitted through support tickets, chat,
                    email-to-ticket integration or data configuration.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  b. Usage Information
                </h3>
                <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-6">
                  <li>
                    Log data such as IP address, browser type, operating system,
                    pages viewed, and the date/time of access.
                  </li>
                  <li>
                    App interaction data, including support requests, ticket
                    status, and communication history.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  c. Communication Data
                </h3>
                <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-6">
                  <li>
                    Messages, attachments, and notes exchanged between users and
                    support agents.
                  </li>
                  <li>
                    Emails or other communication routed through our platform.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0c2857] mb-3">
                  d. Payment and Subscription Data (if applicable)
                </h3>
                <p className={paragraphClass}>
                  Billing information, subscription status, and payment history
                  collected through our third-party payment providers (e.g.,
                  Stripe, Paystack).
                </p>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  2. How We Use Your Information
                </h2>
                <p className={paragraphClass}>We use collected data to:</p>
                <ul className="list-disc list-inside text-[#64748b] space-y-2">
                  <li>Provide, maintain, and improve the Service.</li>
                  <li>Manage user accounts, tickets, and support workflows.</li>
                  <li>Personalize the support experience for customers.</li>
                  <li>
                    Communicate updates, alerts, and responses related to
                    support.
                  </li>
                  <li>
                    Ensure security, fraud prevention, and compliance with legal
                    obligations.
                  </li>
                  <li>Process payments and manage subscription plans.</li>
                </ul>
              </div>

              {/* Section 3: How We Share Information */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  3. How We Share Information
                </h2>
                <p className={paragraphClass}>
                  We do not sell personal data. However, we may share
                  information with:
                </p>
                <ul className="list-disc list-inside text-[#64748b] space-y-2">
                  <li>
                    Service providers: Cloud hosting, email services, analytics,
                    and payment processors.
                  </li>
                  <li>
                    Team members within your organization: To collaborate on
                    support tickets.
                  </li>
                  <li>
                    Legal authorities: When required to comply with applicable
                    laws or protect our rights.
                  </li>
                </ul>
              </div>

              {/* Section 4: Data Storage and Security */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  4. Data Storage and Security
                </h2>
                <ul className="list-disc list-inside text-[#64748b] space-y-2">
                  <li>
                    Your information is stored on secure database servers.
                  </li>
                  <li>
                    We use industry-standard security measures such as
                    encryption, firewalls, and access controls.
                  </li>
                  <li>
                    While we take reasonable steps to protect your data, no
                    method of transmission over the internet is completely
                    secure.
                  </li>
                </ul>
              </div>

              {/* Section 5: Data Retention */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  5. Data Retention
                </h2>
                <p className={paragraphClass}>
                  We retain your information as long as your account is active
                  or needed to provide the Service. We may also retain certain
                  data for legal, tax, or security purposes.
                </p>
              </div>

              {/* Section 6: Your Rights */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  6. Your Rights
                </h2>
                <p className={`${paragraphClass} mb-4`}>
                  Depending on your location (e.g., GDPR in the EU, CCPA in
                  California), you may have the right to:
                </p>
                <ul className="list-disc list-inside text-[#64748b] space-y-2">
                  <li>Access, correct, or delete your personal data.</li>
                  <li>Restrict or object to how your data is processed.</li>
                  <li>Request data portability.</li>
                  <li>
                    Withdraw consent at any time (without affecting lawful prior
                    processing).
                  </li>
                </ul>
                <p className={`${paragraphClass} mt-4`}>
                  To exercise these rights, contact us at contact@cuoral.com.
                </p>
              </div>

              {/* Section 7: Cookies and Tracking */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  7. Cookies and Tracking
                </h2>
                <p className={paragraphClass}>
                  We may use cookies and similar technologies to improve
                  functionality, track usage, and analyze performance. You can
                  control cookie settings through your browser.
                </p>
              </div>

              {/* Section 8: Third-Party Integrations */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  8. Third-Party Integrations
                </h2>
                <p className={paragraphClass}>
                  Our Service may integrate with third-party providers (e.g.,
                  email gateways, cloud storage, analytics tools, payment
                  processors). These providers handle your data according to
                  their own privacy policies.
                </p>
              </div>

              {/* Section 9: Children’s Privacy */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  9. Children’s Privacy
                </h2>
                <p className={paragraphClass}>
                  Our Service is not intended for children under 13 (or the
                  minimum legal age in your region). We do not knowingly collect
                  data from children.
                </p>
              </div>

              {/* Section 10: Changes to This Policy */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  10. Changes to This Policy
                </h2>
                <p className={paragraphClass}>
                  We may update this Privacy Policy periodically. Any changes
                  will be posted with an updated Effective Date. Continued use
                  of the Service after changes means you accept the revised
                  policy.
                </p>
              </div>

              {/* Section 11: Contact Us */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2857] mb-6">
                  11. Contact Us
                </h2>
                <p className={`${paragraphClass} mb-2`}>
                  If you have questions about this Privacy Policy or how your
                  data is handled, please contact us.
                </p>
                <address className="not-italic text-[#0c2857] font-medium">
                  <br />
                  Email: contact@cuoral.com
                  <br />
                  {/* Add any other relevant contact info here, e.g., Address: [Physical Address] */}
                </address>
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
