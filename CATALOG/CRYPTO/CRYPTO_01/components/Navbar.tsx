import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0f0518]/70 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
             <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
              Digifin
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300 opacity-50"></div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {['About us', 'Products', 'Benefits', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="secondary" className="!px-6 !py-2.5 !rounded-full !text-sm !border-white/10 hover:!border-white/20 hover:!bg-white/5 !font-semibold">
            Log in
          </Button>
          <Button variant="primary" className="!px-6 !py-2.5 !rounded-full !text-sm !shadow-lg !shadow-white/5">
            Sign Up
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#0f0518]/95 backdrop-blur-2xl border-b border-white/10 absolute top-full left-0 right-0 shadow-2xl"
        >
          <div className="p-6 flex flex-col gap-2">
             {['About us', 'Products', 'Benefits', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-base font-medium text-gray-300 py-4 px-4 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between group"
                onClick={() => setIsMobileOpen(false)}
              >
                {item}
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-purple-400" />
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/5">
              <Button variant="secondary" className="w-full justify-center rounded-xl py-3">Log In</Button>
              <Button variant="primary" className="w-full justify-center rounded-xl py-3">Create Account</Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};