import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { StatsDashboard } from './components/StatsDashboard';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeatureGrid />
      <StatsDashboard />
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1235] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">Start?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the fastest growing crypto platform today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]">
               Get Started Now
             </button>
             <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors">
               Contact Sales
             </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;