'use client';

import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function AnimatedFeatures() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      {/* Primary Card - Blue with Yellow Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20, rotate: -5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="bg-[#3B82F6] rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 h-64 flex items-center justify-center relative overflow-hidden"
      >
        <h3 className="text-[#FEE362] text-5xl md:text-6xl font-bold text-center" style={{ fontFamily: 'Roond, sans-serif' }}>
          DPRINT
        </h3>
        <div className="absolute top-3 right-3">
          <SparklesIcon className="w-6 h-6 text-[#FF4D94]" />
        </div>
      </motion.div>

      {/* Secondary Card - Pink with slogan */}
      <motion.div 
        initial={{ opacity: 0, y: 20, rotate: 5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05, rotate: -2 }}
        className="bg-[#FF4D94] rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 h-64 flex flex-col items-center justify-center relative"
      >
        <p className="text-white text-2xl md:text-3xl italic text-center leading-relaxed" style={{ fontFamily: 'cursive' }}>
          It feels illegal<br/>
          to be THIS easy
        </p>
        <div className="absolute top-3 left-3">
          <SparklesIcon className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-3 right-3">
          <SparklesIcon className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      {/* Feature Card 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="bg-[#FEE362] rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 h-64 flex flex-col justify-center"
      >
        <h3 className="text-[#3B82F6] text-2xl font-bold mb-4">AI-Powered Printing</h3>
        <p className="text-white text-lg">Smart agent manages your prints from slicing to shipping</p>
      </motion.div>

      {/* Feature Card 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="bg-[#3B82F6] rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 h-64 flex flex-col justify-center"
      >
        <h3 className="text-[#FEE362] text-2xl font-bold mb-4">Flexible Payments</h3>
        <p className="text-white text-lg">Pay with card or crypto through Solana blockchain</p>
      </motion.div>

      {/* Feature Card 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="bg-[#FF4D94] rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 h-64 flex flex-col justify-center"
      >
        <h3 className="text-[#FEE362] text-2xl font-bold mb-4">Global Network</h3>
        <p className="text-white text-lg">Access 3D printers worldwide with guaranteed quality</p>
      </motion.div>

      {/* Feature Card 4 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        whileHover={{ scale: 1.05 }}
        className="bg-[#FEE362] rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 h-64 flex flex-col justify-center"
      >
        <h3 className="text-[#3B82F6] text-2xl font-bold mb-4">Easy Ordering</h3>
        <p className="text-gray-800 text-lg">Upload, customize, and order in under 2 minutes</p>
      </motion.div>
    </div>
  );
} 