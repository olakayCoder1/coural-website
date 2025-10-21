"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import BadgeWithImage from "./BadgeWithImage";
import { Button } from "./Button";

export default function BlogSection() {
  const headerRef = useRef(null);
  const headerControls = useAnimation();
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const postsRef = useRef(null);
  const postsControls = useAnimation();
  const postsInView = useInView(postsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerInView, headerControls]);

  useEffect(() => {
    if (postsInView) {
      postsControls.start("visible");
    }
  }, [postsInView, postsControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headerTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const blogPosts = [
    {
      id: 1,
      category: "Customer Experience",
      date: "Sept 25, 2025",
      author: "Cuoral Team",
      title:
        "The Silent Churn Epidemic: Why Your Users Leave Without Saying Goodbye",
      description:
        "Most customers don’t cancel, they quietly drift away. Here’s how data and behavior insights can help you catch them before they do.",
      image: "/images/blog-image.avif",
      readMoreLink: "https://cuoral.medium.com/",
    },
    {
      id: 2,
      category: "AI & Automation",
      date: "Oct 1, 2025",
      author: "Cuoral Team",
      title: "How AI Is Redefining Customer Support in Africa",
      description:
        "AI isn’t replacing support teams, it’s making them superhuman. Discover how intelligent automation is changing how businesses connect with customers.",
      image: "/images/3327755.jpg",
      readMoreLink: "https://cuoral.medium.com/",
    },
    {
      id: 3,
      category: "Growth & Retention",
      date: "Oct 10, 2025",
      author: "Cuoral Team",
      title:
        "From Feedback to Growth: Turning Customer Insights into Business Wins",
      description:
        "Every chat, click, and complaint hides an opportunity. Learn how to transform customer feedback into strategies that fuel retention and revenue.",
      image: "/images/2149346511.jpg",
      readMoreLink: "https://cuoral.medium.com/",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <motion.div
            initial="hidden"
            animate={headerControls}
            variants={containerVariants}
          >
            <motion.div variants={headerItemVariants} className="mb-6 lg:mb-8">
              <BadgeWithImage text="Recent Blog" />
            </motion.div>

            {/* Header */}
            <motion.h2
              variants={headerTitleVariants}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0c2857] mb-4 lg:mb-6 leading-tight"
            >
              Recent Insights
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={headerItemVariants}
              className="text-base sm:text-lg text-[#232937] leading-relaxed max-w-2xl mx-auto"
            >
              Explore fresh perspectives on Customer Intelligence, Trust Stack
              and Digital Experience. Ideas shaping how modern businesses
              connect and grow.
            </motion.p>
          </motion.div>
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          ref={postsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
          initial="hidden"
          animate={postsControls}
          variants={containerVariants}
        >
          {/* Top Row - Two Blog Posts */}
          {blogPosts.slice(0, 2).map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl lg:rounded-2xl overflow-hidden transition-shadow duration-300 h-auto sm:h-[200px] flex flex-col sm:flex-row"
              variants={postVariants}
            >
              {/* Blog Post Image */}
              <div className="relative w-full sm:w-[250px] h-48 sm:h-full flex-shrink-0 overflow-hidden rounded-xl lg:rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge Overlay */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <BadgeWithImage
                    text={post.category}
                    extendBaseClass={true}
                    className=" text-gray-700 py-1 px-2 rounded-full"
                    imageClassName="w-3 h-3 mr-2"
                  />
                </div>
              </div>

              {/* Blog Post Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Date and Author */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">|</span>
                    <span>By {post.author}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#232937] text-sm line-clamp-2 mb-3 sm:mb-4">
                    {post.description}
                  </p>
                </div>

                {/* Read More Link */}
                <a
                  href={post.readMoreLink}
                  className="inline-flex items-center font-medium transition-colors duration-200 text-sm text-[#232937]"
                >
                  Read More
                </a>
              </div>
            </motion.article>
          ))}

          {/* Bottom Row - Third Blog Post */}
          <motion.article
            className="bg-white rounded-xl lg:rounded-2xl overflow-hidden transition-shadow duration-300 h-auto sm:h-[200px] flex flex-col sm:flex-row"
            variants={postVariants}
          >
            {/* Blog Post Image */}
            <div className="relative w-full sm:w-[250px] h-48 sm:h-full flex-shrink-0 overflow-hidden rounded-xl lg:rounded-2xl">
              <Image
                src={blogPosts[2].image}
                alt={blogPosts[2].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Category Badge Overlay */}

              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <BadgeWithImage text={blogPosts[2].category} />
              </div>
            </div>

            {/* Blog Post Content */}
            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Date and Author */}
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  <span>{blogPosts[2].date}</span>
                  <span className="mx-2">|</span>
                  <span>By {blogPosts[2].author}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug">
                  {blogPosts[2].title}
                </h3>

                {/* Description */}
                <p className="text-[#232937] text-sm line-clamp-2 mb-3 sm:mb-4">
                  {blogPosts[2].description}
                </p>
              </div>

              {/* Read More Link */}
              <a
                href={blogPosts[2].readMoreLink}
                target="_blank"
                className="inline-flex items-center  font-medium transition-colors duration-200 text-sm text-[#232937]"
              >
                Read More
              </a>
            </div>
          </motion.article>

          {/* Bottom Right - Explore More Section */}
          <motion.div
            className="bg-blue-50 rounded-xl lg:rounded-2xl p-4 sm:p-4 flex flex-col h-auto sm:h-[200px] space-y-3 sm:space-y-4"
            variants={postVariants}
          >
            {/* Left side - Icon and Content */}
            <Image
              src="/images/icons/explore-blog.svg.png"
              alt="Explore Blog"
              width={40}
              height={40}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 flex-1">
              {/* Blue Icon - Simple Square/Cube */}
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Want to read more blogs?
                </h3>
                <p className="text-[#232937] text-sm leading-relaxed">
                  Our platform is crafted to deliver seamless functionality
                  across every touchpoint.
                </p>
              </div>
              <div className="sm:ml-6 flex-shrink-0">
                <Button
                  onClick={() =>
                    window.open("https://cuoral.medium.com", "_blank")
                  }
                >
                  Explore More
                </Button>
              </div>
            </div>

            {/* Right side - Button */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
