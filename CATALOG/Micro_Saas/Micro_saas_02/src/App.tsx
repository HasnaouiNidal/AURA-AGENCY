import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import PainSection from './components/sections/PainSection';
import SolutionSection from './components/sections/SolutionSection';
import TransformationSection from './components/sections/TransformationSection';
import UseCaseSection from './components/sections/UseCaseSection';
import ObjectionSection from './components/sections/ObjectionSection';
import SocialProofSection from './components/sections/SocialProofSection';
import PricingSection from './components/sections/PricingSection';
import FinalCloseSection from './components/sections/FinalCloseSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-50 overflow-x-hidden text-zinc-100 relative">
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <TransformationSection />
        <UseCaseSection />
        <ObjectionSection />
        <SocialProofSection />
        <PricingSection />
        <FinalCloseSection />
      </main>

      {/* Simple Footer */}
      <Footer />
    </div>
  );
}

export default App;
