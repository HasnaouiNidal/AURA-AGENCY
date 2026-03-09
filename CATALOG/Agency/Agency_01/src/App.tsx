import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="bg-aura-bg min-h-screen text-white selection:bg-aura-accent-start/30 selection:text-aura-accent-start">
      <Hero />
      <SocialProof />
      <InteractiveDemo />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
