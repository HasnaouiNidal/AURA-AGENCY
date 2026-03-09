import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
];

export const DashboardMockup = ({ className }: { className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      <div className="glass-card rounded-2xl overflow-hidden glow-shadow border border-white/10">
        {/* Sidebar + Main Content */}
        <div className="flex h-[500px]">
          {/* Sidebar */}
          <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-8 bg-black/20">
            <div className="w-8 h-8 rounded-lg bg-gradient flex items-center justify-center font-bold text-xs">A</div>
            <div className="flex flex-col gap-6 opacity-40">
              <div className="w-5 h-5 rounded-sm border border-white/20" />
              <div className="w-5 h-5 rounded-sm border border-white/20" />
              <div className="w-5 h-5 rounded-sm border border-white/20" />
              <div className="w-5 h-5 rounded-sm border border-white/20" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-8 overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-semibold">Growth Overview</h3>
                <p className="text-sm text-white/40">Real-time performance metrics</p>
              </div>
              <div className="flex gap-3">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-white/60">7 Days</div>
                <div className="px-3 py-1 rounded-full bg-aura-accent-end/10 border border-aura-accent-end/20 text-[10px] uppercase tracking-wider text-aura-accent-end">Live</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Revenue', value: '$128.4k', change: '+12.5%' },
                { label: 'Active Users', value: '14,201', change: '+8.2%' },
                { label: 'Churn Rate', value: '2.4%', change: '-0.5%' },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                  <p className="text-lg font-medium">{stat.value}</p>
                  <p className={`text-[10px] ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{stat.change}</p>
                </div>
              ))}
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6EE7FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1D24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#6EE7FF' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#6EE7FF" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
