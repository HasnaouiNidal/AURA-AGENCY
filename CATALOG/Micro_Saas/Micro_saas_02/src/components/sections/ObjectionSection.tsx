import { MessageCircleQuestion, Check } from 'lucide-react';

export default function ObjectionSection() {
    const points = [
        "No prompts needed.",
        "Designed specifically for customer conversations.",
        "Built-in reply structure for sales and support.",
        "10x faster workflow than ChatGPT.",
        "Made for business owners, not prompt engineers."
    ];

    return (
        <section className="py-32 bg-zinc-900 border-t border-b border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-[800px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-8 uppercase tracking-wider">
                        <MessageCircleQuestion className="w-4 h-4" />
                        Common Question
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Why Not Just Use ChatGPT?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Because you don't have time to write perfect prompts for every single customer DM. Nido is a specialized workflow tool, not a raw conversational AI.
                    </p>
                    <div className="hidden lg:block">
                        <button className="px-8 py-4 bg-white text-zinc-950 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all duration-200 shadow-xl shadow-white/5 transform hover:-translate-y-0.5">
                            Start Your Free Trial
                        </button>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-xl relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="bg-zinc-950/80 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl relative z-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full pointer-events-none"></div>
                        <ul className="space-y-6">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="mt-1 bg-cyan-500/10 border border-cyan-500/20 p-1.5 rounded-lg shrink-0">
                                        <Check className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <span className="text-lg text-zinc-300 font-medium">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12 lg:hidden text-center">
                        <button className="w-full px-8 py-4 bg-white text-zinc-950 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/20">
                            Start Your Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
