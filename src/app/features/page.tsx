"use client";

import Footer from "@/components/Footer";
import HeroCTA from "@/components/HeroCTA";
import HeroV2 from "@/components/HeroV2";
import TrustedBySection from "@/components/TrustedBySection";
import FAQSection from "@/components/FAQSection";
import WhyChooseCuoralSection from "@/components/WhyChooseCuoralSection";
import FeatureCoural from "@/components/FeatureCoural";

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


      <FeatureCoural
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
          text: "Integrations",
        }}
        title="Seamless Integration."
        subtitle="Seamless integration refers to the smooth and efficient connection of different software systems, platforms, or tools without disruptions or compatibility issues. It allows data and processes to flow effortlessly between systems, improving productivity and reducing manual work."

        showFloatingElements={true}
        className="pt-20"
        heroImage={{
          src: "/images/features/finance.svg",
          alt: "Curoal Finance Overview",
          width: 1200,
          height: 800,
        }}
      />


      {/* Why Choose Cuoral Section */}
      <WhyChooseCuoralSection />

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