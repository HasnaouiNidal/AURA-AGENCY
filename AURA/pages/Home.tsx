import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code, Zap, Layers, Cpu, CheckCircle, ChevronDown,
  Plus, Star, TrendingUp, Clock, BarChart3, Globe, Shield
} from 'lucide-react';
import { Button, Card, Section, FadeIn, MeshBackground, HeroBackground } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import saasHero from '../assets/saas03-hero.png';
import analyticsImg from '../assets/analytics_01-hero.png';
import cryptoImg from '../assets/CRYPTO_01-hero.png';
import ecommerceImg from '../assets/E-commerce_01-hero.png';

const Home: React.FC = () => {
  return (
    <>
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-accentSecondary animate-pulse" />
              <span className="text-xs font-medium tracking-wider uppercase text-accentSecondary">AI-Powered Architecture Studio</span>
            </div>

            {/* Main Headline — same structure as original, premium copy */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
              We Engineer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accentSecondary to-accentPrimary bg-[length:200%_auto] animate-shimmer">
                Scalable Digital Systems.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-10 leading-relaxed">
              AURA combines AI-architected workflows with precision engineering to build
              high-performance web systems — <span className="text-textPrimary font-medium">designed for conversion</span>,{' '}
              <span className="text-textPrimary font-medium">built for scale</span>, delivered in 5 days.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 pointer-events-none" />
                <Button to="/contact" variant="primary" className="relative text-base px-10 py-4 font-semibold tracking-wide">
                  Book Free Strategy Call
                </Button>
              </div>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 text-textSecondary hover:text-white text-sm font-medium border-b border-white/20 hover:border-white/60 pb-0.5 transition-all duration-300 group"
              >
                View Our Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-textSecondary">
              <span className="flex items-center gap-1.5">
                <Zap size={12} className="text-accentSecondary" />5-Day Launch Framework
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Cpu size={12} className="text-accentPrimary" />AI-Architected Systems
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <TrendingUp size={12} className="text-accentLuxury" />Built for Conversion
              </span>
            </div>
          </FadeIn>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-textSecondary/50">
          <ChevronDown size={24} />
        </div>
      </div>

      {/* ============================================================
          FEATURES
      ============================================================ */}
      <Section className="bg-bgPrimary">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cpu, title: 'AI-Architected Core', desc: 'Proprietary AI build pipelines cut delivery time by 70% without sacrificing output quality.' },
                { icon: Layers, title: 'Custom Architecture', desc: 'Every system is designed from scratch around your goals, traffic, and growth trajectory.' },
                { icon: Zap, title: '5-Day Delivery', desc: 'From strategy call to live production — 5 days. No bottlenecks. No compromises.' },
                { icon: Code, title: 'You Own the Code', desc: 'Fully typed React & TypeScript codebases. Yours forever. Zero lock-in, ever.' },
              ].map((feature, i) => (
                <Card key={i} className="group">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:bg-accentPrimary/20 transition-colors">
                    <feature.icon className="text-accentPrimary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          SOCIAL PROOF — METRICS + TESTIMONIALS
      ============================================================ */}
      <Section className="bg-bgSecondary/40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">Results That Speak</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Trusted by Founders.<br />
              <span className="text-textSecondary font-light text-3xl md:text-4xl">Proven by Numbers.</span>
            </h2>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { value: '+320%', label: 'Average Conversion Lift', sub: 'vs. previous website', icon: TrendingUp, color: 'text-accentPrimary' },
              { value: '5 Days', label: 'Average Time to Launch', sub: 'from strategy call to live', icon: Clock, color: 'text-accentSecondary' },
              { value: '98+', label: 'Lighthouse Score', sub: 'performance & accessibility', icon: BarChart3, color: 'text-accentLuxury' },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-surface/40 border border-white/5 rounded-2xl p-8 text-center hover:border-white/15 hover:shadow-lg hover:shadow-accentPrimary/5 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <stat.icon size={18} className={stat.color} />
                    </div>
                  </div>
                  <div className={`text-4xl md:text-5xl font-serif font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <p className="text-textPrimary font-medium text-sm mb-1">{stat.label}</p>
                  <p className="text-textSecondary text-xs">{stat.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "AURA didn't hand us a website — they handed us a system. Built in 5 days, Lighthouse 99, and our trial sign-ups doubled within a month. I didn't know this was possible.", name: 'Alex V.', role: 'CEO', company: 'FinTech Global', initials: 'AV' },
              { quote: "We've worked with three agencies before AURA. None understood modern SaaS positioning the way they do. The site launched in 5 days and immediately converted cold traffic.", name: 'Sofia M.', role: 'Founder', company: 'Nuvem Analytics', initials: 'SM' },
              { quote: "I gave AURA a brief and a rough wireframe. What I got back was a world-class brand system. 99 Lighthouse, zero layout shifts, converts like nothing I've seen before.", name: 'Kenji T.', role: 'CTO', company: 'Arc Protocol', initials: 'KT' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-gradient-to-br from-surface to-bgSecondary p-8 rounded-2xl border border-white/5 relative hover:border-white/10 transition-all duration-300 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => <Star key={s} size={12} className="text-accentLuxury fill-accentLuxury" />)}
                  </div>
                  <div className="text-accentPrimary text-4xl font-serif absolute top-4 left-6 opacity-20">"</div>
                  <p className="text-textSecondary mb-6 mt-4 relative z-10 text-sm leading-relaxed flex-1">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accentPrimary/40 to-accentSecondary/20 flex items-center justify-center text-xs font-bold">{t.initials}</div>
                    <div>
                      <h4 className="font-semibold text-sm">{t.name}</h4>
                      <p className="text-xs text-textSecondary">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          INLINE CTA #1
      ============================================================ */}
      <Section className="py-16 bg-bgPrimary border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-textSecondary text-sm mb-6">Ready to see what AURA can build for you?</p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />
              <Button to="/contact" variant="primary" className="relative px-10 py-4 text-base font-semibold">
                Book Free Strategy Call
              </Button>
            </div>
            <p className="mt-4 text-xs text-textSecondary">No commitment · 30-min call · Walk away with a clear roadmap</p>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          HOW AURA DELIVERS IN 5 DAYS
      ============================================================ */}
      <Section className="bg-bgSecondary border-y border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentPrimary mb-4">The Delivery System</p>
            <h2 className="text-4xl font-serif font-bold mb-4">How AURA Delivers in 5 Days</h2>
            <p className="text-textSecondary">From concept to live production in three streamlined phases.</p>
          </FadeIn>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: '01', title: 'Strategy & Architecture',
                  desc: 'We audit your positioning and map your entire web system — sitemap, conversion flow, and architecture blueprint. You leave with a clear plan.',
                  detail: 'Day 1 · FREE strategy call',
                  color: 'text-accentSecondary', border: 'border-accentSecondary/30',
                },
                {
                  step: '02', title: 'Design & Build',
                  desc: 'AI-accelerated design system meets hand-crafted engineering. Every component, animation, and interaction is precision-built for your brand.',
                  detail: 'Days 2–4 · AI-accelerated build',
                  color: 'text-accentPrimary', border: 'border-accentPrimary/40',
                },
                {
                  step: '03', title: 'Launch & Optimize',
                  desc: 'Deployed to your domain with Lighthouse 95+ verification. We monitor, run post-launch optimizations, and support you for 30 days.',
                  detail: 'Day 5 · Live + 30-day support',
                  color: 'text-accentLuxury', border: 'border-accentLuxury/30',
                },
              ].map((p, i) => (
                <FadeIn key={i} delay={i * 200} className="relative z-10 bg-bgSecondary p-6 text-center">
                  <div className={`w-16 h-16 mx-auto bg-surface rounded-full border ${p.border} flex items-center justify-center text-xl font-bold ${p.color} mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]`}>
                    {p.step}
                  </div>
                  <h3 className={`text-2xl font-serif font-bold mb-3 ${p.color}`}>{p.title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed mb-4">{p.desc}</p>
                  <span className={`text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 ${p.color}`}>{p.detail}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          ABOUT INTRO
      ============================================================ */}
      <Section className="bg-bgSecondary/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface">
                  <img src="https://picsum.photos/600/800?grayscale" alt="Founder" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4">
                      <p className="text-xs text-textSecondary mb-1">Solo Architect. AI-Amplified Output.</p>
                      <p className="text-sm font-semibold">Precision-engineered. System-driven.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">The Soul of AURA</p>
                <h2 className="text-4xl font-serif font-bold mb-6">The Soul of AURA</h2>
                <p className="text-textSecondary mb-6 leading-relaxed">
                  I am a solo architect of digital systems. Driven by one conviction — that the gap between a world-class digital product and the one you have now is not talent or budget. It's architecture.
                </p>
                <p className="text-textSecondary mb-8 leading-relaxed">
                  Using advanced AI build tooling, I operate with the output of a full agency and the personal precision of a craftsman. Every line of code is intentional. Every system is built to perform.
                </p>
                <div className="flex items-center gap-4">
                  <Button to="/about" variant="outline" icon>Read My Story</Button>
                  <Link to="/contact" className="text-sm text-textSecondary hover:text-accentPrimary transition-colors flex items-center gap-1 group">
                    Or book a call <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          CATALOG GRID
      ============================================================ */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <FadeIn>
              <h2 className="text-4xl font-serif font-bold">Explore Our <br /><span className="text-accentPrimary">Website Catalog</span></h2>
            </FadeIn>
            <FadeIn delay={200}>
              <Link to="/catalog" className="text-textSecondary hover:text-white flex items-center gap-2 group">
                View All Categories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <ProjectGrid>
            {[
              { id: 'saas', title: 'SaaS Platform', cat: 'Software', img: saasHero },
              { id: 'ecommerce', title: 'Luxury E-Commerce', cat: 'Retail', img: ecommerceImg },
              { id: 'fintech', title: 'Fintech Protocol', cat: 'Finance', img: cryptoImg },
              { id: 'micro-saas', title: 'Micro SaaS Wrapper', cat: 'Tools', img: 'https://picsum.photos/id/4/800/600' },
              { id: 'analytics', title: 'Data Dashboard', cat: 'Analytics', img: analyticsImg },
              { id: 'portfolio', title: 'Creative Agency', cat: 'Portfolio', img: 'https://picsum.photos/id/6/800/600' },
            ].map((item, i) => (
              <FadeIn key={item.id} delay={i * 100}>
                <ProjectCard
                  project={{
                    id: item.id,
                    title: item.title,
                    category: item.cat,
                    description: `Explore our premium ${item.title.toLowerCase()} designs.`, // Generic description
                    image: item.img,
                    docsUrl: `/catalog/${item.id}`
                  }}
                />
              </FadeIn>
            ))}
          </ProjectGrid>
        </div>
      </Section>

      {/* ============================================================
          PRICING STRATEGY PREVIEW
      ============================================================ */}
      <Section className="bg-bgSecondary">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">Investment</p>
            <h2 className="text-4xl font-serif font-bold mb-4">Transparent Pricing.<br />
              <span className="text-textSecondary font-light text-3xl">Premium Systems.</span>
            </h2>
            <p className="text-textSecondary text-sm max-w-lg mx-auto mt-4">
              Every package is a complete, conversion-optimized delivery. No hidden fees, no scope creep without approval.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <FadeIn delay={0}>
              <div className="p-8 rounded-2xl border border-white/10 bg-bgPrimary hover:border-white/20 transition-all flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-textSecondary mb-2">Starter</h3>
                  <p className="text-xs text-textSecondary mb-1">Starting from</p>
                  <div className="text-4xl font-serif font-bold mb-1">$2,900</div>
                  <p className="text-xs text-textSecondary mb-6">Ideal for SaaS launches &amp; founders</p>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-textSecondary flex-1">
                  {['High-Converting Landing Page', 'Mobile Responsive & Fast', 'Advanced SEO Setup', '5-Day Delivery', '30 Days Support'].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle size={16} className="text-accentSecondary shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button to="/contact" variant="outline" className="w-full">Get Started</Button>
              </div>
            </FadeIn>

            {/* Growth — Featured */}
            <FadeIn delay={100}>
              <div className="p-8 rounded-2xl border border-accentPrimary/50 bg-surface relative md:-translate-y-4 shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accentPrimary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Best Value
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                  <p className="text-xs text-textSecondary mb-1">Starting from</p>
                  <div className="text-4xl font-serif font-bold mb-1 text-accentPrimary">$5,500</div>
                  <p className="text-xs text-textSecondary mb-6">Full web presence for funded startups</p>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-textPrimary flex-1">
                  {['Multi-Page System (up to 5)', 'CMS Integration', 'Custom Animations & Micro-UX', 'Performance Score 95+', '7-Day Delivery', '30 Days Support'].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle size={16} className="text-accentPrimary shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button to="/contact" variant="primary" className="w-full">Book Strategy Call</Button>
              </div>
            </FadeIn>

            {/* Premium */}
            <FadeIn delay={200}>
              <div className="p-8 rounded-2xl border border-accentLuxury/30 bg-bgPrimary hover:border-accentLuxury/50 transition-all flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-accentLuxury mb-2">Premium</h3>
                  <p className="text-xs text-textSecondary mb-1">Starting from</p>
                  <div className="text-4xl font-serif font-bold mb-1">$9,500</div>
                  <p className="text-xs text-textSecondary mb-6">Full-scale web apps &amp; platforms</p>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-textSecondary flex-1">
                  {['Custom Web Application', 'Backend & API Integration', 'Design System Delivery', 'Priority Support & Retainer', '14-Day Delivery'].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle size={16} className="text-accentLuxury shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button to="/contact" variant="gold" className="w-full">Discuss Custom Scope</Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mt-10">
            <p className="text-xs text-textSecondary">
              Not sure which package?{' '}
              <Link to="/contact" className="text-accentPrimary hover:underline">Book a free 30-min strategy call</Link>{' '}
              — we'll scope the right system together.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          INLINE CTA #2
      ============================================================ */}
      <Section className="py-16 bg-bgPrimary border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h3 className="text-2xl font-serif font-bold mb-3">Your site should be your best growth asset.</h3>
            <p className="text-textSecondary text-sm mb-6 max-w-md mx-auto">Scope your project in a free 30-minute call. Zero obligation.</p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />
              <Button to="/contact" variant="primary" className="relative px-10 py-4 text-base font-semibold">
                Book Free Strategy Call
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          FINAL CTA BANNER
      ============================================================ */}
      <Section className="relative">
        <MeshBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-accentSecondary to-accentLuxury bg-[length:200%_auto] animate-shimmer">
                Exceptional
              </span>
            </h2>
            <p className="text-textSecondary max-w-lg mx-auto mb-10 leading-relaxed">
              AURA takes on a limited number of projects each month to protect output quality.
              Book your free strategy call before the next intake closes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 pointer-events-none" />
                <Button variant="primary" to="/contact" className="relative py-5 px-12 text-lg font-semibold">
                  Book Free Strategy Call
                </Button>
              </div>
              <Button to="/catalog" variant="outline" icon className="py-5 px-8">
                Explore Catalog
              </Button>
            </div>
            <p className="mt-6 text-xs text-textSecondary">30-min call · No commitment · Free architecture roadmap included</p>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          FAQ
      ============================================================ */}
      <Section className="bg-bgPrimary">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { q: "How do you actually deliver in 5 days?", a: "We use a proprietary AI build system that handles scaffolding, design tokens, and component architecture automatically — eliminating the 60–70% of build time traditional agencies waste on setup. What's left is craft, strategy, and conversion engineering." },
              { q: "Is this templated or fully custom?", a: "100% custom. We never use page builders or pre-made templates. Every design system, component, and codebase is built from scratch for your brand, audience, and goals." },
              { q: "Do you work with early-stage SaaS startups?", a: "Yes. Our Starter package is designed for pre-seed and seed-stage founders who need a high-converting landing page fast. Speed of launch matters — we get you there." },
              { q: "Do you offer post-launch support?", a: "Every package includes 30 days of post-launch support. Ongoing maintenance retainers are available for continuous iteration." },
              { q: "Do we own the codebase after delivery?", a: "Absolutely. You receive the complete, fully-typed React + TypeScript codebase. Host it anywhere, modify it freely, hand it off to any developer. No lock-in, ever." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <details className="group bg-surface rounded-lg p-4 cursor-pointer hover:bg-surface/80 transition-all duration-300">
                  <summary className="flex justify-between items-center font-medium list-none text-sm">
                    {item.q}
                    <Plus className="transition-transform group-open:rotate-45" size={20} />
                  </summary>
                  <p className="mt-4 text-textSecondary text-sm leading-relaxed border-t border-white/5 pt-4">{item.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          NEWSLETTER
      ============================================================ */}
      <Section className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-4">Join the AURA Insider</h3>
          <p className="text-textSecondary mb-6 text-sm">AI architecture insights, design trends, and conversion tactics. No spam.</p>
          <div className="flex justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="email@domain.com"
              className="bg-bgSecondary border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accentPrimary focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all"
            />
            <Button variant="secondary" className="whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;