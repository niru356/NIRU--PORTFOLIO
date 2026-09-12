import React from 'react';
import FadeIn from './UI/FadeIn';

export const GithubActivity: React.FC = () => {
  return (
    <section id="github-activity" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn delay={0.1} y={30} className="mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Open Source
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            GitHub Activity
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <FadeIn delay={0.2} y={30} className="flex">
            <a 
              href="https://github.com/niru356" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center p-6 md:p-8 rounded-[32px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 hover:border-[#D7E2EA]/20 transition-all duration-300 group"
            >
              <img 
                id="githubStatsImg" 
                src="/github.png" 
                loading="lazy" 
                alt="GitHub Stats" 
                className="w-full max-w-[480px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
          </FadeIn>
          
          <FadeIn delay={0.3} y={30} className="flex">
            <a 
              href="https://github.com/niru356" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center p-6 md:p-8 rounded-[32px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 hover:border-[#D7E2EA]/20 transition-all duration-300 group"
            >
              <img 
                id="githubContribImg" 
                src="/contribution.png" 
                loading="lazy" 
                alt="GitHub Contributions" 
                className="w-full max-w-[480px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
