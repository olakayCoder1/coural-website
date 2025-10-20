"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BadgeWithImage from "./BadgeWithImage";
import Image from "next/image";

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    margin: "-100px 0px -100px 0px",
  });

  const steps = [
    {
      step: "Step 1",
      title: "Create Your Workspace",
      description:
        "Set up your Cuoral dashboard and connect your existing platforms & tools, from website to mobile app to CRM and start capturing the full customer journey in one streamlined view.",
      icon: "/images/icons/webpage-list.gif",
      // use background gradient
      bgColor: "bg-gradient-to-r from-blue-100/50 to-blue-200/50",
      iconColor: "text-blue-500",
    },
    {
      step: "Step 2",
      title: "See What Your Users See",
      description:
        "Replay user sessions, visualize friction in real time, and detect silent issues before they become visible complaints. Every click, delay and interaction becomes actionable insight.",
      icon: "/images/icons/view.gif",
      // use background gradient
      bgColor: "bg-gradient-to-r from-red-100/50 to-red-200/50",
      iconColor: "text-red-500",
    },
    {
      step: "Step 3",
      title: "Act, Learn and Iterate",
      description:
        "Turn intelligence into growth. Resolve issues faster, automate recovery and measure the impact of every fix with data that strengthens trust and long-term retention.",
      icon: "/images/icons/a-b.gif",
      // use background gradient
      bgColor: "bg-gradient-to-r from-green-100/50 to-green-200/50",
      iconColor: "text-green-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12 sm:mb-16 lg:mb-20">
          <BadgeWithImage text="How it Works" />

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-0">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where Insight Meets
              <br />
              Connection
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-[#232937] max-w-sm lg:mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From detection to resolution, Cuoral keeps every user interaction
              reliable, transparent and trusted
            </motion.p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`${step.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-left relative min-h-[400px] sm:h-[450px] flex flex-col overflow-hidden`}
              initial={{
                opacity: 0,
                scale: 0.8,
                rotateY: -15,
                z: -index * 20,
                x: index * 30,
                y: index * 10,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.8,
                rotateY: isInView ? 0 : -15,
                z: isInView ? 0 : -index * 20,
                x: isInView ? 0 : index * 30,
                y: isInView ? 0 : index * 10,
              }}
              transition={{
                duration: 0.3,
                delay: isInView ? 0.1 + index * 0.2 : index * 0.1,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Step Badge */}
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : -30,
                  scale: isInView ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.6,
                  delay: isInView ? 0.8 + index * 0.3 : 0,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <BadgeWithImage
                  text={step.step}
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-white border border-gray-100 rounded-full text-gray-700 text-xs sm:text-sm font-medium mb-8 sm:mb-12 shadow-md w-fit"
                />
              </motion.div>

              {/* Icon */}
              <motion.div
                className="flex justify-center mb-5 sm:mb-10"
                initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0,
                  rotateZ: isInView ? 0 : -180,
                }}
                transition={{
                  duration: 0.7,
                  delay: isInView ? 1.1 + index * 0.3 : 0,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                    className="w-6 sm:w-8 h-6 sm:h-8"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="mt-auto text-center"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 30,
                  scale: isInView ? 1 : 0.9,
                }}
                transition={{
                  duration: 0.6,
                  delay: isInView ? 1.4 + index * 0.3 : 0,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#0c2857] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#232937] text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
