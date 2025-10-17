'use client'

import Image from 'next/image'
import { Button } from './Button'

export default function Header() {
  return (
    <header className="relative z-50 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Curoal"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 bg-white rounded-full px-6 py-2 shadow-sm border border-gray-100">
            <a href="#" className="text-[#232937] hover:text-[#0c2857] font-medium py-2 transition-colors">
              Home
            </a>
            <a href="#" className="text-[#232937] hover:text-[#0c2857] font-medium py-2 transition-colors">
              Features
            </a>
            <a href="#" className="text-[#232937] hover:text-[#0c2857] font-medium py-2 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-[#232937] hover:text-[#0c2857] font-medium py-2 transition-colors">
              Blog
            </a>
            <a href="#" className="text-[#232937] hover:text-[#0c2857] font-medium py-2 transition-colors">
              Developer
            </a>
          </nav>

          {/* CTA Button */}
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}