'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrustedBySection() {
  return (
    <motion.section 
      className=" py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className=" mx-auto text-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#232937] text-lg font-semibold mb-16 tracking-wide"
        >
          Trusted by 73,000 + businesses worldwide
        </motion.p>
        
        <motion.div
          className="flex justify-center items-center opacity-60 hover:opacity-80 transition-opacity duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/business-logos.svg"
            alt="Trusted Companies"
            width={800}
            height={120}
            className="w-full h-auto mx-12"
          />
        </motion.div>
      </div>
      <div className=" mx-auto text-center mt-12">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#232937] text-lg font-semibold mb-16 tracking-wide"
        >
          In partnership with 
        </motion.p>
        
        <motion.div
          className="flex justify-center items-center opacity-60 hover:opacity-80 transition-opacity duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/business-logos.svg"
            alt="Trusted Companies"
            width={800}
            height={120}
            className="w-full h-auto mx-12"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}