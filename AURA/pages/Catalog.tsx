import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, FadeIn, MeshBackground, Button } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'saas',
    title: 'SaaS Platform',
    description: 'Conversion-engineered interfaces for software businesses. Designed to drive trials, demos, and MRR growth.',
    image: 'https://picsum.photos/id/1/800/600',
    count: '12 Designs',
    tag: 'Software',
  },
  {
    id: 'ecommerce',
    title: 'Luxury E-Commerce',
    description: 'Premium retail experiences that elevate perception and increase average order value through immersive design.',
    image: 'https://picsum.photos/id/2/800/600',
    count: '8 Designs',
    tag: 'Retail',
  },
  {
    id: 'fintech',
    title: 'Fintech & Crypto',
    description: 'Trust-first financial platforms and blockchain products. Clean, data-dense, and confidence-inspiring.',
    image: 'https://picsum.photos/id/3/800/600',
    count: '6 Designs',
    tag: 'Finance',
  },
  {
    id: 'micro-saas',
    title: 'Micro SaaS',
    description: 'Lean, focused web systems for micro-product builders. Maximum conversion, minimal surface area.',
    image: 'https://picsum.photos/id/4/800/600',
    count: '10 Designs',
    tag: 'Tools',
  },
  {
    id: 'analytics',
    title: 'Analytics Dashboard',
    description: 'Intelligence-forward data products and internal dashboards. Clarity from complexity.',
    image: 'https://picsum.photos/id/5/800/600',
    count: '5 Designs',
    tag: 'Analytics',
  },
  {
    id: 'portfolio',
    title: 'Agency & Portfolio',
    description: 'High-impact creative showcases for studios, agencies, and independent designers.',
    image: 'https://picsum.photos/id/6/800/600',
    count: '9 Designs',
    tag: 'Creative',
  },
];

const Catalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Software', 'Retail', 'Finance', 'Tools', 'Analytics', 'Creative'];

  const visible = activeFilter === 'All'
    ? categories
    : categories.filter(c => c.tag === activeFilter);

  return (
    <>
      {/* Hero */}
      <Section className="pt-40 pb-10 relative overflow-hidden">
        <MeshBackground />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accentSecondary animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-accentSecondary">Website Catalog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Designed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-accentSecondary">Perform</span>
            </h1>
            <p className="text-textSecondary max-w-xl mx-auto text-lg">
              A curated catalog of AI-architected web systems. Each built for conversion, engineered for scale.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Filter Pills */}
      <div className="container mx-auto px-6 mb-12">
        <FadeIn>
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activeFilter === f
                  ? 'bg-accentPrimary text-white shadow-[0_0_16px_rgba(139,92,246,0.4)]'
                  : 'bg-surface text-textSecondary hover:text-white hover:bg-white/10'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Grid */}
      <Section>
        <div className="container mx-auto px-6">
          <ProjectGrid>
            {visible.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 80}>
                <ProjectCard
                  project={{
                    id: cat.id,
                    title: cat.title,
                    category: cat.tag,
                    description: cat.description, // Added count below since count badge was removed
                    image: cat.image,
                    docsUrl: `/catalog/${cat.id}`
                  }}
                />
              </FadeIn>
            ))}
          </ProjectGrid>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-bgSecondary border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-4">Don't see your category?</h2>
            <p className="text-textSecondary mb-8 max-w-lg mx-auto text-sm">Every AURA project starts with a strategy call. Tell us your goal — we'll architect the right system for it.</p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />
              <Button to="/contact" variant="primary" className="relative px-10 py-4">Book Free Strategy Call</Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default Catalog;