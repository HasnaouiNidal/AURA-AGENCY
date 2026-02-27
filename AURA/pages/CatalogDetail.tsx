import React from 'react';
import { useParams } from 'react-router-dom';
import { Section } from '../components/UI';
import { CategoryHeader, EmptyState, ProjectGrid, ProjectCard, ProjectData } from '../components/ProjectSystem';
import saasHero from '../assets/saas03-hero.png';
import ecom1 from '../assets/E-commerce_01-hero.png';
import ecom2 from '../assets/E-commerce_02-hero.png';

export const CATEGORY_META: Record<string, { title: string; subtitle: string; tag: string }> = {
  'saas': {
    title: 'SaaS Platform',
    subtitle: 'Conversion-engineered interfaces for software businesses. Designed to drive trials, demos, and MRR growth.',
    tag: 'Software'
  },
  'ecommerce': {
    title: 'Luxury E-Commerce',
    subtitle: 'Premium retail experiences that elevate perception and increase average order value through immersive design.',
    tag: 'Retail'
  },
  'fintech': {
    title: 'Fintech & Crypto',
    subtitle: 'Trust-first financial platforms and blockchain products. Clean, data-dense, and confidence-inspiring.',
    tag: 'Finance'
  },
  'micro-saas': {
    title: 'Micro SaaS',
    subtitle: 'Lean, focused web systems for micro-product builders. Maximum conversion, minimal surface area.',
    tag: 'Tools'
  },
  'analytics': {
    title: 'Analytics Dashboard',
    subtitle: 'Intelligence-forward data products and internal dashboards. Clarity from complexity.',
    tag: 'Analytics'
  },
  'portfolio': {
    title: 'Agency & Portfolio',
    subtitle: 'High-impact creative showcases for studios, agencies, and independent designers.',
    tag: 'Creative'
  }
};

const CATEGORY_PROJECTS: Record<string, ProjectData[]> = {
  'saas': [
    {
      id: 'saas-03',
      title: 'Enterprise Platform 03',
      category: 'Software',
      description: 'Built for scale. Includes authentication, subscription billing, and multi-tenant database structure.',
      image: saasHero,
      demoUrl: '/saas-03'
    }
  ],
  'ecommerce': [
    {
      id: 'ecommerce-01',
      title: 'Luxe Retail Framework 01',
      category: 'Retail',
      description: 'Designed for high-ticket items. Minimalist galleries, smooth transitions, and premium checkout experiences.',
      image: ecom1,
      demoUrl: '/ecommerce-01'
    },
    {
      id: 'ecommerce-02',
      title: 'Luxe Retail Framework 02',
      category: 'Retail',
      description: 'Immersive full-screen product showcases designed to elevate the perception of luxury goods.',
      image: ecom2,
      demoUrl: '/ecommerce-02'
    }
  ]
};

const CatalogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const safeId = id || 'saas';
  const meta = CATEGORY_META[safeId] || { title: safeId.replace('-', ' '), subtitle: 'Detailed architecture framework.', tag: 'Category' };
  const projects = CATEGORY_PROJECTS[safeId] || [];

  return (
    <>
      <CategoryHeader
        title={meta.title}
        subtitle={meta.subtitle}
        tag={meta.tag}
      />

      {projects.length > 0 ? (
        <Section className="bg-bgPrimary pt-0 pb-32">
          <div className="container mx-auto px-6">
            <ProjectGrid>
              {projects.map((project, i) => (
                <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </ProjectGrid>
          </div>
        </Section>
      ) : (
        <EmptyState category={meta.title} />
      )}
    </>
  );
};

export default CatalogDetail;