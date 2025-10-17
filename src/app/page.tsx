'use client'


import TrustedBySection from '@/components/TrustedBySection'
import FeaturesSection from '@/components/FeaturesSection'
import StatsSection from '@/components/StatsSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import WhyChooseCuoralSection from '@/components/WhyChooseCuoralSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import HowItWorksSection from '@/components/HowItWorksSection'
import HeroV2 from '@/components/HeroV2'
import HeroCTA from '@/components/HeroCTA'


export default function Home() {
  return (
    <div className="min-h-screen relative">
      <HeroV2
        backgroundLayers={[
          {
            type: 'image',
            src: '/images/Background.png',
            alt: 'Main background',
            className: 'z-0'
          },
          {
            type: 'image',
            src: '/images/vector-left.png',
            alt: 'Left vector overlay',
            className: 'z-10',
            style: {
              objectPosition: 'left center',
              objectFit: 'contain'
            }
          },
          {
            type: 'image',
            src: '/images/vector-right.png',
            alt: 'Right vector overlay',
            className: 'z-10',
            style: {
              objectPosition: 'right center',
              objectFit: 'contain'
            }
          }
        ]}
        badge={{
          text: "Build Trust. Detect Friction. Grow Confidently"
        }}
        title="Connect Better with<br />Your Customers"
        subtitle="Connect Better with Your Customers - Turn every customer moment into <br />a trust-building experience powered by Cuoral Intelligence"
        // subtitle="Curoal helps businesses engage, support, and<br />grow with a unified customer platform."
        primaryButton={{
          text: "Try for Free",
          onClick: () => console.log("Try for Free clicked")
        }}
        secondaryButton={{
          text: "Request a Demo",
          onClick: () => console.log("Request a Demo clicked")
        }}
        dashboardImage={{
          src: "/images/dashboard.svg",
          alt: "Curoal Dashboard Overview",
          width: 1200,
          height: 800
        }}
        showFloatingElements={true}
        className=""
      />

      {/* Trusted By Section */}
      <TrustedBySection />



      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Integrations Section */}
      <IntegrationsSection 
        backgroundLayers={[
          {
            type: 'image',
            src: '/images/Background.png',
            alt: 'Main background',
            className: 'z-0'
          },
          {
            type: 'image',
            src: '/images/vector-left.png',
            alt: 'Left vector overlay',
            className: 'z-10',
            style: {
              objectPosition: 'left center',
              objectFit: 'contain'
            }
          },
          {
            type: 'image',
            src: '/images/vector-right.png',
            alt: 'Right vector overlay',
            className: 'z-10',
            style: {
              objectPosition: 'right center',
              objectFit: 'contain'
            }
          }
        ]}
      />

      {/* Why Choose Cuoral Section */}
      <WhyChooseCuoralSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <HeroCTA
        backgroundLayers={[
          {
            type: 'image',
            src: '/images/Background.png',
            alt: 'Main background',
            className: 'z-0'
          },
          {
            type: 'image',
            src: '/images/vector-left.png',
            alt: 'Left vector overlay',
            className: 'z-10',
            style: {
              objectPosition: 'left center',
              objectFit: 'contain'
            }
          },
          {
            type: 'image',
            src: '/images/vector-right.png',
            alt: 'Right vector overlay',
            className: 'z-10',
            style: {
              objectPosition: 'right center',
              objectFit: 'contain'
            }
          }
        ]}
        badge={{
          text: "Integrations"
        }}
        title="Connect Every System.<br /> Understand Every Signal"
        subtitle="Cuoral brings your tools, teams and touchpoints together, creating one intelligent flow where insight, action and trust move as one."
        primaryButton={{
          text: "Try for Free",
          onClick: () => console.log("Try for Free clicked")
        }}
        secondaryButton={{
          text: "Book a Demo",
          onClick: () => console.log("Book a Demo clicked")
        }}
        showFloatingElements={true}
        className="pt-20"
      />

      {/* Footer */}
      <Footer />

    </div>
  )
}
