'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance, FaDribbble, FaTwitter } from 'react-icons/fa';

const SocialSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  

  const socialIcons = [
    { 
      Icon: FaFacebook, 
      x: -200, 
      y: -120, 
      delay: 0,
      size: 'text-4xl'
    },
    { 
      Icon: FaInstagram, 
      x: 180, 
      y: -140, 
      delay: 0.5,
      size: 'text-5xl'
    },
    { 
      Icon: FaLinkedin, 
      x: 220, 
      y: 40, 
      delay: 1,
      size: 'text-4xl'
    },
    { 
      Icon: FaBehance, 
      x: -160, 
      y: 100, 
      delay: 1.5,
      size: 'text-3xl'
    },
    { 
      Icon: FaDribbble, 
      x: 120, 
      y: 130, 
      delay: 2,
      size: 'text-4xl'
    },
    { 
      Icon: FaTwitter, 
      x: -240, 
      y: 20, 
      delay: 2.5,
      size: 'text-3xl'
    }
  ];

  const iconDistanceMultiplier = 1.8;

  const floatingVariants = {
    initial: { 
      scale: 0, 
      rotate: -180, 
      opacity: 0 
    },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (!isClient) return null;

  return (
    <section 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#3d2914' }}
    >
      

      <div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-white/60 text-sm tracking-widest font-light">
        FOLLOW OUR SOCIAL
      </div>
      <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-white/60 text-sm tracking-widest font-light">
        FOLLOW OUR SOCIAL
      </div>

      <div className="relative z-10 text-center">
        <div className="relative">
          {socialIcons.map((social, index) => (
            <motion.div
              key={index}
              className={`absolute ${social.size} text-white/80 hover:text-white cursor-pointer transition-colors duration-300`}
              style={{ 
                left: '50%', 
                top: '50%',
                marginLeft: social.x * iconDistanceMultiplier,
                marginTop: social.y * iconDistanceMultiplier
              }}
              variants={floatingVariants}
              initial="initial"
              animate={["animate", "float"]}
              transition={{ delay: social.delay }}
              whileHover={{
                scale: 1.2,
                color: '#946534',
                transition: { duration: 0.2 }
              }}
            >
              <social.Icon />
            </motion.div>
          ))}

          <motion.div
            className="relative z-20"
            variants={handleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              @STUDIOFORMA
            </motion.h2>
            
            <motion.div
              className="w-32 h-px mx-auto"
              style={{ backgroundColor: '#946534' }}
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-full opacity-10"
          style={{ 
            background: `radial-gradient(circle, #946534 0%, transparent 70%)`,
            width: '600px',
            height: '600px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 1.5, duration: 2 }}
        />
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ 
            backgroundColor: '#946534',
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
};

export default SocialSection;