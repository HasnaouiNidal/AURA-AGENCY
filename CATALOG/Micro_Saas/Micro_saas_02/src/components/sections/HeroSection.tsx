import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative pt-40 pb-20 md:pb-32 overflow-hidden bg-zinc-950">
            {/* Dark mode gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-100"></div>
            {/* Cyan accent glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-sm leading-[1.15]">
                    Reply to Customers in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Seconds.</span><br className="hidden md:block" />
                    Close More Sales <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Instantly.</span>
                </h1>

                <p className="mt-4 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    AI-powered professional replies for DMs, emails, WhatsApp, and Google reviews. Stop overthinking and start converting with the reply assistant built for small businesses.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                    <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-zinc-950 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5">
                        Start Free — No Credit Card
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900/50 text-white border border-white/10 rounded-full font-semibold text-lg hover:bg-zinc-800 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2 group backdrop-blur-sm">
                        See How It Works
                        <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm font-medium text-zinc-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                        <span>No prompts required.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                        <span>Works for any industry.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                        <span>Free plan available.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
