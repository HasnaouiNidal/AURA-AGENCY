import React from 'react';

interface CategoryHeaderProps {
  title: string;
  subtitle: string;
  count: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, subtitle, count }) => {
  return (
    <header className="text-center max-w-4xl mx-auto mb-[var(--aura-space-8)]">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--aura-surface)] border border-[var(--aura-border)] mb-[var(--aura-space-4)] backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--aura-accent-2)] animate-pulse" />
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--aura-muted)]">Category Collection</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-[var(--aura-space-3)] leading-tight">
        {title}
      </h1>
      <p className="text-[var(--aura-muted)] text-lg max-w-2xl mx-auto mb-[var(--aura-space-4)]">{subtitle}</p>
      <div className="inline-flex items-center rounded-full border border-[var(--aura-border)] bg-[var(--aura-surface-2)] px-4 py-2 text-xs uppercase tracking-widest text-[var(--aura-text)]">
        {count} project{count === 1 ? '' : 's'}
      </div>
    </header>
  );
};

export default CategoryHeader;
