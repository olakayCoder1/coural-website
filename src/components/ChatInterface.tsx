'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ChatInterface() {


  return (
    <motion.div
      className=" rounded-2xl shadow-xl w-full h-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Image
        src="/images/chat-ui.png"
        alt="Chat UI"
        width={300}
        height={1}
        className=" rounded-t-2xl"

      />
   
    </motion.div>
  );
}