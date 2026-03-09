import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Solution from './components/Solution';
import Transformation from './components/Transformation';
import UseCases from './components/UseCases';
import Objections from './components/Objections';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FinalClose from './components/FinalClose';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-950 font-sans text-white selection:bg-primary-500/30 selection:text-primary-100">
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Transformation />
        <UseCases />
        <Objections />
        <SocialProof />
        <Pricing />
        <FinalClose />
      </main>
      <Footer />
    </div>
  );
}
