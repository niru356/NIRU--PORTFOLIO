import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  // IntersectionObserver to detect visible sections
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Why Hire Me', href: '#why-hire' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#D7E2EA]/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#" className="flex flex-col group">
          <span className="text-xl font-bold font-heading tracking-tight text-[#D7E2EA] transition-colors duration-300 group-hover:text-[#D7E2EA]/85 glow-text">
            Nirakar Rath
          </span>
          <span className="text-[9px] text-[#D7E2EA]/50 uppercase tracking-widest font-medium glow-text">
            Data Analyst | SQL • Python • Power BI
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs uppercase tracking-wider font-semibold text-[#D7E2EA]/80 hover:text-[#D7E2EA] transition-all duration-200 relative group glow-text ${activeSection === item.href.slice(1) ? 'active-nav' : ''}`}
            >
              {item.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-[#D7E2EA] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden text-[#D7E2EA] focus:outline-none hover:opacity-80 transition-opacity p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0C0C0C] border-b border-[#D7E2EA]/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm uppercase tracking-wider font-semibold text-[#D7E2EA] border-b border-[#D7E2EA]/5 pb-2 transition-colors hover:text-[#D7E2EA]/70 glow-text ${activeSection === item.href.slice(1) ? 'active-nav' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
