'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaRulerCombined, FaHome, FaUsers } from 'react-icons/fa';

const StudioFormaServices = () => {
  const services = [
    {
      icon: <FaRulerCombined className="w-12 h-12 text-[#946534]" />,
      title: "Architectural Design",
      description: "We provide comprehensive architectural design services encompassing residential, commercial, and industrial projects. Our team excels in creating innovative and sustainable design solutions that harmonize functionality with aesthetic appeal, ensuring every project meets and exceeds client expectations."
    },
    {
      icon: <FaHome className="w-12 h-12 text-[#946534]" />,
      title: "Interior Design",
      description: "Our interior designers blend form, function, timeless, and deeply personal elements. From furniture layout to lighting solutions, every detail is meticulously planned to create spaces that express your unique personality and reflect the client's identity."
    },
    {
      icon: <FaUsers className="w-12 h-12 text-[#946534]" />,
      title: "Design Consultation",
      description: "We provide personalized consultations that help you navigate the complexities of design decisions. With our consultations, you gain access to expert advice that will transform your space and save you time, money and achieve your desired aesthetic while adhering to your budget."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-900/20 to-stone-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-[#946534] text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            OUR SERVICES
          </motion.h3>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light font-playfair text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            What We Offer
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#946534] mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 h-full hover:border-amber-400/30 transition-colors duration-300"
                variants={hoverVariants}
              >
                <motion.div
                  className="mb-6 relative"
                  variants={iconVariants}
                >
                  <div className="w-20 h-20 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-amber-400/5 rounded-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.1, 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>

                <motion.h3 
                  className="text-2xl font-light text-white mb-4 group-hover:text-[#946534] transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-stone-300 leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400/20 rounded-full group-hover:bg-amber-[#946534] transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-amber-[##946534] rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.4 + i * 0.1,
                  duration: 0.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioFormaServices;