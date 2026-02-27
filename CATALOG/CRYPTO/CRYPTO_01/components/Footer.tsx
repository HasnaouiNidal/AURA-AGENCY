import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Send, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0510] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-[-40%] left-[-20%] w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-3xl tracking-tight text-white">Digifin</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-base">
              The premier platform for managing your digital assets. Secure, fast, and designed for the future of finance.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-6 text-lg">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'Features', 'Pricing', 'Tokens', 'NFTs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-200 text-sm flex items-center gap-1 group">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
             <div className="bg-[#150a26] border border-white/5 rounded-3xl p-6 md:p-8">
               <h4 className="text-white font-bold mb-2 text-lg">Stay in the loop</h4>
               <p className="text-gray-400 mb-6 text-sm">Get the latest crypto trends and Digifin updates directly to your inbox.</p>
               
               <form className="relative" onSubmit={(e) => e.preventDefault()}>
                 <input 
                   type="email" 
                   placeholder="Enter your email address" 
                   className="w-full bg-[#0a0510] border border-white/10 rounded-xl py-3.5 pl-5 pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm"
                 />
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/20 group">
                   <ArrowRight size={16} className="text-white group-hover:translate-x-0.5 transition-transform" />
                 </button>
               </form>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2024 Digifin Protocol. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};