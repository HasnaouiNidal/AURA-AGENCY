export interface NavLink {
  name: string;
  path: string;
}

export interface CatalogItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  path: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

export enum PricingTier {
  STARTER = 'Starter',
  GROWTH = 'Growth',
  PREMIUM = 'Premium'
}