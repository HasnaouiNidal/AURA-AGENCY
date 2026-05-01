import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FadeIn, MeshBackground, Section } from './UI';
import { ArrowRight, ExternalLink } from 'lucide-react';

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    demoUrl?: string; // Link to live demo
    docsUrl?: string; // Link to docs/details
}

interface ProjectCardProps {
    project: ProjectData;
    className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
    return (
        <div className={`group relative bg-surface border border-textPrimary/5 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-textPrimary/10 ${className}`}>

            {/* 
                Browser Window Wrapper 
                Adds realistic SaaS showcase feel with dot controls and a URL bar hint
            */}
            <div className="bg-[#1A1D24] border-b border-textPrimary/5 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80" />
                </div>
            </div>

            {/* Custom Height Preview Container (220px) */}
            <div className="relative h-[220px] overflow-hidden bg-bgPrimary">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Advanced Gradient Overlay & Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />

                {/* Category Badge & View Project Indicator */}
                <div className="absolute top-4 left-4 z-20 flex justify-between w-[calc(100%-2rem)] items-start">
                    <span className="bg-surface/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest text-textPrimary border border-textPrimary/10 shadow-sm">
                        {project.category}
                    </span>
                    <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out bg-accentPrimary/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center gap-1">
                        View Project <ArrowRight size={10} />
                    </span>
                </div>
            </div>

            {/* Content Section with improved spacing and visual balance */}
            <div className="p-6 relative z-20 bg-surface">
                <h3 className="text-xl font-serif font-bold mb-2 text-textPrimary group-hover:text-accentPrimary transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-sm text-textSecondary line-clamp-2 leading-relaxed mb-6 opacity-80">
                    {project.description}
                </p>

                {/* Buttons Component */}
                <div className="flex items-stretch gap-3 w-full">
                    <Button to={project.docsUrl || `/catalog/${project.id}`} variant="primary" className="flex-[3] py-3 text-xs shadow-md justify-center">
                        View Details
                    </Button>
                    <Button to={project.demoUrl || '#'} variant="outline" className="flex-[2] py-3 text-xs border-textPrimary/10 hover:bg-textPrimary/5 justify-center flex items-center gap-1.5">
                        <ExternalLink size={14} /> Demo
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const ProjectGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
            {children}
        </div>
    );
};

interface CategoryHeaderProps {
    title: string;
    subtitle: string;
    tag?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, subtitle, tag }) => {
    return (
        <Section className="pt-40 pb-20 relative overflow-hidden bg-bgPrimary">
            <MeshBackground />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeIn>
                    {tag && (
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-textPrimary/5 border border-textPrimary/10 text-xs font-bold uppercase tracking-wider text-accentSecondary">
                            {tag}
                        </div>
                    )}
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed">
                        {subtitle}
                    </p>
                </FadeIn>
            </div>
        </Section>
    );
};

interface EmptyStateProps {
    category: string;
    message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    category,
    message = "We're currently architecting new systems for this category. Check back soon or contact us to start a custom project."
}) => {
    return (
        <Section className="py-32 bg-bgPrimary">
            <div className="container mx-auto px-6 max-w-2xl text-center">
                <FadeIn>
                    <div className="bg-surface/50 border border-textPrimary/5 rounded-2xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accentPrimary to-transparent opacity-50" />

                        <h2 className="text-3xl font-serif font-bold mb-4">No {category} Projects Yet</h2>
                        <p className="text-textSecondary mb-8 leading-relaxed">
                            {message}
                        </p>

                        <div className="flex justify-center gap-4">
                            <Button to="/catalog" variant="secondary" icon>
                                Back to Catalog
                            </Button>
                            <Button to="/contact" variant="primary">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
};
