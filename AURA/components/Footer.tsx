import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bgSecondary pt-20 pb-10 border-t border-textPrimary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-textPrimary mb-6">
              AURA<span className="text-accentPrimary">.</span>
            </h2>
            <p className="text-textSecondary max-w-sm mb-8 leading-relaxed">
              Elevating digital presence through intelligent design and AI-powered engineering. 
              We build systems, not just websites.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-textSecondary hover:bg-accentPrimary hover:text-textPrimary transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-textPrimary font-serif font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Catalog', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-textSecondary hover:text-accentPrimary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-textPrimary font-serif font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-textSecondary hover:text-accentPrimary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-textPrimary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textSecondary text-sm">
            © {new Date().getFullYear()} AURA Agency. All rights reserved.
          </p>
          <p className="text-textSecondary text-sm">
            Designed by AURA Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;