export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-aura-bg text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-tighter">AURA</div>
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AURA Intelligence Inc. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
