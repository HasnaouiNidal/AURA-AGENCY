import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinalClose() {
  return (
    <section className="py-24 bg-surface-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-surface-950 to-surface-950"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
        >
          Your Customers Expect Fast Replies.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
            Now You Can Deliver Them.
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
        >
          Stop losing time. Stop losing sales. Start replying like a professional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <button className="px-10 py-5 bg-white text-surface-900 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group">
            Start Free Today
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2 text-gray-400 font-medium">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span>No credit card required. Cancel anytime.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
