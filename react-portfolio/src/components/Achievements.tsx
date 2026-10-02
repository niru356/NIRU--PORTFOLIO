import React from 'react';
import FadeIn from './UI/FadeIn';

interface Achievement {
  title: string;
  desc: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'Top 1% Data Analyst Hackathon 2023',
    desc: 'Won first place among 200 participants for an innovative data-driven business intelligence solution.',
  },
  {
    title: 'Published Research on ML Optimization',
    desc: 'Co-authored a paper on machine learning pipeline optimization presented at the International AI Conference 2024.',
  },
  {
    title: 'Speaker at Data Summit 2025',
    desc: 'Delivered a talk on scaling analytical pipelines and automated dashboard updates to a global tech audience.',
  },
  {
    title: 'JPD Hub Hackathon | Advitiya’26',
    desc: 'Selected among the Top 10 teams in JPD Hub Hackathon | Advitiya’26 by developing an innovative AI/ML-driven solution to address a real-world problem. This achievement demonstrates strong skills in machine learning, problem-solving, data analysis, and teamwork.',
  },
  {
    title: 'Convolve 4.0 - A Pan-IIT AI/ML Hackathon : Top 10 teams in IIT AI/ML Hackathon',
    desc: 'Selected among the Top 10 teams in Convolve 4.0, a prestigious Pan-IIT AI/ML Hackathon, by developing an innovative AI/ML-driven solution to address a real-world problem. This achievement demonstrates strong skills in machine learning, problem-solving, data analysis, and teamwork.',
  },
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn delay={0.1} y={30} className="mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Milestones
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            Achievements
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={0.1 + index * 0.1}
              y={30}
              className="flex"
            >
              <div className="card-gradient rounded-[32px] p-8 flex flex-col justify-between items-start transition-all duration-300 hover:border-[#D7E2EA]/20 hover:translate-y-[-4px] group">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#BBCCD7] uppercase tracking-widest mb-6">
                    Milestone 0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#D7E2EA] mb-4 group-hover:text-gradient">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#D7E2EA]/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
