import { Store, Scissors, Presentation, Home, ShoppingBag, Laptop } from 'lucide-react';

export default function UseCaseSection() {
    const useCases = [
        {
            icon: <Store className="w-5 h-5 text-cyan-400" />,
            title: "Instagram Shops",
            example: "“Generate price and availability replies instantly.”"
        },
        {
            icon: <Scissors className="w-5 h-5 text-cyan-400" />,
            title: "Salons & Beauty",
            example: "“Respond to booking and service questions professionally.”"
        },
        {
            icon: <Presentation className="w-5 h-5 text-cyan-400" />,
            title: "Coaches & Consultants",
            example: "“Close high-ticket leads in DMs without sounding desperate.”"
        },
        {
            icon: <Home className="w-5 h-5 text-cyan-400" />,
            title: "Real Estate Agents",
            example: "“Send property details and viewing availability in seconds.”"
        },
        {
            icon: <ShoppingBag className="w-5 h-5 text-cyan-400" />,
            title: "E-Commerce Stores",
            example: "“Handle shipping, returns, and order status effortlessly.”"
        },
        {
            icon: <Laptop className="w-5 h-5 text-cyan-400" />,
            title: "Freelancers",
            example: "“Manage client inquiries and set boundaries politely.”"
        }
    ];

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Perfect for Businesses Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Conversations.</span>
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Whatever you sell, your customers expect fast, accurate, and polite replies. Nido is custom-built for local experts and digital creators.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 hover:border-cyan-500/30 transition-all duration-300 group shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                            <div className="w-12 h-12 bg-zinc-950 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                                {useCase.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{useCase.title}</h3>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                {useCase.example}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="px-8 py-4 bg-zinc-900 text-white border border-white/10 rounded-full font-semibold text-lg hover:bg-zinc-800 hover:border-white/20 transition-all duration-200 shadow-xl shadow-black/50">
                        See It in Action
                    </button>
                </div>
            </div>
        </section>
    );
}
