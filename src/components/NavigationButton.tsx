'use client';

import { motion } from 'framer-motion';

export default function NavigationButton() {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="fixed top-6 right-6 z-50 bg-[#FEE362] hover:bg-[#FFD700] text-black font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
      style={{ fontFamily: 'Roond, sans-serif' }}
    >
      Get Started
    </motion.button>
  );
} 