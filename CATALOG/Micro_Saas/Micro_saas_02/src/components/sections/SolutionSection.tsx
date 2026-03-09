import { ClipboardPaste, Wand2, Send } from 'lucide-react';

export default function SolutionSection() {
    const steps = [
        {
            icon: <ClipboardPaste className="w-8 h-8 text-cyan-400" />,
            title: "Paste customer message",
            description: "Drop in the DM, email, or review you received.",
        },
        {
            icon: <Wand2 className="w-8 h-8 text-cyan-400" />,
            title: "Get instant professional reply",
            description: "AI auto-generates the perfect, polite response in seconds.",
        },
        {
            icon: <Send className="w-8 h-8 text-cyan-400" />,
            title: "Copy. Send. Done.",
            description: "Paste it back and hit send. You just saved 5 minutes.",
        }
    ];

    return (
        <section id="solution" className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Meet Your AI Reply Assistant.
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        No setup. No complexity. Built for real small business conversations. Just paste the message, get a professional reply, and send.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group relative z-10 w-full">
                            <div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-balance">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button className="px-8 py-4 bg-cyan-500 text-zinc-950 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5">
                        Try It Free Now
                    </button>
                </div>
            </div>
        </section>
    );
}
