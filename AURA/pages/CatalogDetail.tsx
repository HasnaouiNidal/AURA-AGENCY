import React from 'react';
import { useParams } from 'react-router-dom';
import { FadeIn, MeshBackground, Section } from '../components/UI';
import CategoryHeader from '../components/catalog/CategoryHeader';
import EmptyState from '../components/catalog/EmptyState';
import ProjectGrid from '../components/catalog/ProjectGrid';
import { catalogCategories, catalogProjects, type CatalogCategory } from '../data/catalog';

const routeMap: Record<string, CatalogCategory> = {
  saas: 'saas',
  ecommerce: 'ecommerce',
  crypto: 'crypto',
  fintech: 'crypto',
  microsaas: 'microsaas',
  'micro-saas': 'microsaas',
  analytics: 'analytics',
  agency: 'agency',
  portfolio: 'agency',
};

const CatalogDetail: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const category = routeMap[id] ?? 'saas';

  const meta = catalogCategories[category];
  const projects = catalogProjects.filter((project) => project.category === category);

  return (
    <>
      <Section className="pt-40 pb-10 relative overflow-hidden">
        <MeshBackground />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <CategoryHeader title={meta.title} subtitle={meta.subtitle} count={projects.length} />
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-6">
          {projects.length > 0 ? <ProjectGrid projects={projects} /> : <EmptyState />}
        </div>
      </Section>
    </>
  );
};

export default CatalogDetail;
