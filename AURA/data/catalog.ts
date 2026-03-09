// c:\my_brand\BRAND_WEBSITE\AURA\data\catalog.ts
const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg}', { eager: true });

export const getProjectImage = (slug: string): string => {
    const pngPath = `../assets/${slug}.png`;
    const jpgPath = `../assets/${slug}.jpg`;

    // Vite glob returns a module object where `default` is the resolved URL path
    const pngMod = imageModules[pngPath] as { default?: string };
    if (pngMod?.default) return pngMod.default;

    const jpgMod = imageModules[jpgPath] as { default?: string };
    if (jpgMod?.default) return jpgMod.default;

    return 'https://placehold.co/800x500/1a1a1a/ffffff?text=Image+Not+Found';
};

export type ProjectCategory = 'saas' | 'ecommerce' | 'crypto' | 'microsaas' | 'analytics' | 'agency';

export interface Project {
    id: string;
    slug: string;
    title: string;
    category: ProjectCategory;
    description: string;
    previewImage: string;
    detailRoute: string; // The AURA detail page route (e.g., /catalog/saas-03)
    liveDemoRoute?: string; // The standalone live demo route (e.g., /saas-03)
    featured?: boolean;
    tags?: string[];
}

export const projects: Project[] = [
    {
        id: 'saas-03',
        slug: 'saas-03',
        title: 'Enterprise Platform 03',
        category: 'saas',
        description: 'Built for scale. Includes authentication, subscription billing, and multi-tenant database structure.',
        previewImage: getProjectImage('saas-03'),
        detailRoute: '/catalog/saas/saas-03',
        liveDemoRoute: '/saas-03',
        featured: true,
        tags: ['NextAuth', 'Stripe', 'Multi-tenant', 'Tailwind']
    },
    {
        id: 'ecommerce-01',
        slug: 'ecommerce-01',
        title: 'Luxe Retail Framework 01',
        category: 'ecommerce',
        description: 'Designed for high-ticket items. Minimalist galleries, smooth transitions, and premium checkout experiences.',
        previewImage: getProjectImage('ecommerce-01'),
        detailRoute: '/catalog/ecommerce/ecommerce-01',
        liveDemoRoute: '/ecommerce-01',
        featured: true,
        tags: ['Luxury', 'Shopify Plus', 'Animation', 'Dark Mode']
    },
    {
        id: 'ecommerce-02',
        slug: 'ecommerce-02',
        title: 'Luxe Retail Framework 02',
        category: 'ecommerce',
        description: 'Immersive full-screen product showcases designed to elevate the perception of luxury goods.',
        previewImage: getProjectImage('ecommerce-02'),
        detailRoute: '/catalog/ecommerce/ecommerce-02',
        liveDemoRoute: '/ecommerce-02',
        featured: false,
        tags: ['Immersive', '3D', 'Gsap']
    },
    {
        id: 'fintech-01',
        slug: 'fintech-01',
        title: 'Fintech Protocol',
        category: 'crypto',
        description: 'Trust is the currency. Our fintech architecture emphasizes security indicators, data density, and real-time updates.',
        previewImage: getProjectImage('fintech-01'),
        detailRoute: '/catalog/crypto/fintech-01',
        featured: true,
        tags: ['Web3', 'Blockchain', 'Secure', 'Dashboard']
    },
    {
        id: 'analytics-01',
        slug: 'analytics-01',
        title: 'Data Dashboard',
        category: 'analytics',
        description: 'Intelligence-forward data products and internal dashboards. Clarity from complexity.',
        previewImage: getProjectImage('analytics-01'),
        detailRoute: '/catalog/analytics/analytics-01',
        featured: true,
        tags: ['Data Viz', 'Enterprise', 'Charts', 'Complex Data']
    },
    {
        id: 'microsaas-01',
        slug: 'microsaas-01',
        title: 'Micro SaaS Wrapper',
        category: 'microsaas',
        description: 'Minimalist wrapper designed for single-utility tools. High conversion focus with zero clutter.',
        previewImage: getProjectImage('microsaas-01'),
        detailRoute: '/catalog/microsaas/microsaas-01',
        featured: true,
        tags: ['Minimal', 'MVP', 'Fast Loading']
    },
    {
        id: 'portfolio-01',
        slug: 'portfolio-01',
        title: 'Creative Agency',
        category: 'agency',
        description: 'High-impact creative showcases for studios, agencies, and independent designers.',
        previewImage: getProjectImage('portfolio-01'),
        detailRoute: '/catalog/agency/portfolio-01',
        featured: true,
        tags: ['Portfolio', 'Creative', 'Studio']
    }
];

// Helper Functions
export const getAllProjects = (): Project[] => projects;

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
    return projects.filter(p => p.category === category);
};

export const getFeaturedProjects = (): Project[] => {
    return projects.filter(p => p.featured);
};

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
};

// Metadata for category headers 
export const CATEGORY_META: Record<ProjectCategory, { title: string; subtitle: string; tag: string }> = {
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
    'crypto': {
        title: 'Fintech & Crypto',
        subtitle: 'Trust-first financial platforms and blockchain products. Clean, data-dense, and confidence-inspiring.',
        tag: 'Finance'
    },
    'microsaas': {
        title: 'Micro SaaS',
        subtitle: 'Lean, focused web systems for micro-product builders. Maximum conversion, minimal surface area.',
        tag: 'Tools'
    },
    'analytics': {
        title: 'Analytics Dashboard',
        subtitle: 'Intelligence-forward data products and internal dashboards. Clarity from complexity.',
        tag: 'Analytics'
    },
    'agency': {
        title: 'Agency & Portfolio',
        subtitle: 'High-impact creative showcases for studios, agencies, and independent designers.',
        tag: 'Creative'
    }
};

export interface CategoryCardData {
    id: ProjectCategory;
    slug: string;
    title: string;
    category: string;
    description: string;
    previewImage: string;
    detailRoute: string;
    liveDemoRoute: string;
}

export const getCategoryCards = (): CategoryCardData[] => {
    return (Object.keys(CATEGORY_META) as ProjectCategory[]).map(catKey => {
        const meta = CATEGORY_META[catKey];
        const catProjects = getProjectsByCategory(catKey);

        // Find featured project for the image and default demo (or just use first one)
        const featured = catProjects.find(p => p.featured) || catProjects[0];

        // Ensure detailRoute always goes to the specific active project, even if there are >1.
        const detailRoute = `/catalog/${catKey}/${featured.slug}`;

        // Live Demo always routes to the first/featured project's demo 
        const liveDemoRoute = featured.liveDemoRoute || `/${featured.slug}`;

        return {
            id: catKey,
            slug: catKey,
            title: meta.title,
            category: meta.tag,
            description: meta.subtitle,
            previewImage: featured.previewImage,
            detailRoute,
            liveDemoRoute
        };
    });
};
