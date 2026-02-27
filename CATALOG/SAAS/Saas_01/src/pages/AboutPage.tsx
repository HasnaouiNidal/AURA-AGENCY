import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-aura-bg)] text-white">
      <Navbar />
      
      {/* Hero */}
      <Section className="pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold mb-8 leading-tight"
          >
            We believe intelligence should be <span className="text-[var(--color-aura-accent)]">beautiful</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            In a world of noise, AURA is the signal. We are building the future of business intelligence—where data isn't just numbers, but a narrative.
          </motion.p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="py-20 bg-[#1A1D24]/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://picsum.photos/seed/philosophy/800/1000" 
                alt="Design Philosophy" 
                className="rounded-2xl opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[var(--color-aura-accent)] font-medium tracking-wide text-sm uppercase mb-4 block">
                Our Philosophy
              </span>
              <h2 className="text-3xl font-semibold mb-6">Calm in the chaos.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Most analytics tools induce anxiety. Red alerts, cluttered dashboards, information overload.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We took a different approach. We stripped away the non-essential. We focused on the "why" behind the data. We designed AURA to be a place of clarity, not confusion.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision */}
      <Section className="py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-12">The Future is Clairvoyant</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Proactive', desc: 'Systems that act before you ask.' },
              { title: 'Invisible', desc: 'Technology that fades into the background.' },
              { title: 'Human', desc: 'Design that respects your attention.' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#1A1D24] border border-white/5">
                <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
