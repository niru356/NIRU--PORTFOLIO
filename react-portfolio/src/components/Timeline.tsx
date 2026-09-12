import React from 'react';
import FadeIn from './UI/FadeIn';

interface TimelineItem {
  year: string;
  institution: string;
  degree: string;
  desc: string;
  tags?: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2025 - 2027',
    institution: 'KIIT University',
    degree: 'Master of Computer Applications (MCA)',
    desc: 'Pursuing MCA with a focus on Full Stack Development, Data Structures & Algorithms, Database Management Systems, and Software Engineering.',
    tags: ['Java', 'Python', 'DBMS', 'Web Development'],
  },
  {
    year: '2021 - 2024',
    institution: 'Arya School Of Management',
    degree: "Bachelor's Degree",
    desc: 'Completed undergraduate studies with a strong foundation in computer applications, programming, and analytical problem-solving.',
    tags: ['C Programming', 'Computer Fundamentals', 'Database Systems'],
  },
  {
    year: '2019 - 2021',
    institution: 'Ghanshyam Hemlata Vidhya Mandir',
    degree: 'Higher Secondary',
    desc: 'Completed Higher Secondary studies in the Science Stream with a strong foundation in computer applications and programming.',
  },
  {
    year: '2015 - 2018',
    institution: "St. Mary's School",
    degree: 'Secondary School',
    desc: 'Completed Secondary School studies with a strong foundation in computer applications, programming, and mathematics.',
  },
];

export const Timeline: React.FC = () => {
  return (
    <section id="education" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn delay={0.1} y={30} className="mb-20 text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Journey
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            Education
          </h2>
        </FadeIn>

        {/* Timeline Path */}
        <div className="relative border-l border-[#D7E2EA]/10 pl-8 ml-4 md:ml-6 space-y-12">
          {timelineData.map((item, index) => (
            <div key={item.institution} className="relative">
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#0C0C0C] border-2 border-[#BBCCD7] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BBCCD7]" />
              </span>

              <FadeIn delay={0.1 + index * 0.1} y={30} className="flex flex-col items-start text-left">
                <span className="text-xs font-semibold text-[#BBGRID]/60 text-[#BBCCD7] tracking-widest uppercase mb-1">
                  {item.year}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#D7E2EA]">
                  {item.institution}
                </h3>
                
                <span className="text-sm font-medium text-[#D7E2EA]/60 mb-3 italic">
                  {item.degree}
                </span>

                <p className="text-sm md:text-base text-[#D7E2EA]/70 mb-4 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 text-[10px] md:text-xs text-[#D7E2EA]/60 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
