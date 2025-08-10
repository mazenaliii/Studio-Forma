'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.15
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group"
    >
      <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
        <div className="flex-shrink-0">
          <div 
            className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white/20"
            style={{
              backgroundImage: `url(${testimonial.avatar})`
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-3">
            <h4 className="text-white font-medium text-sm">
              {testimonial.name}
            </h4>
            <p className="text-white/60 text-xs font-light">
              {testimonial.role}
            </p>
          </div>
          
          <blockquote className="text-white/80 text-sm font-light leading-relaxed italic">
            "{testimonial.quote}"
          </blockquote>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard; 