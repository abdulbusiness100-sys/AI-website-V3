import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface HowItWorksAnimationProps {
  steps: Step[];
}

const HowItWorksAnimation = ({ steps }: HowItWorksAnimationProps) => {
  const isMobile = useIsMobile();

  const arrowVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { 
      opacity: 1, 
      width: "100%",
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const circleVariants = {
    hidden: { 
      scale: 0.5,
      opacity: 0,
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.5
      }
    }
  };

  return (
    <div className="w-full py-8">
      {isMobile ? (
        // Mobile version - vertical layout
        (<div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                variants={circleVariants}
                className="w-16 h-16 bg-[#C3B091] rounded-full flex items-center justify-center text-white text-xl font-semibold mx-auto"
              >
                <i className={`fas fa-${step.icon}`}></i>
              </motion.div>
              
              <motion.div
                variants={contentVariants}
                className="text-center mt-4"
              >
                <h3 className="text-xl font-semibold mb-2">{`${step.step}. ${step.title}`}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="h-12 w-0.5 bg-[#C3B091] mx-auto my-4"
                  initial={{ height: 0 }}
                  whileInView={{ height: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              )}
            </motion.div>
          ))}
        </div>)
      ) : (
        // Desktop version - horizontal layout
        (<div className="relative flex items-center justify-between">
          {/* Steps */}
          <div className="flex justify-between items-start relative w-full">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex-1 text-center relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  variants={circleVariants}
                  className="w-20 h-20 bg-[#C3B091] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4"
                >
                  <i className={`fas fa-${step.icon}`}></i>
                </motion.div>
                
                <motion.div
                  variants={contentVariants}
                >
                  <h3 className="text-xl font-semibold mb-2">{`${step.step}. ${step.title}`}</h3>
                  <p className="max-w-xs mx-auto text-[#c3b091]">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
            
            {/* Connecting Lines */}
            <div className="absolute top-10 left-0 w-full h-0.5 flex items-center justify-center">
              {steps.map((_, index) => (
                index < steps.length - 1 && (
                  <motion.div
                    key={index}
                    className="h-0.5 bg-[#C3B091] absolute"
                    style={{ 
                      left: `${(index + 0.5) / steps.length * 100}%`, 
                      width: `${1 / steps.length * 100}%` 
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={arrowVariants}
                  />
                )
              ))}
            </div>
          </div>
        </div>)
      )}
    </div>
  );
};

export default HowItWorksAnimation;