import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";
import HowItWorksAnimation from "@/components/HowItWorksAnimation";
import ScrollAnimation from "@/components/ScrollAnimation";
import ScrollSequence from "@/components/ScrollSequence";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EarlyUserSignupModal from "@/components/EarlyUserSignupModal";

const competitiveEdges = [
  {
    title: 'First in the UK',
    description: "No personal assistant service available to the general public across the UK. We're pioneering this AI-powered market segment.",
    icon: 'fa-flag'
  },
  {
    title: 'AI-Powered Innovation',
    description: "LLM technology capable of natural language understanding and intelligent task routing at scale, learning from every interaction.",
    icon: 'fa-robot'
  },
  {
    title: 'Highly Scalable',
    description: "Our phased approach ensures sustainable expansion with clear pathways from exclusive service to widespread adoption.",
    icon: 'fa-chart-line'
  },
  {
    title: 'Community Integration',
    description: "Exclusive partnerships with apartment complexes build trust and loyalty, creating strong community foundations.",
    icon: 'fa-building'
  },
  {
    title: 'Market Demand',
    description: "High demand with zero supply in this specific segment. We're filling a critical gap in the urban services market.",
    icon: 'fa-bullseye'
  },
  {
    title: "UK's First SuperApp",
    description: "Our mission is to become the UK's first SuperApp, the neural network of community living in urban centers.",
    icon: 'fa-mobile-alt'
  }
];

