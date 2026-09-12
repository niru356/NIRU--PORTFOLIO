import React from 'react';
import FadeIn from './UI/FadeIn';

interface Experience {
  title: string;
  company: string;
  image?: string;
  duration?: string;
}

const expData: Experience[] = [
  {
    title: 'Labmentix Internship',
    company: 'Labmentix',
    image: '/labmentix.png',
    duration: '5th July – 5th September',
  }
];

export const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn delay={0.1} y={30} className="mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Professional
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            Experiences
          </h2>
        </FadeIn>

        {/* Timeline Path */}
        <div className="relative border-l border-[#D7E2EA]/10 pl-8 ml-4 md:ml-6 space-y-12">
          {expData.map((exp, index) => (
            <div key={exp.title} className="relative">
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[41px] top-6 w-6 h-6 rounded-full bg-[#0C0C0C] border-2 border-[#BBCCD7] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BBCCD7]" />
              </span>

              <FadeIn delay={0.1 + index * 0.1} y={30} className="flex">
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 rounded-2xl md:rounded-[32px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 hover:bg-[#D7E2EA]/5 hover:border-[#D7E2EA]/20 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#D7E2EA]/5 flex items-center justify-center overflow-hidden text-2xl text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors shrink-0">
                    {exp.image ? (
                      <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    ) : (
                      <i className="fa-solid fa-briefcase" />
                    )}
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#D7E2EA] group-hover:text-[#D7E2EA]/90 transition-colors mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#D7E2EA]/50 italic">
                      {exp.duration}
                    </p>
                                      <p className="text-sm font-medium text-[#D7E2EA]/60 italic">
                    {exp.company}
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#D7E2EA]/70 mt-2 space-y-1">
                    <li>🧹 Data Cleaning &amp; Preprocessing</li>
                    <li>🔍 Exploratory Data Analysis (EDA)</li>
                    <li>🐍 Data Analysis using Python, Pandas &amp; NumPy</li>
                    <li>🗄️ Data querying and analysis using SQL</li>
                    <li>📊 Data Visualization using Matplotlib &amp; Seaborn</li>
                    <li>📈 Creating dashboards and analytical reports</li>
                    <li>💡 Identifying trends, patterns, and business insights</li>
                    <li>📋 Working with real-world datasets</li>
                    <li>🎯 Converting raw data into meaningful insights</li>
                    <li>🤝 Improving problem-solving and analytical skills</li>
                  </ul>
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

export default Experiences;
