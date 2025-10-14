'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  ChatBubbleLeftRightIcon, 
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline'

interface FeatureCardProps {
  id: number
  icon: string
  title: string
  description: string
  bgColor: string
  iconColor: string
}

const iconMap = {
  robot: CpuChipIcon,
  chat: ChatBubbleLeftRightIcon,
  analytics: ChartBarIcon,
  integration: CogIcon,
  security: ShieldCheckIcon,
  support: LifebuoyIcon
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  bgColor, 
  iconColor 
}: FeatureCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || CogIcon

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className={`w-8 h-8 ${iconColor}`} />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Arrow */}
      <motion.div
        className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <span className="text-sm font-medium mr-2">Learn more</span>
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}