import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, FadeIn, Button, Card } from '../components/UI';
import { Check, Shield, BarChart2, Globe, ShoppingBag, Zap, Layers } from 'lucide-react';
import saasHero from '../assets/saas03-hero.png';
import ecom1 from '../assets/E-commerce_01-hero.png';
import ecom2 from '../assets/E-commerce_02-hero.png';


const CatalogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // --- Layout Components ---

  const SaasLayout = () => (
    <>
      <Section className="pt-32 pb-20 bg-gradient-to-b from-blue-900/20 to-bgPrimary">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">Enterprise Grade</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">SaaS Platform Architecture</h1>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto mb-10">Built for scale. Includes authentication, subscription billing, and multi-tenant database structure.</p>
            <div className="flex justify-center gap-4">
              <Link to="/saas-03">
                <Button variant="primary">View Live Demo</Button>
              </Link>
              <Button variant="outline">View Documentation</Button>
            </div>
            <Link to="/saas-03" className="mt-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl mx-auto max-w-5xl block">
              <img src={saasHero} alt="SaaS Dashboard" className="w-full opacity-80" />
            </Link>
          </FadeIn>
        </div>
      </Section>
      <Section>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Auth Ready', desc: 'Clerk or NextAuth integration pre-configured.' },
            { title: 'Stripe Billing', desc: 'Subscription webhooks and pricing tables.' },
            { title: 'Admin Panel', desc: 'Full CRUD operations for user management.' }
          ].map((f, i) => (
            <Card key={i}><h3 className="text-xl font-bold mb-2">{f.title}</h3><p className="text-textSecondary">{f.desc}</p></Card>
          ))}
        </div>
      </Section>
    </>
  );

  const MicroSaasLayout = () => (
    <>
      <Section className="pt-32 pb-20 bg-bgPrimary">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="text-5xl font-bold mb-6">Micro SaaS. <br /><span className="text-accentSecondary">Macro Impact.</span></h1>
            <p className="text-lg text-textSecondary mb-8">Minimalist wrapper designed for single-utility tools. High conversion focus with zero clutter.</p>
            <ul className="space-y-3 mb-8">
              {['One core feature focus', 'Lightning fast load times', 'Viral loops built-in'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm"><div className="bg-accentSecondary/20 p-1 rounded-full"><Check size={12} className="text-accentSecondary" /></div> {item}</li>
              ))}
            </ul>
            <Button variant="secondary" icon>Start Building</Button>
          </FadeIn>
          <FadeIn delay={200} className="relative">
            <div className="absolute inset-0 bg-accentSecondary/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-surface border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <Zap size={64} className="text-white animate-pulse" />
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );

  const EcommerceLayout = () => (
    <>
      <Section className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-6xl font-serif italic text-accentLuxury mb-4">Luxe.</h1>
            <h2 className="text-4xl text-white font-light tracking-[0.2em] uppercase mb-12">E-Commerce Framework</h2>
            <div className="w-24 h-px bg-accentLuxury mx-auto mb-12"></div>
            <p className="text-textSecondary max-w-xl mx-auto mb-12 font-light">
              Designed for high-ticket items. Minimalist galleries, smooth transitions, and premium checkout experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ecommerce-01">
                <Button variant="gold">View Ecommerce 01 Live Demo</Button>
              </Link>
              <Link to="/ecommerce-02">
                <Button variant="outline">View Ecommerce 02 Live Demo</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
      <Section className="py-0 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
            <div className="relative group w-full aspect-video overflow-hidden rounded-xl bg-[#0F1115]">
              <img src={ecom1} className="w-full h-full object-cover object-top transition-all duration-700" alt="Product" />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <Link to="/ecommerce-01">
                  <Button variant="primary">View Live Demo</Button>
                </Link>
                <Button variant="outline">View Documentation</Button>
              </div>
            </div>
            <div className="relative group w-full aspect-video overflow-hidden rounded-xl bg-[#0F1115]">
              <img src={ecom2} className="w-full h-full object-cover object-top transition-all duration-700" alt="Product" />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <Link to="/ecommerce-02">
                  <Button variant="primary">View Live Demo</Button>
                </Link>
                <Button variant="outline">View Documentation</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );

  const FintechLayout = () => (
    <>
      <Section className="pt-32 pb-20 bg-bgPrimary relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-emerald-400 mb-4"><Shield size={16} /> Bank-Grade Security</div>
              <h1 className="text-5xl font-bold mb-6">Fintech Protocol</h1>
              <p className="text-slate-400 mb-8 text-lg">
                Trust is the currency. Our fintech architecture emphasizes security indicators, data density, and real-time updates.
              </p>
              <div className="flex gap-4">
                <Button variant="primary">Request Audit</Button>
              </div>
            </div>
            <div className="lg:w-1/2 bg-surface border border-white/5 rounded-xl p-6 shadow-2xl">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-sm text-textSecondary">Total Balance</div>
                  <div className="text-3xl font-bold font-mono">$1,240,432.00</div>
                </div>
                <div className="text-emerald-400 text-sm font-mono">+2.4%</div>
              </div>
              <div className="h-32 bg-bgPrimary rounded-lg flex items-center justify-center text-textSecondary text-xs">
                [Secure Chart Visualization]
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );

  const AnalyticsLayout = () => (
    <>
      <Section className="pt-32 bg-bgPrimary">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12 text-center">Analytics & Data</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface rounded-2xl p-6 border border-white/5">Main Chart Area</div>
            <div className="bg-surface rounded-2xl p-6 border border-white/5">KPI 1</div>
            <div className="bg-surface rounded-2xl p-6 border border-white/5">KPI 2</div>
            <div className="md:col-span-2 bg-surface rounded-2xl p-6 border border-white/5">Recent Activity List</div>
          </div>
        </div>
      </Section>
    </>
  );

  const DefaultLayout = () => (
    <Section className="pt-40 text-center">
      <h1 className="text-4xl mb-4 capitalize">{id?.replace('-', ' ')}</h1>
      <p className="text-textSecondary">Detailed architecture view coming soon.</p>
      <div className="mt-8"><Button to="/catalog" variant="outline">Back to Catalog</Button></div>
    </Section>
  );

  // Router Logic
  switch (id) {
    case 'saas': return <SaasLayout />;
    case 'micro-saas': return <MicroSaasLayout />;
    case 'ecommerce': return <EcommerceLayout />;
    case 'fintech': return <FintechLayout />;
    case 'analytics': return <AnalyticsLayout />;
    default: return <DefaultLayout />;
  }
};

export default CatalogDetail;