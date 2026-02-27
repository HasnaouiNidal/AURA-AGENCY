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
                                <h1 className="text-5xl font-serif font-bold mb-8">Let's Talk</h1>
                                <p className="text-textSecondary mb-12">
                                    Ready to start? Fill out the form or email me directly. I usually respond within 24 hours.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accentPrimary">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-textSecondary uppercase tracking-wider">Email</div>
                                            <div className="font-medium text-lg">hello@aura.agency</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accentPrimary">
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
                                <form className="bg-surface/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-textSecondary">Name</label>
                                            <input type="text" className="w-full bg-bgPrimary border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-textSecondary">Email</label>
                                            <input type="email" className="w-full bg-bgPrimary border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium mb-2 text-textSecondary">Subject (Optional)</label>
                                        <input type="text" className="w-full bg-bgPrimary border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all" placeholder="Project Inquiry" />
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium mb-2 text-textSecondary">Message</label>
                                        <textarea rows={5} className="w-full bg-bgPrimary border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all" placeholder="Tell me about your project..."></textarea>
                                    </div>
                                    <Button variant="primary" className="w-full">Send Message</Button>
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