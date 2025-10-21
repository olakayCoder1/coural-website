"use client"

import Image from "next/image"
import { motion } from "framer-motion"


export default function CuoralHero() {
  const icons = [
    { type: "slack", src: "/images/integrations/slack.png", alt: "Slack" },
    { type: "jira", src: "/images/integrations/jira.png", alt: "Jira" },
    { type: "github", src: "/images/integrations/github.png", alt: "GitHub" },
    { type: "paypal", src: "/images/integrations/PayPal.png", alt: "PayPal" },
    { type: "atlassian", src: "/images/integrations/atlassian.png", alt: "Atlassian" },
    { type: "confluence", src: "/images/integrations/confluence.png", alt: "Confluence" },
    { type: "dropbox", src: "/images/integrations/dropbox.png", alt: "Dropbox" },
    { type: "google", src: "/images/integrations/google.png", alt: "Google" },
    { type: "chatgpt", src: "/images/integrations/chatgpt.png", alt: "ChatGPT" },
    { type: "skype", src: "/images/integrations/skype.png", alt: "Skype" },
    { type: "freemarket", src: "/images/integrations/Freemarket.png", alt: "Freemarket" },
    { type: "talos", src: "/images/integrations/Talos logo.png", alt: "Talos" },
  ]

  const tripleIcons = [...icons, ...icons, ...icons, ...icons, ...icons]

  const scrollVariants = {
    animate: {
      x: [-1200, -3000],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop", // ✅ Fix: Cast as RepeatType
      },
    },
  }

  return (
    <div className="flex items-center justify-center px-4 py-8 w-full overflow-hidden">
      <div className="relative flex items-center w-full">
        <div className="relative flex items-center gap-6 overflow-hidden min-h-[12rem] w-full">
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            // @ts-expect-error
            variants={scrollVariants}
            animate="animate"
            initial={{ x: 0 }}
          >
            {tripleIcons.map((icon, index) => (
              <div
                key={`icon-${index}`}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg p-2"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Central Cuoral Element */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/social-globe.png"
              alt="Cuoral Logo"
              width={360}
              height={360}
              className="h-40 w-[250px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
