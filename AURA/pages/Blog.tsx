import React from 'react';
import { Section, FadeIn, Card } from '../components/UI';

const Blog: React.FC = () => {
  const posts = [
    { id: 1, title: 'The Death of the Generic Landing Page', cat: 'Design', date: 'Oct 12, 2023', excerpt: 'Why template fatigue is real and how bespoke micro-interactions are the cure.' },
    { id: 2, title: 'AI in 2024: A Developer\'s Toolkit', cat: 'Tech', date: 'Nov 04, 2023', excerpt: 'A deep dive into the stack I use to build AURA projects at 10x speed.' },
    { id: 3, title: 'Typography is 90% of Web Design', cat: 'Theory', date: 'Nov 21, 2023', excerpt: 'How choosing the right font pairing can do more heavy lifting than your color palette.' },
  ];

  return (
    <>
      <Section className="pt-32 pb-12 bg-bgPrimary">
        <div className="container mx-auto px-6">
            <h1 className="text-5xl font-serif font-bold mb-4">Insights</h1>
            <p className="text-textSecondary">Thoughts on design, code, and the future of digital.</p>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div className="group cursor-pointer bg-surface/40 border border-textPrimary/5 rounded-2xl hover:-translate-y-1 hover:border-accentPrimary/40 hover:shadow-xl hover:shadow-accentPrimary/10 transition-all duration-300 ease-out flex flex-col h-full overflow-hidden">
                            <div className="h-48 w-full bg-surface border-b border-textPrimary/5 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accentPrimary/20 to-bgSecondary group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-accentPrimary/10 text-accentPrimary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">{post.cat}</span>
                                    <span className="text-textPrimary/20">•</span>
                                    <span className="text-textSecondary text-xs font-medium">{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-serif font-bold mb-3 text-textPrimary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accentPrimary group-hover:to-blue-500 transition-all duration-300">{post.title}</h2>
                                <p className="text-textSecondary text-sm leading-relaxed flex-1">{post.excerpt}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </Section>
    </>
  );
};

export default Blog;