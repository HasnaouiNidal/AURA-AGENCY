import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, PieChart, FileText, Zap } from 'lucide-react';

const features = [
  {
    title: 'AI Cash Flow Predictions',
    desc: 'Never get surprised by your burn. Our AI models your future runway based on real-time spending and revenue trends.',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-400'
  },
  {
    title: 'Customer Growth Analytics',
    desc: 'Deep dive into LTV, CAC, and churn. Understand exactly which cohorts are driving your growth and why.',
    icon: PieChart,
    color: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Automated Investor Reports',
    desc: 'Generate professional updates in one click. Keep your investors informed with the metrics they actually care about.',
    icon: FileText,
    color: 'from-emerald-400 to-teal-400'
  },
  {
    title: 'Real-time Stack Sync',
    desc: 'Connect Stripe, Quickbooks, AWS, and 50+ other tools. AURA becomes your single source of truth instantly.',
    icon: Zap,
    color: 'from-orange-400 to-yellow-400'
  }
];

export const Features = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for the <span className="text-gradient">Relentless.</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Functional depth that matches our beautiful UI. Every feature is designed to give you a strategic advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl group hover:border-white/20 transition-colors"
            >
              <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${feature.color} p-3 mb-6 flex items-center justify-center`}>
                <feature.icon className="w-full h-full text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {feature.desc}
              </p>
              <button className="text-xs font-bold uppercase tracking-wider text-white/40 group-hover:text-aura-accent-start transition-colors flex items-center gap-2">
                View Demo
                <div className="w-4 h-px bg-current" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
