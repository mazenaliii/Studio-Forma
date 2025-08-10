'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'


const ContactSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!')
    console.log('Form submitted:', formData)
  }

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

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className=" text-white py-16 lg:py-24">
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
              Contact Us
            </h2>
            <div className="w-12 h-px bg-white/30"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-white/70 text-sm font-light tracking-wider uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:border-white/70 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white/70 text-sm font-light tracking-wider uppercase">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:border-white/70 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white/70 text-sm font-light tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:border-white/70 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white/70 text-sm font-light tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:border-white/70 focus:outline-none transition-colors duration-300 resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-12 py-4 text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/20 hover:border-white/40 relative overflow-hidden group"
              >
                <span className="relative z-10">Send</span>
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://img.freepik.com/free-photo/male-office-worker-working-laptop-office_1163-5337.jpg')"
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-white/20 rounded-full hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-white/10 rounded-full hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;