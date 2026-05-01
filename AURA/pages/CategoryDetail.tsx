import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Section, FadeIn, Button } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import { getProjectsByCategory, CATEGORY_META, ProjectCategory } from '../data/catalog';
import { ArrowLeft } from 'lucide-react';

const CategoryDetail: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();

    // Use type assertion since URL params are strings
    const catKey = categoryId as ProjectCategory;

    if (!catKey || !CATEGORY_META[catKey]) {
        return <Navigate to="/catalog" replace />;
    }

    const meta = CATEGORY_META[catKey];
    const categoryProjects = getProjectsByCategory(catKey);

    if (categoryProjects.length === 0) {
        return <Navigate to="/catalog" replace />;
    }

    // Fallback to directly show project if there's only 1
    if (categoryProjects.length === 1) {
        return <Navigate to={`/catalog/${catKey}/${categoryProjects[0].id}`} replace />;
    }

    return (
        <>
            <Section className="pt-32 pb-16 bg-bgPrimary">
                <div className="container mx-auto px-6 max-w-5xl">
                    <FadeIn>
                        <Button to="/catalog" variant="outline" className="mb-8 pl-6 pr-8 py-2 text-xs">
                            <ArrowLeft size={14} className="mr-2" /> Back to Catalog
                        </Button>

                        <div className="mb-6 flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-accentPrimary/10 text-accentPrimary border border-accentPrimary/20 text-xs font-bold uppercase tracking-wider">
                                {meta.tag}
                            </span>
                            <span className="text-textSecondary text-sm">•</span>
                            <span className="text-textSecondary text-sm">Category Overview</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
                            {meta.title} Architectures
                        </h1>
                        <p className="text-xl text-textSecondary mb-10 max-w-3xl leading-relaxed">
                            {meta.subtitle} Explore the robust, system-driven templates we have designed and built in this high-performing category.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            <Section className="bg-bgSecondary border-t border-textPrimary/5 py-20 min-h-[40vh]">
                <div className="container mx-auto px-6">
                    <ProjectGrid>
                        {categoryProjects.map((project, i) => (
                            <FadeIn key={project.id} delay={i * 100}>
                                <ProjectCard
                                    project={{
                                        id: project.id,
                                        title: project.title,
                                        category: meta.tag,
                                        description: project.description,
                                        image: project.previewImage,
                                        docsUrl: project.detailRoute,
                                        demoUrl: project.liveDemoRoute || `/${project.id}`
                                    }}
                                />
                            </FadeIn>
                        ))}
                    </ProjectGrid>
                </div>
            </Section>
        </>
    );
};

export default CategoryDetail;
