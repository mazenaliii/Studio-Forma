'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "Eng. Ahmed Fayez",
      position: "CEO",
      image: "/1.webp"
    },
    {
      name: "Eng. Mohamed A. Elkholy",
      position: "CTO",
      image: "/2.jpeg"
    },
    {
      name: "Mr. John Daniel",
      position: "Designer",
      image: "/3.jpeg"
    },
    {
      name: "Mr. Ahmed Ali",
      position: "Director",
      image: "/5.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const memberVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
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

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-left mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white font-playfair"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            OUR{' '}
            <span className="font-normal font-playfair" style={{ color: '#946534' }}>TEAM</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 mt-6"
            style={{ backgroundColor: '#946534' }}
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>


        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative text-center"
              variants={memberVariants}
              whileHover="hover"
            >
              <motion.div
                className="relative"
                variants={hoverVariants}
              >

                <motion.div
                  className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full"
                  variants={imageVariants}
                >
                  <div className="absolute inset-0 rounded-full p-1 group-hover:opacity-90 transition-all duration-300" style={{ background: `linear-gradient(135deg, #946534 0%, #b8804a 50%, #946534 100%)` }}>
                    <div className="w-full h-full bg-stone-800 rounded-full p-1">
                      <motion.div
                        className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-stone-600 to-stone-700"
                        variants={imageHoverVariants}
                      >
                     <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
         
                <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(180deg, ${'#946534' + '33'} 0%, 0%, transparent 100%)` }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>


                <motion.div variants={textVariants}>
                  <motion.h3 
                    className="text-xl font-medium text-white mb-2 group-hover:transition-colors duration-300"
                    style={{ '--hover-color': '#946534' }}
                    onMouseEnter={(e) => e.target.style.color = '#946534'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[#946534] text-sm font-light tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {member.position}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1, transition: { delay: 0.1 } }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-radial from-amber-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1.1,
                  transition: { duration: 0.4 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-48 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 192 }}
            transition={{ delay: 1.8, duration: 1.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;