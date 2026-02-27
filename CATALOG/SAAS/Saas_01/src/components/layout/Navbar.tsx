import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', path: '/#features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Vision', path: '/about' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-[#0F1115]/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[var(--color-aura-accent)] to-[var(--color-aura-accent-dim)] rounded-lg shadow-[0_0_15px_rgba(110,231,255,0.3)] group-hover:shadow-[0_0_25px_rgba(110,231,255,0.5)] transition-all duration-500">
            <Sparkles className="w-5 h-5 text-[#0F1115]" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">
            AURA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'text-sm font-medium transition-colors duration-200 hover:text-[var(--color-aura-accent)]',
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/dashboard"
            className="relative px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white overflow-hidden group hover:border-[var(--color-aura-accent)]/50 transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-[var(--color-aura-accent)] transition-colors">
              Get Started
            </span>
            <div className="absolute inset-0 bg-[var(--color-aura-accent)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0F1115] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-[var(--color-aura-accent)]"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white"
            >
              Log in
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-lg bg-[var(--color-aura-accent)] text-[#0F1115] font-semibold"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
