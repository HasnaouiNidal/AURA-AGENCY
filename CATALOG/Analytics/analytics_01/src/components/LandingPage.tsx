import { motion } from "motion/react";
import { ArrowRight, BarChart2, CheckCircle, ChevronDown, ChevronRight, Code, Layers, Layout, Zap, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { cn } from "../lib/utils";

// --- Mock Data for Charts ---
const heroChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 550 },
  { name: 'Apr', value: 450 },
  { name: 'May', value: 650 },
  { name: 'Jun', value: 600 },
  { name: 'Jul', value: 800 },
];

const showcaseData = [
  { name: 'Mon', visits: 4000, sales: 2400 },
  { name: 'Tue', visits: 3000, sales: 1398 },
  { name: 'Wed', visits: 2000, sales: 9800 },
  { name: 'Thu', visits: 2780, sales: 3908 },
  { name: 'Fri', visits: 1890, sales: 4800 },
  { name: 'Sat', visits: 2390, sales: 3800 },
  { name: 'Sun', visits: 3490, sales: 4300 },
];

// --- Components ---

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-[#00FF94] rounded-lg flex items-center justify-center text-black">
            <Layers size={20} />
          </div>
          <span className="text-white">NEON<span className="text-[#00FF94]">ANALYTICS</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <button className="px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all">
            Client Login
          </button>
          <button className="px-5 py-2 rounded-full bg-[#00FF94] text-black font-semibold hover:bg-[#00cc76] transition-all">
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
          className="md:hidden absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4"
        >
          <a href="#features" className="text-gray-400 hover:text-white">Features</a>
          <a href="#process" className="text-gray-400 hover:text-white">Process</a>
          <a href="#showcase" className="text-gray-400 hover:text-white">Showcase</a>
          <button className="w-full py-3 rounded-lg bg-[#00FF94] text-black font-bold">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00FF94]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00FF94] text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
            v2.0 Now Available
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Masters of Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-emerald-600">
              Analytics UI/UX.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Transforming complex data into clear, actionable business advantages. We build interfaces that decision-makers actually want to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-xl bg-[#00FF94] text-black font-bold text-lg hover:bg-[#00cc76] transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)] flex items-center justify-center gap-2 group">
              Book a Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 rounded-xl border border-[#00FF94] text-[#00FF94] font-bold text-lg hover:bg-[#00FF94]/10 transition-all flex items-center justify-center gap-2">
              <Layout size={20} />
              View Dashboard Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Floating Dashboard Card */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#00FF94]/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            {/* Header of Card */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">Revenue Growth</h3>
                <p className="text-gray-500 text-sm">Real-time performance</p>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
            </div>

            {/* Main Chart */}
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={heroChartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00FF94" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00FF94" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                    itemStyle={{ color: '#00FF94' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00FF94" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Total Users</p>
                <p className="text-white font-mono text-xl font-bold">24.5k</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Active Now</p>
                <p className="text-[#00FF94] font-mono text-xl font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
                  1,204
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Conversion</p>
                <p className="text-white font-mono text-xl font-bold">3.2%</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements behind card */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-[#00FF94]/5 rounded-2xl border border-[#00FF94]/10 transform rotate-3" />
          <div className="absolute -z-20 top-20 -right-20 w-full h-full bg-white/5 rounded-2xl border border-white/5 transform rotate-6" />
        </motion.div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const logos = ["Acme Corp", "GlobalBank", "TechFlow", "DataSystems", "FutureFinance"];
  
  return (
    <section className="py-10 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-gray-500 text-sm font-medium whitespace-nowrap">Trusted by data-driven teams worldwide:</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 w-full">
          {logos.map((logo, i) => (
            <div key={i} className="text-gray-600 font-bold text-xl uppercase tracking-widest hover:text-white transition-colors cursor-default">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineered for Clarity</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our flagship modular dashboard system allows for infinite customization while maintaining strict visual hierarchy.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-[#0F0F0F] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          {/* Sidebar */}
          <div className="w-full md:w-20 bg-[#0A0A0A] border-r border-white/10 flex md:flex-col items-center py-6 gap-8 justify-center md:justify-start">
            <div className="w-10 h-10 bg-[#00FF94] rounded-lg flex items-center justify-center text-black mb-8 hidden md:flex">
              <Layers size={24} />
            </div>
            {[Layout, BarChart2, Layers, Zap, Code].map((Icon, i) => (
              <div key={i} className={`p-3 rounded-xl transition-all cursor-pointer ${i === 1 ? 'bg-white/10 text-[#00FF94]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                <Icon size={24} />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white">Analytics Overview</h3>
                <p className="text-gray-500">Welcome back, Administrator</p>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-lg bg-white/5 text-white text-sm border border-white/10 hover:bg-white/10">Export Report</button>
                <button className="px-4 py-2 rounded-lg bg-[#00FF94] text-black text-sm font-bold hover:bg-[#00cc76]">Add Widget</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Large Chart Area */}
              <div className="lg:col-span-2 bg-[#050505] rounded-2xl p-6 border border-white/5">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-white font-semibold">Traffic Analysis</h4>
                  <select className="bg-black text-gray-400 text-sm border border-white/10 rounded-md px-2 py-1">
                    <option>Last 7 Days</option>
                  </select>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={showcaseData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="name" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                      />
                      <Bar dataKey="visits" fill="#00FF94" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="sales" fill="#333" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Right Column Widgets */}
              <div className="space-y-6">
                <div className="bg-[#050505] rounded-2xl p-6 border border-white/5">
                  <h4 className="text-white font-semibold mb-4">Quick Stats</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Bounce Rate", value: "42%", change: "-12%", positive: true },
                      { label: "Avg. Session", value: "4m 32s", change: "+8%", positive: true },
                      { label: "New Users", value: "892", change: "-3%", positive: false },
                    ].map((stat, i) => (
                      <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div>
                          <p className="text-gray-500 text-xs">{stat.label}</p>
                          <p className="text-white font-mono font-bold">{stat.value}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${stat.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {stat.change}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#00FF94] rounded-2xl p-6 text-black">
                  <h4 className="font-bold text-lg mb-2">Pro Tip</h4>
                  <p className="text-sm opacity-80 mb-4">Customize your dashboard layout by dragging widgets.</p>
                  <button className="w-full py-2 bg-black/10 rounded-lg font-semibold hover:bg-black/20 transition-colors">
                    Learn More
                  </button>
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
    { title: "Advanced Visualization", desc: "Beyond basic charts. Heatmaps, scatter plots, and 3D rendering capabilities.", icon: BarChart2 },
    { title: "Modular Design System", desc: "Drag-and-drop components that snap to grid for perfect alignment every time.", icon: Layout },
    { title: "Real-time Integration", desc: "WebSocket support for live data streaming with sub-millisecond latency.", icon: Zap },
    { title: "Fully Responsive", desc: "Dashboards that adapt intelligently to any screen size, from mobile to 4K walls.", icon: Layers },
    { title: "Performance First", desc: "Optimized rendering engine handling millions of data points without lag.", icon: Code },
    { title: "Custom Branding", desc: "White-label ready. Apply your brand's colors, fonts, and logos instantly.", icon: CheckCircle },
  ];

  return (
    <section id="features" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineered for Performance</h2>
          <div className="h-1 w-20 bg-[#00FF94]" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[#00FF94]/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#00FF94]/10 rounded-lg flex items-center justify-center text-[#00FF94] mb-6 group-hover:bg-[#00FF94] group-hover:text-black transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your data sources and user goals." },
    { num: "02", title: "Architecture", desc: "Designing the information hierarchy and flow." },
    { num: "03", title: "Prototyping", desc: "Interactive wireframes to test usability." },
    { num: "04", title: "Polish", desc: "High-fidelity visual design and interaction." },
  ];

  return (
    <section id="process" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Our Strategic Approach</h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-[#00FF94]/0 via-[#00FF94]/50 to-[#00FF94]/0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-[#0A0A0A] border-2 border-[#00FF94] rounded-full flex items-center justify-center text-3xl font-bold text-[#00FF94] mb-6 shadow-[0_0_20px_rgba(0,255,148,0.2)]">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section className="py-24 bg-[#00FF94] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-6xl md:text-7xl font-bold mb-2 tracking-tighter">40%</div>
            <p className="text-xl font-medium opacity-80">Faster Decision Making</p>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bold mb-2 tracking-tighter">2x</div>
            <p className="text-xl font-medium opacity-80">Increase in User Adoption</p>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bold mb-2 tracking-tighter">ROI</div>
            <p className="text-xl font-medium opacity-80">Clearer Reporting & Insights</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF94]/10 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Do You Want a Dashboard <br /> at This Level?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Let us transform your raw data into a powerful, beautiful digital experience.
        </p>
        
        <button className="px-10 py-5 rounded-full bg-[#00FF94] text-black font-bold text-xl hover:bg-[#00cc76] transition-all shadow-[0_0_40px_rgba(0,255,148,0.4)] hover:scale-105 transform duration-200">
          BOOK A FREE CONSULTATION
        </button>
        
        <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Request a Quote</a>
          <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Start Your Project</a>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "How long does a dashboard project take?", a: "Typical projects range from 4-8 weeks depending on complexity and data integration requirements." },
    { q: "Do you integrate with existing data systems?", a: "Yes, we build custom connectors for SQL, NoSQL, REST APIs, and major cloud providers (AWS, GCP, Azure)." },
    { q: "Is it fully customizable?", a: "Absolutely. We don't use templates. Every pixel is designed to match your brand and specific user needs." },
    { q: "Do you offer ongoing support?", a: "We offer comprehensive maintenance packages to ensure your dashboard scales with your business." },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg bg-[#111] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDown className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-400">
          {answer}
        </div>
      </div>
    </div>
  );
};

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-6">
              <div className="w-8 h-8 bg-[#00FF94] rounded-lg flex items-center justify-center text-black">
                <Layers size={20} />
              </div>
              <span className="text-white">NEON<span className="text-[#00FF94]">ANALYTICS</span></span>
            </div>
            <p className="text-gray-500 max-w-sm">
              The world's premier agency for high-performance analytics dashboards and data visualization systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#00FF94] transition-colors">Dashboard Design</a></li>
              <li><a href="#" className="hover:text-[#00FF94] transition-colors">Data Engineering</a></li>
              <li><a href="#" className="hover:text-[#00FF94] transition-colors">UX Audits</a></li>
              <li><a href="#" className="hover:text-[#00FF94] transition-colors">Mobile Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#00FF94] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#00FF94] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#00FF94] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#00FF94] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>&copy; 2024 Neon Analytics Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
