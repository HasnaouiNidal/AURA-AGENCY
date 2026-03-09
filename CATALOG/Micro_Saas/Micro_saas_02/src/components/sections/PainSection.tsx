import { Clock, MessageSquareX, RotateCcw, Moon } from 'lucide-react';

export default function PainSection() {
    const pains = [
        {
            icon: <Clock className="w-5 h-5 text-red-400" />,
            text: "“I’ll reply later.” (And then you forget.)"
        },
        {
            icon: <RotateCcw className="w-5 h-5 text-red-400" />,
            text: "You rewrite messages 5 times hoping they sound professional."
        },
        {
            icon: <MessageSquareX className="w-5 h-5 text-red-400" />,
            text: "You respond too late and lose the hot lead."
        },
        {
            icon: <Moon className="w-5 h-5 text-red-400" />,
            text: "You spend evenings answering DMs instead of resting."
        }
    ];

    return (
        <section className="py-24 bg-zinc-900 border-t border-b border-white/5 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Customer Messages Never Stop. <br />Neither Does the Pressure.
                    </h2>
                    <p className="text-lg text-zinc-400">
                        You started your business to do what you love, not to become a full-time customer service agent. Yet, you're losing time and revenue manually replying to every DM.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {pains.map((pain, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 bg-zinc-950/50 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-zinc-900 transition-all duration-300 group">
                            <div className="p-2.5 bg-red-500/10 rounded-xl border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                                {pain.icon}
                            </div>
                            <p className="text-base font-medium text-zinc-300 pt-1.5 leading-relaxed">
                                {pain.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="inline-block p-px rounded-xl bg-gradient-to-r from-red-500/20 via-red-500/40 to-red-500/20 mb-8">
                        <p className="text-lg font-medium text-red-200 bg-zinc-950 py-3 px-6 rounded-xl">
                            One delayed reply can mean one lost customer.
                        </p>
                    </div>
                    <div>
                        <a href="#solution" className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group">
                            There’s a Better Way
                            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
