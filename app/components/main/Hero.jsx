
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Modern Elegance, Timeless Comfort",
    image: "/background.jpg",
    description: "A luxury living room with warm, modern tones."
  },
  {
    id: 2,
    title: "Luxury Living Room Retreat",
    image: "/Luxury-Interior-Design-Living-Room-1080x675.webp",
    description: "A sophisticated living room with elegant design."
  },
  {
    id: 3,
    title: "Nordic Minimalism Meets Wabi-Sabi",
    image: "/mix-minimal-nordic-interior-design-with-japanese-wabi-sabi-style.jpg",
    description: "Minimalist nordic interior with Japanese wabi-sabi influence."
  },
  {
    id: 4,
    title: "Serene Luxury Bedroom Suite",
    image: "/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table.jpg",
    description: "A tranquil, high-end bedroom suite."
  },
  {
    id: 5,
    title: "Retro Chic Living Space",
    image: "/luxury-living-room-modern-elegance-comfort-generated-by-ai.jpg",
    description: "A stylish retro-inspired living room."
  }
]

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToProject = (index) => {
    setCurrentIndex(index)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${currentProject.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onClick={prevProject}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="md-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 transition-all duration-300 group-hover:bg-white/20 hidden md:flex">
          <ChevronLeft className="w-6 h-6 text-white" />
        </div>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onClick={nextProject}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 transition-all duration-300 group-hover:bg-white/20 hidden md:flex">
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </motion.button>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-8">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
              style={{ fontFamily: 'serif' }}
            >
              {currentProject.title}
            </motion.h1>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-24 h-px bg-white/50 mx-auto"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-8 z-20"
      >
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-4 text-white/70 text-sm font-light"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70 text-sm font-light tracking-wider"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="rotate-90 text-xs">SCROLL</span>
            <div className="w-px h-8 bg-white/30" />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
    </div>
  )
}

export default HeroSection