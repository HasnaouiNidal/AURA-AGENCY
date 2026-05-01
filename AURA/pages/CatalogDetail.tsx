import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Section, FadeIn, Button } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import { getProjectById, getProjectsByCategory, CATEGORY_META } from '../data/catalog';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const CatalogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Navigate to="/catalog" replace />;

  const project = getProjectById(id);

  if (!project) {
    return (
      <Section className="pt-40 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4 font-serif font-bold">Project Not Found</h1>
        <p className="text-textSecondary mb-8 text-lg">The architecture you are looking for does not exist.</p>
        <Button to="/catalog" variant="secondary" icon>Back to Catalog</Button>
      </Section>
    );
  }

  const categoryMeta = CATEGORY_META[project.category];
  const relatedProjects = getProjectsByCategory(project.category).filter(p => p.id !== project.id).slice(0, 3);

  return (
    <>
      <Section className="pt-32 pb-16 bg-bgPrimary">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn>
            <Button to="/catalog" variant="outline" className="mb-8 pl-6 pr-8 py-2 text-xs group">
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> Back to Catalog
            </Button>

            <div className="mb-6 flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-textPrimary/5 text-textSecondary border border-textPrimary/10 text-sm shadow-sm backdrop-blur-md">
                {categoryMeta.tag}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-textPrimary/5 text-textSecondary border border-textPrimary/10 text-sm shadow-sm backdrop-blur-md">
                Case Study
              </span>
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] bg-gradient-to-tr from-accentSecondary/20 via-accentPrimary/10 to-transparent blur-[100px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-accentSecondary">
              {project.title}
            </h1>

            <p className="text-xl text-textSecondary mb-10 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              {project.liveDemoRoute && (
                <Button to={project.liveDemoRoute} variant="primary" className="py-4 px-8 group">
                  View Live Demo <ExternalLink size={16} className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                </Button>
              )}
              <Button to="/contact" variant="secondary" className="py-4 px-8">
                Inquire About System
              </Button>
            </div>

            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface border border-textPrimary/5 rounded text-xs text-textSecondary">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </FadeIn>

          {/* Main Hero Image */}
          <FadeIn delay={200}>
            <div className="rounded-2xl overflow-hidden border border-textPrimary/10 bg-bgPrimary shadow-2xl aspect-video relative group">
              <img
                src={project.previewImage}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/80 via-transparent to-transparent opacity-60" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Related Projects */}
      <Section className="bg-bgSecondary border-t border-textPrimary/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-10">Similar Architecture</h2>
          </FadeIn>

          {relatedProjects.length > 0 ? (
            <ProjectGrid>
              {relatedProjects.map((rp, i) => (
                <FadeIn key={rp.id} delay={i * 100}>
                  <ProjectCard
                    project={{
                      id: rp.id,
                      title: rp.title,
                      category: CATEGORY_META[rp.category]?.tag || rp.category,
                      description: rp.description,
                      image: rp.previewImage,
                      docsUrl: rp.detailRoute,
                      demoUrl: rp.liveDemoRoute
                    }}
                  />
                </FadeIn>
              ))}
            </ProjectGrid>
          ) : (
            <FadeIn>
              <div className="bg-textPrimary/[0.02] border-2 border-dashed border-textPrimary/10 rounded-2xl p-12 text-center flex flex-col items-center justify-center">
                <h3 className="text-2xl font-serif font-bold mb-3 text-textPrimary/60">More Templates Coming Soon</h3>
                <p className="text-textSecondary/70 mb-8 max-w-lg mx-auto leading-relaxed">
                  We are actively architecting new conversion-engineered {categoryMeta.title} systems.
                  Check back soon for fresh implementations.
                </p>
                <div className="opacity-80 hover:opacity-100 transition-opacity">
                  <Button to="/catalog" variant="outline" className="border-textPrimary/10 hover:bg-textPrimary/5">
                    Explore Full Catalog
                  </Button>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </Section>
    </>
  );
};

export default CatalogDetail;