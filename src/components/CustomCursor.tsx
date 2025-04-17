'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1
    },
    clicking: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 0.8
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
      variants={cursorVariants}
      animate={isClicking ? "clicking" : "default"}
      style={{
        background: 'rgb(255, 255, 10)',
        boxShadow: '0 0 20px 5px rgba(255, 255, 10, 0.5)'
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ 
          border: '2px solid rgb(255, 255, 10)',
          opacity: 0.5
        }}
      />
    </motion.div>
  );
} 