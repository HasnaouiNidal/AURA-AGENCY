import React from 'react';
import { motion } from 'motion/react';
import { DashboardMockup } from './DashboardMockup';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-aura-accent-end/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold tracking-wider uppercase text-white/70 mb-8 backdrop-blur-md">
            Aura Premium Showcase
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
            Precision Data. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              Absolute Clarity.
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Aura Insights brings all your business metrics into one elegant dashboard. Track revenue, analyze growth, and make confident decisions without the clutter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="group relative px-8 py-3.5 rounded-full bg-white font-semibold text-black overflow-hidden transition-all hover:scale-105 active:scale-95 text-sm">
              <span className="relative z-10 flex items-center gap-2">
                View Live Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium text-white/80 text-sm">
              Explore Platform
            </button>
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient blur-2xl opacity-20 -z-10" />
          <DashboardMockup className="w-full" />
        </div>
      </div>
    </section>
  );
};
