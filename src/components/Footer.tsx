"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const productLinks = [
    { name: "Features", href: "/#features", target: "_self" },
    { name: "Pricing", href: "/#pricing", target: "_self" },
    { name: "Developer", href: "https://docs.cuoral.com/", target: "_blank" },
    {
      name: "Developer API",
      href: "https://docs.cuoral.com/",
      target: "_blank",
    },
    {
      name: "Integrations",
      href: "https://docs.cuoral.com/",
      target: "_blank",
    },
  ];

  const companyLinks = [
    { name: "Blog", href: "https://coural.medium.com/", target: "_blank" },
    { name: "Contact", href: "/contact-us", target: "_self" },
    { name: "About Us", href: "#", target: "_self" },
    { name: "Careers", href: "#", target: "_self" },
  ];

  const resourceLinks = [
    { name: "FAQs", href: "/faq", target: "_self" },
    { name: "Help Center", href: "#", target: "_self" },
    { name: "Cuoral VS Intercom", href: "/cuoral-intercom", target: "_self" },
    { name: "Cuoral VS Tawk.to", href: "/cuoral-tawkto", target: "_self" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://www.facebook.com/cuoralofficial",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      target: "_blank",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/cuoralofficial",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      target: "_blank",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/cuoralofficial",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.73.333 4.058.63c-.68.3-1.18.66-1.73 1.22-.55.55-.92 1.05-1.22 1.73-.297.672-.499 1.435-.558 2.652C.013 7.929 0 8.396 0 12.017c0 3.624.013 4.09.072 5.311.059 1.217.261 1.98.558 2.652.3.68.67 1.18 1.22 1.73.55.55 1.05.92 1.73 1.22.672.297 1.435.499 2.652.558C7.929 23.987 8.396 24 12.017 24c3.624 0 4.09-.013 5.311-.072 1.217-.059 1.98-.261 2.652-.558a4.994 4.994 0 001.73-1.22c.55-.55.92-1.05 1.22-1.73.297-.672.499-1.435.558-2.652.059-1.22.072-1.687.072-5.311 0-3.621-.013-4.088-.072-5.309-.059-1.217-.261-1.98-.558-2.652a4.994 4.994 0 00-1.22-1.73 4.994 4.994 0 00-1.73-1.22c-.672-.297-1.435-.499-2.652-.558C16.107.013 15.64 0 12.017 0zM12.017 2.163c3.557 0 3.983.014 5.388.072 1.3.059 2.006.277 2.477.46.622.242 1.067.532 1.533.998.466.466.756.911.998 1.533.183.471.401 1.177.46 2.477.058 1.405.072 1.831.072 5.388 0 3.557-.014 3.983-.072 5.388-.059 1.3-.277 2.006-.46 2.477a4.13 4.13 0 01-.998 1.533 4.13 4.13 0 01-1.533.998c-.471.183-1.177.401-2.477.46-1.405.058-1.831.072-5.388.072-3.557 0-3.983-.014-5.388-.072-1.3-.059-2.006-.277-2.477-.46a4.13 4.13 0 01-1.533-.998 4.13 4.13 0 01-.998-1.533c-.183-.471-.401-1.177-.46-2.477-.058-1.405-.072-1.831-.072-5.388 0-3.557.014-3.983.072-5.388.059-1.3.277-2.006.46-2.477.242-.622.532-1.067.998-1.533a4.13 4.13 0 011.533-.998c.471-.183 1.177-.401 2.477-.46 1.405-.058 1.831-.072 5.388-.072z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8z"
            clipRule="evenodd"
          />
          <path d="M19.846 5.595a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
        </svg>
      ),
      target: "_blank",
    },
    {
      name: "Linkedln",
      href: "https://www.linkedin.com/company/cuoral",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.225 0H1.775C.795 0 0 .795 0 1.775v20.45c0 .98.795 1.775 1.775 1.775h20.45c.98 0 1.775-.795 1.775-1.775V1.775C24 .795 23.205 0 22.225 0zM7.207 19.071H3.9v-9.597h3.307v9.597zm-1.654-10.735c-1.04 0-1.875-.854-1.875-1.876 0-1.04.835-1.875 1.875-1.875 1.04 0 1.875.835 1.875 1.875 0 1.022-.835 1.876-1.875 1.876zm13.654 10.735h-3.308v-5.356c0-1.276-.022-2.918-1.776-2.918-1.776 0-2.055 1.387-2.055 2.83v5.444h-3.308v-9.597h3.176v1.306h.045c.446-.839 1.537-1.727 3.114-1.727 3.33 0 3.94 2.196 3.94 5.05v4.968z" />
        </svg>
      ),
      target: "_blank",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo-dark.svg"
                  alt="Curoal"
                  width={120}
                  height={32}
                  className="h-5 sm:h-6 w-auto"
                />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#232937] mb-6 lg:mb-12 max-w-sm leading-relaxed">
                Cuoral is where customer confidence meets intelligence,
                empowering businesses to detect, understand and resolve friction
                before trust breaks.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.target}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-[#232937] hover:text-[#0c2857] transition-colors duration-200"
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
            <h3 className="text-base sm:text-lg font-semibold text-[#0c2857] mb-3 sm:mb-4">
              Product
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.target}
                    className="text-sm sm:text-base text-[#232937] hover:text-[#0c2857] transition-colors duration-200"
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
            <h3 className="text-base sm:text-lg font-semibold text-[#0c2857] mb-3 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.target}
                    className="text-sm sm:text-base text-[#232937] hover:text-[#0c2857] transition-colors duration-200"
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
            <h3 className="text-base sm:text-lg font-semibold text-[#0c2857] mb-3 sm:mb-4">
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.target}
                    className="text-sm sm:text-base text-[#232937] hover:text-[#0c2857] transition-colors duration-200"
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
          className="border-t border-gray-200 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Copyright */}
          <p className="text-sm sm:text-base text-[#232937] text-center md:text-left">
            2025 Cuoral. All rights reserved
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
            <a
              href="/privacy-policy"
              className="text-sm sm:text-base text-[#232937] hover:text-[#0c2857] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/term-of-service"
              className="text-sm sm:text-base text-[#232937] hover:text-[#0c2857] transition-colors duration-200"
            >
              Terms Of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
