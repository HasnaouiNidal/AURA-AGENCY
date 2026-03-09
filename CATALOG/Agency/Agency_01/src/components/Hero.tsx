import { motion } from 'motion/react';
import { ArrowRight, BarChart2, Zap, Shield, ChevronRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-aura-accent-end/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-aura-accent-start/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aura-surface border border-white/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aura-accent-start opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-aura-accent-start"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">AURA Intelligence v2.0 is live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Clarity for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-accent-start to-aura-accent-end">
            Modern Founder
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop drowning in spreadsheets. AURA unifies your metrics into a single, 
          intelligent dashboard that gives you an unfair advantage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-white text-aura-bg font-semibold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(110,231,255,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-r from-aura-accent-start to-aura-accent-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
              Experience the Future
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
          
          <button className="px-8 py-4 bg-aura-surface border border-white/5 text-gray-300 font-medium rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2">
            <Play className="w-4 h-4 fill-current" />
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="container mx-auto px-4 mt-20 perspective-1000"
      >
        <div className="relative rounded-2xl border border-white/10 bg-aura-surface/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] max-w-6xl mx-auto group">
          {/* Mockup Header */}
          <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-aura-bg/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="mx-auto w-64 h-6 bg-white/5 rounded-md" />
          </div>
          
          {/* Mockup Content */}
          <div className="p-6 grid grid-cols-12 gap-6 h-full">
            {/* Sidebar */}
            <div className="col-span-2 hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-full bg-white/5 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            
            {/* Main Content */}
            <div className="col-span-12 md:col-span-10 grid grid-cols-3 gap-6">
              {/* Stats Cards */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 rounded-xl bg-white/5 border border-white/5 p-4 relative overflow-hidden group-hover:border-aura-accent-start/30 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-4 w-24 bg-white/10 rounded mb-4" />
                  <div className="h-8 w-16 bg-white/20 rounded" />
                </div>
              ))}
              
              {/* Main Chart */}
              <div className="col-span-3 h-64 rounded-xl bg-white/5 border border-white/5 p-6 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-end justify-between px-6 pb-6 pt-20 gap-2">
                    {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85, 60, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.8 + (i * 0.05) }}
                        className="w-full bg-gradient-to-t from-aura-accent-start/20 to-aura-accent-end/50 rounded-t-sm relative group/bar"
                      >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-aura-accent-start shadow-[0_0_10px_rgba(110,231,255,0.5)]" />
                      </motion.div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
          
          {/* Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};
