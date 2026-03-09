import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-32 bg-aura-bg relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aura-surface/50" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Ready to see the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-accent-start to-aura-accent-end">
            Unseen?
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="group relative px-10 py-5 bg-white text-aura-bg font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(110,231,255,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-r from-aura-accent-start to-aura-accent-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors">
              Experience the Future of Insight
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
          <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest">
            No credit card required • 14-day free trial
          </p>
        </motion.div>
      </div>
    </section>
  );
};
