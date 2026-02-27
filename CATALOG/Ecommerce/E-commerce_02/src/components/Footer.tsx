import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-1">
            <h2 className="text-2xl tracking-[0.3em] uppercase text-text-primary mb-6">Aura</h2>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Crafting timeless elegance for the modern connoisseur. Luxury is restraint.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-primary mb-6">Collection</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Chronographs</Link></li>
              <li><Link to="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Automatics</Link></li>
              <li><Link to="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Limited Editions</Link></li>
              <li><Link to="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Straps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-primary mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Warranty</Link></li>
              <li><Link to="#" className="text-sm text-text-secondary hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-primary mb-6">Newsletter</h3>
            <p className="text-sm text-text-secondary mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex border-b border-border pb-2 focus-within:border-accent transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-sm text-text-primary flex-1 placeholder:text-text-secondary/50"
              />
              <button type="submit" className="text-xs uppercase tracking-widest text-text-primary hover:text-accent transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6">
          <p className="text-xs text-text-secondary tracking-widest uppercase">
            &copy; {new Date().getFullYear()} AURA Timepieces. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
