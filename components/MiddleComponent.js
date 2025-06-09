"use client"
import React from 'react';
import { motion } from 'framer-motion';

const MiddleComponent = () => {
  // Define animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Define animation variants for each word/line
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      } 
    },
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center '>
      <motion.div
        className='flex flex-col items-center justify-center text-center px-4 gap-2'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1 
          variants={textVariants}
          className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4'
        >
          India's First Merit-Driven
        </motion.h1>
        <motion.h1 
          variants={textVariants}
          className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-8 leading-tight'
        >
          Job Portal is Coming Soon
        </motion.h1>
        
        <motion.p 
          variants={textVariants}
          className='mt-8 text-xl text-gray-600 max-w-2xl text-center'
        >
          Join us in revolutionizing the way India hires. A platform where your skills speak louder than your connections.
        </motion.p>
      </motion.div>

      <div>
        {/* You can add more animated elements here if needed */}
      </div>
    </div>
  );
};

export default MiddleComponent;