import { motion } from 'motion/react';
import { TrendingUp, Users, PieChart, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    title: "Predictive Cash Flow",
    description: "Our AI analyzes 24 months of historical data to forecast your runway with 98% accuracy.",
    icon: TrendingUp,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Customer DNA",
    description: "Understand exactly who your best users are. Segmentation that updates itself automatically.",
    icon: Users,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Investor-Ready Reports",
    description: "Generate board decks and investor updates in one click. Always accurate, always beautiful.",
    icon: PieChart,
    color: "from-emerald-400 to-emerald-600"
  }
];

export const Features = () => {
  return (
    <section className="py-32 bg-aura-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Scale</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every feature is designed to give founders time back. 
            Focus on building, not reporting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-aura-surface border border-white/5 hover:border-white/10 transition-all hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 blur-[60px] group-hover:opacity-10 transition-opacity`} />
              
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {feature.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors cursor-pointer">
                View Demo <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
