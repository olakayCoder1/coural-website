import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cuoral - Proactive Customer Success Platform",
    template: "%s | Cuoral",
  },
  description:
    "Cuoral helps businesses shift from reactive support to proactive engagement. Reduce silent churn, automate issue resolution, and turn feedback into insights - all in one AI-powered customer experience platform.",
  keywords: [
    "Cuoral",
    "AI customer engagement",
    "customer experience automation",
    "silent churn detection",
    "AI support platform",
    "CX analytics",
    "customer feedback intelligence",
    "business growth automation",
    "Customer experience platform",
    "Customer Support platform for africa",
    "Customer Support charging Naira",
  ],
  metadataBase: new URL("https://cuoral.com"),
  alternates: {
    canonical: "https://cuoral.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cuoral.com",
    title: "Cuoral - Proactive Customer Success Platform",
    description:
      "Transform customer support into proactive engagement. Cuoral uses AI to detect silent churn, automate responses, and turn every conversation into growth insight.",
    siteName: "Cuoral",
    images: [
      {
        url: "https://cuoral.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cuoral – AI-Powered Customer Experience Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuoral - Proactive Customer Success Platform",
    description:
      "Cuoral helps businesses reduce churn and automate engagement through intelligent AI-driven customer experience tools.",
    creator: "@cuoralofficial",
    images: ["https://cuoral.com/og-image.jpg"],
  },
  icons: {
    icon: "/cuoral.png",
    shortcut: "/cuoral.png",
    apple: "/cuoral.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Customer Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}

        <Script
          src="https://js.cuoral.com/inline.js"
          strategy="afterInteractive"
          defer
          data-cuoral-key="c8e3081e-8dfc-49b5-bbd1-4ef513504d88"
        />
      </body>
    </html>
  );
}
