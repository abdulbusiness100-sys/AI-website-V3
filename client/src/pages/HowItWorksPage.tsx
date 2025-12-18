import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EarlyUserSignupModal from "@/components/EarlyUserSignupModal";
import heroImage from "@assets/download_(2)_1765824866615.png";
import buildingWatermark from "@assets/download_(13)_1765838956170.png";
import cityNightSkyline from "@assets/download_(13)_1765838804900.png";

const appWorkflowSteps = [
  {
    step: 1,
    title: "Open the App",
    description: "Launch SPIDXR on your smartphone and browse our AI-curated service catalog tailored to your location and preferences.",
    icon: "fa-mobile-alt",
    aiFeature: "Location-aware service suggestions"
  },
  {
    step: 2,
    title: "Describe Your Need",
    description: "Simply tell us what you need in natural language. Our AI understands complex requests and breaks them into actionable tasks.",
    icon: "fa-comment-dots",
    aiFeature: "Natural language processing"
  },
  {
    step: 3,
    title: "AI Task Matching",
    description: "Our intelligent system matches your request with the best-suited concierge agents based on skills, availability, and location.",
    icon: "fa-robot",
    aiFeature: "Smart vendor allocation"
  },
  {
    step: 4,
    title: "Real-Time Tracking",
    description: "Monitor your service in real-time with live updates, estimated completion times, and direct communication with your concierge.",
    icon: "fa-map-marker-alt",
    aiFeature: "Predictive ETA calculation"
  },
  {
    step: 5,
    title: "Task Completion",
    description: "Receive photo confirmation and detailed reports when your task is complete. Rate your experience to help our AI improve.",
    icon: "fa-check-circle",
    aiFeature: "Quality assurance verification"
  },
  {
    step: 6,
    title: "AI Learning",
    description: "Every interaction teaches our system your preferences, making future requests faster and more personalized.",
    icon: "fa-brain",
    aiFeature: "Continuous improvement loop"
  }
];

const aiCapabilities = [
  {
    title: "Predictive Routine Learning",
    description: "AI learns your patterns and anticipates needs before you even ask. It can schedule regular services automatically.",
    icon: "fa-clock"
  },
  {
    title: "LLM-Powered Service Matching",
    description: "Natural language understanding translates requests into optimal service routing. Just describe what you need.",
    icon: "fa-language"
  },
  {
    title: "Dynamic Vendor Allocation",
    description: "Smart routing to best-fit providers based on availability, ratings, specialization, and proximity.",
    icon: "fa-route"
  },
  {
    title: "Priority & Pricing Engine",
    description: "Optimizes cost and speed dynamically based on urgency and your preferences. Always transparent pricing.",
    icon: "fa-balance-scale"
  },
  {
    title: "Multi-Task Orchestration",
    description: "Handle complex requests involving multiple services and vendors, coordinated seamlessly by AI.",
    icon: "fa-project-diagram"
  },
  {
    title: "Proactive Notifications",
    description: "Get intelligent alerts about relevant services, deals, and reminders based on your lifestyle patterns.",
    icon: "fa-bell"
  }
];

