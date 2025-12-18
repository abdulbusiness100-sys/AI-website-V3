import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "react-countup";
import EarlyUserSignupModal from "@/components/EarlyUserSignupModal";

import yahyaPhoto from "@assets/WhatsApp_Image_2025-10-11_at_12.19.26_1765396215579.jpeg";
import abdulPhoto from "@assets/abdul_afolabi.jpg";
import watermarkImage from "@assets/download_(1)_1765824646177.png";
import heroImage from "@assets/download_(16)_1765834492993.png";

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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
};

// Team members data from the pitch deck
const teamMembers = [
  {
    name: "Abdul Afolabi",
    role: "CEO - Business Operations, Development & Growth",
    bio: "Founder of SPIDXR with a Masters in Pharmacy. Abdul brings exceptional AI intelligence within the parameters of business consulting and sales with an outstanding track record in sales and growth development. His innovative approach combines pharmaceutical expertise with cutting-edge business strategies, making him a visionary leader in the urban concierge industry.",
    image: abdulPhoto,
    initials: "AA"
  },
  {
    name: "Kevin Namagowa",
    role: "COO - Brand Development and Customer Relations/HR",
    bio: "Co-Founder of SPIDXR with a Master's degree in Pharmacy from the University of Newcastle. Kevin brings expertise in effective person-centered care integrated with proficiency in consumer and public relations. He is committed to enhancing user interface experience and development, creating solutions that meet clinical standards and resonate with consumers.",
    image: "/images/kevin-profile.jpg",
    initials: "KN"
  },
  {
    name: "Yahya Al-Bashtawi",
    role: "CTO - Technology and Platform Development",
    bio: "CTO of SPIDXR with a Bachelor's degree in Computer Science from the University of Portsmouth and a Master's in Artificial Intelligence from Queen Mary University of London. Yahya brings expertise in AI, machine learning, and mobile app development, specializing in React Native and cloud integrations. At SPIDXR, he leads the technical vision to deliver scalable and innovative solutions for the platform.",
    image: yahyaPhoto,
    initials: "YA"
  }
];

const AboutPage = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  
  const openSignupModal = () => setIsSignupModalOpen(true);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="relative z-10">
        <Navbar onOpenSignup={openSignupModal} />
        
        {/* Hero Section - Taller */}
        <section 
          className="relative pt-40 pb-32 md:pt-52 md:pb-44 min-h-[70vh] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('${heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3 mx-auto text-white text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[#C3B091]">SPIDXR</span>
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Redefining convenience for modern urban living. We're here to handle your everyday tasks while you focus on what truly matters.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className="bg-[#1E3A5F] text-[#C3B091] rounded-full px-8 transition-all duration-300 hover:animate-[shake_0.5s_ease-in-out]"
                  onClick={() => {
                    document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fas fa-users mr-2"></i>
                  Meet Our Team
                </Button>
                
                <Link href="/contact">
                  <Button size="lg" className="bg-[#1E3A5F] text-[#C3B091] rounded-full px-8 transition-all duration-300 hover:animate-[shake_0.5s_ease-in-out]">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Content Section */}
      <section className="bg-background/95 backdrop-blur-sm py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-[#C3B091]">SPIDXR</span>
          </motion.h1>
          
          <motion.div 
            className="space-y-4 text-foreground leading-relaxed border-2 border-[#C3B091] rounded-lg p-6 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(195, 176, 145, 0.4)", scale: 1.01, transition: { duration: 0.3 } }}
          >
            <p>
              At SPIDXR, we're redefining convenience for modern urban living. Born out of the need to simplify the busy lives of city dwellers, SPIDXR delivers a seamless concierge service designed to handle everyday tasks, from personal errands to tailored requests, right at your doorstep.
            </p>
            <p>
              Our mission is to empower you to focus on what matters most by taking care of the small, time-consuming details. Whether you're a professional balancing a hectic schedule or a resident seeking hassle-free living, SPIDXR is here to make life effortless.
            </p>
            <p>
              Rooted in innovation and powered by a passion for exceptional service, we blend cutting-edge technology with a personal touch to create a service experience that's as reliable as it is transformative.
            </p>
            <p className="font-semibold text-lg md:text-xl mt-6 text-[#C3B091]">DISCOVERY IN ALL DOMAINS
