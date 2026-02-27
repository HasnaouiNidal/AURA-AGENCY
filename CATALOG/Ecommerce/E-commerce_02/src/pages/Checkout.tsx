import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Lock, CreditCard, Truck } from 'lucide-react';

export function Checkout() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cc');
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.error("Failed to connect to MetaMask", error);
        alert("Failed to connect to MetaMask");
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-3xl font-serif tracking-widest uppercase mb-8">Secure Checkout</h1>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-text-secondary">
            <span className={step >= 1 ? 'text-accent' : ''}>Shipping</span>
            <ChevronRight size={12} />
            <span className={step >= 2 ? 'text-accent' : ''}>Payment</span>
            <ChevronRight size={12} />
            <span className={step >= 3 ? 'text-accent' : ''}>Review</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="w-full lg:w-3/5">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Shipping */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-xl font-serif mb-8 flex items-center gap-3">
                    <Truck size={20} className="text-accent" />
                    Shipping Information
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">First Name</label>
                        <input type="text" className="w-full bg-surface border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Last Name</label>
                        <input type="text" className="w-full bg-surface border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Email Address</label>
                      <input type="email" className="w-full bg-surface border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors" />
                    </div>
                    
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Address</label>
                      <input type="text" className="w-full bg-surface border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors mb-4" placeholder="Street Address" />
                      <input type="text" className="w-full bg-surface border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors" placeholder="Apartment, suite, etc. (optional)" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">City</label>
                        <input type="text" className="w-full bg-surface border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors" />
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">State / Province</label>
                        <input type="text" className="w-full bg-surface border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors" />
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Postal Code</label>
                        <input type="text" className="w-full bg-surface border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors" />
                      </div>
                    </div>
                    
                    <div className="pt-8">
                      <button 
                        type="button" 
                        onClick={() => setStep(2)}
                        className="btn-primary w-full"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-xl font-serif mb-8 flex items-center gap-3">
                    <CreditCard size={20} className="text-accent" />
                    Payment Details
                  </h2>
                  
                  <div className="bg-surface border border-border p-6 mb-8">
                    <div className="flex flex-col gap-4 mb-6 border-b border-border pb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <input 
                            type="radio" 
                            id="cc" 
                            name="payment" 
                            checked={paymentMethod === 'cc'}
                            onChange={() => setPaymentMethod('cc')}
                            className="accent-accent" 
                          />
                          <label htmlFor="cc" className="text-sm uppercase tracking-widest">Credit Card</label>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-8 h-5 bg-background border border-border rounded flex items-center justify-center text-[8px] text-text-secondary">VISA</div>
                          <div className="w-8 h-5 bg-background border border-border rounded flex items-center justify-center text-[8px] text-text-secondary">MC</div>
                          <div className="w-8 h-5 bg-background border border-border rounded flex items-center justify-center text-[8px] text-text-secondary">AMEX</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <input 
                            type="radio" 
                            id="crypto" 
                            name="payment" 
                            checked={paymentMethod === 'crypto'}
                            onChange={() => setPaymentMethod('crypto')}
                            className="accent-accent" 
                          />
                          <label htmlFor="crypto" className="text-sm uppercase tracking-widest">Cryptocurrency</label>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-8 h-5 bg-background border border-border rounded flex items-center justify-center text-[8px] text-text-secondary">ETH</div>
                          <div className="w-8 h-5 bg-background border border-border rounded flex items-center justify-center text-[8px] text-text-secondary">USDC</div>
                        </div>
                      </div>
                    </div>
                    
                    {paymentMethod === 'cc' ? (
                      <form className="space-y-6">
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Card Number</label>
                          <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-background border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors font-mono" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Expiration Date</label>
                            <input type="text" placeholder="MM/YY" className="w-full bg-background border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors font-mono" />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Security Code</label>
                            <input type="text" placeholder="CVC" className="w-full bg-background border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors font-mono" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Name on Card</label>
                          <input type="text" className="w-full bg-background border border-border p-4 text-sm text-text-primary focus:border-accent outline-none transition-colors" />
                        </div>
                      </form>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 space-y-6">
                        <p className="text-sm text-text-secondary text-center max-w-sm">
                          Connect your Web3 wallet to pay securely with Ethereum or USDC.
                        </p>
                        {walletAddress ? (
                          <div className="bg-background border border-border p-4 w-full flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-sm font-mono">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                            </div>
                            <span className="text-xs text-text-secondary uppercase tracking-widest">Connected</span>
                          </div>
                        ) : (
                          <button 
                            type="button"
                            onClick={connectMetaMask}
                            disabled={isConnecting}
                            className="btn-secondary w-full flex items-center justify-center gap-3"
                          >
                            {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      className="btn-secondary w-1/3"
                    >
                      Back
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setStep(3)}
                      className="btn-primary w-2/3"
                    >
                      Review Order
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-xl font-serif mb-8 flex items-center gap-3">
                    <Lock size={20} className="text-accent" />
                    Review & Confirm
                  </h2>
                  
                  <div className="space-y-8 mb-12">
                    <div className="bg-surface border border-border p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm uppercase tracking-widest text-text-secondary">Shipping Address</h3>
                        <button onClick={() => setStep(1)} className="text-xs text-accent hover:underline">Edit</button>
                      </div>
                      <p className="text-sm leading-relaxed">
                        John Doe<br />
                        123 Luxury Avenue, Suite 400<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                    
                    <div className="bg-surface border border-border p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm uppercase tracking-widest text-text-secondary">Payment Method</h3>
                        <button onClick={() => setStep(2)} className="text-xs text-accent hover:underline">Edit</button>
                      </div>
                      {paymentMethod === 'cc' ? (
                        <p className="text-sm flex items-center gap-3">
                          <span className="w-10 h-6 bg-background border border-border rounded flex items-center justify-center text-[10px] text-text-secondary">VISA</span>
                          Ending in 4242
                        </p>
                      ) : (
                        <p className="text-sm flex items-center gap-3">
                          <span className="w-10 h-6 bg-background border border-border rounded flex items-center justify-center text-[10px] text-text-secondary">ETH</span>
                          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Not connected'}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      type="button" 
                      onClick={() => setStep(2)}
                      className="btn-secondary w-1/3"
                    >
                      Back
                    </button>
                    <button 
                      type="button" 
                      className="btn-primary w-2/3 flex items-center justify-center gap-2"
                    >
                      <Lock size={16} /> Place Order
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-2/5">
            <div className="bg-surface border border-border p-8 sticky top-32">
              <h2 className="text-lg font-serif mb-8 uppercase tracking-[0.2em]">Order Summary</h2>
              
              <div className="space-y-6 mb-8">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="w-16 h-20 bg-background border border-border flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=200" 
                      alt="The Chronograph" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-medium tracking-wide uppercase mb-1">The Chronograph</h3>
                    <p className="text-[10px] text-text-secondary mb-2">Midnight Black / Leather</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-text-secondary">Qty: 1</span>
                      <span className="text-sm text-accent">$4,250</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="w-16 h-20 bg-background border border-border flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=200" 
                      alt="The Minimalist" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-medium tracking-wide uppercase mb-1">The Minimalist</h3>
                    <p className="text-[10px] text-text-secondary mb-2">Rose Gold / Mesh</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-text-secondary">Qty: 1</span>
                      <span className="text-sm text-accent">$3,800</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6 space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Subtotal</span>
                  <span>$8,050</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Shipping</span>
                  <span className="text-accent uppercase tracking-widest text-xs">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Taxes</span>
                  <span>$684.25</span>
                </div>
              </div>

              <div className="border-t border-border pt-6 flex justify-between items-end">
                <span className="text-sm uppercase tracking-widest text-text-secondary">Total</span>
                <span className="text-2xl font-serif text-accent">$8,734.25</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
