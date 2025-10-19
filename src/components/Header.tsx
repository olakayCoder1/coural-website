'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './Button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigationItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Developer" }
  ]

  return (
    <header className="relative z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Curoal"
              width={120}
              height={32}
              className="h-6 sm:h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 bg-white rounded-full px-6 py-2 shadow-xl">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#232937] hover:text-[#0c2857] font-medium py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:block">
            <Button className="text-sm lg:text-base px-4 lg:px-6">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl"
            aria-label="Toggle mobile menu"
          >
            <div className="flex flex-col justify-center items-center w-5 h-5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-[#232937] transition-all duration-200"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 bg-[#232937] mt-1 transition-all duration-200"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-[#232937] mt-1 transition-all duration-200"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <nav className="py-4">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block px-6 py-3 text-[#232937] hover:text-[#0c2857] hover:bg-gray-50 font-medium transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigationItems.length * 0.1 }}
                    className="px-6 pt-4 pb-2"
                  >
                    <Button className="w-full justify-center">Get Started</Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}