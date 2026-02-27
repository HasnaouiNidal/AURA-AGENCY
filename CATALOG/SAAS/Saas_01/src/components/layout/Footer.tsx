import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F1115] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-[var(--color-aura-accent)] to-[var(--color-aura-accent-dim)] rounded-md">
                <Sparkles className="w-3 h-3 text-[#0F1115]" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                AURA
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Elevating business intelligence through refined AI analytics. 
              Clarity, precision, and foresight for the modern enterprise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/#features" className="hover:text-[var(--color-aura-accent)] transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-[var(--color-aura-accent)] transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-[var(--color-aura-accent)] transition-colors">Live Demo</Link></li>
              <li><a href="#" className="hover:text-[var(--color-aura-accent)] transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-[var(--color-aura-accent)] transition-colors">Vision</Link></li>
              <li><a href="#" className="hover:text-[var(--color-aura-accent)] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--color-aura-accent)] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[var(--color-aura-accent)] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[var(--color-aura-accent)] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[var(--color-aura-accent)] transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-[var(--color-aura-accent)] transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} AURA Analytics. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-gray-500 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
