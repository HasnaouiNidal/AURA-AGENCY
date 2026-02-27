import React from 'react';
import { motion } from 'framer-motion';
import { BaseProps } from '../../types';

interface GlassCardProps extends BaseProps {
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 40px -10px rgba(112, 69, 255, 0.15)" } : {}}
      className={`
        relative overflow-hidden
        bg-[#1E1235]/40 backdrop-blur-xl
        border border-white/5
        rounded-3xl
        ${className}
      `}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Hover Gradient Glow */}
      <div className="absolute -inset-[100px] bg-purple-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};