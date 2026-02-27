import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, TrendingUp, Users, Plus, Bitcoin } from 'lucide-react';
import { Button } from './ui/Button';

// Mockup Component for the Phone UI
const PhoneMockup = ({ 
  variant = 'left', 
  className = '' 
}: { 
  variant?: 'left' | 'right', 
  className?: string 
}) => {
  return (
    <div className={`relative w-[280px] h-[580px] rounded-[40px] border-[8px] border-[#1a1a2e] bg-[#0a0a12] shadow-2xl overflow-hidden ${className}`}>
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-b-xl z-20"></div>
      
      {/* Screen Content */}
      <div className="relative w-full h-full pt-10 px-4 pb-4 flex flex-col text-white">
        
        {variant === 'left' ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <ArrowDownLeft size={16} />
              </div>
              <span className="font-semibold text-sm">Ethereum</span>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <TrendingUp size={16} />
              </div>
            </div>

            {/* Price */}
            <div className="mb-8 text-center">
              <div className="text-gray-400 text-xs mb-1">Current Balance</div>
              <div className="text-3xl font-bold font-display">$4,380.71</div>
              <div className="text-green-400 text-xs font-mono mt-1">+$54.42 (1.26%)</div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 w-full relative mb-6">
              {/* Fake Candle Sticks */}
              <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-between px-2 gap-1">
                {[40, 60, 45, 70, 55, 80, 65, 90, 75, 50, 60, 85].map((h, i) => (
                  <div key={i} className={`w-full rounded-sm ${i % 2 === 0 ? 'bg-green-500' : 'bg-red-500'}`} style={{ height: `${h}%`, opacity: 0.8 }}></div>
                ))}
              </div>
              {/* Line */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,80 C20,70 40,90 60,50 C80,10 90,30 100,20" fill="none" stroke="#39E073" strokeWidth="2" />
                <path d="M0,80 C20,70 40,90 60,50 C80,10 90,30 100,20 V100 H0 Z" fill="url(#gradient-green)" opacity="0.2" />
                <defs>
                   <linearGradient id="gradient-green" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#39E073" stopOpacity="0.5" />
                     <stop offset="100%" stopColor="#39E073" stopOpacity="0" />
                   </linearGradient>
                </defs>
              </svg>

              {/* Floating Labels */}
              <div className="absolute top-[20%] right-0 bg-[#1E1E2E] text-white text-[10px] px-2 py-1 rounded-full shadow-lg">3,780</div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-4 gap-2 mb-4">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="aspect-square rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer">
                   <div className="w-4 h-4 rounded-full border border-gray-600" />
                 </div>
               ))}
            </div>
            
            <div className="mt-auto bg-[#1a1a2e] rounded-xl p-3 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <ArrowDownLeft size={20} />
               </div>
               <div>
                 <div className="text-sm font-bold">Received</div>
                 <div className="text-xs text-gray-400">Aug 23, 14:55</div>
               </div>
               <div className="ml-auto text-right">
                 <div className="text-sm font-bold text-green-400">+0.500 ETH</div>
                 <div className="text-xs text-gray-400">$890.36 USD</div>
               </div>
            </div>
          </>
        ) : (
          <>
             {/* Right Phone - Send UI */}
            <div className="flex items-center gap-4 mb-8">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                 <ArrowUpRight size={16} />
               </div>
               <span className="font-semibold text-sm">Split sending</span>
            </div>

            <div className="text-center mb-10">
               <div className="text-gray-400 text-xs">Current amount</div>
               <div className="font-display font-bold text-3xl mt-1">$10,325.00</div>
            </div>

            {/* People Circles */}
            <div className="flex justify-center mb-8 pl-4">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="-ml-4 w-12 h-12 rounded-full border-2 border-[#0a0a12] bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden relative">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="-ml-4 w-12 h-12 rounded-full border-2 border-[#0a0a12] bg-white text-black flex items-center justify-center z-10 font-bold text-lg">+</div>
            </div>

            {/* List */}
            <div className="flex-1 space-y-3">
              {[1,2,3].map((i) => (
                <div key={i} className={`p-4 rounded-2xl flex items-center gap-3 ${i === 2 ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 scale-105' : 'bg-white/5 text-gray-300'}`}>
                   <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="Avatar" />
                   </div>
                   <div className="flex-1">
                      <div className="h-2 w-20 bg-current opacity-20 rounded mb-1"></div>
                      <div className="h-2 w-12 bg-current opacity-10 rounded"></div>
                   </div>
                   <div className="text-xs opacity-50">0.{i*2} ETH</div>
                </div>
              ))}
            </div>
             
             <div className="mt-4 flex gap-2">
                <div className="flex-1 py-3 bg-[#1E1E2E] rounded-xl text-center text-xs text-gray-400">Max</div>
                <div className="flex-1 py-3 bg-[#1E1E2E] rounded-xl text-center text-xs text-gray-400">Max</div>
             </div>
          </>
        )}
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-10 flex flex-col justify-center overflow-hidden">
      
      {/* Background Deep Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-indigo-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full mb-16">
        
        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-2 mb-2"
          >
            <span className="font-display font-bold text-2xl tracking-tight text-white">Digifin</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]"
          >
            Digital Currency,<br />
            Always Within <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">Reach.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-lg leading-relaxed"
          >
            Easily manage your crypto anytime, anywhere. Track balances, send and receive funds, and explore market insights with a platform built for simplicity, security, and speed.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <Button variant="primary" className="!px-10 !py-5">
              Start For Free
            </Button>
          </motion.div>
        </div>

        {/* 3D Visual Composition */}
        <div className="lg:col-span-7 relative h-[600px] lg:h-[700px] flex items-center justify-center perspective-[2000px]">
           {/* Floating Spheres */}
           <motion.div 
             className="absolute top-10 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-black shadow-[inset_-5px_-5px_20px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] z-0"
             animate="float"
           />
           <motion.div 
             className="absolute bottom-20 left-[20%] w-12 h-12 rounded-full border border-purple-500/30 bg-purple-900/20 backdrop-blur-sm z-20"
             animate="float-delayed"
           />
           <motion.div 
             className="absolute top-[20%] right-[10%] w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 z-0"
             animate="float-slow"
           />

           {/* Floating Coins */}
           <motion.div 
             className="absolute bottom-[20%] left-[10%] w-20 h-20 rounded-full bg-gradient-to-br from-[#627EEA] to-[#3B4C8C] flex items-center justify-center shadow-2xl z-30"
             animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
             transition={{ duration: 5, repeat: Infinity }}
           >
              {/* ETH Logo Simplified */}
              <svg viewBox="0 0 32 32" className="w-10 h-10 text-white fill-current"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"/></svg>
           </motion.div>

           <motion.div 
             className="absolute bottom-[10%] right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-[#111] to-[#333] border border-gray-700 flex items-center justify-center shadow-2xl z-30"
             animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
             transition={{ duration: 7, repeat: Infinity }}
           >
              <Bitcoin className="w-12 h-12 text-blue-500/50" />
           </motion.div>


           {/* Phones Container */}
           <motion.div 
             className="relative w-full h-full flex items-center justify-center"
             initial={{ rotateY: 15, rotateX: 5 }}
             animate={{ rotateY: [15, 5, 15], rotateX: [5, 0, 5] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           >
              {/* Phone 1 (Back) */}
              <motion.div 
                className="absolute left-[10%] lg:left-[15%] top-[10%] z-10 scale-90 opacity-90 brightness-75"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                 <PhoneMockup variant="left" />
              </motion.div>

              {/* Phone 2 (Front) */}
              <motion.div 
                className="absolute right-[5%] lg:right-[15%] top-[15%] z-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                 <PhoneMockup variant="right" />
              </motion.div>
           </motion.div>
        </div>
      </div>

      {/* Bottom Stats Area */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
           >
             <h3 className="text-4xl font-display font-bold mb-2">32,000+</h3>
             <p className="text-gray-400 text-sm leading-relaxed">Trusted by investors, traders, and everyday users worldwide.</p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
           >
             <h3 className="text-4xl font-display font-bold mb-2">150+</h3>
             <p className="text-gray-400 text-sm leading-relaxed">Smart tools designed to simplify and automate your financial journey.</p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
           >
             <h3 className="text-4xl font-display font-bold mb-2">92,56%</h3>
             <p className="text-gray-400 text-sm leading-relaxed">Proven accuracy in forecasts backed by advanced analytics.</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
};