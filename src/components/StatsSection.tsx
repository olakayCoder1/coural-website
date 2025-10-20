'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
}

// Function to parse number and suffix from stat strings
function parseStatNumber(statString: string) {
  const match = statString.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (match) {
    return {
      number: parseFloat(match[1]),
      suffix: match[2]
    };
  }
  return { number: 0, suffix: statString };
}

// Individual stat item component to properly use hooks
function StatItem({ stat, index, isInView }: { stat: { number: string; description: string }, index: number, isInView: boolean }) {
  const { number, suffix } = parseStatNumber(stat.number);
  const animatedCount = useCountUp(number, 2000 + index * 200, isInView);
  
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0c2857] mb-2 sm:mb-3">
        {animatedCount}{suffix}
      </div>
      <div className="text-xs sm:text-sm lg:text-base text-gray-600 px-2">
        {stat.description}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: '20M+',
      description: 'Messages analyzed'
    },
    {
      number: '95%',
      description: 'Detection accuracy'
    },
    {
      number: '175+',
      description: 'Businesses onboarded'
    },
    {
      number: '6+',
      description: 'Countries served'
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              stat={stat} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}