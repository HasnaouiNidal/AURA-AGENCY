import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const ClosingCTA = () => {
  return (
    <section className="py-40 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-aura-bg -z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">
          Ready to claim your <span className="text-gradient">unfair advantage?</span>
        </h2>
        <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
          Join 500+ high-growth startups who use AURA to outpace the competition.
        </p>
        
        <button className="group relative px-10 py-5 rounded-full bg-gradient font-bold text-black overflow-hidden transition-all hover:scale-105 active:scale-95 glow-shadow">
          <span className="relative z-10 flex items-center gap-2 text-lg">
            Experience the Future of Insight
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          {/* AI Pulse Effect */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </button>
        
        <p className="mt-8 text-sm text-white/20">
          No credit card required. 14-day free trial.
        </p>
      </motion.div>
    </section>
  );
};
