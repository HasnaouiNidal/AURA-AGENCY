import React from 'react';
import { motion } from 'motion/react';

const logos = [
  'STRIPE', 'AIRBNB', 'NOTION', 'LINEAR', 'VERCEL', 'REVOLUT', 'KLARNA', 'WISE'
];

export const LogoBanner = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/40 mb-12 font-medium">
          Trusted by Data-Driven Teams
        </p>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-20 grayscale hover:opacity-40 transition-opacity duration-500">
          {logos.map((logo) => (
            <div key={logo} className="text-xl font-black tracking-tighter italic">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
