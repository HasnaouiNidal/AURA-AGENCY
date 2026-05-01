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
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-5 h-5 rounded bg-white flex items-center justify-center font-bold text-[10px] text-black">A</div>
          <span className="font-semibold tracking-wide text-sm">AURA</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-white/50 tracking-wide">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Integrations</a>
          <a href="#" className="hover:text-white transition-colors">Customers</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <a href="/" className="text-xs font-semibold px-5 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors">
          Build With Aura
        </a>
      </motion.div>
    </nav>
  );
};
