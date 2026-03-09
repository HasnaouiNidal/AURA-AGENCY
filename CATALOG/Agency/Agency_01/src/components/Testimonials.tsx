import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "AURA didn't just organize our data, it changed how we make decisions. We found $40k in wasted spend in the first week.",
    author: "Sarah Chen",
    role: "Founder, Nexus AI",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    quote: "The predictive modeling is scary accurate. It predicted our churn spike two weeks before it happened, allowing us to intervene.",
    author: "Marcus Reynolds",
    role: "CEO, Elevate",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-aura-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-3xl bg-aura-surface/30 border border-white/5 backdrop-blur-sm"
            >
              <Quote className="absolute top-10 left-10 w-12 h-12 text-white/5 -z-10" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-gray-200">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