const howItWorksSteps = [
  {
    step: 1,
    title: "Request Service",
    description: "Select a service through our app",
    icon: "mobile-alt"
  },
  {
    step: 2,
    title: "Get Matched",
    description: "Instantly paired with a concierge",
    icon: "user-check"
  },
  {
    step: 3,
    title: "Real-time Tracking",
    description: "Monitor progress live",
    icon: "map-marker-alt"
  },
  {
    step: 4,
    title: "Receive Service",
    description: "Enjoy prompt completion",
    icon: "check-circle"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const HomePage = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations for hero section
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  return (
    <>
      {/* Fixed Parallax Background - Grayscale City */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("/images/manchester-skyline22.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)'
        }}
      />
      <div className="relative z-10">
        <Navbar onOpenSignup={openSignupModal} />
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-20">
          {/* Content with scroll-based fade and parallax */}
          <motion.div 
            ref={heroRef}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
            style={{ 
              opacity: heroOpacity, 
              y: heroY,
              scale: heroScale
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="w-full md:w-3/4 lg:w-2/3 mx-auto text-white text-center">
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold leading-tight mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-[#C3B091]">SPIDXR</span>
                </motion.h1>
                
                <motion.h2
                  className="text-xl md:text-2xl mb-6 tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, letterSpacing: '0.02em' }}
                >
                  <span className="text-[#C3B091] italic">Simplify Life.</span> <span className="text-white font-bold">Amplify Time.</span>
                </motion.h2>
                
                <motion.p
                  className="text-base md:text-lg max-w-5xl mx-auto text-white/80 mt-4 mb-8 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >The pioneering AI-engineered intelligent concierge platform delivering instantaneous, sophisticated premium services for discerning professionals while continuously revolutionizing urban luxury through intelligent automation and uncompromising excellence.</motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#C3B091] to-[#A69B7B] hover:from-[#D4C4A8] hover:to-[#B8A88C] text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8"
                    onClick={openSignupModal}
                    data-testid="button-get-started"
                  >
                    <i className="fas fa-gift mr-2"></i>
                    Get Early Access
                  </Button>
                  
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="border-[#C3B091] text-[#C3B091] hover:bg-[#C3B091]/20 backdrop-blur-sm rounded-full px-8">
                      Explore Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-[#1A1A1A]/95 backdrop-blur-sm text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Services We <span className="text-[#C3B091]">Offer</span>
            </motion.h2>
            <motion.p 
              className="text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive solutions for busy individuals
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Service 1 */}
            <motion.div 
              className="group bg-[#262626] p-6 rounded-2xl shadow-md border border-[#333333] hover:border-[#C3B091]/50 hover:shadow-xl hover:shadow-[#C3B091]/10 transition-all duration-300 cursor-pointer"
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={openSignupModal}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#C3B091] to-[#A69B7B] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-tasks text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#C3B091] group-hover:text-white transition-colors">Day to Day Tasks</h3>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">AI-powered task management for luxury services with a human layer execution for services such as private chef, personal concierge, Airport assistance, food deliveries and much more.</p>
              <span className="inline-flex items-center text-[#C3B091] group-hover:text-white cursor-pointer text-sm font-medium">
                Learn More
                <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              className="group bg-[#262626] p-6 rounded-2xl shadow-md border border-[#333333] hover:border-[#C3B091]/50 hover:shadow-xl hover:shadow-[#C3B091]/10 transition-all duration-300 cursor-pointer"
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={openSignupModal}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#C3B091] to-[#A69B7B] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-briefcase text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#C3B091] group-hover:text-white transition-colors">Business Assistance</h3>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">C-Level professional business services for all things related to Agency/Business growth and optimisation. Sales, Marketing & automation, all built to expedite time whilst promoting true business growth.</p>
              <span className="inline-flex items-center text-[#C3B091] group-hover:text-white cursor-pointer text-sm font-medium">
                Learn More
                <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              className="group bg-[#262626] p-6 rounded-2xl shadow-md border border-[#333333] hover:border-[#C3B091]/50 hover:shadow-xl hover:shadow-[#C3B091]/10 transition-all duration-300 cursor-pointer"
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={openSignupModal}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#C3B091] to-[#A69B7B] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-concierge-bell text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#C3B091] group-hover:text-white transition-colors">Custom Errands</h3>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">Intelligent personalised services for any request, tailored by AI to your specific needs which provide digital and physical assistance delivered by our AI-human hybrid model.</p>
              <span className="inline-flex items-center text-[#C3B091] group-hover:text-white cursor-pointer text-sm font-medium">
                Learn More
                <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-10">
            <Button 
              className="bg-gradient-to-r from-[#C3B091] to-[#A69B7B] hover:from-[#D4C4A8] hover:to-[#B8A88C] text-white border-none rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={openSignupModal}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
      
      {/* Exclusive Experience Section */}
      <section className="py-16 backdrop-blur-sm bg-[transparent] text-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#C3B091]">Exclusive</span> Service for Everyday People
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-[#c3b091]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              High-end personal concierge service for complex errands with sophistication
            </motion.p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-[#1A1A1A] p-5 rounded-lg text-white">
                  <div className="w-10 h-10 bg-[#C3B091] rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-crown text-sm text-white"></i>
                  </div>
                  <h3 className="font-semibold text-[#C3B091] text-lg mb-2">Premium Yet Accessible</h3>
                  <p className="text-white/80 text-sm">
                    Luxury service at accessible rates for everyday professionals.
                  </p>
                </div>
                
                <div className="bg-card p-5 rounded-lg">
                  <div className="w-10 h-10 bg-[#C3B091] rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-hourglass-half text-sm text-white"></i>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Time Reclaimed</h3>
                  <p className="text-muted-foreground text-sm">
                    Focus on priorities while we handle life's complex logistics.
                  </p>
                </div>
                
                <div className="bg-card p-5 rounded-lg">
                  <div className="w-10 h-10 bg-[#C3B091] rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-fingerprint text-sm text-white"></i>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Tailored Experience</h3>
                  <p className="text-muted-foreground text-sm">
                    Services customized to your unique requirements with precision.
                  </p>
                </div>
                
                <div className="bg-[#1A1A1A] p-5 rounded-lg text-white">
                  <div className="w-10 h-10 bg-[#C3B091] rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-clock text-sm text-white"></i>
                  </div>
                  <h3 className="font-semibold text-[#C3B091] text-lg mb-2">Available 24/7</h3>
                  <p className="text-white/80 text-sm">
                    Round-the-clock service for diamond and golden members.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/images/services/luxury-service.jpeg" 
                  alt="Luxury Service" 
                  className="w-full h-64 object-cover"
                />
                <div className="bg-[#1A1A1A] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Membership Tiers</h3>
                    <div className="bg-[#C3B091] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      EXCLUSIVE
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#C3B091] rounded-full mr-2"></div>
                      <span className="text-white text-sm">Lightning Services</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <span className="text-white text-sm">Golden Membership</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#C3B091] rounded-full mr-2"></div>
                      <span className="text-white text-sm">Diamond Membership</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-[#C3B091] hover:bg-[#b6a486] text-white transition-colors w-full text-sm"
                    onClick={() => smoothScrollTo('app-section')}
                  >
                    <i className="fas fa-arrow-right mr-2"></i>
                    Explore Membership Options
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-card/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <ScrollAnimation
              variant="fadeUp"
              className="mb-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                How It <span className="text-[#C3B091]">Works</span>
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation
              variant="fadeUp"
              delay={0.2}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Experience convenience in just a few simple steps
            </ScrollAnimation>
          </div>
          
          <HowItWorksAnimation steps={howItWorksSteps} />
        </div>
      </section>
      
      {/* App Section - Coming Soon */}
      <section id="app-section" className="py-16 bg-gradient-to-r from-[#212121] to-[#424242] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <ScrollAnimation
                variant="fadeUp"
                className="mb-2"
              >
                <div className="inline-block px-4 py-2 bg-[#C3B091]/20 rounded-full border border-[#C3B091]/40 mb-4">
                  <span className="text-[#C3B091] font-semibold text-sm">COMING SOON</span>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                variant="fadeUp"
                className="mb-4"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  The <span className="text-[#C3B091]">SPIDXR</span> App
                </h2>
              </ScrollAnimation>
              <ScrollAnimation
                variant="fadeUp"
                delay={0.2}
                className="text-lg mb-8 text-gray-300 max-w-md"
              >
                <p>
                  Our AI-powered urban concierge app is launching soon. Sign up now to be among the first to experience intelligent service automation and enjoy a lifetime 50% discount as an early user.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                variant="fadeUp"
                delay={0.3}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#C3B091] to-[#A69B7B] hover:from-[#D4C4A8] hover:to-[#B8A88C] text-white flex items-center justify-center gap-2 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={openSignupModal}
                  data-testid="button-early-access"
                >
                  <i className="fas fa-gift text-xl"></i>
                  <div className="text-left">
                    <div className="text-xs">Get 50% Off Forever</div>
                    <div className="text-sm font-semibold">Join Early Access</div>
                  </div>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#C3B091]/50 text-[#C3B091] hover:bg-[#C3B091]/10 flex items-center justify-center gap-2 rounded-full px-8"
                  onClick={openSignupModal}
                >
                  <i className="fas fa-bell text-xl"></i>
                  <div className="text-left">
                    <div className="text-xs">Be Notified</div>
                    <div className="text-sm font-semibold">When We Launch</div>
                  </div>
                </Button>
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              variant="fadeRight"
              delay={0.4}
              duration={0.7}
              className="md:w-1/2 flex justify-center"
            >
              {/* iPhone 17 Style with Dynamic Island */}
              <div className="bg-[#1A1A1A] rounded-[3rem] h-[580px] w-[280px] border-4 border-[#2A2A2A] shadow-2xl relative overflow-hidden">
                {/* Dynamic Island with Countdown Timer */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-black rounded-full px-6 py-2 flex items-center gap-3 shadow-lg border border-[#1E3A5F]">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-white text-xs font-medium">
                      <span className="text-[#4A90D9]">Delivery in</span> <span className="text-[#C3B091] font-bold">12:45</span>
                    </div>
                    <i className="fas fa-clock text-[#4A90D9] text-xs"></i>
                  </div>
                </div>
                
                <div className="absolute inset-0 flex flex-col pt-12">
                  {/* Header with Royal Blue accent */}
                  <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2A4A6F] h-28 w-full flex items-center justify-center border-b border-[#1E3A5F]/50">
                    <div className="text-white text-center">
                      <img 
                        src="/images/spidxr-logo.png" 
                        alt="SPIDXR Logo" 
                        className="h-12 mx-auto mb-1 object-contain"
                      />
                      <div className="text-xs text-[#C3B091]">AI-Powered Concierge</div>
                    </div>
                  </div>
                  
                  {/* Services Grid with Royal Blue Accents - 4x2 Grid */}
                  <div className="flex-1 bg-gray-100 p-2 overflow-hidden flex flex-col">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] rounded-lg shadow-md p-3 flex flex-col items-center text-center border-2 border-[#C3B091]">
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white mb-2">
                          <i className="fas fa-chef-hat text-xl"></i>
                        </div>
                        <div className="text-xs font-bold text-white">Private Chef</div>
                        <div className="text-[8px] text-[#C3B091] mt-1 font-semibold">ACTIVE</div>
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center border border-gray-300 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[#1E3A5F]/20 rounded-full flex items-center justify-center text-[#1E3A5F] mb-2">
                          <i className="fas fa-dog text-xl"></i>
                        </div>
                        <div className="text-xs font-semibold mb-1.5">Dog Walking</div>
                        <button className="text-[10px] bg-[#1E3A5F] text-white px-2 py-1 rounded-full hover:bg-[#2A4A6F] transition-colors">Select</button>
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center border border-gray-300 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[#1E3A5F]/20 rounded-full flex items-center justify-center text-[#1E3A5F] mb-2">
                          <i className="fas fa-briefcase text-xl"></i>
                        </div>
                        <div className="text-xs font-semibold mb-1.5">Business Help</div>
                        <button className="text-[10px] bg-[#1E3A5F] text-white px-2 py-1 rounded-full hover:bg-[#2A4A6F] transition-colors">Select</button>
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center border border-gray-300 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[#1E3A5F]/20 rounded-full flex items-center justify-center text-[#1E3A5F] mb-2">
                          <i className="fas fa-coffee text-xl"></i>
                        </div>
                        <div className="text-xs font-semibold mb-1.5">Coffee Runs</div>
                        <button className="text-[10px] bg-[#1E3A5F] text-white px-2 py-1 rounded-full hover:bg-[#2A4A6F] transition-colors">Select</button>
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center border border-gray-300 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[#1E3A5F]/20 rounded-full flex items-center justify-center text-[#1E3A5F] mb-2">
                          <i className="fas fa-ice-cream text-xl"></i>
                        </div>
                        <div className="text-xs font-semibold mb-1.5">Desserts</div>
                        <button className="text-[10px] bg-[#1E3A5F] text-white px-2 py-1 rounded-full hover:bg-[#2A4A6F] transition-colors">Select</button>
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center border border-gray-300 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[#1E3A5F]/20 rounded-full flex items-center justify-center text-[#1E3A5F] mb-2">
                          <i className="fas fa-envelope text-xl"></i>
                        </div>
                        <div className="text-xs font-semibold mb-1.5">Mail Assist</div>
                        <button className="text-[10px] bg-[#1E3A5F] text-white px-2 py-1 rounded-full hover:bg-[#2A4A6F] transition-colors">Select</button>
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center border border-gray-300 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[#1E3A5F]/20 rounded-full flex items-center justify-center text-[#1E3A5F] mb-2">
                          <i className="fas fa-box text-xl"></i>
                        </div>
                        <div className="text-xs font-semibold mb-1.5">Parcels</div>
                        <button className="text-[10px] bg-[#1E3A5F] text-white px-2 py-1 rounded-full hover:bg-[#2A4A6F] transition-colors">Select</button>
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center border border-gray-300 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[#1E3A5F]/20 rounded-full flex items-center justify-center text-[#1E3A5F] mb-2">
                          <i className="fas fa-utensils text-xl"></i>
                        </div>
                        <div className="text-xs font-semibold mb-1.5">Food Delivery</div>
                        <button className="text-[10px] bg-[#1E3A5F] text-white px-2 py-1 rounded-full hover:bg-[#2A4A6F] transition-colors">Select</button>
                      </div>
                    </div>
                    
                    {/* Active Task Tracking with Royal Blue */}
                    <div className="bg-white rounded-lg shadow-md p-2.5 mb-2 border border-[#1E3A5F]/30">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-[#1E3A5F] font-semibold text-xs">Active Task</div>
                        <div className="w-5 h-5 bg-[#1E3A5F] rounded-full flex items-center justify-center text-white text-[10px]">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full">
                        <div className="h-1.5 bg-gradient-to-r from-[#1E3A5F] to-[#C3B091] rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <div className="text-[10px] text-gray-600 mt-1">Private Chef arriving soon</div>
                    </div>
                    
                    {/* Request Button with Royal Blue */}
                    <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2A4A6F] text-white rounded-lg p-2.5 flex items-center justify-center">
                      <div className="mr-2"><i className="fas fa-plus-circle text-sm"></i></div>
                      <div className="text-xs font-semibold">Request New Task</div>
                    </div>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-white/50 rounded-full"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    
      {/* Membership Plans */}
      <section className="py-16 backdrop-blur-sm text-white bg-[transparent]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollAnimation
              variant="fadeUp"
              className="mb-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Choose Your <span className="text-[#C3B091]">Plan</span>
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation
              variant="fadeUp"
              delay={0.2}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              <p>
                We offer flexible membership options to suit your lifestyle and needs
              </p>
            </ScrollAnimation>
          </div>
          
          <ScrollSequence
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            delay={0.3}
            staggerDelay={0.2}
            threshold={0.1}
          >
            {/* Plan 1 */}
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  <span className="inline-flex items-center">
                    <i className="fas fa-bolt text-[#C3B091] mr-2"></i> Lightning Services
                  </span>
                </h3>
                <p className="text-muted-foreground text-sm">Pay as you go</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-foreground">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>No monthly commitment</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Pay only for services you use</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Standard delivery rates</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Access to all basic services</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-[#C3B091] hover:bg-[#b6a486] text-white transition-colors text-sm py-2 rounded-full"
                onClick={openSignupModal}
              >
                Become a Member
              </Button>
            </div>
            
            {/* Plan 2 */}
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border-2 border-[#C3B091] hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#C3B091] text-white px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  <span className="inline-flex items-center">
                    <i className="fas fa-crown text-[#C3B091] mr-2"></i> Golden Membership
                  </span>
                </h3>
                <p className="text-muted-foreground text-sm">Monthly subscription</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-foreground">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Unlimited package collections</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Discounted food delivery fees (50% off)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Priority service (priority queueing)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>2 free custom errands per month</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Extended service hours (7AM-10PM)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>24/7 dedicated customer support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Monthly digital newsletter with exclusive offers</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-[#C3B091] hover:bg-[#b6a486] text-white transition-colors text-sm py-2 rounded-full"
                onClick={openSignupModal}
              >
                Become a Member
              </Button>
            </div>
            
            {/* Plan 3 */}
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  <span className="inline-flex items-center">
                    <i className="fas fa-gem text-[#C3B091] mr-2"></i> Diamond Membership
                  </span>
                </h3>
                <p className="text-muted-foreground text-sm">Premium subscription</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-foreground">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>All Golden benefits included</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Unlimited food deliveries (no fees)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>5 free custom errands per month</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Dedicated personal concierge manager</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>24/7 service availability (365 days)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Exclusive AI assistant access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>VIP access to exclusive city events</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Business & lifestyle concierge services</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1 text-xs"></i>
                  <span>Special occasion gifting assistance</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-[#C3B091] hover:bg-[#b6a486] text-white transition-colors text-sm py-2 rounded-full"
                onClick={openSignupModal}
              >
                Become a Member
              </Button>
            </div>
          </ScrollSequence>
        </div>
      </section>
      
      {/* Email Newsletter */}
      <section className="py-12 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <ScrollAnimation
                  variant="fadeLeft"
                  className="mb-2"
                >
                  <h2 className="text-xl md:text-2xl font-bold">
                    Stay Updated with <span className="text-[#C3B091]">SPIDXR</span>
                  </h2>
                </ScrollAnimation>
                
                <ScrollAnimation
                  variant="fadeLeft"
                  delay={0.2}
                  className="text-muted-foreground text-sm mb-0 md:mb-0"
                >
                  <p>
                    Subscribe to our newsletter for tips, exclusive offers, and updates on new services.
                  </p>
                </ScrollAnimation>
              </div>
              <div>
                <ScrollAnimation
                  variant="fadeRight"
                  delay={0.3}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:border-[#C3B091] text-sm"
                  />
                  <Button 
                    className="whitespace-nowrap bg-[#C3B091] hover:bg-[#b6a486] text-white transition-colors text-sm py-2 rounded-full"
                    onClick={openSignupModal}
                  >
                    Subscribe
                  </Button>
                </ScrollAnimation>
                
                <ScrollAnimation
                  variant="fadeRight"
                  delay={0.4}
                  className="text-xs text-muted-foreground mt-2"
                >
                  <p>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Competitive Edge Section - Royal Blue Accents */}
      <section className="py-16 bg-[#1A1A1A]/95 backdrop-blur-sm text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollAnimation variant="fadeUp" className="mb-3">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-[#1E3A5F]">Competitive</span> <span className="text-[#C3B091]">Edge</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeUp" delay={0.2} className="text-white/80 max-w-2xl mx-auto">
              <p>Why SPIDXR is positioned to become the UK's first AI-powered urban SuperApp</p>
            </ScrollAnimation>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveEdges.map((edge, index) => (
              <motion.div
                key={index}
                className="group bg-[#262626] p-6 rounded-2xl border border-[#1E3A5F]/30 hover:border-[#1E3A5F] hover:shadow-xl hover:shadow-[#1E3A5F]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${edge.icon} text-lg`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#C3B091] group-hover:text-[#1E3A5F] transition-colors">{edge.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{edge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-14 bg-gradient-to-r from-[#C3B091] to-[#A69B7B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollAnimation
              variant="fadeUp"
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Experience AI-Powered Convenience?
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation
              variant="fadeUp"
              delay={0.2}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              <p>
                Join the future of urban living. Get 50% off forever as an early user of SPIDXR's intelligent concierge services.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation
              variant="zoomIn"
              delay={0.4}
              duration={0.7}
            >
              <Button 
                size="lg" 
                className="bg-white text-[#C3B091] hover:bg-gray-100 transition-all duration-300 rounded-full px-8 shadow-lg hover:shadow-xl"
                onClick={openSignupModal}
                data-testid="button-cta-started"
              >
                <i className="fas fa-gift mr-2"></i>
                Claim Your 50% Lifetime Discount
              </Button>
            </ScrollAnimation>
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

export default HomePage;