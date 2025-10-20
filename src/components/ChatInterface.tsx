'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChatInterface() {
  return (
    <motion.div
      className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="relative w-full h-100 sm:h-96">
        <Image
          src="/images/2149346511.jpg"
          alt="Chat UI"
          fill
          className="object-cover"
        />
      </div>

 
    </motion.div>
  );
}
