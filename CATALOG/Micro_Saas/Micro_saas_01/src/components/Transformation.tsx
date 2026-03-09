import { motion } from 'motion/react';
import { XCircle, CheckCircle } from 'lucide-react';

export default function Transformation() {
  const comparisons = [
    { before: "Slow replies", after: "Instant responses" },
    { before: "Inconsistent tone", after: "Professional messaging" },
    { before: "Overthinking", after: "Confident communication" },
    { before: "Lost leads", after: "More conversions" },
    { before: "Burned out", after: "In control" }
  ];

  return (
    <section className="py-24 bg-surface-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            From Overwhelmed to In Control.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            This is who you become with ReplyPro.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md mb-16">
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-xl font-semibold text-gray-400 mb-8 flex items-center gap-3">
                <XCircle className="text-rose-500" size={24} />
                Without
              </h3>
              <ul className="space-y-6">
                {comparisons.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-gray-400 flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50"></span>
                    {item.before}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
                <CheckCircle className="text-emerald-500" size={24} />
                With ReplyPro
              </h3>
              <ul className="space-y-6">
                {comparisons.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-white font-medium flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {item.after}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-white text-surface-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Start Sounding Like a Pro
          </button>
        </motion.div>
      </div>
    </section>
  );
}
