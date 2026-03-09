import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const InteractiveDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Intelligence, <span className="text-gray-500">Visualized.</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          See your business like never before. AURA transforms complex data streams into 
          elegant, actionable insights in real-time.
        </p>
      </div>

      <motion.div 
        style={{ scale, opacity, y }}
        className="container mx-auto px-4"
      >
        <div className="relative rounded-3xl bg-aura-surface border border-white/10 shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[21/9]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-aura-bg via-transparent to-transparent" />
          
          {/* UI Overlay Elements */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="h-2 w-32 bg-aura-accent-start/50 rounded-full" />
                <div className="h-8 w-64 bg-white/10 rounded-lg backdrop-blur-md" />
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl hover:bg-white/5 transition-colors"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-aura-accent-start/20 to-aura-accent-end/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-aura-accent-start rounded-full" />
                    </div>
                    <span className="text-xs text-green-400 font-mono">+24.5%</span>
                  </div>
                  <div className="h-2 w-20 bg-white/20 rounded-full mb-2" />
                  <div className="h-6 w-32 bg-white/10 rounded-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
