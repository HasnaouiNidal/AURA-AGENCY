import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'The Chronograph',
    price: '$4,250',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800',
    category: 'Automatic',
  },
  {
    id: '2',
    name: 'The Minimalist',
    price: '$3,800',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
    category: 'Mechanical',
  },
  {
    id: '3',
    name: 'The Aviator',
    price: '$5,100',
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800',
    category: 'Chronograph',
  },
  {
    id: '4',
    name: 'The Diver',
    price: '$4,850',
    image: 'https://images.unsplash.com/photo-1587836173490-c288b8cc8b44?auto=format&fit=crop&q=80&w=800',
    category: 'Automatic',
  },
  {
    id: '5',
    name: 'The Heritage',
    price: '$6,200',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800',
    category: 'Mechanical',
  },
  {
    id: '6',
    name: 'The Eclipse',
    price: '$4,500',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800',
    category: 'Automatic',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export function Home() {
  return (
    <div className="bg-background">
      {/* 1. Fullscreen Cinematic Hero */}
      <section className="h-screen w-full flex flex-col md:flex-row relative overflow-hidden">
        {/* Text Left */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-24 z-10 bg-background/90 md:bg-transparent absolute md:relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-6">The New Standard</h2>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif leading-[1.1] mb-8 text-text-primary">
              Mastery of <br />
              <span className="italic text-text-secondary">Time.</span>
            </h1>
            <p className="text-text-secondary max-w-md mb-12 leading-relaxed font-light">
              Precision engineering meets timeless elegance. Discover the collection that redefines modern horology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/collection" className="btn-primary">
                Explore Collection
              </Link>
              <Link to="/philosophy" className="link-subtle">
                Our Philosophy
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Image Right */}
        <div className="w-full h-full md:w-1/2 absolute md:relative inset-0">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-background/40 md:hidden z-0" />
            <img 
              src="https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&q=80&w=1600" 
              alt="Luxury Watch" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Curated Collection Grid */}
      <section className="py-32 px-6 md:px-12 container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Curated Selection</h2>
            <h3 className="text-4xl md:text-5xl font-serif">The Collection</h3>
          </div>
          <Link to="/collection" className="link-subtle flex items-center gap-2">
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface border border-transparent transition-colors duration-300 group-hover:border-accent">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-background text-text-primary px-6 py-3 text-xs uppercase tracking-widest border border-border">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">{product.category}</p>
                    <h4 className="text-lg font-serif tracking-wide">{product.name}</h4>
                  </div>
                  <p className="text-accent font-medium">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Brand Philosophy Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full lg:w-1/2"
            >
              <div className="aspect-square relative overflow-hidden border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Watch Movement Macro" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                The Art of <br />
                <span className="italic text-text-secondary">Restraint.</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-10 max-w-lg font-light text-lg">
                True luxury doesn't shout; it whispers. Every AURA timepiece is a testament to the belief that perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.
              </p>
              <Link to="/philosophy" className="btn-secondary inline-block">
                Discover Our Heritage
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Prestige/Testimonial Section */}
      <section className="py-40 px-6 bg-background relative overflow-hidden border-t border-border">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent text-6xl font-serif leading-none mb-8">"</p>
            <h3 className="text-3xl md:text-5xl font-serif leading-snug mb-12">
              A masterclass in minimalist design. AURA has redefined what a modern luxury timepiece should feel like on the wrist.
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              The Horological Journal
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
