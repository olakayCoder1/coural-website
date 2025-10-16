

import { Slack, Facebook } from "lucide-react"
import Image from "next/image"

export default function CuoralHero() {
  const icons = [
    { type: "slack", Icon: Slack },
    { type: "facebook", Icon: Facebook },
    { type: "facebook", Icon: Facebook },
    { type: "facebook", Icon: Facebook },
    { type: "facebook", Icon: Facebook },
    { type: "whatsapp", Icon: Facebook },
    { type: "whatsapp", Icon: Facebook },
    { type: "slack", Icon: Slack },
    { type: "facebook", Icon: Facebook },
    { type: "facebook", Icon: Facebook },
  ]

  return (
    <div className="flex items-center justify-center px-4 py-8 ">
        <div className="relative flex items-center ">
            <div className="relative flex items-center gap-6 overflow-hidden min-h-[12rem]">
            {/* Animated scrolling track */}
            <div className="flex animate-scroll-left items-center gap-6">
                {/* First set of icons */}
                {icons.map((icon, index) => (
                <div
                    key={`set1-${index}`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg"
                >
                    <icon.Icon
                    className={
                        icon.type === "slack"
                        ? "h-6 w-6 text-[#E01E5A]"
                        : icon.type === "whatsapp"
                            ? "h-6 w-6 text-[#25D366]"
                            : "h-6 w-6 text-[#1877F2]"
                    }
                    />
                </div>
                ))}
            </div>

            {/* Central Cuoral Element - positioned absolutely to stay centered */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <Image
                src="/images/social-globe.png"
                alt="Cuoral Logo"
                width={360}
                height={360}
                className=" h-36 w-[250px]"
                priority
                />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex animate-scroll-left items-center gap-6">
                {icons.map((icon, index) => (
                <div
                    key={`set2-${index}`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg"
                >
                    <icon.Icon
                    className={
                        icon.type === "slack"
                        ? "h-6 w-6 text-[#E01E5A]"
                        : icon.type === "whatsapp"
                            ? "h-6 w-6 text-[#25D366]"
                            : "h-6 w-6 text-[#1877F2]"
                    }
                    />
                </div>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}
