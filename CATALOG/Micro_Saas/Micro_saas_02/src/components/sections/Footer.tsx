import { Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Newsletter Column */}
                    <div className="lg:col-span-2">
                        <div className="text-xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                            </span>
                            Nido
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
                            The AI reply assistant built specifically for small businesses. Close more deals in DMs without sounding like a robot.
                        </p>

                        {/* Newsletter Capture */}
                        <form className="relative max-w-sm group" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="newsletter" className="sr-only">Subscribe to newsletter</label>
                            <input
                                type="email"
                                id="newsletter"
                                placeholder="Get tips to reply faster..."
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-2.5 pl-4 pr-12 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                aria-label="Email address for tips"
                            />
                            <button
                                type="submit"
                                className="absolute right-1.5 top-1.5 bottom-1.5 px-2 bg-white/5 hover:bg-white/10 text-zinc-300 rounded-lg transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                aria-label="Subscribe"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Product */}
                        <div>
                            <h3 className="text-white font-semibold text-sm mb-5">Product</h3>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Features</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Integrations</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Pricing</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-2">Changelog <span className="bg-cyan-500/10 text-cyan-400 text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-cyan-500/20">New</span></a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold text-sm mb-5">Company</h3>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">About</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Contact</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Careers</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Press</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-white font-semibold text-sm mb-5">Resources</h3>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Help Center</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Blog</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Guides</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-2">Status <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span></a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-white font-semibold text-sm mb-5">Legal</h3>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-zinc-600 text-sm">
                        &copy; {currentYear} Nido AI Inc. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5">
                        <a href="#" aria-label="X (Twitter)" className="text-zinc-500 hover:text-white transition-colors duration-200 group">
                            <Twitter className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-zinc-500 hover:text-white transition-colors duration-200 group">
                            <Instagram className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="text-zinc-500 hover:text-white transition-colors duration-200 group">
                            <Linkedin className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
