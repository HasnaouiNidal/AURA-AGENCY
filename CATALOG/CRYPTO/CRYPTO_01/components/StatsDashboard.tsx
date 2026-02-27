import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'framer-motion';

const data = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
  { name: 'Jul', value: 4300 },
];

export const StatsDashboard: React.FC = () => {
  return (
    <section id="benefits" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Intelligent <br />
                <span className="text-purple-400">Market Analysis</span>
              </h2>
              <p className="text-gray-400">
                Our automated strategies consistently outperform holding by up to 300%. 
                View real-time protocol metrics below.
              </p>
              
              <ul className="mt-8 space-y-4">
                {['Zero-fee trading pairs', 'Instant bank withdrawals', 'AI-powered price alerts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Chart */}
          <div className="lg:col-span-7 h-[400px] md:h-[500px]">
            <GlassCard className="h-full p-6 md:p-10 flex flex-col !bg-[#150a26]/80">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-lg font-bold text-white">Portfolio Growth</h3>
                  <p className="text-xs text-gray-400">Last 7 Months</p>
                </div>
                <div className="px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 text-green-400 text-xs font-mono">
                  +12.4% this week
                </div>
              </div>

              <div className="flex-1 w-full h-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7045FF" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#7045FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      stroke="#525252" 
                      tick={{fill: '#525252', fontSize: 12}}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#525252" 
                      tick={{fill: '#525252', fontSize: 12}}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1E1235', 
                        borderColor: '#333',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                      itemStyle={{ color: '#a78bfa' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#7045FF" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};