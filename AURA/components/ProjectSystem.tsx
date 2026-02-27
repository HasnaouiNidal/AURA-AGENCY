import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FadeIn, MeshBackground, Section } from './UI';
import { ArrowRight } from 'lucide-react';

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
        <div className={`group relative bg-surface border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-white/10 ${className}`}>
            {/* 16:10 Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0F1115]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-white border border-white/10">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-20 bg-surface">
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accentPrimary transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-textSecondary line-clamp-2 leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    {project.demoUrl ? (
                        <Button to={project.demoUrl} variant="primary" className="flex-1 py-3 text-xs">
                            Live Demo
                        </Button>
                    ) : null}
                    <Button to={project.docsUrl || `/catalog/${project.id}`} variant="secondary" className="flex-1 py-3 text-xs">
                        View Details
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
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-accentSecondary">
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
                    <div className="bg-surface/50 border border-white/5 rounded-2xl p-12 relative overflow-hidden">
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
