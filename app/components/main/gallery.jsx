'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import GalleryCard from '../ui/projectPreviewCard'

const GallerySection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      month: "March",
      title: "Modern Minimalist Haven",
      description: "A serene, sunlit living room with minimalist decor and warm wood accents.",
      image: "/mix-minimal-nordic-interior-design-with-japanese-wabi-sabi-style.jpg"
    },
    {
      id: 2,
      month: "April",
      title: "Urban Loft Transformation",
      description: "A stylish loft with industrial touches and contemporary art.",
      image: "/retro-living-room-interior-design.jpg"
    },
    {
      id: 3,
      month: "May",
      title: "Sophisticated Living Space",
      description: "A luxury living room with plush seating and elegant lighting.",
      image: "/luxury-living-room-modern-elegance-comfort-generated-by-ai.jpg"
    },
    {
      id: 4,
      month: "August",
      title: "Contemporary Workspace",
      description: "A modern workspace with clean lines and calming tones.",
      image: "/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table.jpg"
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="bg-[#2d2419] text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-px bg-white/30"></div>
            <h2 className="text-sm font-light tracking-[0.3em] text-white/70 uppercase">
              Our Gallery
            </h2>
            <div className="w-12 h-px bg-white/30"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {projects.map((project, index) => (
            <GalleryCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white/30 text-white px-12 py-4 text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/50 relative overflow-hidden group"
          >
            <span className="relative z-10">Check More</span>
            <motion.div
              className="absolute inset-0 bg-white/5"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection