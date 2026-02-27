import { X, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: [0.4, 0, 0.2, 1], duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-surface border-l border-border z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg uppercase tracking-[0.2em] font-serif">Your Cart</h2>
              <button 
                onClick={onClose}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Item 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-32 bg-background flex-shrink-0 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400" 
                    alt="The Chronograph" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-1">The Chronograph</h3>
                    <p className="text-xs text-text-secondary mb-2">Midnight Black / Leather</p>
                    <p className="text-accent text-sm">$4,250</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button className="p-2 text-text-secondary hover:text-accent transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="text-xs w-8 text-center">1</span>
                      <button className="p-2 text-text-secondary hover:text-accent transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <button className="text-xs text-text-secondary hover:text-white underline underline-offset-4 transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-32 bg-background flex-shrink-0 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400" 
                    alt="The Minimalist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-1">The Minimalist</h3>
                    <p className="text-xs text-text-secondary mb-2">Rose Gold / Mesh</p>
                    <p className="text-accent text-sm">$3,800</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button className="p-2 text-text-secondary hover:text-accent transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="text-xs w-8 text-center">1</span>
                      <button className="p-2 text-text-secondary hover:text-accent transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <button className="text-xs text-text-secondary hover:text-white underline underline-offset-4 transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border bg-surface">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm uppercase tracking-widest text-text-secondary">Subtotal</span>
                <span className="text-lg text-accent font-serif">$8,050</span>
              </div>
              <p className="text-xs text-text-secondary mb-6 text-center">
                Shipping and taxes calculated at checkout.
              </p>
              <Link 
                to="/checkout" 
                onClick={onClose}
                className="btn-primary w-full block text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
