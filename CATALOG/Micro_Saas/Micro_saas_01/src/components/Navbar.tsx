import { motion } from 'motion/react';
import { MessageSquareReply } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <MessageSquareReply size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">ReplyPro</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 bg-white text-surface-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-all shadow-sm">
              Start Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
