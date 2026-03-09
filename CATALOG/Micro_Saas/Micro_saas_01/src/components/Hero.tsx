import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-surface-950 to-surface-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 font-medium text-sm mb-8 border border-primary-500/20"
        >
          <Zap size={16} className="text-primary-500" />
          <span>Built specifically for small businesses</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight"
        >
          Reply to Customers in Seconds.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">
            Close More Sales Automatically.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          AI-powered professional replies for DMs, emails, WhatsApp, and Google reviews.
          This tool helps you reply faster, sound professional, and increase sales — instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-surface-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            Start Free — No Credit Card
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-surface-900 text-white border border-white/10 rounded-xl font-semibold text-lg hover:bg-surface-800 transition-all flex items-center justify-center gap-2">
            See How It Works
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
        >
          {[
            'No prompts. No training.',
            'Works for any industry.',
            'Free plan available.'
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
