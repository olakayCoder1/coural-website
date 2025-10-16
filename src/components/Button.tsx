"use client";

import { motion, Variants } from "framer-motion";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const primaryBackgroundVariant: Variants = {
  initial: {
    backgroundColor: "#3b82f6",
  },
  hover: {
    backgroundColor: "#0c2857",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
  animate: {
    backgroundColor: "#3b82f6",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

const secondaryBackgroundVariant: Variants = {
  initial: {
    backgroundColor: "#ffffff",
  },
  hover: {
    backgroundColor: "#0c2857",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
  animate: {
    backgroundColor: "#ffffff",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};


const primaryFirstTextVariant: Variants = {
  initial: {
    y: 0,
    color: "#ffffff",
  },
  hover: {
    y: -20,
    color: "#ffffff",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
  animate: {
    y: 0,
    color: "#ffffff",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

const primarySecondTextVariant: Variants = {
  initial: {
    y: 20,
    color: "#dbeafe",
  },
  hover: {
    y: 0,
    color: "#dbeafe",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
  animate: {
    y: 20,
    color: "#dbeafe",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

const secondaryFirstTextVariant: Variants = {
  initial: {
    y: 0,
    color: "#0c2857",
  },
  hover: {
    y: -20,
    color: "#ffffff",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
  animate: {
    y: 0,
    color: "#0c2857",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

const secondarySecondTextVariant: Variants = {
  initial: {
    y: 20,
    color: "#dbeafe",
  },
  hover: {
    y: 0,
    color: "#dbeafe",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
  animate: {
    y: 20,
    color: "#dbeafe",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  const backgroundVariant = variant === 'primary' ? primaryBackgroundVariant : secondaryBackgroundVariant;
  const firstTextVariant = variant === 'primary' ? primaryFirstTextVariant : secondaryFirstTextVariant;
  const secondTextVariant = variant === 'primary' ? primarySecondTextVariant : secondarySecondTextVariant;
  
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      animate="animate"
      variants={backgroundVariant}
      className={`py-4 px-8 font-semibold cursor-pointer rounded-full ${variant === 'secondary' ? 'border border-gray-200' : ''}`}
      onClick={onClick}
    >
      <div className="overflow-hidden relative">
        <motion.p variants={firstTextVariant}>
          {children}
        </motion.p>
        <motion.p
          variants={secondTextVariant}
          aria-hidden
          className="absolute top-0 left-0"
        >
          {children}
        </motion.p>
      </div>
    </motion.button>
  );
};