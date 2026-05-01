import React from 'react';
import { Section, FadeIn, MeshBackground, Button, Card } from '../components/UI';
import { Terminal, Award, Users, Target, Workflow, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <Section className="pt-40 pb-20 relative overflow-hidden">
        <MeshBackground />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-textPrimary/5 border border-textPrimary/10 mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accentSecondary animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-accentSecondary">AI Architecture Studio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">The Architect</h1>
            <p className="text-xl text-textPrimary/90 max-w-2xl mx-auto leading-relaxed">
              Solo-operated. AI-amplified. Built to outperform every traditional agency you've worked with.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Founder Story */}
      <Section className="bg-bgSecondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <FadeIn>
                <div className="bg-surface p-1 rounded-2xl border border-textPrimary/10 rotate-3 transform hover:rotate-0 transition-all duration-500">
                  <img src="https://picsum.photos/800/1000?grayscale" alt="Founder" className="rounded-xl w-full" />
                </div>
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <FadeIn delay={200}>
                <p className="text-xs uppercase tracking-widest text-accentPrimary mb-4">Founder Story</p>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Built Different.<br />
                  <span className="text-textSecondary font-light">By Design.</span>
                </h2>
                <p className="text-textPrimary/90 leading-relaxed">
                  I started AURA with a simple conviction: most agencies are bloated. They charge for meetings, not results. As a solo architect leveraging a proprietary AI build system, I cut through all of that.
                </p>
                <p className="text-textPrimary/90 leading-relaxed">
                  My background in high-end product design and full-stack engineering lets me cover the entire vertical — from the first pixel of a design system to the last line of a TypeScript codebase. No middlemen. No account managers. Just precision-built systems.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="border-l-2 border-accentPrimary pl-4">
                    <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-blue-600 mb-1">5+</h4>
                    <p className="text-xs text-textSecondary">Years Experience</p>
                  </div>
                  <div className="border-l-2 border-accentSecondary pl-4">
                    <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-blue-600 mb-1">50+</h4>
                    <p className="text-xs text-textSecondary">Systems Shipped</p>
                  </div>
                  <div className="border-l-2 border-accentLuxury pl-4">
                    <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-blue-600 mb-1">5 Days</h4>
                    <p className="text-xs text-textSecondary">Avg. Delivery</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* 3 Brand Pillars */}
      <Section className="bg-bgPrimary">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentPrimary mb-4">Our Foundation</p>
            <h2 className="text-4xl font-serif font-bold">
              Three Pillars.<br />
              <span className="text-textSecondary font-light text-3xl">One Architecture Studio.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: '01', tagline: 'What We Believe', icon: Target,
                headline: 'Design without strategy is decoration.',
                body: 'Every pixel has purpose. Every interaction has intent. We build with conversion psychology and performance science — not aesthetic intuition alone.',
                accent: 'text-accentSecondary',
              },
              {
                number: '02', tagline: 'What We Build', icon: Workflow,
                headline: 'Digital systems, not static sites.',
                body: 'AURA delivers complete web architectures — from design system to codebase — scalable, owned by you, and built to compound in value. All in 5 days.',
                accent: 'text-accentPrimary',
              },
              {
                number: '03', tagline: 'How We Are Different', icon: Sparkles,
                headline: 'AI velocity. Human precision.',
                body: 'Our proprietary AI-accelerated build system eliminates waste — delivering agency-quality outcomes without agency timelines, overhead, or compromise.',
                accent: 'text-accentLuxury',
              },
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className="bg-bgSecondary/40 p-10 h-full rounded-2xl border border-textPrimary/5 hover:-translate-y-1 hover:border-accentPrimary/40 hover:shadow-[0_4px_20px_rgba(139,92,246,0.15)] transition-all duration-300 ease-out">
                  <div className="flex items-start justify-between mb-8">
                    <span className={`text-5xl font-serif font-bold opacity-10 ${pillar.accent}`}>{pillar.number}</span>
                    <div className="w-10 h-10 rounded-lg bg-textPrimary/5 border border-textPrimary/10 flex items-center justify-center">
                      <pillar.icon size={18} className={pillar.accent} />
                    </div>
                  </div>
                  <p className={`text-xs uppercase tracking-widest mb-3 ${pillar.accent}`}>{pillar.tagline}</p>
                  <h3 className="text-xl font-serif font-bold mb-4 leading-snug text-textPrimary">"{pillar.headline}"</h3>
                  <p className="text-textPrimary/80 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Why AURA */}
      <Section>
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">Why AURA</p>
            <h2 className="text-3xl font-serif font-bold">The Architectural Advantage</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Terminal, title: 'Precision Code', text: 'No spaghetti. Pure, typed, and scalable React + TypeScript architectures built to last and hand-off cleanly.' },
              { icon: Award, title: 'Premium Execution', text: 'Aesthetics that command trust and justify premium price points. Design that compounds in value over time.' },
              { icon: Users, title: 'Direct Access', text: 'You work with the founder. No account managers, no translation layers. Strategy + execution from one mind.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <Card className="text-center h-full hover:-translate-y-1 hover:border-accentPrimary/40 hover:shadow-[0_4px_20px_rgba(139,92,246,0.15)] transition-all duration-300 ease-out">
                  <item.icon className="mx-auto text-accentPrimary mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-textPrimary/80 text-sm leading-relaxed">{item.text}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Manifesto */}
      <Section className="bg-bgSecondary border-y border-textPrimary/5">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accentLuxury mb-8">Manifesto</p>
            <blockquote className="font-serif text-xl md:text-2xl font-light leading-relaxed text-textPrimary/90">
              <span className="text-textPrimary font-medium">Most agencies sell time.</span> We sell outcomes.
              <br /><br />
              AURA was built on one conviction: that the gap between a world-class digital product and the one you currently have is not talent, budget, or time —{' '}
              <span className="text-textPrimary font-medium">it's architecture.</span>
              <br /><br />
              We deploy AI not to cut corners, but to eliminate waste. The 40 hours a traditional team spends on scaffolding,{' '}
              <span className="text-textPrimary font-medium">we spend on strategy, craft, and conversion engineering.</span>
              <br /><br />
              We don't ship templates. We don't guess at design. We build systems — precise, fast, and built to compound in value over time.
            </blockquote>
            <p className="mt-12 text-accentLuxury font-serif text-xl font-semibold tracking-wide">
              This is AURA. The architecture studio for brands that intend to lead.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-bgPrimary border-t border-textPrimary/5 text-center">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold mb-4">Ready to Build Your System?</h2>
            <p className="text-textPrimary/80 mb-8 max-w-md mx-auto text-sm">Book a free 30-minute strategy call. Walk away with a clear architecture roadmap — no commitment required.</p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />
              <Button variant="primary" to="/contact" className="relative px-10 py-4">Book Free Strategy Call</Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default About;