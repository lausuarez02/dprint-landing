'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function AnimatedCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Printing?</h2>
      <p className="text-xl text-gray-300 mb-8">
        Join the future of decentralized 3D printing.
      </p>
      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:brightness-110 transition-all inline-flex items-center gap-2">
        Start Now <ArrowRightIcon className="w-5 h-5" />
      </button>
    </motion.div>
  );
} 