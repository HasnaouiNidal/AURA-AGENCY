import React, { useState } from 'react';
import { Section, FadeIn, MeshBackground, Button } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import { getCategoryCards, CATEGORY_META } from '../data/catalog';

const Catalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique filters from CATEGORY_META
  const filters = ['All', ...Array.from(new Set(Object.values(CATEGORY_META).map(m => m.tag)))];

  const allCategories = getCategoryCards();

  const visible = activeFilter === 'All'
    ? allCategories
    : allCategories.filter(c => c.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <Section className="pt-40 pb-10 relative overflow-hidden">
        <MeshBackground />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-textPrimary/5 border border-textPrimary/10 mb-8 backdrop-blur-md">
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
                className={`px-4 py-2 rounded-full text-xs transition-all duration-300 border ${activeFilter === f
                  ? 'bg-accentPrimary/10 border-accentPrimary/20 text-accentPrimary font-semibold shadow-[0_0_15px_rgba(139,92,246,0.1)]'
                  : 'bg-surface/50 border-textPrimary/5 text-textSecondary hover:text-textPrimary hover:bg-textPrimary/10 font-medium'
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
            {visible.map((categoryCard, i) => (
              <FadeIn key={categoryCard.id} delay={i * 80}>
                <ProjectCard
                  project={{
                    id: categoryCard.id,
                    title: categoryCard.title,
                    category: categoryCard.category,
                    description: categoryCard.description,
                    image: categoryCard.previewImage,
                    docsUrl: categoryCard.detailRoute,
                    demoUrl: categoryCard.liveDemoRoute
                  }}
                />
              </FadeIn>
            ))}
          </ProjectGrid>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-bgSecondary border-t border-textPrimary/5 text-center">
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