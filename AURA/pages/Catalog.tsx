import React, { useMemo, useState } from 'react';
import { Section, FadeIn, MeshBackground, Button } from '../components/UI';
import CategoryHeader from '../components/catalog/CategoryHeader';
import ProjectGrid from '../components/catalog/ProjectGrid';
import { catalogCategories, catalogCategoryOrder, catalogProjects, type CatalogCategory } from '../data/catalog';

const Catalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | CatalogCategory>('all');

  const visibleProjects = useMemo(() => (
    activeFilter === 'all'
      ? catalogProjects
      : catalogProjects.filter((project) => project.category === activeFilter)
  ), [activeFilter]);

  return (
    <>
      <Section className="pt-40 pb-10 relative overflow-hidden">
        <MeshBackground />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <CategoryHeader
              title="AURA Website Catalog"
              subtitle="A unified library of conversion-built website systems curated for serious brands."
              count={visibleProjects.length}
            />
          </FadeIn>
        </div>
      </Section>

      <div className="container mx-auto px-6 mb-[var(--aura-space-8)]">
        <FadeIn>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs border transition-all ${activeFilter === 'all'
                ? 'bg-[var(--aura-accent)] text-white border-transparent shadow-[var(--aura-shadow-glow)]'
                : 'bg-[var(--aura-surface)] text-[var(--aura-muted)] border-[var(--aura-border)] hover:text-white'
                }`}
            >
              All
            </button>
            {catalogCategoryOrder.map((categoryId) => (
              <button
                key={categoryId}
                onClick={() => setActiveFilter(categoryId)}
                className={`px-4 py-2 rounded-full text-xs border transition-all ${activeFilter === categoryId
                  ? 'bg-[var(--aura-accent)] text-white border-transparent shadow-[var(--aura-shadow-glow)]'
                  : 'bg-[var(--aura-surface)] text-[var(--aura-muted)] border-[var(--aura-border)] hover:text-white'
                  }`}
              >
                {catalogCategories[categoryId].title}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      <Section>
        <div className="container mx-auto px-6">
          <ProjectGrid projects={visibleProjects} />
        </div>
      </Section>

      <Section className="bg-bgSecondary border-t border-white/5 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Need a custom architecture?</h2>
            <p className="text-textSecondary mb-8">Every catalog website can be adapted to your offer, funnel, and brand positioning.</p>
            <Button to="/contact" variant="primary" icon>Book Strategy Call</Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default Catalog;
