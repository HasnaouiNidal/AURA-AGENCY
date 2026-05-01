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
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          Ready to build a product <span className="text-gradient">like this?</span>
        </h2>
        <p className="text-lg md:text-xl text-white/40 mb-12 max-w-2xl mx-auto font-light">
          This was a premium SaaS demo designed and engineered by Aura. We build exceptional digital products for growing businesses.
        </p>

        <a href="/" className="inline-flex group relative px-10 py-4 rounded-full bg-white font-bold text-black overflow-hidden transition-all hover:scale-105 active:scale-95 glow-shadow">
          <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
            Work with Aura Agency
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          {/* AI Pulse Effect */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </a>

        <p className="mt-8 text-xs text-white/40 uppercase tracking-widest font-semibold">
          Return to Aura Portfolio
        </p>
      </motion.div>
    </section>
  );
};
