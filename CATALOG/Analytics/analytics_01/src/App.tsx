import { Navbar, Hero, SocialProof, Showcase, Features, Process, Results, CTA, FAQ, Footer } from "./components/LandingPage";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#00FF94] selection:text-black">
      <Navbar />
      <Hero />
      <SocialProof />
      <Showcase />
      <Features />
      <Process />
      <Results />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
