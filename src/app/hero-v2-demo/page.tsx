'use client';

import HeroV2 from '@/components/HeroV2';
import Header from '@/components/Header';

export default function HeroV2Demo() {
  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <Header />

      {/* Hero V2 Section - CTA Style with Background Layers */}
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
          text: "Empower your Business with AI-Powered Insights"
        }}
        title="Connect Better with<br />Your Customers"
        subtitle="Curoal helps businesses engage, support, and<br />grow with a unified customer platform."
        primaryButton={{
          text: "Try for Free",
          href: "https://app.cuoral.com/",
          target: "_blank"
        }}
        secondaryButton={{
          text: "Request a Demo",
          href: "https://calendly.com/team-cuoral/cuoral-meeting",
          target: "_blank"
        }}
        dashboardImage={{
          src: "/images/dashboard.svg",
          alt: "Curoal Dashboard Overview",
          width: 1200,
          height: 800
        }}
        showFloatingElements={true}
        className="pt-20"
      />
    </div>
  );
}