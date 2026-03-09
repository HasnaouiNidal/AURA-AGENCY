import { motion } from 'motion/react';

const LOGOS = [
  "Acme Corp", "Nebula", "Vertex", "Horizon", "Ascend", "Pinnacle", "Zenith", "Apex"
];

export const SocialProof = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-aura-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-aura-bg via-transparent to-aura-bg z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex gap-16 items-center whitespace-nowrap px-8"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <span key={i} className="text-xl font-bold text-white/20 uppercase tracking-widest font-mono hover:text-white/40 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
