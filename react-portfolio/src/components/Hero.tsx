import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import MagneticButton from './UI/MagneticButton';
import FadeIn from './UI/FadeIn';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "I turn complex datasets into clear dashboards, practical KPIs, and insight-led decisions.";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(textToType.slice(0, index + 1));
      index++;
      if (index >= textToType.length) {
        clearInterval(interval);
      }
    }, 38);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax motion for the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 30; // 30px max offset
      const y = (e.clientY - innerHeight / 2) / 30;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#0C0C0C]">
      {/* Background radial gradients for glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-[#c4874b]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-[#BBCCD7]/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <FadeIn delay={0.1} y={30}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-4 block">
              Data Analyst & BI Professional
            </span>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <h1 className="hero-heading text-[clamp(2.2rem,5.5vw,5.5rem)] font-black tracking-tight leading-none uppercase mb-6">
              Driving 40% Faster<br />
              Business Decisions<br />
              With Data
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={30}>
            <div className="min-h-[50px] mb-8 text-[#D7E2EA]/80 text-lg font-light max-w-xl">
              <span className="font-normal text-[#D7E2EA]">{typedText}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-0.5 h-5 bg-[#D7E2EA] ml-1 align-middle"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={35}>
            <ul className="space-y-4 mb-10 max-w-xl text-sm md:text-base text-[#D7E2EA]/75">
              <li className="flex items-start">
                <i className="fa-solid fa-circle-check text-[#BBCCD7] mt-1 mr-3 flex-shrink-0" />
                <span>Reduced manual Excel reporting time from 5 hours to 2 hours using automated Power BI dashboards (40% faster).</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle-check text-[#BBCCD7] mt-1 mr-3 flex-shrink-0" />
                <span>Analyzed 12,500+ transaction records to identify regional sales trends and seasonal demand patterns.</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle-check text-[#BBCCD7] mt-1 mr-3 flex-shrink-0" />
                <span>Built 5+ interactive dashboards for actionable business insights.</span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.5} y={35}>
            <div className="flex flex-wrap gap-4 items-center">
              <MagneticButton 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-[#646973] to-[#BBCCD7] hover:from-[#50545c] hover:to-[#a7b9c6] text-[#0C0C0C] font-semibold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
              >
                Let's Talk <i className="fa-solid fa-arrow-right ml-2" />
              </MagneticButton>

              <MagneticButton 
                href="/NIRAKAR RESUME.pdf" 
                target="_blank"
                id="hero-resume-download"
                className="px-8 py-4 border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 text-[#D7E2EA] font-semibold text-xs tracking-widest uppercase rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Download CV <i className="fa-solid fa-download ml-2" />
              </MagneticButton>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <FadeIn delay={0.3} y={40} className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
            <motion.div 
              style={{ x: springX, y: springY }}
              className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border-2 border-[#D7E2EA]/15 shadow-2xl group cursor-pointer"
            >
              {/* Outer glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent opacity-40 z-10" />
              <div className="absolute inset-0 border-[8px] border-[#0C0C0C] rounded-[38px] z-20" />
              
              <motion.img 
                src="/photo.jpg" 
                alt="Nirakar Rath" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-24">
        <FadeIn delay={0.6} y={30}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-gradient rounded-[24px] p-8 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-[#D7E2EA]/25 group">
              <span className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold text-gradient leading-none mb-2 font-heading">
                5+
              </span>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold group-hover:text-[#D7E2EA]/80 transition-colors">
                Dashboards Built
              </span>
            </div>
            
            <div className="card-gradient rounded-[24px] p-8 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-[#D7E2EA]/25 group">
              <span className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold text-gradient leading-none mb-2 font-heading">
                12,500+
              </span>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold group-hover:text-[#D7E2EA]/80 transition-colors">
                Records Analyzed
              </span>
            </div>
            
            <div className="card-gradient rounded-[24px] p-8 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-[#D7E2EA]/25 group">
              <span className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold text-gradient leading-none mb-2 font-heading">
                40%
              </span>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold group-hover:text-[#D7E2EA]/80 transition-colors">
                Time Reduction
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
