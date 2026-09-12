import React from 'react';
import FadeIn from './UI/FadeIn';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0C0C0C] border-t border-[#D7E2EA]/5 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <FadeIn delay={0.1} y={10} className="order-2 sm:order-1 text-left">
          <p className="text-xs text-[#D7E2EA]/50 font-medium">
            © {currentYear} Nirakar Rath. All rights reserved.
          </p>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.2} y={10} className="order-1 sm:order-2">
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/nirakarrath" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors text-lg"
              title="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a 
              href="https://github.com/nirakarrath" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors text-lg"
              title="GitHub Profile"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors text-lg"
              title="Twitter Profile"
            >
              <i className="fa-brands fa-twitter" />
            </a>
          </div>
        </FadeIn>
        
      </div>
    </footer>
  );
};

export default Footer;
