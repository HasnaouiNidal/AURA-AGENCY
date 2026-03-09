import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export const ProblemSolution = () => {
  return (
    <section className="py-32 bg-aura-bg relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* The Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-red-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl bg-aura-surface/50 border border-white/5 grayscale opacity-70 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6 text-red-400">
                <X className="w-6 h-6" />
                <h3 className="text-xl font-bold tracking-tight">The Old Way</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5" />
                  <p>Fragmented data across 12+ different tools and spreadsheets.</p>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5" />
                  <p>Manual reporting that takes days, not minutes.</p>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5" />
                  <p>Reactive decision making based on stale, month-old data.</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* The AURA Way */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-aura-accent-start/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-aura-surface to-aura-bg border border-aura-accent-start/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-aura-accent-start/10 text-aura-accent-start">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">The AURA Era</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-aura-accent-start/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-aura-accent-start shadow-[0_0_8px_rgba(110,231,255,0.8)]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Unified Intelligence</p>
                    <p className="text-sm text-gray-400 mt-1">All your streams connected. One source of truth.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-aura-accent-start/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-aura-accent-start shadow-[0_0_8px_rgba(110,231,255,0.8)]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Real-time Autopilot</p>
                    <p className="text-sm text-gray-400 mt-1">AI that predicts cash flow gaps before they happen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-aura-accent-start/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-aura-accent-start shadow-[0_0_8px_rgba(110,231,255,0.8)]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Proactive Growth</p>
                    <p className="text-sm text-gray-400 mt-1">Turn raw numbers into strategic execution instantly.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
