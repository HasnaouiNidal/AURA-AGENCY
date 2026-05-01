import React from 'react';
import { Section, FadeIn, Button, MeshBackground } from '../components/UI';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col">
        <div className="flex-grow relative">
            <MeshBackground />
            <Section>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Info */}
                        <div className="lg:w-1/3">
                            <FadeIn>
                                <h1 className="text-5xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-accentSecondary">Let's Talk</h1>
                                <p className="text-textSecondary mb-12">
                                    Ready to start? Fill out the form or email me directly. I usually respond within 24 hours.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-lg bg-textPrimary/5 flex items-center justify-center text-accentPrimary">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-textSecondary uppercase tracking-wider">Email</div>
                                            <div className="font-medium text-lg">hello@aura.agency</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-lg bg-textPrimary/5 flex items-center justify-center text-accentPrimary">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-textSecondary uppercase tracking-wider">Location</div>
                                            <div className="font-medium text-lg">San Francisco, CA</div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Form */}
                        <div className="lg:w-2/3">
                            <FadeIn delay={200}>
                                <form className="bg-surface/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-textPrimary/10 shadow-2xl">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-textSecondary">Name</label>
                                            <input type="text" className="w-full bg-textPrimary/5 border border-textPrimary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary/50 transition-all duration-300" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-textSecondary">Email</label>
                                            <input type="email" className="w-full bg-textPrimary/5 border border-textPrimary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary/50 transition-all duration-300" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium mb-2 text-textSecondary">Subject (Optional)</label>
                                        <input type="text" className="w-full bg-textPrimary/5 border border-textPrimary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary/50 transition-all duration-300" placeholder="Project Inquiry" />
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium mb-2 text-textSecondary">Message</label>
                                        <textarea rows={5} className="w-full bg-textPrimary/5 border border-textPrimary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary/50 transition-all duration-300" placeholder="Tell me about your project..."></textarea>
                                    </div>
                                    <div className="relative w-full group mt-4">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-md opacity-40 group-hover:opacity-75 transition-all duration-500 pointer-events-none" />
                                        <Button variant="primary" className="relative w-full py-4 text-base tracking-wide flex justify-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    </div>
  );
};

export default Contact;