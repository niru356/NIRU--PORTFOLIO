import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.4"]
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, index) => {
        // Distribute the opacity transition across the words based on scroll progress
        const start = index / words.length;
        const end = (index + 1.5) / words.length;
        // Map scrollYProgress directly to opacity
        const opacity = useTransform(scrollYProgress, [Math.min(start, 0.99), Math.min(end, 1.0)], [0.15, 1]);

        return (
          <motion.span
            key={index}
            style={{ opacity }}
            className="inline-block mr-[0.25em] mb-[0.1em]"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
