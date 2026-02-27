import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-background border-b border-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-text-primary hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Desktop Nav Left */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/collection" className="text-sm uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors">Collection</Link>
            <Link to="/philosophy" className="text-sm uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors">Philosophy</Link>
          </nav>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl md:text-3xl tracking-[0.3em] uppercase text-text-primary">Aura</h1>
          </Link>

          {/* Desktop Nav Right */}
          <div className="flex items-center gap-6">
            <button className="hidden md:block text-text-primary hover:text-accent transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="text-text-primary hover:text-accent transition-colors relative"
              onClick={onOpenCart}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 bg-accent text-background text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary hover:text-accent transition-colors"
              >
                <X size={32} strokeWidth={1} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-12">
              <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif tracking-widest uppercase hover:text-accent transition-colors">Collection</Link>
              <Link to="/philosophy" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif tracking-widest uppercase hover:text-accent transition-colors">Philosophy</Link>
              <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif tracking-widest uppercase hover:text-accent transition-colors">Journal</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
