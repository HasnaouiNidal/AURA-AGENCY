import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../UI';
import type { CatalogProject } from '../../data/catalog';

interface ProjectCardProps {
  project: CatalogProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group rounded-[var(--aura-radius-xl)] border border-[var(--aura-border)] bg-[var(--aura-surface)] p-[var(--aura-space-3)] shadow-[var(--aura-shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--aura-accent)]/50 hover:shadow-[var(--aura-shadow-glow)]">
      <Link to={project.detailRoute} className="block">
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[var(--aura-radius-xl)] mb-[var(--aura-space-3)]">
          <img
            src={project.previewImage}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--aura-bg)]/90 via-[color:var(--aura-bg)]/20 to-transparent" />
          <div className="absolute left-4 bottom-4 inline-flex rounded-full border border-[var(--aura-border)] bg-[var(--aura-surface-2)]/90 px-3 py-1 text-xs text-[var(--aura-text)]">
            {project.category}
          </div>
        </div>

        <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-[var(--aura-accent)] transition-colors">{project.title}</h3>
        <p className="text-sm text-[var(--aura-muted)] leading-relaxed mb-[var(--aura-space-4)]">{project.description}</p>
      </Link>

      <div className="flex flex-wrap gap-3">
        <Button to={project.detailRoute} variant="primary" className="px-5 py-2.5 text-xs">View Details</Button>
        {project.liveDemoRoute && (
          <Button to={project.liveDemoRoute} variant="outline" className="px-5 py-2.5 text-xs">
            Live Demo <ArrowRight size={14} className="ml-1" />
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
