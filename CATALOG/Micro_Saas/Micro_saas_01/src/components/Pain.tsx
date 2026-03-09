import { motion } from 'motion/react';
import { AlertCircle, Clock, MessageSquareOff, Moon, ArrowDown } from 'lucide-react';

export default function Pain() {
  const pains = [
    {
      icon: <Clock className="text-amber-500" size={24} />,
      title: "“I’ll reply later.”",
      desc: "And then you forget, leaving customers hanging."
    },
    {
      icon: <MessageSquareOff className="text-rose-500" size={24} />,
      title: "Overthinking Every Word",
      desc: "You rewrite messages 5 times to sound professional."
    },
    {
      icon: <AlertCircle className="text-orange-500" size={24} />,
      title: "Losing the Sale",
      desc: "You respond too late and they went to a competitor."
    },
    {
      icon: <Moon className="text-indigo-500" size={24} />,
      title: "No Time to Rest",
      desc: "You spend evenings answering DMs instead of resting."
    }
  ];

  return (
    <section className="py-24 bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Customer Messages Never Stop.{' '}
            <span className="text-gray-400">Neither Does the Pressure.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            You're losing time and money replying manually. One delayed reply can mean one lost customer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-950 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-800 flex items-center justify-center mb-6">
                {pain.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{pain.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#solution"
            className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors group"
          >
            There’s a Better Way
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
