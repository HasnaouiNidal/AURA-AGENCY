import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card px-8 py-3 rounded-full flex items-center gap-12"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient flex items-center justify-center font-bold text-[10px]">A</div>
          <span className="font-semibold tracking-tight">AURA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <button className="text-sm font-medium px-5 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors">
          Get Started
        </button>
      </motion.div>
    </nav>
  );
};
