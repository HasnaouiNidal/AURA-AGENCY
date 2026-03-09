import { Star } from 'lucide-react';

export default function SocialProofSection() {
    const testimonials = [
        {
            quote: "Before Nido, I would leave people on read for days because I was too tired to reply nicely. Now I tap twice, and they get a perfect, sweet response.",
            name: "Sarah Jenkins",
            role: "Bridal Makeup Artist",
            rating: 5
        },
        {
            quote: "This tool literally paid for itself in an hour. I got an inquiry while driving, generated a reply at a red light, and booked a $400 detail job.",
            name: "Mike Torres",
            role: "Mobile Auto Detailing",
            rating: 5
        },
        {
            quote: "I'm not a writer, I'm a baker. I used to agonize over how to say 'no, I can't do that cake'. Now Nido says it professionally without hurting feelings.",
            name: "Emily Chen",
            role: "Custom Bakery Owner",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-zinc-950 border-t border-b border-white/5 relative">
            {/* Background glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
                        Small Businesses Are Already Saving <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hours Every Week.</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-700"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-600"></div>
                        </div>
                        <div className="flex flex-col items-start ml-2">
                            <div className="flex gap-0.5 text-cyan-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-zinc-400 text-sm font-medium mt-0.5">Trusted by 2,000+ local experts</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:bg-zinc-900 hover:border-white/10 transition-all duration-300 relative group">
                            <div className="flex gap-1 text-cyan-400 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-zinc-300 text-lg mb-8 leading-relaxed font-medium">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10"></div>
                                <div>
                                    <p className="font-bold text-white tracking-tight">{testimonial.name}</p>
                                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/5 hover:border-white/30 transition-all duration-200">
                        Join Them Today
                    </button>
                </div>
            </div>
        </section>
    );
}
