import saasHero from '../assets/saas03-hero.png';
import ecommerceOne from '../assets/E-commerce_01-hero.png';
import ecommerceTwo from '../assets/E-commerce_02-hero.png';
import analyticsOne from '../assets/analytics_01-hero.png';
import analyticsTwo from '../assets/analytics_02-hero.png';
import cryptoHero from '../assets/CRYPTO_01-hero.png';

export type CatalogCategory = 'saas' | 'ecommerce' | 'crypto' | 'microsaas' | 'analytics' | 'agency';

export interface CatalogProject {
  id: string;
  category: CatalogCategory;
  title: string;
  description: string;
  previewImage: string;
  detailRoute: string;
  liveDemoRoute?: string;
  featured?: boolean;
  tags?: string[];
}

export const catalogCategories: Record<CatalogCategory, { title: string; subtitle: string; badge: string }> = {
  saas: {
    title: 'SaaS Platforms',
    subtitle: 'Conversion-optimized web systems for product-led growth and recurring revenue.',
    badge: 'Software',
  },
  ecommerce: {
    title: 'Luxury E-Commerce',
    subtitle: 'Premium commerce experiences designed to elevate trust and increase average order value.',
    badge: 'Retail',
  },
  crypto: {
    title: 'Crypto & Web3',
    subtitle: 'Trust-first interfaces for on-chain products, dashboards, and token-driven ecosystems.',
    badge: 'Finance',
  },
  microsaas: {
    title: 'Micro SaaS',
    subtitle: 'Lean single-product launches engineered for clarity, speed, and acquisition.',
    badge: 'Tools',
  },
  analytics: {
    title: 'Analytics Dashboards',
    subtitle: 'Decision-grade dashboards that turn operational complexity into actionable insight.',
    badge: 'Analytics',
  },
  agency: {
    title: 'Agency & Portfolio',
    subtitle: 'High-impact presentation websites for creative studios and service brands.',
    badge: 'Creative',
  },
};

export const catalogProjects: CatalogProject[] = [
  {
    id: 'saas-03',
    category: 'saas',
    title: 'SaaS Growth OS',
    description: 'Enterprise-ready SaaS architecture with onboarding funnels, pricing flow, and dashboard UX.',
    previewImage: saasHero,
    detailRoute: '/catalog/saas',
    liveDemoRoute: '/saas-03',
    featured: true,
    tags: ['SaaS', 'B2B', 'Growth'],
  },
  {
    id: 'ecommerce-01',
    category: 'ecommerce',
    title: 'Luxe Commerce 01',
    description: 'Editorial e-commerce interface for premium products with conversion-focused product storytelling.',
    previewImage: ecommerceOne,
    detailRoute: '/catalog/ecommerce',
    liveDemoRoute: '/ecommerce-01',
    tags: ['E-commerce', 'Luxury', 'DTC'],
  },
  {
    id: 'ecommerce-02',
    category: 'ecommerce',
    title: 'Luxe Commerce 02',
    description: 'Minimal storefront system built around high-intent product pages and seamless checkout flow.',
    previewImage: ecommerceTwo,
    detailRoute: '/catalog/ecommerce',
    liveDemoRoute: '/ecommerce-02',
    tags: ['E-commerce', 'Checkout'],
  },
  {
    id: 'micro-launch',
    category: 'microsaas',
    title: 'Micro SaaS Launch Kit',
    description: 'Single-offer micro SaaS shell optimized for speed, signup conversion, and early traction.',
    previewImage: analyticsOne,
    detailRoute: '/catalog/microsaas',
    tags: ['Micro SaaS', 'Launch'],
  },
  {
    id: 'analytics-01',
    category: 'analytics',
    title: 'Performance Analytics 01',
    description: 'Data product interface with KPI hierarchy, executive summaries, and insight-driven navigation.',
    previewImage: analyticsOne,
    detailRoute: '/catalog/analytics',
    tags: ['Analytics', 'Dashboard'],
  },
  {
    id: 'analytics-02',
    category: 'analytics',
    title: 'Performance Analytics 02',
    description: 'Operational analytics workspace for teams that need clarity across metrics, funnels, and events.',
    previewImage: analyticsTwo,
    detailRoute: '/catalog/analytics',
    tags: ['Data', 'Operations'],
  },
  {
    id: 'agency-showcase',
    category: 'agency',
    title: 'Agency Showcase',
    description: 'Premium agency framework for service positioning, proof architecture, and authority-driven storytelling.',
    previewImage: cryptoHero,
    detailRoute: '/catalog/agency',
    tags: ['Agency', 'Portfolio'],
  },
];

export const catalogCategoryOrder: CatalogCategory[] = ['saas', 'ecommerce', 'crypto', 'microsaas', 'analytics', 'agency'];
