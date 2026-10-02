import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Skills from '../components/Skills';
import WhyHireMe from '../components/WhyHireMe';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import GithubActivity from '../components/GithubActivity';
import Timeline from '../components/Timeline';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import ResumePreview from '../components/ResumePreview';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ParticleBackground from '../components/UI/ParticleBackground';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'Nirakar Rath | Data & BI Professional';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased overflow-x-hidden selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
      {/* Premium Particle Canvas & Glowing Ambient Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <ParticleBackground />
        
        {/* Large slow-pulsing background gradient highlights */}
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#c4874b]/3 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[50%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#BBCCD7]/3 blur-[150px] animate-pulse" style={{ animationDuration: '15s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[#c4874b]/3 blur-[130px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Main Structural Layout */}
      <Header />
      
      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <WhyHireMe />
        <Experiences />
        <Projects />
        <GithubActivity />
        <Timeline />
        <Certifications />
        <Achievements />
        <ResumePreview />
        <ContactForm />
      </main>

      <Footer />

      {/* Floating Sticky CTA Bubble */}
      <motion.a 
        href="#contact" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 px-6 py-3.5 bg-gradient-to-r from-[#646973] to-[#BBCCD7] hover:from-[#50545c] hover:to-[#a7b9c6] text-[#0C0C0C] font-semibold text-xs tracking-wider uppercase rounded-full shadow-2xl flex items-center gap-2 border border-[#D7E2EA]/20 transition-all duration-300 pointer-events-auto"
      >
        Hire Me <i className="fa-solid fa-comment-dots" />
      </motion.a>
    </div>
  );
}
