import { CheckCircle2 } from 'lucide-react';

export default function PricingSection() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Simple pricing. No surprises.
                    </h2>
                    <p className="text-xl text-zinc-400">
                        Professional AI replies that cost less than a single lost sale per month. Try it risk-free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <div className="border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col items-start bg-zinc-900/50 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">Free Plan</h3>
                        <p className="text-zinc-500 mb-8">Perfect to see how it works</p>
                        <div className="mb-10 flex items-baseline gap-1">
                            <span className="text-6xl font-extrabold text-white">$0</span>
                            <span className="text-zinc-500 font-medium">/ forever</span>
                        </div>

                        <ul className="space-y-5 mb-12 flex-1 w-full">
                            <li className="flex items-center gap-3">
                                <div className="bg-white/5 p-1 rounded-md shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-zinc-400" />
                                </div>
                                <span className="text-zinc-300 font-medium">50 replies per month</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white/5 p-1 rounded-md shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-zinc-400" />
                                </div>
                                <span className="text-zinc-300 font-medium">Standard tone options</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white/5 p-1 rounded-md shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-zinc-400" />
                                </div>
                                <span className="text-zinc-300 font-medium">Chrome extension</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 px-6 text-white border-2 border-white/10 rounded-2xl font-bold text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200">
                            Get Started for Free
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="border border-cyan-500/30 rounded-3xl p-8 sm:p-10 flex flex-col items-start bg-zinc-950 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden ring-1 ring-cyan-500/20 transform md:-translate-y-4">
                        {/* Pro Plan Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[100px] bg-cyan-500/20 blur-[50px] pointer-events-none"></div>

                        <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider rounded-full mb-6 mt-2">
                            Most Popular
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Pro Plan</h3>
                        <p className="text-zinc-500 mb-8">For businesses that are growing</p>
                        <div className="mb-10 flex items-baseline gap-1">
                            <span className="text-6xl font-extrabold text-white">$15</span>
                            <span className="text-zinc-500 font-medium">/ month</span>
                        </div>

                        <ul className="space-y-5 mb-12 flex-1 w-full relative z-10">
                            <li className="flex items-center gap-3">
                                <div className="bg-cyan-500/10 p-1 rounded-md shrink-0 border border-cyan-500/20">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                </div>
                                <span className="text-white font-semibold">Unlimited replies</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-cyan-500/10 p-1 rounded-md shrink-0 border border-cyan-500/20">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                </div>
                                <span className="text-white font-semibold">Priority API speed</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-cyan-500/10 p-1 rounded-md shrink-0 border border-cyan-500/20">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                </div>
                                <span className="text-white font-semibold">Advanced tone framework</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-cyan-500/10 p-1 rounded-md shrink-0 border border-cyan-500/20">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                </div>
                                <span className="text-white font-semibold">Multi-language support</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 px-6 bg-cyan-500 text-zinc-950 rounded-2xl font-extrabold text-lg hover:bg-cyan-400 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5 relative z-10">
                            Start Free Trial
                        </button>
                        <p className="text-center w-full text-sm text-zinc-500 mt-5">
                            14-day free trial. Cancel anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
