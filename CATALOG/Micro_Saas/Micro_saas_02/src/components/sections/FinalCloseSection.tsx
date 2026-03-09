export default function FinalCloseSection() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Deep dramatic background gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-950/40 via-zinc-950 to-zinc-950"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/20 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                    Your Customers Expect Fast Replies. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Now You Can Deliver Them.</span>
                </h2>

                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                    Stop losing time. Stop losing sales. Start replying like a professional today.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <button className="px-10 py-5 bg-cyan-500 text-zinc-950 rounded-full font-extrabold text-xl hover:bg-cyan-400 transition-all duration-200 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5">
                        Start Free Today
                    </button>

                    <div className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
                        <span>No credit card required</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                        <span>Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
