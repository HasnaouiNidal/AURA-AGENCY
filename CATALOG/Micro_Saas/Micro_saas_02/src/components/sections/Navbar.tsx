import { Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="absolute top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                        </span>
                        <span className="text-xl font-bold text-white tracking-tight">Nido</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Features</a>
                        <a href="#solution" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">How it Works</a>
                        <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Log in</button>
                        <button className="px-5 py-2.5 bg-cyan-500 text-zinc-950 rounded-full font-bold text-sm hover:bg-cyan-400 transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                            Start Free
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button className="text-zinc-400 hover:text-white p-2">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
