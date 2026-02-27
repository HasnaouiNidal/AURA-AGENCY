import React from 'react';
import type { CatalogProject } from '../../data/catalog';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: CatalogProject[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--aura-space-4)]">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectGrid;
