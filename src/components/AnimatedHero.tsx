'use client';

import { motion } from 'framer-motion';

export default function AnimatedHero() {
  return (
    <div className="w-full px-4 py-10">
      <motion.h1 
        // initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
        className="text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[15rem] font-bold leading-none"
        style={{ 
          fontFamily: 'Roond, sans-serif !important',
          color: '#FEE362',
          paddingBottom: '2rem',
          letterSpacing: '-0.05em',
          filter: 'drop-shadow(0 20px 30px rgba(74, 222, 128, 0.3))'
        }}
      >
        DPRINT
      </motion.h1>
      <div className="h-8 sm:h-12 md:h-16 lg:h-32"></div>
    </div>
  );
} 