import { motion } from 'motion/react';
import { Copy, Sparkles, Send } from 'lucide-react';

export default function Solution() {
  const steps = [
    {
      icon: <Copy className="text-blue-400" size={24} />,
      title: "1. Paste customer message",
      desc: "Drop the DM, email, or review into the tool.",
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: <Sparkles className="text-purple-400" size={24} />,
      title: "2. Get instant reply",
      desc: "AI generates a professional, on-brand response.",
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: <Send className="text-emerald-400" size={24} />,
      title: "3. Copy. Send. Done.",
      desc: "Hit send and close the sale in seconds.",
      color: "bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  return (
    <section id="solution" className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Meet Your AI Reply Assistant.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            No setup. No complexity. Built for real small business conversations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-white/5 -z-10 -translate-y-1/2"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`p-8 rounded-3xl border ${step.color} bg-opacity-50 backdrop-blur-sm relative z-10 flex flex-col items-center text-center`}
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-800 shadow-sm flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Try It Free Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
