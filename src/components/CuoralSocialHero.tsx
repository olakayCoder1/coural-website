// "use client"

// import { Slack, Facebook } from "lucide-react"
// import Image from "next/image"
// import { motion } from "framer-motion"

// export default function CuoralHero() {
//   const icons = [
//     { type: "slack", Icon: Slack },
//     { type: "facebook", Icon: Facebook },
//     { type: "whatsapp", Icon: Facebook },
//     { type: "facebook", Icon: Facebook },
//     { type: "facebook", Icon: Facebook },
//     { type: "whatsapp", Icon: Facebook },
//     { type: "facebook", Icon: Facebook },
//     { type: "whatsapp", Icon: Facebook },
//     { type: "whatsapp", Icon: Facebook },
//     { type: "slack", Icon: Slack },
//     { type: "facebook", Icon: Facebook },
//     { type: "whatsapp", Icon: Facebook },
//     { type: "facebook", Icon: Facebook },
//   ]

//   const doubledIcons = [...icons, ...icons]

//   const scrollVariants = {
//     animate: {
//       x: [0, -1200],
//       transition: {
//         duration: 25,
//         repeat: Number.POSITIVE_INFINITY,
//         ease: "linear",
//       },
//     },
//   }

//   return (
//     <div className="flex items-center justify-center px-4 py-8 w-full overflow-hidden">
//       <div className="relative flex items-center w-full">
//         <div className="relative flex items-center gap-6 overflow-hidden min-h-[12rem] w-full">
//           <motion.div
//             className="flex items-center gap-6 whitespace-nowrap"
//             variants={scrollVariants}
//             animate="animate"
//             initial={{ x: 0 }}
//           >
//             {doubledIcons.map((icon, index) => (
//               <div
//                 key={`icon-${index}`}
//                 className="flex gap-6 h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg"
//               >
//                 <icon.Icon
//                   className={
//                     icon.type === "slack"
//                       ? "h-10 w-10 text-[#E01E5A]"
//                       : icon.type === "whatsapp"
//                         ? "h-10 w-10 text-[#25D366]"
//                         : "h-10 w-10 text-[#1877F2]"
//                   }
//                 />
//               </div>
//             ))}
//           </motion.div>

//           {/* Central Cuoral Element - positioned absolutely to stay centered */}
//           <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
//             <Image
//               src="/images/social-globe.png"
//               alt="Cuoral Logo"
//               width={360}
//               height={360}
//               className=" h-36 w-[250px]"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client";

import { Slack, Facebook } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CuoralHero() {
  const icons = [
    { type: "slack", Icon: Slack },
    { type: "facebook", Icon: Facebook },
    { type: "whatsapp", Icon: Facebook },
    { type: "facebook", Icon: Facebook },
    { type: "facebook", Icon: Facebook },
    { type: "whatsapp", Icon: Facebook },
    { type: "facebook", Icon: Facebook },
    { type: "whatsapp", Icon: Facebook },
    { type: "whatsapp", Icon: Facebook },
    { type: "slack", Icon: Slack },
    { type: "facebook", Icon: Facebook },
    { type: "whatsapp", Icon: Facebook },
    { type: "facebook", Icon: Facebook },
  ];

  // Duplicate the icons to make the scrolling loop smoother
  const doubledIcons = [...icons, ...icons];

  // Framer Motion animation config
  const scrollVariants = {
    animate: {
      x: [0, -1200],
      transition: {
        duration: 25,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear" as const, // ✅ Type-safe easing
      },
    },
  };

  return (
    <div className="flex items-center justify-center px-4 py-8 w-full overflow-hidden">
      <div className="relative flex items-center w-full">
        <div className="relative flex items-center gap-6 overflow-hidden min-h-[12rem] w-full">
          {/* Scrolling icon strip */}
          <motion.div
            className="flex items-center gap-6 whitespace-nowrap"
            variants={scrollVariants}
            animate="animate"
            initial={{ x: 0 }}
          >
            {doubledIcons.map((icon, index) => (
              <div
                key={`icon-${index}`}
                className="flex gap-6 h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg"
              >
                <icon.Icon
                  className={
                    icon.type === "slack"
                      ? "h-10 w-10 text-[#E01E5A]"
                      : icon.type === "whatsapp"
                      ? "h-10 w-10 text-[#25D366]"
                      : "h-10 w-10 text-[#1877F2]"
                  }
                />
              </div>
            ))}
          </motion.div>

          {/* Central Globe Image */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/social-globe.png"
              alt="Cuoral Logo"
              width={360}
              height={360}
              className="h-36 w-[250px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
