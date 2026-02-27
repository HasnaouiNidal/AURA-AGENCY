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
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-surface rounded-xl mb-6 overflow-hidden border border-white/5">
                                <div className="w-full h-full bg-gradient-to-tr from-accentPrimary/20 to-bgSecondary group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-accentSecondary mb-3">
                                <span>{post.cat}</span>
                                <span className="text-white/20">•</span>
                                <span className="text-textSecondary font-normal normal-case">{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-accentPrimary transition-colors">{post.title}</h2>
                            <p className="text-textSecondary text-sm leading-relaxed">{post.excerpt}</p>
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