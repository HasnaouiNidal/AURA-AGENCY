import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DashboardMockup } from './DashboardMockup';

export const ScrollRevealDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Cinematic Clarity</h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Experience data like never before. AURA's interface is designed to reduce cognitive load and highlight what truly matters.
          </p>
        </div>

        <motion.div 
          style={{ scale, rotateX, opacity, perspective: 1000 }}
          className="relative"
        >
          <div className="absolute -inset-20 bg-aura-accent-end/5 blur-[100px] rounded-full -z-10" />
          <DashboardMockup />
          
          {/* Floating Insight Cards */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="absolute -left-12 top-1/4 glass-card p-4 rounded-xl hidden lg:block border-aura-accent-start/20"
          >
            <p className="text-[10px] text-aura-accent-start font-bold uppercase mb-1">AI Suggestion</p>
            <p className="text-sm font-medium">Increase burn efficiency by 12%</p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="absolute -right-12 bottom-1/4 glass-card p-4 rounded-xl hidden lg:block border-aura-accent-end/20"
          >
            <p className="text-[10px] text-aura-accent-end font-bold uppercase mb-1">Growth Alert</p>
            <p className="text-sm font-medium">Viral coefficient hit 1.4x</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
