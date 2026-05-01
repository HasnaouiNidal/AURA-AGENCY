import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Aura Insights didn't just give us data; it gave us immediate clarity. We identified key growth metrics in our first week of using the platform.",
    author: "Sarah Chen",
    role: "Director of Operations",
    metric: "Unprecedented Clarity",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "An incredibly intuitive and beautiful product. It handles complex data streams with the elegance of a much larger enterprise tool.",
    author: "Marcus Thorne",
    role: "Technical Founder",
    metric: "Premium Experience",
    image: "https://picsum.photos/seed/marcus/100/100"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-aura-accent-start/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[40px] border-white/5 relative"
            >
              <div className="text-4xl text-aura-accent-start font-serif mb-6">“</div>
              <p className="text-xl md:text-2xl font-medium mb-10 leading-relaxed italic">
                {t.quote}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold">{t.author}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gradient">{t.metric}</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">Verified Impact</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
