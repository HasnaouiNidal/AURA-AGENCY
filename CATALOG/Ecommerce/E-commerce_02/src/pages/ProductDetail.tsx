import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Minus, Plus, ChevronRight, ChevronLeft } from 'lucide-react';

const product = {
  id: '1',
  name: 'The Chronograph',
  price: '$4,250',
  description: 'A masterpiece of precision engineering. The Chronograph features a custom-built automatic movement housed in a surgical-grade stainless steel case. The minimalist dial is protected by domed sapphire crystal with anti-reflective coating.',
  images: [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1587836173490-c288b8cc8b44?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=1200',
  ],
  colors: ['Midnight Black', 'Slate Grey', 'Arctic White'],
  straps: ['Italian Leather', 'Milanese Mesh', 'NATO'],
  specs: {
    'Case Material': '316L Stainless Steel',
    'Case Diameter': '40mm',
    'Case Thickness': '11.5mm',
    'Movement': 'AURA Caliber 801 Automatic',
    'Power Reserve': '48 Hours',
    'Water Resistance': '10 ATM (100m)',
    'Glass': 'Domed Sapphire Crystal',
    'Lume': 'Super-LumiNova BGW9',
  }
};

export function ProductDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStrap, setSelectedStrap] = useState(product.straps[0]);

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-secondary mb-12">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/collection" className="hover:text-accent transition-colors">Collection</Link>
          <ChevronRight size={12} />
          <span className="text-text-primary">{product.name}</span>
        </nav>

        {/* Top Section: Gallery & Details */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-24 flex-shrink-0 border transition-colors duration-300 ${
                    activeImage === idx ? 'border-accent' : 'border-border hover:border-text-secondary'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  {activeImage !== idx && <div className="absolute inset-0 bg-background/40" />}
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeImage}
              transition={{ duration: 0.5 }}
              className="w-full aspect-[3/4] bg-surface border border-border overflow-hidden relative"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">{product.name}</h1>
              <p className="text-2xl text-accent font-serif mb-12">{product.price}</p>

              {/* Selectors */}
              <div className="space-y-8 mb-12">
                {/* Color */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs uppercase tracking-widest text-text-secondary">Dial Color</span>
                    <span className="text-xs text-text-primary">{selectedColor}</span>
                  </div>
                  <div className="flex gap-4">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 text-xs uppercase tracking-widest border transition-colors ${
                          selectedColor === color 
                            ? 'border-accent text-accent bg-accent-soft' 
                            : 'border-border text-text-secondary hover:border-text-secondary'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Strap */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs uppercase tracking-widest text-text-secondary">Strap Material</span>
                    <span className="text-xs text-text-primary">{selectedStrap}</span>
                  </div>
                  <div className="flex gap-4">
                    {product.straps.map((strap) => (
                      <button
                        key={strap}
                        onClick={() => setSelectedStrap(strap)}
                        className={`px-6 py-3 text-xs uppercase tracking-widest border transition-colors ${
                          selectedStrap === strap 
                            ? 'border-accent text-accent bg-accent-soft' 
                            : 'border-border text-text-secondary hover:border-text-secondary'
                        }`}
                      >
                        {strap}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-text-secondary block mb-4">Quantity</span>
                  <div className="flex items-center border border-border w-fit">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-4 text-text-secondary hover:text-accent transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-sm w-12 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-4 text-text-secondary hover:text-accent transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="btn-primary flex-1">
                  Add to Cart
                </button>
                <button className="p-4 border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors flex items-center justify-center">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="mt-8 flex items-center gap-6 text-xs text-text-secondary uppercase tracking-widest border-t border-border pt-8">
                <span>Free Global Shipping</span>
                <span className="w-1 h-1 bg-border rounded-full" />
                <span>5-Year Warranty</span>
                <span className="w-1 h-1 bg-border rounded-full" />
                <span>Secure Checkout</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle Section: Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-border mb-12">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-6 text-sm uppercase tracking-widest transition-colors relative ${
                  activeTab === tab ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-text-secondary leading-relaxed font-light text-lg"
                >
                  <p className="mb-6">{product.description}</p>
                  <p>Every detail has been meticulously considered, from the polished chamfers on the lugs to the bespoke typography on the dial. This is not just a watch; it is a statement of intent.</p>
                </motion.div>
              )}

              {activeTab === 'specifications' && (
                <motion.div
                  key="specifications"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border border-border">
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <div 
                        key={key} 
                        className={`flex flex-col sm:flex-row py-4 px-6 ${
                          idx !== Object.entries(product.specs).length - 1 ? 'border-b border-border' : ''
                        } ${idx % 2 === 0 ? 'bg-surface/50' : 'bg-transparent'}`}
                      >
                        <span className="w-full sm:w-1/3 text-xs uppercase tracking-widest text-text-secondary mb-2 sm:mb-0">{key}</span>
                        <span className="w-full sm:w-2/3 text-sm text-text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-12"
                >
                  <h3 className="text-2xl font-serif mb-4">Exceptional Quality</h3>
                  <p className="text-text-secondary mb-8">Be the first to review this masterpiece.</p>
                  <button className="btn-secondary">Write a Review</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
