import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoBanner } from './components/LogoBanner';
import { ScrollRevealDemo } from './components/ScrollRevealDemo';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-aura-bg selection:bg-aura-accent-end/30">
      <Navbar />
      <main>
        <Hero />
        <LogoBanner />
        <ScrollRevealDemo />
        <ProblemSolution />
        <Features />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
      
      {/* Global Floating Particles Effect */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
