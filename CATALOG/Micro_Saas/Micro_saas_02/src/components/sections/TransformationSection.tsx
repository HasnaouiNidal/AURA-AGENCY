import { X, Check } from 'lucide-react';

export default function TransformationSection() {
    const comparisons = [
        { without: "Slow replies", with: "Instant responses" },
        { without: "Inconsistent tone", with: "Professional messaging" },
        { without: "Overthinking", with: "Confident communication" },
        { without: "Lost leads", with: "More conversions" },
        { without: "Burned out", with: "In control" }
    ];

    return (
        <section className="py-24 bg-zinc-900 border-t border-b border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        From Overwhelmed to In Control.
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Stop letting messages dictate your day. Take back your time while sounding better than ever.
                    </p>
                </div>

                <div className="bg-zinc-950 rounded-3xl border border-white/10 overflow-hidden max-w-4xl mx-auto shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {/* Without Block */}
                        <div className="p-8 sm:p-12 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                <span className="bg-red-500/10 border border-red-500/20 text-red-500 p-1.5 rounded-lg">
                                    <X className="w-5 h-5" />
                                </span>
                                Without Nido
                            </h3>
                            <ul className="space-y-6 relative z-10">
                                {comparisons.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-red-500/70 shrink-0" />
                                        <span>{item.without}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* With Block */}
                        <div className="p-8 sm:p-12 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 p-1.5 rounded-lg">
                                    <Check className="w-5 h-5" />
                                </span>
                                With Nido
                            </h3>
                            <ul className="space-y-6 relative z-10">
                                {comparisons.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-white">
                                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                                        <span className="font-medium">{item.with}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-white text-zinc-950 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all duration-200 shadow-lg transform hover:-translate-y-0.5">
                        Start Sounding Like a Pro
                    </button>
                </div>
            </div>
        </section>
    );
}
