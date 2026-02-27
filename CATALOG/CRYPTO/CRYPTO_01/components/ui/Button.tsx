import React from 'react';
import { motion } from 'framer-motion';
import { BaseProps } from '../../types';

interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  icon
}) => {
  const variants = {
    // Primary is now White Button with Black Text (per image)
    primary: "bg-white text-black font-bold hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    // Secondary is outline/ghost for Navbar "Log in"
    secondary: "bg-transparent text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm",
    ghost: "bg-transparent text-white hover:text-gray-300"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2
        font-sans text-sm tracking-wide uppercase
        ${variants[variant]}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};