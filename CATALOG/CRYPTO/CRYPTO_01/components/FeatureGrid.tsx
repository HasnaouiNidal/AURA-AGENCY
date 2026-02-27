import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { ShieldCheck, Zap, BarChart3, Lock, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="products" className="py-32 relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Our platform combines intuitive design with institutional-grade security protocols.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          
          {/* Large Card 1 */}
          <GlassCard className="md:col-span-2 lg:col-span-2 row-span-2 !bg-gradient-to-br from-[#1E1235]/60 to-transparent p-8 flex flex-col justify-between group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <BarChart3 className="text-purple-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-purple-300 transition-colors">Real-Time Yield Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                Visualize your portfolio performance with millisecond-latency data streams. 
                Our dashboard aggregates liquidity pools across 12 chains.
              </p>
            </div>
            {/* Abstract Chart Graphic */}
            <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-30 mask-image-linear-to-t">
               <svg className="w-full h-full" preserveAspectRatio="none">
                 <path d="M0,100 C150,80 300,120 450,60 C600,0 750,40 900,20 L900,140 L0,140 Z" fill="url(#grad1)" />
                 <defs>
                   <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 0.6 }} />
                     <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 0 }} />
                   </linearGradient>
                 </defs>
               </svg>
            </div>
          </GlassCard>

          {/* Small Card 1 */}
          <GlassCard className="md:col-span-1 p-8 flex flex-col gap-4 group" delay={0.1}>
            <ShieldCheck className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
            <div>
              <h3 className="text-xl font-bold mb-2">Audited Contracts</h3>
              <p className="text-sm text-gray-400">Triple-verified by CertiK and Trail of Bits.</p>
            </div>
          </GlassCard>

          {/* Small Card 2 */}
          <GlassCard className="md:col-span-1 p-8 flex flex-col gap-4 group" delay={0.2}>
            <Zap className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors" />
            <div>
              <h3 className="text-xl font-bold mb-2">Flash Loans</h3>
              <p className="text-sm text-gray-400">Instant arbitrage opportunities with 0% collateral.</p>
            </div>
          </GlassCard>

          {/* Medium Card (Horizontal) */}
          <GlassCard className="md:col-span-2 p-8 flex items-center gap-8 group" delay={0.3}>
            <div className="flex-1">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cross-Chain Bridge</h3>
              <p className="text-sm text-gray-400">Seamlessly move assets between ETH, SOL, and MATIC.</p>
            </div>
            <div className="hidden sm:block w-32 h-32 rounded-full border border-dashed border-white/20 animate-spin-slow flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-purple-500/10 blur-xl" />
            </div>
          </GlassCard>

           {/* Small Card 3 */}
           <GlassCard className="md:col-span-1 lg:col-span-1 row-span-1 p-8 flex flex-col gap-4 group" delay={0.4}>
            <Lock className="w-8 h-8 text-white group-hover:text-red-400 transition-colors" />
            <div>
              <h3 className="text-xl font-bold mb-2">Multi-Sig Vaults</h3>
              <p className="text-sm text-gray-400">Enterprise-grade permission management.</p>
            </div>
          </GlassCard>

          {/* Small Card 4 */}
           <GlassCard className="md:col-span-1 lg:col-span-1 row-span-1 p-8 flex flex-col gap-4 group" delay={0.5}>
            <Cpu className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
            <div>
              <h3 className="text-xl font-bold mb-2">AI Forecasting</h3>
              <p className="text-sm text-gray-400">Predictive APY modeling powered by ML.</p>
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};