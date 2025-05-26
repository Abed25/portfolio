import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction: 'left' | 'right';
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({ 
  children, 
  direction, 
  delay = 0,
  className = ''
}: AnimatedSectionProps) => {
  const variants = {
    hidden: {
      x: direction === 'left' ? -100 : 100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 