const HowItWorksPage = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openSignupModal = () => setIsSignupModalOpen(true);

  return (
    <>
      <img 
        src={cityNightSkyline} 
        alt="" 
        className="fixed inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10">
        <Navbar onOpenSignup={openSignupModal} />
        
        <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 min-h-[60vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-4 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-[#C3B091]/50"
              >
                <span className="text-sm font-medium text-[#C3B091] tracking-wider">AI-POWERED CONCIERGE</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                How <span className="text-[#C3B091]">SPIDXR</span> Works
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Experience the future of urban living with our AI-powered platform that learns, adapts, and anticipates your needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#C3B091] to-[#A69B7B] hover:from-[#D4C4A8] hover:to-[#B8A88C] text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={openSignupModal}
                  data-testid="button-hero-signup"
                >
                  <i className="fas fa-gift mr-2"></i>
                  Get Early Access - 50% Off Forever
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section 
          className="py-16 relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 text-[#0c19d9]">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Your Journey with <span className="text-[#C3B091]">SPIDXR</span>
              </motion.h2>
              <motion.p 
                className="max-w-2xl mx-auto text-[#ffffff] font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                From request to completion in minutes, powered by intelligent automation
              </motion.p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#C3B091] via-[#C3B091]/50 to-[#C3B091]"></div>
              
              {appWorkflowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className={`bg-[#1A1A1A] p-6 rounded-2xl shadow-lg border border-[#C3B091]/20 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#C3B091] to-[#A69B7B] rounded-xl flex items-center justify-center text-white">
                          <i className={`fas ${step.icon} text-lg`}></i>
                        </div>
                        <div>
                          <span className="text-[#C3B091] text-sm font-medium">Step {step.step}</span>
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed mb-3">{step.description}</p>
                      <div className="inline-block px-3 py-1 bg-[#C3B091]/20 rounded-full">
                        <span className="text-[#C3B091] text-xs font-medium">
                          <i className="fas fa-robot mr-1"></i>
                          {step.aiFeature}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-br from-[#C3B091] to-[#A69B7B] items-center justify-center text-white font-bold z-10 shadow-lg">
                    {step.step}
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The AI Magic Behind It All */}
        <section className="py-16 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The <span className="text-[#C3B091]">AI Magic</span> Behind It All
              </motion.h2>
              <motion.p 
                className="text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our intelligent infrastructure combines cutting-edge AI with human expertise to deliver unparalleled service quality
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="group bg-[#0F1F36]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#1E3A5F] hover:border-[#C3B091]/50 hover:shadow-xl hover:shadow-[#C3B091]/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C3B091] to-[#A69B7B] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${capability.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#C3B091] group-hover:text-white transition-colors">{capability.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neural Network Section - Hyperrealistic Brain with Multicolored Neural Nodes */}
        <section className="py-16 bg-background/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The <span className="text-[#C3B091]">Neural Network</span> of Community Living
              </motion.h2>
              <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                SPIDXR connects people, spaces, and services through one autonomous system
              </motion.p>
            </div>

            <motion.div 
              className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#C3B091] to-[#A69B7B] rounded-2xl flex items-center justify-center text-white mb-4">
                    <i className="fas fa-brain text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Core</h3>
                  <p className="text-white/70 text-sm">LLM decision routing engine with behavior modeling that learns from every interaction</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#C3B091] to-[#A69B7B] rounded-2xl flex items-center justify-center text-white mb-4">
                    <i className="fas fa-plug text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Service API Layer</h3>
                  <p className="text-white/70 text-sm">Integrates local vendors, cleaners, deliveries, and bookings into one unified platform</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#C3B091] to-[#A69B7B] rounded-2xl flex items-center justify-center text-white mb-4">
                    <i className="fas fa-headset text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Concierge Console</h3>
                  <p className="text-white/70 text-sm">Real-time human-assisted execution panel for quality assurance on every task</p>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10">
                <p className="text-[#C3B091] font-medium mb-2">The Execution Workflow</p>
                <div className="flex flex-wrap justify-center items-center gap-2 text-white/70 text-sm">
                  <span className="bg-[#C3B091]/20 px-3 py-1 rounded-full">AI Detection & Routing</span>
                  <i className="fas fa-arrow-right text-[#C3B091]"></i>
                  <span className="bg-[#C3B091]/20 px-3 py-1 rounded-full">Concierge Verification</span>
                  <i className="fas fa-arrow-right text-[#C3B091]"></i>
                  <span className="bg-[#C3B091]/20 px-3 py-1 rounded-full">Task Execution</span>
                  <i className="fas fa-arrow-right text-[#C3B091]"></i>
                  <span className="bg-[#C3B091]/20 px-3 py-1 rounded-full">User Feedback</span>
                  <i className="fas fa-arrow-right text-[#C3B091]"></i>
                  <span className="bg-[#C3B091]/20 px-3 py-1 rounded-full">AI Learning Loop</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-gradient-to-r from-[#C3B091] to-[#A69B7B]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Be Part of the AI Revolution in Urban Living
              </motion.h2>
              <motion.p 
                className="text-white/90 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Join as an early user and receive 50% off all services for life. Experience the future of convenience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Button 
                  size="lg"
                  className="bg-white text-[#C3B091] hover:bg-gray-100 transition-all duration-300 rounded-full px-8 shadow-lg hover:shadow-xl"
                  onClick={openSignupModal}
                  data-testid="button-bottom-signup"
                >
                  <i className="fas fa-gift mr-2"></i>
                  Claim Your 50% Lifetime Discount
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        
        <EarlyUserSignupModal 
          isOpen={isSignupModalOpen} 
          onClose={() => setIsSignupModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default HowItWorksPage;
