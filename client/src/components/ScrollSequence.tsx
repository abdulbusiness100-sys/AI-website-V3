import React from 'react';
import { motion } from 'framer-motion';

type ScrollSequenceProps = {
  children: React.ReactNode[];
  delay?: number; // Base delay before animation starts
  staggerDelay?: number; // Delay between each item
  className?: string;
  childClassName?: string; // Applied to each child container
  duration?: number;
  threshold?: number; // Amount of element that needs to be visible before animation triggers (0-1)
  once?: boolean; // Only animate once when scrolled into view
};

export const ScrollSequence: React.FC<ScrollSequenceProps> = ({
  children,
  delay = 0,
  staggerDelay = 0.2,
  className = '',
  childClassName = '',
  duration = 0.5,
  threshold = 0.1,
  once = true
}) => {
  // Define animation variants inside the component
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold, margin: "0px 0px -100px 0px" }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          className={childClassName}
          variants={itemVariants}
          key={index}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ScrollSequence;