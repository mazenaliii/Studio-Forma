'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'   
import { useRef } from 'react'
import TestimonialCard from '../ui/feedback'



const FeedbackSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })


  const testimonials = [
    {
      id: 1,
      name: "Mrs. Alyaa Ahmed",
      role: "Homeowner",
      quote: "Elegant, functional, and deeply thoughtful. Exceeded our expectations.",
      avatar: "/images.jpeg"
    },
    {
      id: 2,
      name: "Eng. David Mesaa",
      role: "Developer",
      quote: "They understood our vision better than we did.",
      avatar: "/922833.jpg"
    },
    {
      id: 3,
      name: "Mr. Mohammed Atta",
      role: "Business Owner",
      quote: "Calm environments where execution meets highly recommend.",
      avatar: "/360_F_302945354_dqIiUiITKpard7fBVKDLtffIqnkDbyo4.jpg"
    },
    {
      id: 4,
      name: "Dr. Ahmed Elkholy",
      role: "Medical Professional",
      quote: "Minimalism with meaning. Loved every detail.",
      avatar: "/portrait-serious-dark-haired-adult-600nw-2292600129.webp"
    }
  ]

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="bg-[#2d2419] text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-px bg-white/30"></div>
            <h2 className="text-sm font-light tracking-[0.3em] text-white/70 uppercase">
              Feedback
            </h2>
            <div className="w-12 h-px bg-white/30"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection;