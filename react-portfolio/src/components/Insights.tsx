import React from 'react';
import FadeIn from './UI/FadeIn';
import MagneticButton from './UI/MagneticButton';

export const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0.1} y={30} className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Articles & Publications
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            Latest Insights
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={40} className="flex flex-col items-center">
          <div className="card-gradient rounded-[32px] p-8 md:p-12 w-full flex flex-col items-center group cursor-pointer transition-all duration-300 hover:border-[#D7E2EA]/20">
            <div className="w-12 h-12 rounded-2xl bg-[#D7E2EA]/5 flex items-center justify-center text-lg text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors mb-6">
              <i className="fa-solid fa-pen-nib" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#D7E2EA] mb-4 group-hover:text-gradient">
              Data Storytelling & Best Practices
            </h3>
            
            <p className="text-sm md:text-base text-[#D7E2EA]/60 max-w-xl mb-8 leading-relaxed">
              I regularly write about data visualization techniques, modern ETL pipelines, and SQL optimization strategies.
            </p>

            <MagneticButton 
              href="https://medium.com/me/stories?tab=posts-published" 
              target="_blank"
              className="px-8 py-4 border border-[#D7E2EA]/25 hover:border-[#D7E2EA]/60 text-[#D7E2EA] font-semibold text-xs tracking-widest uppercase rounded-full transition-all duration-300"
            >
              Read My Articles on Medium <i className="fa-solid fa-external-link ml-2" />
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Insights;
