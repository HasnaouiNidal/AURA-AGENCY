import { motion } from 'motion/react';
import { Check, MessageSquare, Zap, LayoutTemplate, UserCheck } from 'lucide-react';

export default function Objections() {
  const points = [
    {
      icon: <Zap className="text-amber-500" size={20} />,
      title: "No prompts needed."
    },
    {
      icon: <MessageSquare className="text-blue-500" size={20} />,
      title: "Designed for customer conversations."
    },
    {
      icon: <LayoutTemplate className="text-purple-500" size={20} />,
      title: "Built-in reply structure."
    },
    {
      icon: <Check className="text-emerald-500" size={20} />,
      title: "Faster workflow."
    },
    {
      icon: <UserCheck className="text-indigo-500" size={20} />,
      title: "Made for business owners, not writers."
    }
  ];

  return (
    <section className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Why Not Just Use ChatGPT?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Because you don't have time to write perfect prompts for every single message.
            </p>
            
            <ul className="space-y-6 mb-12">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 text-lg text-gray-300 font-medium bg-surface-900 p-4 rounded-xl border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-800 shadow-sm flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  {point.title}
                </motion.li>
              ))}
            </ul>

            <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Try It Free — Risk Free
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-purple-900/40 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-surface-900 p-8 rounded-3xl shadow-xl border border-white/10">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 bg-surface-800 rounded-full flex items-center justify-center text-xl font-bold text-gray-400">
                  C
                </div>
                <div>
                  <h4 className="font-semibold text-white">Customer</h4>
                  <p className="text-sm text-gray-500">Instagram DM</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 bg-surface-800 p-4 rounded-xl rounded-tl-none">
                "Hi, do you have any appointments available tomorrow for a haircut? And how much is it?"
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                  ReplyPro Generated in 1s
                </span>
              </div>
              
              <p className="text-white bg-primary-900/30 border border-primary-500/20 p-4 rounded-xl rounded-tr-none mb-6">
                "Hi there! 👋 Thanks for reaching out. Yes, we have a few slots open tomorrow afternoon. A standard haircut is $45. Would you like me to book you in for 2:00 PM or 3:30 PM?"
              </p>

              <div className="flex gap-3">
                <button className="flex-1 bg-white text-surface-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Copy & Send
                </button>
                <button className="px-4 py-3 bg-surface-800 text-gray-300 rounded-lg font-medium hover:bg-surface-700 transition-colors">
                  Regenerate
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
