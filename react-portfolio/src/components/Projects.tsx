import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './UI/FadeIn';

interface Project {
  num: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  link: string;
  image: string;
  linkLabel: string;
}

const projectsData: Project[] = [
  {
    num: '01',
    title: 'Gurgaon Real Estate Analysis',
    category: 'Data Analytics & Visualization',
    desc: 'Analyzed real estate market trends in Gurgaon, identifying key factors influencing property prices and investment opportunities. Utilized SQL for data extraction and Power BI for interactive visualization, enabling data-driven decision-making for stakeholders.',
    tech: ['Power BI', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Python', 'NumPy', 'Pandas', 'Matplotlib'],
    link: 'https://github.com/niru356/GURGAON-REAL-ESTATE-ANALYSIS',
    image: '/gurgaon-real-estate.jpg',
    linkLabel: 'Repository',
  },
  {
    num: '02',
    title: 'IPL Data Analysis',
    category: 'Data Science & EDA',
    desc: 'A comprehensive Python project processing and cleaning large datasets of IPL cricket matches. Uncovered hidden statistical trends, player performances, and winning probabilities using Exploratory Data Analysis (EDA).',
    tech: ['Python', 'Pandas', 'Seaborn'],
    link: 'https://github.com/niru356/IPL-DATA-ANALYSIS',
    image: '/ipl.png',
    linkLabel: 'Repository',
  },
  {
    num: '03',
    title: 'ResumeAI Pro',
    category: 'Web App & AI Integration',
    desc: 'Built an AI-powered resume and career intelligence platform that helps candidates analyze resumes, improve profile strength, and align applications with job opportunities using smart recommendations.',
    tech: ['AI', 'Resume Analysis', 'Career Intelligence', 'React'],
    link: '#projects',
    image: '/resume-ai-pro.jpg',
    linkLabel: 'View Project',
  },
  {
    num: '04',
    title: 'Hotel Management System',
    category: 'Full Stack Web App',
    desc: 'Developed a comprehensive hotel management system using HTML, CSS, and SQL. The system manages bookings, customer data, and room availability, streamlining operations and improving customer service efficiency.',
    tech: ['HTML', 'CSS', 'SQL', 'JavaScript', 'Node.js', 'Github', 'Firebase'],
    link: 'https://github.com/niru356/HOTEL-MANAGEMENT-SYSTEM',
    image: '/hotel-management.jpg',
    linkLabel: 'Repository',
  },
];

interface CardProps {
  project: Project;
  index: number;
  total: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the wrapper container to scale down the card as we scroll past it
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef} 
      className="h-[85vh] md:h-screen flex items-center justify-center sticky top-[10vh] md:top-[12vh]"
      style={{ zIndex: index }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-5xl rounded-[32px] md:rounded-[40px] border-2 border-[#D7E2EA]/15 bg-[#0C0C0C] p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12 items-center shadow-2xl relative"
      >
        {/* Content Section (Left) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left order-2 md:order-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-base font-bold font-heading text-[#D7E2EA]/40">
              {project.num}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/60 font-bold">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-xl md:text-3xl font-extrabold font-heading text-[#D7E2EA] tracking-tight mb-3">
            {project.title}
          </h3>
          
          <p className="text-xs md:text-sm text-[#D7E2EA]/70 mb-5 leading-relaxed">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span 
                key={t} 
                className="px-2.5 py-0.5 rounded-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 text-[10px] md:text-xs text-[#D7E2EA]/60 font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target={project.link.startsWith('http') ? '_blank' : '_self'}
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#D7E2EA] hover:text-[#D7E2EA]/75 transition-colors group"
          >
            {project.linkLabel}
            <i className={`fa-solid ${project.link.startsWith('http') ? 'fa-arrow-up-right-from-square' : 'fa-arrow-right'} transition-transform group-hover:translate-x-1`} />
          </a>
        </div>

        {/* Image Section (Right) */}
        <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-[20px] md:rounded-[28px] overflow-hidden border border-[#D7E2EA]/15 relative group order-1 md:order-2">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative bg-[#0C0C0C] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <FadeIn delay={0.1} y={30}>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 block">
            Portfolio
          </span>
          <h2 className="hero-heading text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none font-heading mb-12">
            Selected Work
          </h2>
        </FadeIn>

        {/* Stacked Cards Container */}
        <div className="relative flex flex-col items-center">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              total={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
