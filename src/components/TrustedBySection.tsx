"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companyLogos = [
  { src: "/images/company/prembly.png", alt: "Prembly" },
  { src: "/images/company/partners/kaleo.png", alt: "Freemarket" },
  { src: "/images/company/payrit.png", alt: "Payrit" },
  { src: "/images/company/partners/kuda.png", alt: "Talos" },
  { src: "/images/company/falconpay.png", alt: "Falconpay" },
  { src: "/images/company/rach-finance.png", alt: "Rach Finance" },
  { src: "/images/company/cashbuddy.png", alt: "cashbuddy" },
];

// Only showing three selected logos for partnership
const partnershipLogos = [
  { src: "/images/company/partners/kaleo.png", alt: "Kaleo Ventures" },
  { src: "/images/company/partners/kuda.png", alt: "Kuda Business" },
  {
    src: "/images/company/partners/africa-sme.png",
    alt: "Africa SME assembly",
  },
];

export default function TrustedBySection() {
  return (
    <motion.section
      className="py-10 sm:py-14 lg:py-20 lg:pb-10 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-animation {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#232937] text-sm sm:text-base lg:text-lg font-semibold mb-6 sm:mb-10 lg:mb-14 tracking-wide"
        >
          Trusted by leading businesses worldwide
        </motion.p>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex scroll-animation">
            {/* First set of logos */}
            {companyLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-4 sm:h-5 lg:h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companyLogos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-4 sm:h-5 lg:h-6 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto text-center mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#232937] text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-6 lg:mb-10 tracking-wide"
        >
          In partnership with
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {partnershipLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-10 sm:h-10 lg:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
