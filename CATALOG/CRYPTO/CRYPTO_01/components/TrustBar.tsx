import React from 'react';

const LOGOS = [
  "Coinbase", "Binance", "Ethereum", "Polygon", "Chainlink", "Aave", "Uniswap", "Solana"
];

export const TrustBar: React.FC = () => {
  return (
    <div className="w-full py-10 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-6">
         <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-[0.2em]">Trusted by Industry Leaders</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <span 
              key={index} 
              className="text-2xl font-display font-bold text-gray-700 hover:text-white transition-colors duration-500 cursor-default select-none"
            >
              {logo.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8">
           {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <span 
              key={index} 
              className="text-2xl font-display font-bold text-gray-700 hover:text-white transition-colors duration-500 cursor-default select-none"
            >
              {logo.toUpperCase()}
            </span>
          ))}
        </div>
        
        {/* Fade Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020204] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020204] to-transparent z-10" />
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};