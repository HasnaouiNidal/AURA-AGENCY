import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 rounded bg-white flex items-center justify-center font-bold text-[10px] text-black">A</div>
          <span className="font-semibold tracking-wide">AURA</span>
        </a>

        <div className="flex gap-8 text-xs font-medium text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <p className="text-[10px] text-white/20 uppercase tracking-widest font-semibold">
          © 2026 Aura Agency Demo.
        </p>
      </div>
    </footer>
  );
};
