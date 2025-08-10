'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className=" text-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-white/30"></div>
                <h2 className="text-sm font-light tracking-[0.2em] text-white/70 uppercase">
                  About Us
                </h2>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg lg:text-xl font-playfair font-bold leading-relaxed">
                  At <span className="font-medium text-[#946534]">STUDIOFORMA</span>, we craft spaces that speak with 
                  intention and endure through time.
                </p>
                
                <p className="text-base lg:text-lg font-light font-playfair leading-relaxed text-white/80">
                  Based in Alexandria, we are a boutique 
                  architectural and interior design studio 
                  specializing in residential and high-scale 
                  commercial projects. Our work is rooted in 
                  calmness, clarity, and contextual beauty – 
                  blending modernist restraint with local material 
                  sensibility.
                </p>
                
                <p className="text-base lg:text-lg font-light font-playfair leading-relaxed text-white/80">
                  We believe architecture is more than just 
                  structure; it's atmosphere, rhythm, and 
                  emotion. Every project we undertake is 
                  treated as a dialogue between form and feeling – 
                  where design becomes both personal and poetic.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white/30 text-white px-8 py-3 text-sm font-light tracking-wider uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                Projects
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 text-sm font-light tracking-wider uppercase transition-all duration-300 hover:bg-white/20"
              >
                Fill Our Form
              </motion.button>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 lg:gap-6"
            >
              <motion.div
                variants={imageVariants}
                className="col-span-2 aspect-[4/3] overflow-hidden"
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: "url('/Luxury-Interior-Design-Living-Room-1080x675.webp')"
                  }}
                />
              </motion.div>

              <motion.div
                variants={imageVariants}
                className="aspect-square overflow-hidden"
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: "url('/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table.jpg')"
                  }}
                />
              </motion.div>

              <motion.div
                variants={imageVariants}
                className="aspect-square overflow-hidden"
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: "url('/mix-minimal-nordic-interior-design-with-japanese-wabi-sabi-style.jpg')"
                  }}
                />
              </motion.div>

              <motion.div
                variants={imageVariants}
                className="aspect-square overflow-hidden"
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: "url('/retro-living-room-interior-design.jpg')"
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="absolute -top-4 -right-4 w-20 h-20 border border-white/20 rounded-full hidden lg:block"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 border border-white/10 rounded-full hidden lg:block"
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-white/10 pt-12"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "8+", label: "Years Experience" },
            { number: "15+", label: "Awards Won" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center space-y-2"
            >
              <div className="text-2xl lg:text-3xl font-light text-white">
                {stat.number}
              </div>
              <div className="text-sm font-light text-white/60 tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection