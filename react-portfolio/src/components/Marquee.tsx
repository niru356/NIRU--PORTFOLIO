import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Marquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the marquee container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate opposite scroll offsets for row 1 and row 2
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-180, 0]);

  const row1Skills = [
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'SQL', icon: 'fa-solid fa-database' },
    { name: 'Power BI', icon: 'fa-solid fa-chart-line' },
    { name: 'Excel', icon: 'fa-solid fa-file-excel' },
    { name: 'Pandas', icon: 'fa-brands fa-python' },
    { name: 'Tableau', icon: 'fa-solid fa-chart-bar' },
    { name: 'Git', icon: 'fa-brands fa-git-alt' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
  ];

  const row2Skills = [
    { name: 'NumPy', icon: 'fa-solid fa-calculator' },
    { name: 'Scikit-learn', icon: 'fa-solid fa-brain' },
    { name: 'HTML5', icon: 'fa-brands fa-html5' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js' },
    { name: 'Express', icon: 'fa-solid fa-server' },
    { name: 'Firebase', icon: 'fa-solid fa-fire' },
  ];

  // Helper to repeat items for seamless marquee view
  const renderRow = (skills: typeof row1Skills, multiplier = 6) => {
    const list = [];
    for (let i = 0; i < multiplier; i++) {
      list.push(...skills);
    }
    return list;
  };

  return (
    <section 
      ref={containerRef} 
      id="tech-stack" 
      className="py-24 bg-[#0C0C0C] overflow-hidden border-y border-[#D7E2EA]/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Tools & Technologies
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading">
            My Tech Stack
          </h2>
        </div>
        <p className="text-sm text-[#D7E2EA]/60 max-w-sm">
          A collection of languages, databases, and business intelligence tools I use to clean data and build dashboards.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative w-full">
        {/* Row 1 - Moves Left */}
        <div className="flex overflow-hidden w-full select-none">
          <motion.div 
            style={{ x: x1 }}
            className="flex whitespace-nowrap gap-6 w-max py-2"
          >
            {renderRow(row1Skills).map((skill, index) => (
              <motion.div 
                key={`r1-${index}`} 
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/20 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.07, boxShadow: '0 0 8px rgba(215,226,234,0.8)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className={`${skill.icon} text-lg text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors`} />
                <span className="text-[#D7E2EA] font-semibold text-sm tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex overflow-hidden w-full select-none">
          <motion.div 
            style={{ x: x2 }}
            className="flex whitespace-nowrap gap-6 w-max py-2"
          >
            {renderRow(row2Skills).map((skill, index) => (
              <motion.div 
                key={`r2-${index}`} 
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/20 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.07, boxShadow: '0 0 8px rgba(215,226,234,0.8)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className={`${skill.icon} text-lg text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors`} />
                <span className="text-[#D7E2EA] font-semibold text-sm tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Workflow text */}
      <div className="max-w-3xl mx-auto px-6 mt-16 text-center">
        <div className="inline-flex flex-wrap justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 text-xs md:text-sm text-[#D7E2EA]/85">
          <span className="font-semibold text-gradient">Daily workflow:</span>
          <span>SQL queries</span>
          <i className="fa-solid fa-arrow-right text-[#D7E2EA]/30 mx-1.5" />
          <span>Python (Pandas) Data cleaning</span>
          <i className="fa-solid fa-arrow-right text-[#D7E2EA]/30 mx-1.5" />
          <span>Power BI dashboards</span>
          <i className="fa-solid fa-arrow-right text-[#D7E2EA]/30 mx-1.5" />
          <span className="text-[#BBCCD7]">Business insights</span>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
