'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BadgeWithImage from './BadgeWithImage';
import { Button } from './Button';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: "Finance",
      date: "Oct 10, 2025",
      author: "John Doe",
      title: "Smart Payment Management For Task Automation.",
      description: "Track and optimize all your transactions from one centralized dashboard.",
      image: "/images/blog-image.avif",
      readMoreLink: "#"
    },
    {
      id: 2,
      category: "Finance",
      date: "Oct 10, 2025",
      author: "John Doe",
      title: "Smart Payment Management For Task Automation.",
      description: "Track and optimize all your transactions from one centralized dashboard.",
      image: "/images/blog-image.avif",
      readMoreLink: "#"
    },
    {
      id: 3,
      category: "Finance",
      date: "Oct 10, 2025",
      author: "John Doe",
      title: "Smart Payment Management For Task Automation.",
      description: "Track and optimize all your transactions from one centralized dashboard.",
      image: "/images/blog-image.avif",
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Row - Two Blog Posts */}
          {blogPosts.slice(0, 2).map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden transition-shadow duration-300 h-[200px] flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Blog Post Image */}
              <div className="relative w-[250px] h-full flex-shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <BadgeWithImage  
                  text={post.category}  
                  extendBaseClass={true} 
                  className=' text-gray-700 py-1 px-2 rounded-full'
                  imageClassName='w-3 h-3 mr-2'
                  />
                </div>
              </div>

              {/* Blog Post Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Date and Author */}
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">|</span>
                    <span>By {post.author}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {post.description}
                  </p>
                </div>

                {/* Read More Link */}
                <a
                  href={post.readMoreLink}
                  className="inline-flex items-center font-medium transition-colors duration-200 text-sm"
                >
                  Read More
                </a>
              </div>
            </motion.article>
          ))}

          {/* Bottom Row - Third Blog Post */}
          <motion.article
            className="bg-white rounded-2xl overflow-hidden transition-shadow duration-300 h-[200px] flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Blog Post Image */}
            <div className="relative w-[250px]  h-full flex-shrink-0 overflow-hidden  rounded-2xl">
              <Image
                src={blogPosts[2].image}
                alt={blogPosts[2].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Category Badge Overlay */}
              
              <div className="absolute top-4 left-4">
                <BadgeWithImage  
                text={blogPosts[2].category}  
                extendBaseClass={true} 
                className=' text-gray-700'
                />
              </div>
            </div>

            {/* Blog Post Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Date and Author */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blogPosts[2].date}</span>
                  <span className="mx-2">|</span>
                  <span>By {blogPosts[2].author}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {blogPosts[2].title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {blogPosts[2].description}
                </p>
              </div>

              {/* Read More Link */}
              <a
                href={blogPosts[2].readMoreLink}
                className="inline-flex items-center  font-medium transition-colors duration-200 text-sm"
              >
                Read More
          
              </a>
            </div>
          </motion.article>

          {/* Bottom Right - Explore More Section */}
          <motion.div
            className="bg-blue-50 rounded-2xl p-4 flex flex-col  h-[200px] space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Left side - Icon and Content */}
            <Image
              src="/images/icons/explore-blog.svg.png"
              alt="Explore Blog"
              width={40}
              height={40}
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
            />
            <div className="flex items-center justify-between gap-4 flex-1">
              {/* Blue Icon - Simple Square/Cube */}
              {/* Text Content */}
              <div className=' max-w-2/4'>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Want to read more blogs?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our platform is crafted to deliver seamless functionality across every touchpoint.
                </p>
              </div>
              <div className="ml-6">
              <Button>Explore More</Button>
            </div>
            </div>

            {/* Right side - Button */}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}