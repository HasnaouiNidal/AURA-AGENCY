import { Navbar, Hero, SocialProof, Showcase, Features, Process, Results, CTA, Footer } from "./components/LandingPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#D4FF00] selection:text-black">
      <Navbar />
      <Hero />
      <SocialProof />
      <Showcase />
      <Features />
      <Process />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}
