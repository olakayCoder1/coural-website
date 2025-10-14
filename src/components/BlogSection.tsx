'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BadgeWithImage from './BadgeWithImage';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: "Finance",
      date: "Oct 10, 2025",
      author: "John Doe",
      title: "Smart Payment Management For Task Automation",
      description: "Track and optimize all your transactions from one centralized dashboard.",
      image: "/images/chat-ui.png",
      readMoreLink: "#"
    },
    {
      id: 2,
      category: "Finance",
      date: "Oct 10, 2025",
      author: "John Doe",
      title: "Smart Payment Management For Task Automation",
      description: "Track and optimize all your transactions from one centralized dashboard.",
      image: "/images/chat-ui.png",
      readMoreLink: "#"
    },
    {
      id: 3,
      category: "Finance",
      date: "Oct 10, 2025",
      author: "John Doe",
      title: "Smart Payment Management For Task Automation",
      description: "Track and optimize all your transactions from one centralized dashboard.",
      image: "/images/chat-ui.png",
      readMoreLink: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="mb-8">
            <BadgeWithImage text="Recent Blog" />
          </div>

          {/* Header */}
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Recent Blog Updates
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose a plan that fits your business needs and budget. No hidden fees, no surprises - just straightforward pricing.
          </motion.p>
        </div>

        {/* Blog Posts and Explore More Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Row - Two Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-2">
            {blogPosts.slice(0, 2).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {/* Blog Post Image */}
                <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                      </svg>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Post Content */}
                <div className="p-6 flex-1 flex flex-col">

                  {/* Date and Author */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">|</span>
                    <span>By {post.author}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={post.readMoreLink}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 mt-auto"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Row - Third Blog Post */}
          <motion.article
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Blog Post Image */}
            <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden">
              <Image
                src={blogPosts[2].image}
                alt={blogPosts[2].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Category Badge Overlay */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                  {blogPosts[2].category}
                </span>
              </div>
            </div>

            {/* Blog Post Content */}
            <div className="p-6 flex-1 flex flex-col">

              {/* Date and Author */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{blogPosts[2].date}</span>
                <span className="mx-2">|</span>
                <span>By {blogPosts[2].author}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {blogPosts[2].title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                {blogPosts[2].description}
              </p>

              {/* Read More Link */}
              <a
                href={blogPosts[2].readMoreLink}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 mt-auto"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-1"
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
              </a>
            </div>
          </motion.article>

          {/* Bottom Right - Explore More Section */}
          <motion.div
            className="bg-blue-50 rounded-2xl p-8 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Blue Icon */}
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Want to read more blogs?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our platform is crafted to deliver seamless functionality across every touchpoint.
              </p>
            </div>

            {/* Explore More Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 self-start">
              Explore More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}