'use client';

import { motion } from 'framer-motion';
import BadgeWithImage from './BadgeWithImage';

export default function TestimonialsSection() {
  // Left column testimonials (scrolling up)
  const leftColumnTestimonials = [
    {
      id: 1,
      name: 'Amber Arnessia',
      date: 'May 16, 2024',
      rating: 5,
      text: 'Cuoral has completely transformed how we communicate with our customers. Before, our support channels were scattered and response times were inconsistent. Now, everything happens in one organized dashboard — our team collaborates faster, and our clients feel genuinely heard and supported.',
      avatar: '/images/avatar-1.jpg'
    },
    {
      id: 2,
      name: 'Amber Arnessia',
      date: 'May 16, 2024',
      rating: 5,
      text: 'Cuoral has completely transformed how we communicate with our customers. Before, our support channels were scattered and response times were inconsistent. Now, everything happens in one organized dashboard — our team collaborates faster, and our clients feel genuinely heard and supported.',
      avatar: '/images/avatar-2.jpg'
    },
    {
      id: 3,
      name: 'Amber Arnessia',
      date: 'May 16, 2024',
      rating: 5,
      text: '"Their platform has completely transformed how we handle transactions. The process is now incredibly smooth, and we\'ve seen significant improvements in efficiency management."',
      avatar: '/images/avatar-3.jpg'
    }
  ];

  // Right column testimonials (scrolling down)
  const rightColumnTestimonials = [
    {
      id: 4,
      name: 'Amber Arnessia',
      date: 'May 16, 2024',
      rating: 5,
      text: 'Cuoral has completely transformed how we communicate with our customers. Before, our support channels were scattered and response times were inconsistent. Now, everything happens in one organized dashboard — our team collaborates faster, and our clients feel genuinely heard and supported.',
      avatar: '/images/avatar-4.jpg'
    },
    {
      id: 5,
      name: 'Amber Arnessia',
      date: 'May 16, 2024',
      rating: 5,
      text: 'Cuoral has completely transformed how we communicate with our customers. Before, our support channels were scattered and response times were inconsistent. Now, everything happens in one organized dashboard — our team collaborates faster, and our clients feel genuinely heard and supported.',
      avatar: '/images/avatar-5.jpg'
    },
    {
      id: 6,
      name: 'Amber Arnessia',
      date: 'May 16, 2024',
      rating: 5,
      text: 'Cuoral has completely transformed how we communicate with our customers. Before, our support channels were scattered and response times were inconsistent. Now, everything happens in one organized dashboard — our team collaborates faster, and our clients feel genuinely heard and supported.',
      avatar: '/images/avatar-6.jpg'
    }
  ];

  // Duplicate arrays for infinite scrolling
  const duplicatedLeftColumn = [...leftColumnTestimonials, ...leftColumnTestimonials];
  const duplicatedRightColumn = [...rightColumnTestimonials, ...rightColumnTestimonials];

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial }: { testimonial: typeof leftColumnTestimonials[0] }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg min-h-[280px] flex flex-col">
      {/* Profile and Rating */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-[#0c2857]">
          {testimonial.name}
        </h4>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-[#232937] leading-relaxed mb-6 flex-1">
        {testimonial.text}
      </p>

      {/* Name and Date */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-900">
          {testimonial.date}
        </span>
      </div>
    </div>
  );

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-orange-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className=" mx-auto">
        {/* Badge */}
        <div className="text-center mb-8">
          <BadgeWithImage text="Testimonials" />
        </div>

        {/* Header */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#0c2857] text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What Our Customers Say
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-[#232937] text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real stories from teams using Cuoral to build reliability, strengthen trust and stay closer to their customers in every moment that matters.
        </motion.p>

        {/* Animated Testimonials Columns */}
        <div className="relative h-[600px] overflow-hidden bg-blue-50">
          {/* Top Fade */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto h-full">
            {/* Left Column - Scrolling Up */}
            <motion.div
              className="flex flex-col gap-6"
              animate={{
                y: [0, -50 * leftColumnTestimonials.length]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {duplicatedLeftColumn.map((testimonial, index) => (
                <TestimonialCard key={`left-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>

            {/* Right Column - Scrolling Down */}
            <motion.div
              className="flex flex-col gap-6"
              animate={{
                y: [-50 * rightColumnTestimonials.length, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {duplicatedRightColumn.map((testimonial, index) => (
                <TestimonialCard key={`right-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}