import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code, Zap, Layers, Cpu, CheckCircle, ChevronDown,
  Plus, Star, TrendingUp, Clock, BarChart3, Globe, Shield, Users, Rocket
} from 'lucide-react';
import { Button, Card, Section, FadeIn, MeshBackground, HeroBackground } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import { getCategoryCards } from '../data/catalog';

const Home: React.FC = () => {
  const categories = getCategoryCards();

  return (
    <>
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <div className="relative min-h-[70vh] flex flex-col justify-start pt-32 md:pt-40 pb-16">
        <HeroBackground />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn className="relative">
            {/* Aura Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-accentSecondary/40 via-accentPrimary/30 to-blue-600/20 blur-[100px] md:blur-[140px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-textPrimary/5 border border-textPrimary/10 mb-6 backdrop-blur-md hover:bg-textPrimary/10 transition-colors cursor-default relative z-10">
              <span className="w-2 h-2 rounded-full bg-accentSecondary animate-pulse" />
              <span className="text-xs font-medium tracking-wider uppercase text-accentSecondary" style={{ fontFamily: "'Sora', sans-serif" }}>Aura Web Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[clamp(2.25rem,5vw+1rem,4.5rem)] font-bold mb-6 leading-[1.1] tracking-tight relative z-10" style={{ fontFamily: "'Sora', sans-serif" }}>
              Professional Websites Built <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPrimary via-accentSecondary to-accentPrimary bg-[length:200%_auto] animate-shimmer">
                for Real Businesses.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-textSecondary max-w-2xl mx-auto mb-8 leading-relaxed relative z-10">
              Launch a clean, modern website for your business. Choose from our catalog or describe your idea — Aura builds it fast and professionally.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative z-10">
              <div className="relative group w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 pointer-events-none" />
                <Button to="/contact" variant="primary" className="relative w-full px-8 py-3.5 text-sm font-semibold tracking-wide flex justify-center">
                  Start Your Website Project
                </Button>
              </div>
              <Button to="/catalog" variant="outline" className="w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 px-8 py-3.5 text-sm font-medium border-textPrimary/20 hover:border-textPrimary/40 flex justify-center">
                View Website Catalog
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col items-center justify-center gap-3 text-xs text-textSecondary font-medium relative z-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-textPrimary/5 border border-textPrimary/10">
                <Shield size={14} className="text-accentSecondary" /> Trusted by growing small businesses.
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-textSecondary/80 mt-2">
                <span className="flex items-center gap-1.5"><Star size={12} className="text-accentLuxury fill-accentLuxury" /> 40+ websites launched</span>
                <span className="flex items-center gap-1.5"><Star size={12} className="text-accentLuxury fill-accentLuxury" /> 100% client satisfaction</span>
                <span className="flex items-center gap-1.5"><Star size={12} className="text-accentLuxury fill-accentLuxury" /> Fast delivery</span>
              </div>
            </div>
          </FadeIn>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent hidden lg:block" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent hidden lg:block" />
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
                { icon: Layers, title: 'Catalog or Custom', desc: 'Choose a beautiful layout from our catalog or describe your unique idea.' },
                { icon: Cpu, title: 'Full Build & Delivery', desc: 'We build your website fast, handling both front-end design and back-end logic.' },
                { icon: Shield, title: 'Monthly Checks & Fixes', desc: 'We offer reliable monthly website checks and handle any immediate fixes required.' },
                { icon: Code, title: 'You Own the Code', desc: 'You maintain 100% ownership of your website and assets forever. No lock-ins.' },
              ].map((feature, i) => (
                <Card key={i} className="group">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:bg-accentPrimary/20 transition-colors">
                    <feature.icon className="text-accentPrimary group-hover:text-textPrimary transition-colors" size={24} />
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
      <Section className="bg-bgSecondary/40 border-y border-textPrimary/5">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">A Calm, Reliable Partner</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Trusted by Small Businesses.<br />
              <span className="text-textSecondary font-light text-3xl md:text-4xl">Built for Growth.</span>
            </h2>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { value: '40+', label: 'Local Businesses', sub: 'shifted online seamlessly', icon: Users, color: 'text-accentPrimary' },
              { value: '100%', label: 'Code Ownership', sub: 'you own your website fully', icon: Code, color: 'text-accentSecondary' },
              { value: '24/7', label: 'Monitor & Fix', sub: 'monthly maintenance checks', icon: Shield, color: 'text-accentLuxury' },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-surface/40 border border-textPrimary/5 rounded-2xl p-8 text-center hover:-translate-y-1.5 hover:shadow-2xl hover:border-accentPrimary/50 transition-all duration-300 ease-out">
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-textPrimary/5 flex items-center justify-center">
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
              { quote: "Aura made getting our clinic online completely stress-free. We chose a beautiful layout from their catalog, and within days, we had a fully functional site we completely own.", name: 'Sarah M.', role: 'Owner', company: 'Wellness Clinic', initials: 'SM' },
              { quote: "Having peace of mind knowing Aura handles our monthly website checks and fixes is invaluable. They are calm, professional, and reliably deliver exactly what we need.", name: 'David T.', role: 'Director', company: 'Local Accounting', initials: 'DT' },
              { quote: "We had a custom idea for our bakery's ordering system. Aura built the front-end and back-end flawlessly. Excellent communication and a truly premium service.", name: 'Elena R.', role: 'Founder', company: 'Artisan Bakes', initials: 'ER' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-gradient-to-br from-surface to-bgSecondary p-8 rounded-2xl border border-textPrimary/5 relative hover:-translate-y-1.5 hover:shadow-2xl hover:border-accentPrimary/50 transition-all duration-300 ease-out flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => <Star key={s} size={12} className="text-accentLuxury fill-accentLuxury" />)}
                  </div>
                  <div className="text-accentPrimary text-4xl font-serif absolute top-4 left-6 opacity-20">"</div>
                  <p className="text-textSecondary mb-6 mt-4 relative z-10 text-sm leading-relaxed flex-1">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-textPrimary/5">
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
          PROMOTIONAL BANNER
      ============================================================ */}
      <Section className="py-16 bg-bgPrimary">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="relative overflow-hidden bg-textPrimary/5 backdrop-blur-md rounded-3xl border border-textPrimary/10 shadow-[inset_0_0_20px_rgba(139,92,246,0.15)] p-12 md:p-16 text-center">
              {/* Subtle background glow inside the card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gradient-to-tr from-accentPrimary/20 to-accentSecondary/10 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-accentPrimary/10 border border-accentPrimary/20 text-accentPrimary text-xs font-bold uppercase tracking-wider mb-6">
                  AURA INTELLIGENCE V2.0 IS LIVE
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-textSecondary">
                  The Next Generation of Web Architecture
                </h3>
                <p className="text-textSecondary text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Experience unprecedented velocity. Our proprietary AI build system now delivers agency-quality platforms in 48 hours without compromising a single pixel.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="relative group w-full sm:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500 pointer-events-none" />
                    <Button to="/contact" variant="primary" className="relative w-full sm:w-auto px-8 py-4 text-sm font-semibold hover:-translate-y-1 transition-all duration-300 ease-out">
                      Experience the Future
                    </Button>
                  </div>
                  <Button to="/catalog" variant="outline" className="w-full sm:w-auto px-8 py-4 text-sm font-medium border-textPrimary/10 hover:bg-textPrimary/5 hover:border-textPrimary/20 transition-all duration-300 ease-out">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          HOW AURA WORKS
      ============================================================ */}
      <Section className="bg-bgSecondary border-y border-textPrimary/5">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentPrimary mb-4">The Process</p>
            <h2 className="text-4xl font-serif font-bold mb-4">How Aura Works</h2>
            <p className="text-textSecondary">A simple, transparent path to launching your business online.</p>
          </FadeIn>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-textPrimary/10 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: '01', title: 'Select or Envision',
                  desc: 'Select a proven layout from our catalog or share your unique vision with us on a free call.',
                  detail: 'Step 1 · Free Consultation',
                  color: 'text-accentSecondary', border: 'border-accentSecondary/30',
                },
                {
                  step: '02', title: 'Professional Build',
                  desc: 'We develop your complete website quickly, handling all design, front-end, and back-end logic.',
                  detail: 'Step 2 · Fast Delivery',
                  color: 'text-accentPrimary', border: 'border-accentPrimary/40',
                },
                {
                  step: '03', title: 'Launch & Maintain',
                  desc: 'Your site goes live under your full ownership. We provide ongoing monthly checks and quick fixes.',
                  detail: 'Step 3 · Monthly Support',
                  color: 'text-accentLuxury', border: 'border-accentLuxury/30',
                },
              ].map((p, i) => (
                <FadeIn key={i} delay={i * 200} className="relative z-10 bg-bgSecondary p-6 text-center rounded-2xl border border-transparent hover:border-accentPrimary/50 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ease-out">
                  <div className={`w-16 h-16 mx-auto bg-surface rounded-full border ${p.border} flex items-center justify-center text-xl font-bold ${p.color} mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]`}>
                    {p.step}
                  </div>
                  <h3 className={`text-2xl font-serif font-bold mb-3 ${p.color}`}>{p.title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed mb-4">{p.desc}</p>
                  <span className={`text-xs px-3 py-1 rounded-full bg-textPrimary/5 border border-textPrimary/10 ${p.color}`}>{p.detail}</span>
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
                    <div className="bg-bgPrimary/80 backdrop-blur-md border border-textPrimary/10 rounded-xl p-4">
                      <p className="text-xs text-textSecondary mb-1">Solo Architect. AI-Amplified Output.</p>
                      <p className="text-sm font-semibold">Precision-engineered. System-driven.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">The Agency Promise</p>
                <h2 className="text-4xl font-serif font-bold mb-6">A Calm Approach to Web Development</h2>
                <p className="text-textSecondary mb-6 leading-relaxed">
                  We built Aura with one goal: to remove the technical stress from running a small business. You shouldn't have to worry about servers, codebases, or broken links.
                </p>
                <p className="text-textSecondary mb-8 leading-relaxed">
                  We handle the engineering—delivering beautiful, fast websites that you fully own. And when things change, our monthly checks and rapid fixes ensure your digital presence is always perfect.
                </p>
                <div className="flex items-center gap-4">
                  <Button to="/about" variant="outline" icon>Read Our Story</Button>
                  <Link to="/contact" className="text-sm text-textSecondary hover:text-accentPrimary transition-colors flex items-center gap-1 group">
                    Or book a strategy call <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
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
              <h2 className="text-4xl font-serif font-bold">Select Your <br /><span className="text-accentPrimary">Starting Point</span></h2>
            </FadeIn>
            <FadeIn delay={200}>
              <Link to="/catalog" className="text-textSecondary hover:text-textPrimary flex items-center gap-2 group">
                View Full Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <ProjectGrid>
            {categories.slice(0, 3).map((categoryCard, i) => {
              const customLabels = ['Service Business', 'E-commerce', 'Professional Portfolio'];
              return (
                <FadeIn key={categoryCard.id} delay={i * 100}>
                  <ProjectCard project={{
                    id: categoryCard.id,
                    title: categoryCard.title,
                    category: customLabels[i] || categoryCard.category,
                    description: categoryCard.description,
                    image: categoryCard.previewImage,
                    docsUrl: categoryCard.detailRoute,
                    demoUrl: categoryCard.liveDemoRoute
                  }} />
                </FadeIn>
              )
            })}
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
              <span className="text-textSecondary font-light text-3xl">Professional Quality.</span>
            </h2>
            <p className="text-textSecondary text-sm max-w-lg mx-auto mt-4">
              Every package includes full code ownership and dedicated monthly checks. No hidden fees.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <FadeIn delay={0}>
              <div className="p-8 rounded-2xl border border-textPrimary/10 bg-bgPrimary hover:-translate-y-1.5 hover:shadow-2xl hover:border-accentPrimary/50 transition-all duration-300 ease-out flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-textSecondary mb-2">Essential</h3>
                  <p className="text-xs text-textSecondary mb-1">Starting from</p>
                  <div className="text-4xl font-serif font-bold mb-1">$1,500</div>
                  <p className="text-xs text-textSecondary mb-6">Essential presence for new businesses</p>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-textSecondary flex-1">
                  {['Professional Landing Page', 'Mobile Responsive', 'Contact Form Integration', 'Monthly Website Checks', '100% Code Ownership'].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle size={16} className="text-accentSecondary shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button to="/contact" variant="outline" className="w-full">Book a Strategy Call</Button>
              </div>
            </FadeIn>

            {/* Growth — Featured */}
            <FadeIn delay={100}>
              <div className="p-8 rounded-2xl border border-accentPrimary/50 bg-surface relative md:-translate-y-4 hover:-translate-y-1.5 md:hover:-translate-y-[22px] hover:shadow-2xl hover:border-accentPrimary transition-all duration-300 ease-out flex flex-col shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accentPrimary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </div>
                <div>
                  <h3 className="text-xl font-bold text-textPrimary mb-2">Professional</h3>
                  <p className="text-xs text-textSecondary mb-1">Starting from</p>
                  <div className="text-4xl font-serif font-bold mb-1 text-accentPrimary">$3,500</div>
                  <p className="text-xs text-textSecondary mb-6">Advanced features and custom integration</p>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-textPrimary flex-1">
                  {['Multi-Page Website (up to 5)', 'CMS / Blog Integration', 'Custom Service Pages', 'Monthly Checks & Fixes', '100% Code Ownership'].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle size={16} className="text-accentPrimary shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button to="/contact" variant="primary" className="w-full">Book a Strategy Call</Button>
              </div>
            </FadeIn>

            {/* Premium */}
            <FadeIn delay={200}>
              <div className="p-8 rounded-2xl border border-accentLuxury/30 bg-bgPrimary hover:-translate-y-1.5 hover:shadow-2xl hover:border-accentLuxury/60 transition-all duration-300 ease-out flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-accentLuxury mb-2">Premium</h3>
                  <p className="text-xs text-textSecondary mb-1">Starting from</p>
                  <div className="text-4xl font-serif font-bold mb-1">$7,000</div>
                  <p className="text-xs text-textSecondary mb-6">Full-scale web applications and back-ends</p>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-textSecondary flex-1">
                  {['Custom Web Application', 'Complex Back-end Logic', 'Inventory / Booking System', 'Priority Monthly Fixes', '100% Code Ownership'].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle size={16} className="text-accentLuxury shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button to="/contact" variant="gold" className="w-full">Book a Strategy Call</Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mt-10">
            <p className="text-xs text-textSecondary">
              Not sure which package?{' '}
              <Link to="/contact" className="text-accentPrimary hover:underline">Book a strategy call</Link>{' '}
              — we'll scope the right system together.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          INLINE CTA #2
      ============================================================ */}
      <Section className="py-16 bg-bgPrimary border-b border-textPrimary/5">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h3 className="text-2xl font-serif font-bold mb-3">Your site should be your best growth asset.</h3>
            <p className="text-textSecondary text-sm mb-6 max-w-md mx-auto">Scope your project in a free 30-minute call. Zero obligation.</p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />
              <Button to="/contact" variant="primary" className="relative px-10 py-4 text-base font-semibold">
                Book a Strategy Call
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
              Give Your Business a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-accentSecondary to-accentLuxury bg-[length:200%_auto] animate-shimmer">
                Professional Online Presence
              </span>
            </h2>
            <p className="text-textSecondary max-w-lg mx-auto mb-10 leading-relaxed">
              Aura provides calm, reliable web development with monthly checks and fixes—so you can fully focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 pointer-events-none" />
                <Button variant="primary" to="/contact" className="relative py-5 px-12 text-lg font-semibold">
                  Book a Strategy Call
                </Button>
              </div>
              <Button to="/catalog" variant="outline" icon className="py-5 px-8">
                Explore Catalog
              </Button>
            </div>
            <p className="mt-6 text-xs text-textSecondary">No commitment. Just a strategic conversation.</p>
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
              { q: "How do you build websites so quickly?", a: "We use a proven, efficient development process and professional pre-built components. This allows us to focus entirely on customizing your site for your specific business goals without wasting time on repetitive setup." },
              { q: "Is this templated or fully custom?", a: "You can choose from our catalog of proven layouts or request a fully custom build. In either case, every site is tailored specifically to your brand, audience, and functional needs." },
              { q: "Do you work with all types of small businesses?", a: "Yes. Whether you are a local service provider, a wellness clinic, or a retail store, we build websites designed to help your specific business grow." },
              { q: "Do you offer ongoing website support?", a: "Every package includes our dedicated monthly checks. We constantly monitor your site's health and perform any rapid fixes needed so you never have to worry." },
              { q: "Do we own the website after delivery?", a: "Absolutely. You receive complete, 100% ownership of your website and all its assets. Host it with us or take it anywhere you like. No lock-in, ever." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <details className="group bg-surface rounded-lg p-4 cursor-pointer hover:bg-surface/80 transition-all duration-300">
                  <summary className="flex justify-between items-center font-medium list-none text-sm">
                    {item.q}
                    <Plus className="transition-transform group-open:rotate-45" size={20} />
                  </summary>
                  <p className="mt-4 text-textSecondary text-sm leading-relaxed border-t border-textPrimary/5 pt-4">{item.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          NEWSLETTER
      ============================================================ */}
      <Section className="py-12 border-t border-textPrimary/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-4">Join the Aura Mailing List</h3>
          <p className="text-textSecondary mb-6 text-sm">Practical tips on growing your small business online. No spam.</p>
          <div className="flex justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="email@domain.com"
              className="bg-bgSecondary border border-textPrimary/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accentPrimary focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all"
            />
            <Button variant="secondary" className="whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;