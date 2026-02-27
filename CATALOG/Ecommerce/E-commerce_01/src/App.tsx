/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowLeft, 
  Heart, 
  Plus, 
  Minus, 
  Instagram, 
  Twitter, 
  Facebook,
  CheckCircle2,
  CreditCard,
  Truck,
  Eye
} from 'lucide-react';
import { Product, CartItem, ViewState } from './types';
import { PRODUCTS } from './constants';

declare global {
  interface Window {
    ethereum?: any;
  }
}

// --- Components ---

const Navbar = ({ 
  onCartOpen, 
  cartCount, 
  onNavigate,
  viewState,
  walletAddress,
  onConnectWallet,
  isConnecting
}: { 
  onCartOpen: () => void; 
  cartCount: number;
  onNavigate: (view: ViewState) => void;
  viewState: ViewState;
  walletAddress: string | null;
  onConnectWallet: () => void;
  isConnecting: boolean;
}) => (
  <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border-custom/50">
    <div className="flex items-center gap-12">
      <button 
        onClick={() => onNavigate('home')}
        className="text-2xl font-serif font-bold tracking-[0.2em] text-text-primary hover:text-accent transition-colors"
      >
        AURA
      </button>
      <div className="hidden md:flex gap-8">
        {['Collections', 'Philosophy', 'Bespoke', 'Journal'].map((item) => (
          <button key={item} className="link-subtle">{item}</button>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-6">
      <button 
        onClick={onConnectWallet}
        disabled={isConnecting}
        className="hidden md:flex items-center gap-2 px-4 py-2 border border-border-custom text-[10px] uppercase tracking-widest font-bold hover:border-accent hover:text-accent transition-all disabled:opacity-50"
      >
        <div className={`w-1.5 h-1.5 rounded-full ${walletAddress ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-accent'}`} />
        {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : isConnecting ? 'Connecting...' : 'Prestige Access'}
      </button>
      <button 
        onClick={onCartOpen}
        className="relative p-2 text-text-primary hover:text-accent transition-colors"
      >
        <ShoppingBag size={20} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-background text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
      <button className="md:hidden p-2 text-text-primary">
        <Menu size={20} />
      </button>
    </div>
  </nav>
);

const Hero = ({ onShopNow }: { onShopNow: () => void }) => (
  <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden pt-20">
    <div className="flex-1 flex flex-col justify-center px-8 md:px-20 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
          Est. 1924 — Switzerland
        </span>
        <h1 className="text-6xl md:text-8xl mb-8 leading-[1.1]">
          Timeless <br />
          <span className="italic">Precision.</span>
        </h1>
        <p className="text-text-secondary max-w-md mb-12 text-lg leading-relaxed">
          Experience the pinnacle of horological craftsmanship. Each AURA timepiece is a testament to a century of uncompromising quality.
        </p>
        <div className="flex items-center gap-8">
          <button onClick={onShopNow} className="btn-primary">Explore Collection</button>
          <button className="link-subtle flex items-center gap-2">
            Our Heritage <ChevronRight size={14} />
          </button>
        </div>
      </motion.div>
    </div>
    <div className="flex-1 relative h-full">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Watch Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden block" />
      </motion.div>
    </div>
  </section>
);

const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void; key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative aspect-[4/5] overflow-hidden bg-surface mb-6 border border-border-custom transition-colors group-hover:border-accent/50">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="btn-primary py-3 px-6 flex items-center gap-2">
          <Eye size={16} /> View Details
        </button>
      </div>
    </div>
    <div className="flex justify-between items-start">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-text-secondary mb-1 block">
          {product.collection}
        </span>
        <h3 className="text-xl mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
      </div>
      <span className="text-accent font-medium tracking-wider">
        ${product.price.toLocaleString()}
      </span>
    </div>
  </motion.div>
);

const Philosophy = () => (
  <section className="py-32 px-8 md:px-20 bg-surface">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
            Crafted for those <br />
            who value <span className="italic text-accent">eternity.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
            At AURA, we don't just build watches; we preserve moments. Our artisans spend hundreds of hours on a single movement, ensuring that every tick is a heartbeat of perfection.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-border-custom pt-10">
            <div>
              <h4 className="text-accent text-2xl mb-2">100+</h4>
              <p className="text-text-secondary text-xs uppercase tracking-widest">Years of Heritage</p>
            </div>
            <div>
              <h4 className="text-accent text-2xl mb-2">450</h4>
              <p className="text-text-secondary text-xs uppercase tracking-widest">Artisanal Components</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex-1 relative aspect-square w-full">
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&q=80&w=1000" 
          alt="Watch Macro" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-8 bg-background text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <span className="text-accent text-4xl mb-8 block">“</span>
      <h2 className="text-3xl md:text-5xl font-serif italic leading-snug mb-12">
        An AURA timepiece is not merely an accessory; it is a legacy passed down through generations, a silent witness to a life well-lived.
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-12 h-[1px] bg-accent mb-6" />
        <p className="uppercase tracking-[0.3em] text-xs font-semibold">Julian V. Sterling</p>
        <p className="text-text-secondary text-[10px] uppercase tracking-widest mt-1">Master Horologist</p>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="bg-background border-t border-border-custom pt-24 pb-12 px-8 md:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-serif font-bold tracking-[0.2em] mb-8">AURA</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-8">
            Defining the future of luxury horology through timeless design and unparalleled craftsmanship.
          </p>
          <div className="flex gap-4">
            <button className="p-2 border border-border-custom hover:border-accent hover:text-accent transition-colors">
              <Instagram size={18} />
            </button>
            <button className="p-2 border border-border-custom hover:border-accent hover:text-accent transition-colors">
              <Twitter size={18} />
            </button>
            <button className="p-2 border border-border-custom hover:border-accent hover:text-accent transition-colors">
              <Facebook size={18} />
            </button>
          </div>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs font-bold mb-8">Collections</h4>
          <ul className="space-y-4">
            {['Legacy Series', 'Explorer Edition', 'Modernist', 'Celestial'].map(item => (
              <li key={item}><button className="text-text-secondary text-sm hover:text-accent transition-colors">{item}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs font-bold mb-8">Company</h4>
          <ul className="space-y-4">
            {['Our Story', 'Craftsmanship', 'Journal', 'Contact'].map(item => (
              <li key={item}><button className="text-text-secondary text-sm hover:text-accent transition-colors">{item}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs font-bold mb-8">Newsletter</h4>
          <p className="text-text-secondary text-sm mb-6">Join our inner circle for exclusive previews.</p>
          <div className="flex border-b border-border-custom pb-2">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-none outline-none text-sm flex-1 py-2"
            />
            <button className="text-accent uppercase tracking-widest text-[10px] font-bold">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border-custom/30 gap-6">
        <p className="text-text-secondary text-[10px] uppercase tracking-widest">
          © 2024 AURA Creative Agency. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service', 'Shipping'].map(item => (
            <button key={item} className="text-text-secondary text-[10px] uppercase tracking-widest hover:text-text-primary transition-colors">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity,
  onCheckout 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[]; 
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[60]"
        />
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-surface z-[70] shadow-2xl flex flex-col"
        >
          <div className="p-8 border-b border-border-custom flex justify-between items-center">
            <h3 className="text-2xl">Your Bag</h3>
            <button onClick={onClose} className="p-2 hover:text-accent transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <ShoppingBag size={48} className="text-border-custom mb-4" />
                <p className="text-text-secondary">Your bag is currently empty.</p>
                <button onClick={onClose} className="link-subtle mt-6">Start Shopping</button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedStrap}`} className="flex gap-6">
                  <div className="w-24 h-32 bg-background border border-border-custom overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-serif text-lg">{item.name}</h4>
                      <button onClick={() => onRemove(item.id)} className="text-text-secondary hover:text-accent">
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-text-secondary mb-4">
                      {item.selectedColor} / {item.selectedStrap}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-border-custom">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 px-2 hover:text-accent transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 px-2 hover:text-accent transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-accent font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-8 border-t border-border-custom bg-background">
              <div className="flex justify-between mb-2">
                <span className="text-text-secondary text-sm">Subtotal</span>
                <span className="text-text-primary font-medium">
                  ${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="text-text-secondary text-sm">Shipping</span>
                <span className="text-accent text-xs uppercase tracking-widest font-bold">Complimentary</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full btn-primary py-5"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const ProductDetail = ({ 
  product, 
  onBack, 
  onAddToCart 
}: { 
  product: Product; 
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
  key?: React.Key;
}) => {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStrap, setSelectedStrap] = useState(product.straps[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-8 md:px-20 max-w-7xl mx-auto"
    >
      <button onClick={onBack} className="link-subtle flex items-center gap-2 mb-12">
        <ArrowLeft size={14} /> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        {/* Gallery */}
        <div className="space-y-6">
          <div className="aspect-[4/5] bg-surface border border-border-custom overflow-hidden">
            <img 
              src={product.thumbnails[selectedThumb]} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.thumbnails.map((thumb, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedThumb(idx)}
                className={`aspect-square border transition-all ${selectedThumb === idx ? 'border-accent' : 'border-border-custom hover:border-accent/50'}`}
              >
                <img src={thumb} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <span className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            {product.collection}
          </span>
          <h1 className="text-5xl md:text-6xl mb-6">{product.name}</h1>
          <p className="text-3xl text-accent font-serif italic mb-10">
            ${product.price.toLocaleString()}
          </p>
          
          <div className="space-y-10 mb-12">
            <div>
              <h4 className="uppercase tracking-widest text-[10px] font-bold mb-4">Case Finish</h4>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-xs border transition-all ${selectedColor === color ? 'border-accent text-accent' : 'border-border-custom text-text-secondary hover:border-text-secondary'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="uppercase tracking-widest text-[10px] font-bold mb-4">Strap Option</h4>
              <div className="flex flex-wrap gap-3">
                {product.straps.map(strap => (
                  <button 
                    key={strap}
                    onClick={() => setSelectedStrap(strap)}
                    className={`px-4 py-2 text-xs border transition-all ${selectedStrap === strap ? 'border-accent text-accent' : 'border-border-custom text-text-secondary hover:border-text-secondary'}`}
                  >
                    {strap}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <h4 className="uppercase tracking-widest text-[10px] font-bold mb-4">Quantity</h4>
                <div className="flex items-center border border-border-custom h-12">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-full flex items-center justify-center hover:text-accent transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-full flex items-center justify-center hover:text-accent transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div className="flex-1 pt-8">
                <button 
                  onClick={() => onAddToCart({ ...product, quantity, selectedColor, selectedStrap })}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={18} /> Add to Bag
                </button>
              </div>
              <div className="pt-8">
                <button className="p-4 border border-border-custom hover:border-accent hover:text-accent transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-border-custom pt-8">
            <div className="flex gap-12 mb-8">
              {(['desc', 'specs', 'reviews'] as const).map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase tracking-widest text-[10px] font-bold pb-2 border-b-2 transition-all ${activeTab === tab ? 'border-accent text-text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
                >
                  {tab === 'desc' ? 'Description' : tab === 'specs' ? 'Specifications' : 'Reviews'}
                </button>
              ))}
            </div>
            
            <div className="min-h-[200px]">
              {activeTab === 'desc' && (
                <p className="text-text-secondary leading-relaxed">
                  {product.description}
                  <br /><br />
                  Every AURA watch is hand-assembled in our Swiss atelier. We use only the finest materials, from ethically sourced gold to scratch-resistant sapphire crystals. Our commitment to quality ensures that your timepiece will remain a reliable companion for a lifetime.
                </p>
              )}
              {activeTab === 'specs' && (
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="border-b border-border-custom/50">
                        <td className="py-4 uppercase tracking-widest text-[10px] font-bold text-text-secondary w-1/3">{spec.label}</td>
                        <td className="py-4 text-text-primary">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-border-custom flex items-center justify-center text-xs font-bold">MK</div>
                    <div>
                      <div className="flex gap-1 text-accent mb-1">
                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <p className="text-sm font-bold mb-1">Exceptional Craftsmanship</p>
                      <p className="text-xs text-text-secondary italic mb-2">Verified Purchase — 2 weeks ago</p>
                      <p className="text-sm text-text-secondary">The attention to detail on the dial is simply breathtaking. It feels substantial yet elegant on the wrist.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Checkout = ({ 
  cartItems, 
  onBack 
}: { 
  cartItems: CartItem[]; 
  onBack: () => void;
  key?: React.Key;
}) => {
  const [step, setStep] = useState(1);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-32 pb-24 px-8 md:px-20 max-w-6xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Main Form */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-12">
            {[1, 2, 3].map(i => (
              <React.Fragment key={i}>
                <div className={`flex items-center gap-2 ${step >= i ? 'text-accent' : 'text-text-secondary'}`}>
                  <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold ${step >= i ? 'border-accent bg-accent/10' : 'border-border-custom'}`}>
                    {step > i ? <CheckCircle2 size={16} /> : i}
                  </span>
                  <span className="uppercase tracking-widest text-[10px] font-bold">
                    {i === 1 ? 'Shipping' : i === 2 ? 'Payment' : 'Review'}
                  </span>
                </div>
                {i < 3 && <div className={`w-12 h-[1px] ${step > i ? 'bg-accent' : 'bg-border-custom'}`} />}
              </React.Fragment>
            ))}
          </div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <h2 className="text-3xl mb-8">Shipping Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">First Name</label>
                  <input type="text" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">Last Name</label>
                  <input type="text" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">Email Address</label>
                <input type="email" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">Address</label>
                <input type="text" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">City</label>
                  <input type="text" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">Postal Code</label>
                  <input type="text" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">Country</label>
                  <select className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors appearance-none">
                    <option>United States</option>
                    <option>Switzerland</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
              <button onClick={() => setStep(2)} className="btn-primary w-full py-5 flex items-center justify-center gap-2">
                Continue to Payment <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <h2 className="text-3xl mb-8">Payment Method</h2>
              <div className="space-y-4">
                <div className="p-6 border border-accent bg-accent/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CreditCard className="text-accent" />
                    <div>
                      <p className="text-sm font-bold">Credit / Debit Card</p>
                      <p className="text-xs text-text-secondary">Secure encrypted payment</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-4 border-accent" />
                </div>
                <div className="p-6 border border-border-custom hover:border-accent/50 transition-colors flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="font-serif italic text-lg">PayPal</div>
                    <p className="text-xs text-text-secondary">Pay via your PayPal account</p>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-border-custom" />
                </div>
                <div className="p-6 border border-border-custom hover:border-accent/50 transition-colors flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="font-serif text-lg">MetaMask</div>
                    <p className="text-xs text-text-secondary">Pay with ETH or USDC</p>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-border-custom" />
                </div>
              </div>
              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-[10px] font-bold text-text-secondary">CVV</label>
                    <input type="text" placeholder="123" className="w-full bg-surface border border-border-custom p-4 text-sm outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="btn-secondary flex-1 py-5">Back</button>
                <button onClick={() => setStep(3)} className="btn-primary flex-[2] py-5">Review Order</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 text-center py-12">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} className="text-accent" />
              </div>
              <h2 className="text-4xl mb-4">Ready for Dispatch</h2>
              <p className="text-text-secondary mb-12 max-w-md mx-auto">
                Your order is ready to be processed. Once confirmed, your AURA timepiece will be shipped via insured express delivery.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <button onClick={() => setStep(2)} className="btn-secondary flex-1 py-5">Back</button>
                <button onClick={() => window.location.reload()} className="btn-primary flex-[2] py-5">Place Order</button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Summary Sidebar */}
        <div className="w-full lg:w-[380px]">
          <div className="bg-surface border border-border-custom p-8 sticky top-32">
            <h3 className="text-xl mb-8">Order Summary</h3>
            <div className="space-y-6 mb-8">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 bg-background border border-border-custom flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">{item.quantity} × ${item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t border-border-custom pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Shipping</span>
                <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Tax</span>
                <span>${(subtotal * 0.08).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl pt-4 border-t border-border-custom">
                <span className="font-serif">Total</span>
                <span className="text-accent font-bold">${(subtotal * 1.08).toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3 text-text-secondary">
              <Truck size={16} />
              <p className="text-[10px] uppercase tracking-widest font-bold">Insured Express Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [viewState, setViewState] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      setIsConnectingWallet(true);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Failed to connect to MetaMask:', error);
        alert('Failed to connect to MetaMask. Please ensure the extension is installed and unlocked.');
      } finally {
        setIsConnectingWallet(false);
      }
    } else {
      alert('MetaMask is not installed. Please install the extension to access prestige features.');
    }
  };

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewState, selectedProduct]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setViewState('pdp');
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => 
        i.id === item.id && 
        i.selectedColor === item.selectedColor && 
        i.selectedStrap === item.selectedStrap
      );
      if (existing) {
        return prev.map(i => i === existing ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const cartCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onCartOpen={() => setIsCartOpen(true)} 
        cartCount={cartCount}
        onNavigate={setViewState}
        viewState={viewState}
        walletAddress={walletAddress}
        onConnectWallet={connectWallet}
        isConnecting={isConnectingWallet}
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {viewState === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onShopNow={() => {
                const el = document.getElementById('collection');
                el?.scrollIntoView({ behavior: 'smooth' });
              }} />
              
              <section id="collection" className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div>
                    <span className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                      Curated Selection
                    </span>
                    <h2 className="text-5xl md:text-6xl">The Collection</h2>
                  </div>
                  <button className="link-subtle flex items-center gap-2">
                    View All Models <ChevronRight size={14} />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                  {PRODUCTS.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onClick={() => handleProductClick(product)} 
                    />
                  ))}
                </div>
              </section>

              <Philosophy />
              <Testimonials />
            </motion.div>
          )}

          {viewState === 'pdp' && selectedProduct && (
            <ProductDetail 
              key="pdp"
              product={selectedProduct} 
              onBack={() => setViewState('home')}
              onAddToCart={handleAddToCart}
            />
          )}

          {viewState === 'checkout' && (
            <Checkout 
              key="checkout"
              cartItems={cartItems} 
              onBack={() => setViewState('home')} 
            />
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setViewState('checkout');
        }}
      />
    </div>
  );
}