</p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section 
        className="py-14 relative bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/images/manchester-skyline.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-3 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Mission & <span className="text-[#C3B091]">Values</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The principles that guide us in everything we do
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div 
              className="bg-card/95 p-5 rounded-lg shadow-md border-2 border-[#C3B091] backdrop-blur-sm hover:shadow-lg transition-shadow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                <i className="fas fa-clock text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Time-Saving</h3>
              <p className="text-muted-foreground text-sm">
                We're committed to giving you back your most precious resource—time. Every service we offer is designed to help you reclaim hours in your day for what truly matters.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card/95 p-5 rounded-lg shadow-md border-2 border-[#C3B091] backdrop-blur-sm hover:shadow-lg transition-shadow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                <i className="fas fa-shield-alt text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trustworthy</h3>
              <p className="text-muted-foreground text-sm">
                Trust is at the core of our business. We carefully screen all our concierges and implement secure protocols to ensure your items and information are always protected.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card/95 p-5 rounded-lg shadow-md border-2 border-[#C3B091] backdrop-blur-sm hover:shadow-lg transition-shadow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                <i className="fas fa-heart text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer-Focused</h3>
              <p className="text-muted-foreground text-sm">
                Your satisfaction drives everything we do. We're constantly improving our services based on customer feedback to deliver experiences that exceed expectations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card/95 p-5 rounded-lg shadow-md border-2 border-[#C3B091] backdrop-blur-sm hover:shadow-lg transition-shadow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                <i className="fas fa-seedling text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-muted-foreground text-sm">
                We're committed to reducing urban congestion and emissions by optimizing routes and encouraging eco-friendly transportation methods for our concierges.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card/95 p-5 rounded-lg shadow-md border-2 border-[#C3B091] backdrop-blur-sm hover:shadow-lg transition-shadow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                <i className="fas fa-users text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground text-sm">
                We believe in building stronger communities. Our local concierges know their neighborhoods well and we support local businesses through our services.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card/95 p-5 rounded-lg shadow-md border-2 border-[#C3B091] backdrop-blur-sm hover:shadow-lg transition-shadow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                <i className="fas fa-lightbulb text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                We continuously explore new technologies and methods to make our services more efficient, reliable, and convenient for our customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section - Matching live site design */}
      <section id="team-section" className="py-14 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Meet Our <span className="text-[#C3B091]">Team</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The dedicated people behind SPIDXR
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                data-testid={`card-team-member-${index}`}
                className="bg-white rounded-lg overflow-hidden border-2 border-[#C3B091] shadow-sm hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px -5px rgba(195, 176, 145, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Portrait image - zoomed in on face */}
                <div className="w-full aspect-square overflow-hidden bg-[#F5F5F5]">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#E8E4DD]">
                      <div className="w-28 h-28 rounded-full bg-[#C3B091] flex items-center justify-center text-white text-3xl font-bold">
                        {member.initials}
                      </div>
                    </div>
                  )}
                </div>
                {/* Name and info - centered text */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#C3B091] text-sm mb-4 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section 
        className="py-12 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <motion.div 
              className="text-center p-6 rounded-lg shadow-md border-2 border-[#C3B091]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-3xl font-bold text-[#C3B091] mb-1">
                <CountUp 
                  start={0} 
                  end={3} 
                  duration={2.5} 
                  enableScrollSpy 
                  scrollSpyDelay={500}
                  useEasing
                />
              </div>
              <p className="text-white/80 text-sm">Major Cities with Plans to Expand</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 rounded-lg shadow-md border-2 border-[#C3B091]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-3xl font-bold text-[#C3B091] mb-1">
                <CountUp 
                  start={0} 
                  end={100} 
                  duration={2.5} 
                  enableScrollSpy 
                  scrollSpyDelay={500}
                  useEasing
                />
              </div>
              <p className="text-white/80 text-sm">Dedicated Team Members</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 rounded-lg shadow-md border-2 border-[#C3B091]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-3xl font-bold text-[#C3B091] mb-1">
                <CountUp 
                  start={0} 
                  end={5} 
                  duration={2.5} 
                  suffix="*" 
                  enableScrollSpy 
                  scrollSpyDelay={500}
                  useEasing
                />
              </div>
              <p className="text-white/80 text-sm">Luxury</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 rounded-lg shadow-md border-2 border-[#C3B091]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-3xl font-bold text-[#C3B091] mb-1">
                <CountUp 
                  start={0} 
                  end={1} 
                  duration={1.5} 
                  enableScrollSpy 
                  scrollSpyDelay={500}
                  useEasing
                />
              </div>
              <p className="text-white/80 text-sm">Goal - Your Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-14 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Save Time with SPIDXR?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join our growing community of customers who are reclaiming their time through our convenient urban concierge services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                className="bg-[#1E3A5F] text-[#C3B091] hover:bg-[#2a4a70] hover:scale-105 transition-all duration-300 text-sm py-3 px-6 shadow-lg hover:shadow-xl rounded-full"
                onClick={openSignupModal}
              >
                <i className="fas fa-arrow-right mr-2"></i>
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
      </div>
      <EarlyUserSignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
      />
    </>
  );
};

export default AboutPage;