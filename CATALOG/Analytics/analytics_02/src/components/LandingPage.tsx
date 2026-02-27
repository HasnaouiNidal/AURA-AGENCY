import { motion } from "motion/react";
import { ArrowRight, BarChart2, CheckCircle, ChevronDown, Code, Layers, Layout, Zap, Menu, X, TrendingUp, Activity, Globe, Shield, Cpu, Wallet, RefreshCw } from "lucide-react";
import React, { useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line } from "recharts";
import { cn } from "../lib/utils";

// --- Constants ---
const ACCENT_COLOR = "#D4FF00"; // Neon Lime
const BG_DARK = "#121212";
const BG_CARD = "#1E1E1E";

// --- Mock Data for Charts ---
const heroChartData = [
  { name: '10:00', value: 4200 },
  { name: '10:05', value: 4350 },
  { name: '10:10', value: 4100 },
  { name: '10:15', value: 4800 },
  { name: '10:20', value: 4600 },
  { name: '10:25', value: 5200 },
  { name: '10:30', value: 5100 },
  { name: '10:35', value: 5800 },
  { name: '10:40', value: 6100 },
  { name: '10:45', value: 5900 },
  { name: '10:50', value: 6400 },
];

const showcaseData = [
  { name: 'ETH', volume: 4000, price: 2400 },
  { name: 'BTC', volume: 3000, price: 1398 },
  { name: 'SOL', volume: 2000, price: 9800 },
  { name: 'ADA', volume: 2780, price: 3908 },
  { name: 'DOT', volume: 1890, price: 4800 },
  { name: 'XRP', volume: 2390, price: 3800 },
  { name: 'AVAX', volume: 3490, price: 4300 },
];

