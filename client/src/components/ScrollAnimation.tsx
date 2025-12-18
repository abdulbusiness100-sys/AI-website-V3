import React from 'react';
import { motion } from 'framer-motion';

type AnimationVariant = 'fadeIn' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoomIn' | 'zoomOut' | 'flip';

type ScrollAnimationProps = {
  children: React.ReactNode;
  variant: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number; // Amount of element that needs to be visible before animation triggers (0-1)
  once?: boolean; // Only animate once when scrolled into view
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  variant,
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  once = true
}) => {
  // Dynamically set the initial and whileInView props based on the variant
  let initialProps = {};
  let animateProps = {};
  
  switch (variant) {
    case 'fadeIn':
      initialProps = { opacity: 0 };
      animateProps = { opacity: 1 };
      break;
    case 'fadeUp':
      initialProps = { opacity: 0, y: 50 };
      animateProps = { opacity: 1, y: 0 };
      break;
    case 'fadeDown':
      initialProps = { opacity: 0, y: -50 };
      animateProps = { opacity: 1, y: 0 };
      break;
    case 'fadeLeft':
      initialProps = { opacity: 0, x: -50 };
      animateProps = { opacity: 1, x: 0 };
      break;
    case 'fadeRight':
      initialProps = { opacity: 0, x: 50 };
      animateProps = { opacity: 1, x: 0 };
      break;
    case 'zoomIn':
      initialProps = { opacity: 0, scale: 0.8 };
      animateProps = { opacity: 1, scale: 1 };
      break;
    case 'zoomOut':
      initialProps = { opacity: 0, scale: 1.2 };
      animateProps = { opacity: 1, scale: 1 };
      break;
    case 'flip':
      initialProps = { opacity: 0, rotateY: 90 };
      animateProps = { opacity: 1, rotateY: 0 };
      break;
    default:
      initialProps = { opacity: 0 };
      animateProps = { opacity: 1 };
  }

  return (
    <motion.div
      className={className}
      initial={initialProps}
      whileInView={animateProps}
      viewport={{ once, amount: threshold, margin: "0px 0px -100px 0px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;