import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Check, Zap, BarChart3, Shield, Globe, Users, Sparkles } from 'lucide-react';
import Section from '../components/ui/Section';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-aura-bg)] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--color-aura-accent)]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[var(--color-aura-accent)] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-aura-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-aura-accent)]"></span>
              </span>
              AURA 2.0 is now live
            </span>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Business Intelligence,<br />
              <span className="text-white">Reimagined.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Transform raw data into clairvoyant insights. 
              AURA combines elegant design with powerful AI to give you 
              the clarity you need to scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="px-8 py-4 rounded-full bg-white text-[var(--color-aura-bg)] font-semibold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2 group"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Our Philosophy
              </Link>
            </div>
          </motion.div>

          {/* Dashboard Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-[var(--color-aura-accent)]/20 to-transparent rounded-2xl blur-lg opacity-50" />
            <div className="relative rounded-2xl border border-white/10 bg-[#0F1115]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dashboard/1200/800" 
                alt="AURA Dashboard" 
                className="w-full h-auto opacity-90"
                referrerPolicy="no-referrer"
              />
              {/* Overlay UI Elements for "Real" feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <Section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-8 font-medium tracking-wide uppercase">Trusted by forward-thinking teams</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Acme Corp', 'GlobalBank', 'Nebula', 'Vertex', 'Horizon'].map((brand) => (
              <span key={brand} className="text-xl font-bold text-white/40 hover:text-white transition-colors cursor-default">{brand}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Problem / Solution */}
      <Section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Drowning in data,<br />starving for wisdom.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Traditional analytics tools are cluttered, slow, and backward-looking. 
                They tell you what happened, but not why—or what to do next.
                You spend hours building reports instead of building your business.
              </p>
              <ul className="space-y-4">
                {[
                  'Complex, clunky interfaces',
                  'Reactive, not proactive',
                  'Data silos and fragmentation'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                      <XIcon className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-aura-accent)]/20 to-purple-500/20 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl border border-white/10 bg-[#1A1D24]/50 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-aura-accent)]/10 flex items-center justify-center text-[var(--color-aura-accent)]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">The AURA Way</h3>
                    <p className="text-sm text-gray-400">Clairvoyant Intelligence</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  "Revenue is projected to dip by 12% next week due to seasonal churn. 
                  Recommendation: Launch the retention campaign created in Drafts."
                </p>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[var(--color-aura-accent)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="py-32 bg-[#0F1115]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">Intelligence, refined.</h2>
            <p className="text-gray-400 text-lg">
              Every feature is crafted to reduce noise and amplify signal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Predictive Analytics",
                desc: "Forecast revenue, churn, and growth with 94% accuracy using our proprietary models."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Real-time Pulse",
                desc: "Monitor your business vitals in real-time. No more waiting for end-of-month reports."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise Security",
                desc: "Bank-grade encryption and SOC2 compliance ensure your data remains yours alone."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-white/5 bg-[#1A1D24]/30 hover:bg-[#1A1D24]/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-[var(--color-aura-accent)] group-hover:text-[#0F1115] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-aura-accent)]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-aura-accent)]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight">
            Ready to see the future?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 10,000+ founders who trust AURA to guide their growth.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[var(--color-aura-accent)] text-[#0F1115] font-bold text-lg hover:bg-white transition-colors shadow-[0_0_40px_rgba(110,231,255,0.3)]"
          >
            Get Started Now
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
