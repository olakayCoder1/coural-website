'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChatInterfaceWhyChooseUs() {
  return (
    <motion.div
      className="rounded-2xl shadow-2xl bg-white overflow-hidden  mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Image
        src="/images/chat-ui.png"
        alt="Chat UI"
        width={6000}
        height={450}
        className="w-full h-auto object-contain"
        priority
      />
    </motion.div>
  );
}