import React from 'react';
import AnimatedText from './UI/AnimatedText';
import MagneticButton from './UI/MagneticButton';
import FadeIn from './UI/FadeIn';

export const About: React.FC = () => {
  const aboutText = "I’m a Full-Stack Data Analyst and MCA professional passionate about transforming raw data into meaningful insights and building technology-driven solutions. I specialize in SQL, Python, Power BI, Excel, and data visualization, while leveraging React, JavaScript, Node.js, and modern web technologies to build interactive, data-driven applications and dashboards.";

  return (
    <section 
      id="about" 
      className="min-h-screen py-32 flex flex-col justify-center items-center bg-[#0C0C0C] relative border-b border-[#D7E2EA]/5"
    >
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <FadeIn delay={0.1} y={30} className="mb-6">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold">
            Who I Am
          </span>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="mb-12">
          <h2 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-none font-heading">
            About Me
          </h2>
        </FadeIn>

        {/* Scroll-based text reveal */}
        <AnimatedText 
          text={aboutText} 
          className="text-[#D7E2EA] font-light text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-wide text-center" 
        />

        <FadeIn delay={0.5} y={40} className="mt-16">
          <MagneticButton 
            href="#contact" 
            className="px-8 py-4 bg-[#D7E2EA] hover:bg-[#D7E2EA]/90 text-[#0C0C0C] font-semibold text-xs tracking-widest uppercase rounded-full transition-all duration-300"
          >
            Contact Me <i className="fa-solid fa-envelope ml-2" />
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
