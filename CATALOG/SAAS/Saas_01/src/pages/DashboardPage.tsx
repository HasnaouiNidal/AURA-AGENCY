import React from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  MoreHorizontal, 
  Sparkles, 
  Search, 
  Bell 
} from 'lucide-react';
import { clsx } from 'clsx';
import Sidebar from '../components/dashboard/Sidebar';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const revenueData = [
  { name: 'Jan', value: 12500 },
  { name: 'Feb', value: 15000 },
  { name: 'Mar', value: 18000 },
  { name: 'Apr', value: 16500 },
  { name: 'May', value: 21000 },
  { name: 'Jun', value: 24500 },
  { name: 'Jul', value: 28000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1A1D24] border border-white/10 p-3 rounded-lg shadow-xl">
        <p className="text-gray-400 text-xs mb-1">{label}</p>
        <p className="text-white font-semibold text-sm">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white flex">
      <Sidebar />
      
      <main className="flex-1 ml-20 lg:ml-64 p-8 overflow-y-auto h-screen">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Welcome back, Alexander.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search analytics..." 
                className="bg-[#1A1D24] border border-white/5 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-aura-accent)]/50 transition-colors w-64"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-[#1A1D24] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#1A1D24]" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10" />
          </div>
        </header>

        {/* AI Insight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-[var(--color-aura-accent)]/10 to-transparent border border-[var(--color-aura-accent)]/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-aura-accent)]/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-aura-accent)]/20 flex items-center justify-center text-[var(--color-aura-accent)] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">AURA Insight</h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
                Based on current trajectory, your recurring revenue is projected to grow by <span className="text-[var(--color-aura-accent)] font-semibold">18.5%</span> this quarter. 
                We recommend increasing ad spend on the "Enterprise" campaign to capitalize on high conversion rates.
              </p>
            </div>
            <button className="ml-auto px-4 py-2 rounded-lg bg-[var(--color-aura-accent)] text-[#0F1115] text-sm font-semibold hover:bg-white transition-colors shadow-[0_0_15px_rgba(110,231,255,0.2)]">
              View Details
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Revenue', value: '$128,430', change: '+12.5%', trend: 'up' },
            { label: 'Active Users', value: '14,205', change: '+8.2%', trend: 'up' },
            { label: 'Churn Rate', value: '2.4%', change: '-0.8%', trend: 'down', good: true },
            { label: 'Avg. Session', value: '4m 32s', change: '+1.2%', trend: 'up' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#1A1D24] border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                <button className="text-gray-600 hover:text-white transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{stat.value}</h3>
              <div className="flex items-center gap-2">
                <span className={clsx(
                  "flex items-center text-xs font-medium px-2 py-0.5 rounded-full",
                  (stat.trend === 'up' && !stat.good) || (stat.trend === 'down' && stat.good)
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-red-400 bg-red-400/10"
                )}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                  {stat.change}
                </span>
                <span className="text-gray-600 text-xs">vs last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Revenue Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 p-6 rounded-2xl bg-[#1A1D24] border border-white/5"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-white">Revenue Growth</h3>
              <select className="bg-[#0F1115] border border-white/10 text-gray-400 text-xs rounded-lg px-3 py-1.5 focus:outline-none">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-aura-accent)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-aura-accent)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#666" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                  />
                  <YAxis 
                    stroke="#666" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `$${value / 1000}k`}
                    dx={-10}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="var(--color-aura-accent)" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* User Activity Bar Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-2xl bg-[#1A1D24] border border-white/5"
          >
            <h3 className="text-lg font-medium text-white mb-6">Daily Activity</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: '#1A1D24', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? 'var(--color-aura-accent)' : '#2A2D35'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Recent Transactions / Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 rounded-2xl bg-[#1A1D24] border border-white/5"
          >
            <h3 className="text-lg font-medium text-white mb-4">Smart Recommendations</h3>
            <div className="space-y-4">
              {[
                { title: 'Optimize Pricing Tier', desc: 'Analysis suggests moving Enterprise tier to $499 could increase conversion by 12%.', impact: 'High' },
                { title: 'Churn Risk Alert', desc: '3 key accounts show declining usage patterns. Schedule check-ins immediately.', impact: 'Critical' },
                { title: 'New Market Opportunity', desc: 'Traffic from EU region is up 40%. Consider enabling Euro currency support.', impact: 'Medium' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0F1115] border border-white/5 hover:border-[var(--color-aura-accent)]/30 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-medium group-hover:text-[var(--color-aura-accent)] transition-colors">{item.title}</h4>
                    <span className={clsx(
                      "text-xs px-2 py-1 rounded-full font-medium",
                      item.impact === 'Critical' ? "bg-red-500/10 text-red-400" :
                      item.impact === 'High' ? "bg-orange-500/10 text-orange-400" :
                      "bg-blue-500/10 text-blue-400"
                    )}>{item.impact}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="p-6 rounded-2xl bg-[#1A1D24] border border-white/5"
          >
            <h3 className="text-lg font-medium text-white mb-4">Live Feed</h3>
            <div className="space-y-6">
              {[
                { user: 'Sarah M.', action: 'upgraded to', target: 'Pro Plan', time: '2m ago', img: 'https://picsum.photos/seed/u1/40' },
                { user: 'TechFlow Inc.', action: 'added', target: '5 new seats', time: '14m ago', img: 'https://picsum.photos/seed/u2/40' },
                { user: 'David K.', action: 'generated', target: 'Q3 Report', time: '32m ago', img: 'https://picsum.photos/seed/u3/40' },
                { user: 'System', action: 'completed', target: 'Daily Sync', time: '1h ago', img: 'https://picsum.photos/seed/u4/40' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img src={item.img} alt={item.user} className="w-10 h-10 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                  <div>
                    <p className="text-sm text-white">
                      <span className="font-medium">{item.user}</span> <span className="text-gray-500">{item.action}</span> <span className="text-white">{item.target}</span>
                    </p>
                    <p className="text-xs text-gray-600">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
