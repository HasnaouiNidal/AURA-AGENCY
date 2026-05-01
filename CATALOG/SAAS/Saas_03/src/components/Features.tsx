import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, PieChart, FileText, Zap } from 'lucide-react';

const features = [
  {
    title: 'Precision Forecasting',
    desc: 'Project your future runway based on accurate, real-time revenue and expense tracking.',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-400'
  },
  {
    title: 'Customer Analytics',
    desc: 'Analyze lifetime value and churn rates to understand exactly how your audience engages.',
    icon: PieChart,
    color: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Automated Reporting',
    desc: 'Generate professional metric updates instantly. Keep your team aligned continuously.',
    icon: FileText,
    color: 'from-emerald-400 to-teal-400'
  },
  {
    title: 'Seamless Integrations',
    desc: 'Connect your financial stack safely. Secure your single source of business truth.',
    icon: Zap,
    color: 'from-orange-400 to-yellow-400'
  }
];

export const Features = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineered for <span className="text-gradient">Clarity.</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Powerful analytics wrapped in an intuitive interface. Every feature is designed to give you a clear, objective view of your business.
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
              <button className="text-[10px] font-bold uppercase tracking-wider text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                Explore Feature
                <div className="w-4 h-px bg-current" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
