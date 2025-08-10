
'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GalleryCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[4/3] mb-4">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
        
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 text-white text-xs font-light tracking-wider uppercase border border-white/20">
          {project.month}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="space-y-3"
      >
        <h3 className="text-white text-lg font-light leading-relaxed">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm font-light leading-relaxed line-clamp-4">
          {project.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default GalleryCard;