import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';
import { clsx } from 'clsx';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      desc: 'Essential insights for early-stage startups.',
      features: ['Basic Analytics', '3 Team Members', 'Daily Reports', '7-day Data Retention'],
      highlight: false
    },
    {
      name: 'Growth',
      price: '$129',
      desc: 'Advanced AI for scaling companies.',
      features: ['Predictive AI Models', 'Unlimited Team Members', 'Real-time Insights', '1-year Data Retention', 'Priority Support'],
      highlight: true
    },
    {
      name: 'Scale',
      price: '$299',
      desc: 'Enterprise-grade power and security.',
      features: ['Custom AI Training', 'Dedicated Success Manager', 'SSO & Audit Logs', 'Unlimited History', 'SLA Guarantee'],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-aura-bg)] text-white">
      <Navbar />
      
      <Section className="pt-40 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--color-aura-accent)] font-medium tracking-wide text-sm uppercase mb-4 block">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Invest in clarity.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparent pricing for every stage of your journey.
          </p>
        </motion.div>
      </Section>

      <Section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={clsx(
                  "relative p-8 rounded-3xl border flex flex-col transition-all duration-300 group",
                  plan.highlight 
                    ? "bg-[#1A1D24] border-[var(--color-aura-accent)]/30 shadow-[0_0_40px_rgba(110,231,255,0.1)] scale-105 z-10" 
                    : "bg-[#0F1115] border-white/10 hover:border-white/20"
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--color-aura-accent)] text-[#0F1115] text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className={clsx(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                        plan.highlight ? "bg-[var(--color-aura-accent)]/20 text-[var(--color-aura-accent)]" : "bg-white/10 text-gray-400"
                      )}>
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={clsx(
                  "w-full py-4 rounded-xl font-semibold transition-all duration-300",
                  plan.highlight 
                    ? "bg-[var(--color-aura-accent)] text-[#0F1115] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                )}>
                  Choose {plan.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
