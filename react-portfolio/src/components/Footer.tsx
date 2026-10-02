import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaInstagram, 
  FaPhone, 
  FaEnvelope, 
  FaLocationDot, 
  FaArrowUp, 
  FaDownload, 
  FaArrowRight 
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import FadeIn from './UI/FadeIn';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll distance to show/hide the floating "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#home' || href === '#') {
      e.preventDefault();
      scrollToTop();
      return;
    }

    if (href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/niru356',
      hoverColor: 'hover:text-white hover:border-[#D7E2EA]/40 hover:bg-[#D7E2EA]/10',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://linkedin.com/in/nirakarrath',
      hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10',
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://leetcode.com/u/niru356/',
      hoverColor: 'hover:text-[#FFA116] hover:border-[#FFA116]/40 hover:bg-[#FFA116]/10',
    },
    {
      name: 'Twitter / X',
      icon: FaXTwitter,
      url: 'https://x.com/',
      hoverColor: 'hover:text-white hover:border-[#D7E2EA]/40 hover:bg-[#D7E2EA]/10',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/',
      hoverColor: 'hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10',
    },
  ];

  return (
    <>
      <footer className="relative bg-[#0C0C0C] text-[#D7E2EA] pt-20 pb-10 border-t border-[#D7E2EA]/10 overflow-hidden selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
        {/* Subtle glowing ambient gradient dividers */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/25 to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[#BBCCD7]/5 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-20 right-[-10%] w-[350px] h-[350px] bg-[#c4874b]/3 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Main 3-Column Grid on Desktop, Stacked on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16">
            
            {/* Column 1: Brand & Identity */}
            <FadeIn delay={0.1} y={20} className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <a 
                  href="#home" 
                  onClick={(e) => handleSmoothScroll(e, '#home')}
                  className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded-lg"
                >
                  <h2 className="text-3xl font-extrabold tracking-tight font-heading text-white group-hover:text-[#BBCCD7] transition-colors duration-300">
                    Nirakar Rath
                  </h2>
                </a>

                {/* Status indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 text-[11px] font-medium text-[#D7E2EA]/80">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for new opportunities</span>
                </div>

                <p className="text-sm font-medium text-[#BBCCD7] leading-snug">
                  Full-stack developer & data analyst building safe, useful apps.
                </p>

                <p className="text-xs text-[#D7E2EA]/60 leading-relaxed max-w-sm">
                  Specialized in SQL, Python, Power BI, and modern React architectures. Transforming complex data streams into actionable KPIs and performant web products.
                </p>
              </div>

              {/* Resume Download CTA */}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nirakar_Rath_Resume.pdf"
                  id="footer-resume-download"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D7E2EA]/10 hover:bg-[#D7E2EA] text-[#D7E2EA] hover:text-[#0C0C0C] border border-[#D7E2EA]/20 hover:border-transparent transition-all duration-300 shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7]"
                >
                  <FaDownload className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </FadeIn>

            {/* Column 2: Quick Links */}
            <FadeIn delay={0.2} y={20} className="space-y-5">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-white/90 pb-2 border-b border-[#D7E2EA]/10">
                Quick Links
              </h3>
              <nav aria-label="Footer Navigation">
                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-sm">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="group inline-flex items-center text-[#D7E2EA]/65 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded px-1 -mx-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/30 mr-2.5 group-hover:bg-[#BBCCD7] group-hover:scale-125 transition-all duration-200" />
                        <span>{link.name}</span>
                        <FaArrowRight className="ml-1.5 text-[9px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#BBCCD7]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pt-4 text-xs text-[#D7E2EA]/40">
                <span>Feel free to explore my latest analytics dashboards and full-stack projects.</span>
              </div>
            </FadeIn>

            {/* Column 3: Contact & Connect */}
            <FadeIn delay={0.3} y={20} className="space-y-6">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-white/90 pb-2 border-b border-[#D7E2EA]/10">
                Get In Touch
              </h3>

              <div className="space-y-3.5 text-sm">
                {/* Email */}
                <a
                  href="mailto:rathnirakar655@gmail.com"
                  className="flex items-center gap-3.5 text-[#D7E2EA]/75 hover:text-white group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded-lg p-1 -m-1"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 flex items-center justify-center text-xs text-[#BBCCD7] group-hover:border-[#D7E2EA]/30 group-hover:bg-[#D7E2EA]/10 transition-colors shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/45 font-semibold">Email</span>
                    <span className="truncate font-medium text-xs sm:text-sm">rathnirakar655@gmail.com</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+916372743454"
                  className="flex items-center gap-3.5 text-[#D7E2EA]/75 hover:text-white group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded-lg p-1 -m-1"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 flex items-center justify-center text-xs text-[#BBCCD7] group-hover:border-[#D7E2EA]/30 group-hover:bg-[#D7E2EA]/10 transition-colors shrink-0">
                    <FaPhone />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/45 font-semibold">Phone</span>
                    <span className="font-medium text-xs sm:text-sm">+91 63727 43454</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 text-[#D7E2EA]/75 p-1 -m-1">
                  <div className="w-9 h-9 rounded-xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 flex items-center justify-center text-xs text-[#BBCCD7] shrink-0">
                    <FaLocationDot />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/45 font-semibold">Location</span>
                    <span className="font-medium text-xs sm:text-sm">Bhubaneswar, Odisha, India</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-2">
                <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/45 font-semibold mb-3">
                  Connect On Socials
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        title={social.name}
                        className={`w-10 h-10 rounded-xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 flex items-center justify-center text-[#D7E2EA]/70 text-sm transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] ${social.hoverColor}`}
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50">
            <p className="text-center sm:text-left">
              &copy; {currentYear} Nirakar Rath. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <span className="hidden md:inline-block text-[#D7E2EA]/40">
                Designed with precision &amp; modern code
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/15 text-[#D7E2EA]/70 hover:text-white border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/25 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7]"
              >
                <span>Back to top</span>
                <FaArrowUp className="text-[10px] transition-transform duration-200 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating "Back to Top" Button (appears smoothly after scrolling down) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="back-to-top"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-22 right-6 z-40 w-11 h-11 rounded-full bg-[#141414]/90 backdrop-blur-md border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:border-[#D7E2EA]/50 shadow-2xl flex items-center justify-center transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7]"
            title="Back to top"
          >
            <FaArrowUp className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
