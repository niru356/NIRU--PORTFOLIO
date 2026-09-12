import React from 'react';
import RadarChart from './UI/RadarChart';
import FadeIn from './UI/FadeIn';
import { motion } from 'framer-motion';
import analyticIcon from '../assets/certificates/analytic.png';
import efficiencyIcon from '../assets/certificates/efficiency.png';
import fullstackIcon from '../assets/certificates/fullstack.png';
export const Skills: React.FC = () => {
  const competencies = [
    {
      num: '01',
      title: 'Programming & Databases',
      desc: 'Writing clean, efficient code in Python, SQL, C, and JavaScript. Query optimization and ETL scripting for databases.',
    },
    {
      num: '02',
      title: 'Data Analytics & Processing',
      desc: 'Expertise in data cleaning, preprocessing, and statistical modeling using Python to reveal trends and guarantee integrity.',
    },
    {
      num: '03',
      title: 'Analytical Problem Solving',
      desc: 'Applied advanced analytical techniques to solve complex business problems, delivering actionable insights.',
      icon: analyticIcon,
    },
    {
      num: '04',
      title: 'Data Science / ML',
      desc: 'Applying Python packages like Pandas, NumPy, Matplotlib, and Scikit-learn for Exploratory Data Analysis (EDA).',
    },
    {
      num: '05',
      title: 'Business Intelligence',
      desc: 'Creating visual dashboards and compelling business stories using Power BI and Tableau to deliver actionable KPIs.',
    },
    {
      num: '06',
      title: 'Full-Stack Data Strengths',
      desc: 'Building responsive, user-centric web applications and embedding interactive analytics dashboards.',
      icon: fullstackIcon,
    },
    {
      num: '07',
      title: 'Efficiency & Optimization',
      desc: 'Automating manual Excel workflows to cut down report generation times from hours to minutes.',
      icon: efficiencyIcon,
    },
  ];



  const skillContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: [0.25, 0.1, 0.25, 1] as const, duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-32 bg-[#0C0C0C] border-b border-[#D7E2EA]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn delay={0.1} y={30} className="mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Expertise
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            Skills & Competencies
          </h2>
        </FadeIn>

        {/* Competencies List */}
        <motion.div
          variants={skillContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 mb-24"
        >
          {competencies.map((comp) => (
            <motion.div
              key={comp.num}
              variants={skillItemVariants}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 hover:bg-[#D7E2EA]/5 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                  <span className="text-3xl md:text-4xl font-black font-heading text-[#D7E2EA]/20 group-hover:text-[#D7E2EA]/60 transition-colors">
                    {comp.num}
                  </span>
                  {comp.icon && (
                    <img src={comp.icon} alt={comp.title + ' icon'} className="w-6 h-6" />
                  )}
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#D7E2EA]">
                    {comp.title}
                  </h3>
                </div>


              <p className="text-sm md:text-base text-[#D7E2EA]/60 max-w-xl md:text-right group-hover:text-[#D7E2EA]/85 transition-colors">
                {comp.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Radar Charts Grid */}
        <FadeIn delay={0.3} y={40} className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 rounded-[32px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/3">
            <RadarChart
              title="Programming & Databases"
              labels={['Python', 'SQL', 'Pandas', 'ETL', 'JS']}
              values={[88, 86, 84, 76, 72]}
            />
            <RadarChart
              title="Business Intelligence & Viz"
              labels={['Power BI', 'Excel', 'Tableau', 'KPIs', 'Story']}
              values={[90, 86, 74, 82, 80]}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
