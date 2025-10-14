'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const productLinks = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Developer', href: '#' },
    { name: 'Developer API', href: '#' },
    { name: 'Integrations', href: '#' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const resourceLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'FAQs', href: '#' }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.73.333 4.058.63c-.68.3-1.18.66-1.73 1.22-.55.55-.92 1.05-1.22 1.73-.297.672-.499 1.435-.558 2.652C.013 7.929 0 8.396 0 12.017c0 3.624.013 4.09.072 5.311.059 1.217.261 1.98.558 2.652.3.68.67 1.18 1.22 1.73.55.55 1.05.92 1.73 1.22.672.297 1.435.499 2.652.558C7.929 23.987 8.396 24 12.017 24c3.624 0 4.09-.013 5.311-.072 1.217-.059 1.98-.261 2.652-.558a4.994 4.994 0 001.73-1.22c.55-.55.92-1.05 1.22-1.73.297-.672.499-1.435.558-2.652.059-1.22.072-1.687.072-5.311 0-3.621-.013-4.088-.072-5.309-.059-1.217-.261-1.98-.558-2.652a4.994 4.994 0 00-1.22-1.73 4.994 4.994 0 00-1.73-1.22c-.672-.297-1.435-.499-2.652-.558C16.107.013 15.64 0 12.017 0zM12.017 2.163c3.557 0 3.983.014 5.388.072 1.3.059 2.006.277 2.477.46.622.242 1.067.532 1.533.998.466.466.756.911.998 1.533.183.471.401 1.177.46 2.477.058 1.405.072 1.831.072 5.388 0 3.557-.014 3.983-.072 5.388-.059 1.3-.277 2.006-.46 2.477a4.13 4.13 0 01-.998 1.533 4.13 4.13 0 01-1.533.998c-.471.183-1.177.401-2.477.46-1.405.058-1.831.072-5.388.072-3.557 0-3.983-.014-5.388-.072-1.3-.059-2.006-.277-2.477-.46a4.13 4.13 0 01-1.533-.998 4.13 4.13 0 01-.998-1.533c-.183-.471-.401-1.177-.46-2.477-.058-1.405-.072-1.831-.072-5.388 0-3.557.014-3.983.072-5.388.059-1.3.277-2.006.46-2.477.242-.622.532-1.067.998-1.533a4.13 4.13 0 011.533-.998c.471-.183 1.177-.401 2.477-.46 1.405-.058 1.831-.072 5.388-.072z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8z" clipRule="evenodd" />
          <path d="M19.846 5.595a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-900">Cuoral</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 max-w-sm">
                Your Ultimate platform for proactive customer experience, giving you intelligence, engagement and friction alerts in real-time.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Copyright */}
          <p className="text-gray-600 mb-4 md:mb-0">
            2025 Cuoral. All rights reserved
          </p>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Terms Of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Cookie Settings
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}