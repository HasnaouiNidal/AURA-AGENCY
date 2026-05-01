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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Clarity, Built In.</h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed font-light text-sm md:text-base">
            Every metric, chart, and alert is intentionally designed to reduce cognitive load and highlight exactly what matters for your business.
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
            <p className="text-[10px] text-white/50 font-bold uppercase mb-1 tracking-wider">Revenue Insight</p>
            <p className="text-sm font-medium text-white/90">MRR grew by 12.4% this week</p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="absolute -right-12 bottom-1/4 glass-card p-4 rounded-xl hidden lg:block border-aura-accent-end/20"
          >
            <p className="text-[10px] text-white/50 font-bold uppercase mb-1 tracking-wider">Acquisition Alert</p>
            <p className="text-sm font-medium text-white/90">Customer acquisition cost dropped</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
