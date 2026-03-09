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
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-aura-accent-start mb-6">
            Trusted by 500+ YC Startups
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
            The Intelligence Layer for <span className="text-gradient">Modern Founders</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            AURA transforms fragmented data into automated insights. Predict cash flow, track growth, and generate investor-ready reports in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="group relative px-8 py-4 rounded-full bg-gradient font-semibold text-black overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Experience the Future of Insight
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium">
              View Live Demo
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