// --- Components ---

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center text-black" style={{ backgroundColor: ACCENT_COLOR }}>
            <Activity size={20} />
          </div>
          <span className="text-white">TERMINAL<span style={{ color: ACCENT_COLOR }}>.UI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
          <button className="px-5 py-2 rounded-sm border border-white/20 text-white hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest">
            Client Login
          </button>
          <button 
            className="px-5 py-2 rounded-sm text-black font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-all"
            style={{ backgroundColor: ACCENT_COLOR }}
          >
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-[#121212] border-b border-white/10 p-6 flex flex-col gap-4"
        >
          <a href="#features" className="text-gray-400 hover:text-white">Features</a>
          <a href="#process" className="text-gray-400 hover:text-white">Process</a>
          <a href="#showcase" className="text-gray-400 hover:text-white">Showcase</a>
          <button 
            className="w-full py-3 rounded-sm text-black font-bold uppercase tracking-widest"
            style={{ backgroundColor: ACCENT_COLOR }}
          >
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#121212]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10" style={{ backgroundColor: ACCENT_COLOR }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono mb-8" style={{ color: ACCENT_COLOR }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ACCENT_COLOR }} />
            SYSTEM_STATUS: ONLINE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
            Masters of Modern <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${ACCENT_COLOR}, #ffffff)` }}>
              Analytics UI/UX.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
            Transforming complex financial data into clear, actionable intelligence. We build the interfaces that power the next generation of trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="px-8 py-4 rounded-sm text-black font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
              style={{ backgroundColor: ACCENT_COLOR, boxShadow: `0 0 20px ${ACCENT_COLOR}40` }}
            >
              Book Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button 
              className="px-8 py-4 rounded-sm border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <Layout size={18} />
              View Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative perspective-1000"
        >
          {/* Terminal Mockup */}
          <div className="bg-[#1E1E1E] border border-white/10 rounded-lg p-1 shadow-2xl relative overflow-hidden">
            <div className="bg-[#121212] rounded border border-white/5 p-4 h-[400px] flex flex-col">
              {/* Terminal Header */}
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                <div className="flex gap-4 text-xs font-mono text-gray-500">
                  <span className="text-white">BTC/USD</span>
                  <span style={{ color: ACCENT_COLOR }}>+2.45%</span>
                  <span>VOL: 24.5M</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Main Chart Area */}
              <div className="flex-1 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={heroChartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={ACCENT_COLOR} stopOpacity={0.2}/>
                        <stop offset="95%" stopColor={ACCENT_COLOR} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1E1E1E', borderColor: '#333', color: '#fff', fontFamily: 'monospace' }}
                      itemStyle={{ color: ACCENT_COLOR }}
                      cursor={{ stroke: 'white', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    <Area 
                      type="step" 
                      dataKey="value" 
                      stroke={ACCENT_COLOR} 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
                
                {/* Floating Price Tag */}
                <div className="absolute top-1/4 right-10 bg-[#1E1E1E] border border-white/10 px-3 py-1 rounded text-xs font-mono text-white shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ACCENT_COLOR }} />
                  $64,230.50
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border border-white/5 rounded-lg transform translate-x-4 translate-y-4" />
        </motion.div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const logos = ["NEXUS", "QUANTUM", "BLOCKCHAIN", "VENTURE", "CAPITAL"];
  
  return (
    <section className="py-8 bg-[#121212] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <div key={i} className="text-white font-bold text-lg tracking-[0.3em] cursor-default">
              {logo}
            </div>
          ))}
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section id="showcase" className="py-32 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">High-Frequency <br /> Design Architecture</h2>
          <div className="h-1 w-24" style={{ backgroundColor: ACCENT_COLOR }} />
        </div>

        {/* Dashboard Container */}
        <div className="bg-[#1E1E1E] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
          {/* Sidebar */}
          <div className="w-full md:w-16 bg-[#151515] border-r border-white/5 flex md:flex-col items-center py-6 gap-6">
            <div className="w-8 h-8 rounded flex items-center justify-center text-black mb-6 hidden md:flex" style={{ backgroundColor: ACCENT_COLOR }}>
              <Activity size={18} />
            </div>
            {[Layout, TrendingUp, Wallet, RefreshCw, Layers].map((Icon, i) => (
              <div key={i} className={`p-2 rounded transition-all cursor-pointer ${i === 1 ? 'bg-white/10 text-white' : 'text-gray-600 hover:text-white'}`}>
                <Icon size={20} />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-[#121212] flex flex-col gap-6">
            {/* Top Bar */}
            <div className="flex justify-between items-center border-b border-white/5 pb-6">
              <div className="flex gap-6">
                <div className="text-white font-mono text-sm border-b-2 pb-1" style={{ borderColor: ACCENT_COLOR }}>MARKET</div>
                <div className="text-gray-500 font-mono text-sm hover:text-white cursor-pointer">LIMIT</div>
                <div className="text-gray-500 font-mono text-sm hover:text-white cursor-pointer">STOP</div>
              </div>
              <div className="flex gap-4 text-xs font-mono text-gray-500">
                <span>24H VOL: <span className="text-white">1.2B</span></span>
                <span>HIGH: <span className="text-white">68K</span></span>
                <span>LOW: <span className="text-white">62K</span></span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
              {/* Chart */}
              <div className="lg:col-span-2 bg-[#151515] rounded border border-white/5 p-4 flex flex-col">
                <div className="flex justify-between mb-4">
                  <h4 className="text-white text-xs font-mono uppercase">Price Action</h4>
                  <div className="flex gap-2">
                    {['1H', '4H', '1D', '1W'].map((t, i) => (
                      <span key={i} className={`text-[10px] font-mono px-2 py-1 rounded cursor-pointer ${i === 1 ? 'bg-white/10 text-white' : 'text-gray-600'}`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={heroChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                      <XAxis dataKey="name" stroke="#444" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#444" fontSize={10} tickLine={false} axisLine={false} domain={['dataMin - 500', 'dataMax + 500']} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1E1E1E', borderColor: '#333', color: '#fff' }}
                        cursor={{ stroke: 'white', strokeWidth: 1 }}
                      />
                      <Line type="monotone" dataKey="value" stroke={ACCENT_COLOR} strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Order Book / Swap */}
              <div className="flex flex-col gap-6">
                <div className="bg-[#151515] rounded border border-white/5 p-4">
                  <h4 className="text-white text-xs font-mono uppercase mb-4">Quick Swap</h4>
                  <div className="space-y-4">
                    <div className="bg-[#1E1E1E] p-3 rounded border border-white/5">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Pay</span>
                        <span>Balance: 2.4 ETH</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white text-lg font-mono">1.5</span>
                        <span className="text-white font-bold bg-white/10 px-2 py-1 rounded text-xs">ETH</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-[#222] p-2 rounded-full border border-white/10 text-gray-400">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                    <div className="bg-[#1E1E1E] p-3 rounded border border-white/5">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Receive</span>
                        <span>Est: 4,200.50 USDC</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white text-lg font-mono">4,200.50</span>
                        <span className="text-white font-bold bg-white/10 px-2 py-1 rounded text-xs">USDC</span>
                      </div>
                    </div>
                    <button 
                      className="w-full py-3 rounded text-black font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-all"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      Confirm Swap
                    </button>
                  </div>
                </div>

                <div className="bg-[#151515] rounded border border-white/5 p-4 flex-1">
                  <h4 className="text-white text-xs font-mono uppercase mb-4">Recent Trades</h4>
                  <div className="space-y-2">
                    {[1,2,3,4,5].map((_, i) => (
                      <div key={i} className="flex justify-between text-xs font-mono">
                        <span className={i % 2 === 0 ? "text-green-500" : "text-red-500"}>{i % 2 === 0 ? "BUY" : "SELL"}</span>
                        <span className="text-white">0.452 BTC</span>
                        <span className="text-gray-500">10:4{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    { title: "Real-Time Data", desc: "Sub-millisecond latency for live market updates.", icon: Zap },
    { title: "Institutional Grade", desc: "Security protocols trusted by major hedge funds.", icon: Shield },
    { title: "Global Connectivity", desc: "Direct access to 40+ exchanges worldwide.", icon: Globe },
    { title: "Algorithmic Ready", desc: "Built-in API endpoints for automated trading bots.", icon: Cpu },
    { title: "Modular Workspace", desc: "Drag-and-drop widgets to customize your terminal.", icon: Layout },
    { title: "Smart Execution", desc: "Advanced order types and routing logic.", icon: Code },
  ];

  return (
    <section id="features" className="py-24 bg-[#121212] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group p-8 rounded bg-[#1E1E1E] border border-white/5 hover:border-[#D4FF00]/30 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
              
              <div className="w-10 h-10 rounded flex items-center justify-center mb-6 text-white border border-white/10 group-hover:border-[#D4FF00] group-hover:text-[#D4FF00] transition-colors">
                <feature.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wide">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Data Audit" },
    { num: "02", title: "Architecture", desc: "System Design" },
    { num: "03", title: "Development", desc: "Core Build" },
    { num: "04", title: "Deployment", desc: "Live Launch" },
  ];

  return (
    <section id="process" className="py-32 bg-[#121212] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center bg-[#121212] px-4 py-6 md:py-0">
              <div className="w-16 h-16 bg-[#1E1E1E] border border-white/10 rounded-full flex items-center justify-center text-xl font-mono font-bold mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] group hover:border-[#D4FF00] transition-colors">
                <span style={{ color: ACCENT_COLOR }}>{step.num}</span>
              </div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-1">{step.title}</h3>
              <p className="text-gray-600 text-xs font-mono uppercase">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { val: "40%", label: "Faster Execution" },
            { val: "2x", label: "User Retention" },
            { val: "99.9%", label: "Uptime Guarantee" }
          ].map((item, i) => (
            <div key={i} className="bg-[#1E1E1E] border border-white/5 p-10 rounded text-center relative group hover:border-[#D4FF00]/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-6xl md:text-7xl font-bold mb-4 font-mono tracking-tighter" style={{ color: ACCENT_COLOR, textShadow: `0 0 20px ${ACCENT_COLOR}30` }}>
                {item.val}
              </div>
              <p className="text-white font-medium uppercase tracking-widest text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-32 bg-[#121212] relative overflow-hidden text-center border-t border-white/5">
      {/* Mesh Background */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `radial-gradient(${ACCENT_COLOR} 1px, transparent 1px)`, 
        backgroundSize: '30px 30px' 
      }} />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Ready to Upgrade Your <br /> Trading Infrastructure?
        </h2>
        
        <button 
          className="px-12 py-6 rounded-sm text-black font-bold text-lg uppercase tracking-widest hover:scale-105 transform duration-200 shadow-[0_0_30px_rgba(212,255,0,0.3)]"
          style={{ backgroundColor: ACCENT_COLOR }}
        >
          Initialize Project
        </button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-12 border-t border-white/10 text-xs font-mono uppercase tracking-wide">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
          <div className="w-6 h-6 rounded-sm flex items-center justify-center text-black" style={{ backgroundColor: ACCENT_COLOR }}>
            <Activity size={14} />
          </div>
          <span className="text-white">TERMINAL<span style={{ color: ACCENT_COLOR }}>.UI</span></span>
        </div>
        
        <div className="flex gap-8 text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>

        <div className="text-gray-600">
          &copy; 2024 TERMINAL SYSTEMS INC.
        </div>
      </div>
    </footer>
  );
}

export function FAQ() {
    // Placeholder to satisfy import if needed, or remove if not in new design
    return null; 
}
