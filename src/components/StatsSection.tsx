'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      number: '2k+',
      description: 'Trusted by users'
    },
    {
      number: '95%',
      description: 'Trusted by users'
    },
    {
      number: '175+',
      description: 'Trusted by users'
    },
    {
      number: '200+',
      description: 'Global Reach'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}