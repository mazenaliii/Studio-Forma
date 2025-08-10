"use client";
import React from "react";
import { motion } from "framer-motion";

const StudioFormaAbout = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  p-4 md:p-8">
      <motion.div className="text-center mb-8 md:mb-16" {...fadeInUp}>
        <p className="text-white text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
          Studio Forma is a boutique architecture and interior design studio
          based in Alexandria, Egypt.
          <br className="hidden md:block" />
          We craft spaces that balance clarity, calm, and context — with a focus
          on timeless materials and human-centered form.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-2xl order-2 lg:order-1"
            {...fadeInLeft}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-2xl order-2 lg:order-1"
              {...fadeInLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src="/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table.jpg"
                  alt="Studio Forma Interior Design - Modern kitchen with dark cabinets and elegant lighting"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6 order-1 lg:order-2"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight"
              variants={fadeInRight}
            >
              Studio Forma is a multidisciplinary architecture and interior
              design studio founded in Alexandria, Egypt.
            </motion.h1>

            <motion.div
              className="space-y-4 text-white text-sm md:text-base leading-relaxed"
              variants={fadeInRight}
            >
              <p>
                Our work is rooted in the belief that design is not just visual
                — it's emotional, spatial, and deeply personal. We specialize in
                crafting refined residential and small- scale commercial
                environments where function meets atmosphere. Drawing from
                modernist principles and contextual sensitivity, we approach
                every project as a dialogue — between client and designer, form
                and feeling, material and memory.
              </p>

              <p>
                At Studio Forma, we value timelessness over trends. Whether
                we're opening up a coastal villa to the sea breeze or reshaping
                a city apartment into a calm retreat, our goal is always the
                same: to create spaces that feel as good as they look.
              </p>

              <p className="font-medium">
                From first sketch to final styling, we prioritize clarity,
                collaboration, and quiet elegance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-b rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default StudioFormaAbout;
