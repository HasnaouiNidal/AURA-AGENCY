import React from 'react';
import { motion } from 'motion/react';
import { X, Check, ArrowRight } from 'lucide-react';

export const ProblemSolution = () => {
  return (
    <section className="py-32 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Stop making decisions <span className="text-white/40">in the dark.</span>
            </h2>
            <p className="text-lg text-white/60 mb-12">
              Replace manual spreadsheets with a unified system. Aura connects your data instantly, providing a clear overview so you can focus on building your business.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Manual data entry and cleanup', icon: X, color: 'text-rose-400' },
                { label: 'Fragmented insights across 10+ tools', icon: X, color: 'text-rose-400' },
                { label: 'Reactive decision making', icon: X, color: 'text-rose-400' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/40">
                  <div className={item.color}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border-aura-accent-end/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-aura-accent-end/10 blur-3xl" />

            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient flex items-center justify-center">
                <Check className="w-5 h-5 text-black" />
              </div>
              Aura Insights
            </h3>

            <div className="space-y-8">
              {[
                { title: 'Unified Data Streams', desc: 'Secure syncing with your essential business tools.' },
                { title: 'Actionable Forecasting', desc: 'Clear models that project your future cash flow.' },
                { title: 'Board-Ready Reports', desc: 'Clean, automated reporting formats generated instantly.' },
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <h4 className="font-semibold text-aura-accent-start mb-1 flex items-center gap-2">
                    {item.title}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
