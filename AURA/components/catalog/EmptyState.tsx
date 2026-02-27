import React from 'react';
import { Button } from '../UI';

const EmptyState: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center rounded-[var(--aura-radius-xl)] border border-[var(--aura-border)] bg-[var(--aura-surface)] p-[var(--aura-space-6)] shadow-[var(--aura-shadow-soft)]">
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--aura-accent-2)] mb-3">Coming Soon</p>
      <h3 className="text-3xl font-serif font-bold mb-3">Crypto Collection in Curation</h3>
      <p className="text-[var(--aura-muted)] mb-6">
        We are finalizing premium Web3 case studies that match AURA standards for trust, clarity, and conversion.
      </p>
      <div className="flex justify-center flex-wrap gap-3">
        <Button to="/catalog" variant="outline" className="px-6 py-3 text-xs">Back to Catalog</Button>
        <Button to="/contact" variant="primary" className="px-6 py-3 text-xs">Request a Custom Build</Button>
      </div>
    </div>
  );
};

export default EmptyState;
