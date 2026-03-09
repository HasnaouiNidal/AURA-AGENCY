import { motion } from 'motion/react';
import { Instagram, Scissors, Briefcase, Home, ShoppingBag, PenTool } from 'lucide-react';

export default function UseCases() {
  const cases = [
    {
      icon: <Instagram className="text-pink-400" size={24} />,
      title: "Instagram Shops",
      example: "“Generate price inquiries replies instantly.”",
      bg: "bg-pink-500/10"
    },
    {
      icon: <Scissors className="text-purple-400" size={24} />,
      title: "Salons & Beauty",
      example: "“Respond to booking questions professionally.”",
      bg: "bg-purple-500/10"
    },
    {
      icon: <Briefcase className="text-blue-400" size={24} />,
      title: "Coaches & Consultants",
      example: "“Handle discovery call requests with ease.”",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Home className="text-emerald-400" size={24} />,
      title: "Real Estate Agents",
      example: "“Send property details and viewing times fast.”",
      bg: "bg-emerald-500/10"
    },
    {
      icon: <ShoppingBag className="text-orange-400" size={24} />,
      title: "E-commerce Stores",
      example: "“Resolve shipping and return queries in seconds.”",
      bg: "bg-orange-500/10"
    },
    {
      icon: <PenTool className="text-indigo-400" size={24} />,
      title: "Freelancers",
      example: "“Negotiate rates and project scopes confidently.”",
      bg: "bg-indigo-500/10"
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
            Perfect for Small Businesses Like Yours
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Works for your exact business type.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface-950 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-white/10 transition-colors group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${useCase.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
              <p className="text-gray-400 italic leading-relaxed">{useCase.example}</p>
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
          <button className="px-8 py-4 bg-surface-800 text-white border border-white/10 rounded-xl font-semibold text-lg hover:bg-surface-700 transition-all shadow-sm">
            See It in Action
          </button>
        </motion.div>
      </div>
    </section>
  );
}
