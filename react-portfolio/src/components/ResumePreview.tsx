import React from 'react';
import FadeIn from './UI/FadeIn';
import MagneticButton from './UI/MagneticButton';

export const ResumePreview: React.FC = () => {
  return (
    <section id="resume-preview" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0.1} y={30} className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            CV / Resume
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            Resume Preview
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={40} className="flex flex-col items-center">
          <div className="w-full aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden border-2 border-[#D7E2EA]/15 bg-[#0C0C0C] relative shadow-2xl mb-8">
            <iframe 
              src="/NIRAKAR RESUME.pdf" 
              className="w-full h-full border-none"
              title="Nirakar Rath Resume PDF"
            >
              <div className="p-8 text-[#D7E2EA]/70">
                <p className="mb-4">Your browser doesn't support embedding PDF files.</p>
                <a href="/NIRAKAR RESUME.pdf" target="_blank" className="underline">Download PDF</a>
              </div>
            </iframe>
          </div>

          <MagneticButton 
            href="/NIRAKAR RESUME.pdf"
            target="_blank"
            id="preview-resume-download"
            className="px-8 py-4 bg-gradient-to-r from-[#646973] to-[#BBCCD7] text-[#0C0C0C] font-semibold text-xs tracking-widest uppercase rounded-full transition-all duration-300"
          >
            Download Resume <i className="fa-solid fa-download ml-2" />
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
};

export default ResumePreview;
