import React from 'react';
import FadeIn from './UI/FadeIn';

export const WhyHireMe: React.FC = () => {
  const points = [
    {
      icon: 'fa-solid fa-brain',
      title: 'Analytical Problem Solving',
      desc: 'I help businesses identify revenue leaks, optimize performance, and improve decision-making using data-driven insights. For example, identifying sales drop-offs, customer churn patterns, and KPI gaps using SQL + Power BI dashboards.',
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Full-Stack Data Strengths',
      desc: 'From writing complex ETL pipelines connecting multiple APIs with Python, all the way to optimizing front-end Dashboard queries in Power BI, I own the entire data lifecycle.',
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Efficiency & Optimization',
      desc: 'I thrive on turning 10-hour manual reporting tasks into automated, refreshing workflows. My code and dashboards are heavily optimized for performance and immediate availability.',
    },
  ];

  return (
    <section id="why-hire" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn delay={0.1} y={30} className="mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Core Value
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            Why Hire Me
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <FadeIn 
              key={point.title} 
              delay={0.1 + index * 0.1} 
              y={40} 
              className="flex"
            >
              <div className="card-gradient rounded-[32px] p-8 flex flex-col items-start transition-all duration-300 hover:border-[#D7E2EA]/20 hover:translate-y-[-4px] group">
                <div className="w-12 h-12 rounded-2xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 flex items-center justify-center mb-6 text-xl text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-all">
                  <i className={point.icon} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#D7E2EA] mb-4">
                  {point.title}
                </h3>
                <p className="text-sm md:text-base text-[#D7E2EA]/60 leading-relaxed group-hover:text-[#D7E2EA]/80 transition-colors">
                  {point.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
