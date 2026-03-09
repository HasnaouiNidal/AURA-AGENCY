import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Perfect for testing the waters.",
      features: [
        "50 replies per month",
        "Standard generation speed",
        "Basic tone options",
        "Email support"
      ],
      cta: "Start Free",
      popular: false,
      buttonClass: "bg-surface-800 text-white border border-white/10 hover:bg-surface-700"
    },
    {
      name: "Pro",
      price: "$15",
      period: "per month",
      desc: "For businesses ready to scale.",
      features: [
        "Unlimited replies",
        "Priority generation speed",
        "Advanced tone options (Friendly, Formal, Salesy)",
        "Priority support",
        "Custom brand voice"
      ],
      cta: "Get Pro",
      popular: true,
      buttonClass: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
    }
  ];

  return (
    <section className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Less than the cost of one lost sale per month. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-primary-500 shadow-2xl shadow-primary-500/20' : 'border-white/10 shadow-sm'} bg-surface-900 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tight text-white">{plan.price}</span>
                  <span className="text-gray-400 font-medium">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300">
                    <Check className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${plan.buttonClass}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
