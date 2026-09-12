import React from 'react';
import FadeIn from './UI/FadeIn';

interface Certification {
  title: string;
  issuer: string;
  icon: string;
  image?: string;
}

const certsData: Certification[] = [
  {
    title: 'Google Data Analytics',
    issuer: 'Coursera',
    icon: 'fa-solid fa-certificate',
  },
  {
    title: 'Power BI Data Analyst',
    issuer: 'Microsoft',
    icon: 'fa-brands fa-microsoft',
  },
  {
    title: 'Data Analytics Simulation',
    issuer: 'Deloitte Australia',
    icon: 'fa-solid fa-graduation-cap',
    image: '/deloitee.png',
  },
  {
    title: 'Tata Gen-AI Data Analysis Job Stimulation',
    issuer: 'Tata',
    icon: 'fa-solid fa-graduation-cap',
    image: '/tat.png',
  },
  {
    title: 'Ultimate Data Science Bootcamp',
    issuer: 'Code With Harry',
    icon: 'fa-solid fa-graduation-cap',
    image: '/harry.png',
  },
  {
    title: 'HackerRank CSS',
    issuer: 'HackerRank',
    icon: 'fa-solid fa-graduation-cap',
    image: '/hacker-rank-css.png',
  },
  {
    title: 'HackerRank SQL',
    issuer: 'HackerRank',
    icon: 'fa-solid fa-graduation-cap',
    image: '/hacker-rank-sql.png',
  },
  {
    title: 'HP Certification',
    issuer: 'HP',
    icon: 'fa-solid fa-graduation-cap',
    image: '/hp.png',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn delay={0.1} y={30} className="mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Credentials
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            Certifications
          </h2>
        </FadeIn>

        {/* Timeline Path */}
        <div className="relative border-l border-[#D7E2EA]/10 pl-8 ml-4 md:ml-6 space-y-12">
          {certsData.map((cert, index) => (
            <div key={cert.title} className="relative">
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[41px] top-6 w-6 h-6 rounded-full bg-[#0C0C0C] border-2 border-[#BBCCD7] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BBCCD7]" />
              </span>

              <FadeIn delay={0.1 + index * 0.1} y={30} className="flex">
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 rounded-2xl md:rounded-[32px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 hover:bg-[#D7E2EA]/5 hover:border-[#D7E2EA]/20 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#D7E2EA]/5 flex items-center justify-center overflow-hidden text-2xl text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors shrink-0">
                    {cert.image ? (
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                    ) : (
                      <i className={cert.icon} />
                    )}
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#D7E2EA] group-hover:text-[#D7E2EA]/90 transition-colors mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-[#D7E2EA]/60 italic">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
