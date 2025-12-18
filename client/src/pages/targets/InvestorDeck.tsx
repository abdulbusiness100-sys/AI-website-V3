import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const InvestorDeck = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-[#121212] to-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SPIDXR <span className="text-[#C3B091]">Investor Deck</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Thank you for your interest in SPIDXR. Our comprehensive investor deck provides detailed information about our business model, market opportunity, and growth projections.
            </motion.p>
          </div>
          
          <motion.div 
            className="bg-[#1E1E1E] p-8 rounded-lg border border-[#333] shadow-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="w-24 h-24 bg-[#C3B091]/20 rounded-full flex items-center justify-center">
                <i className="fas fa-file-pdf text-[#C3B091] text-3xl"></i>
              </div>
              <div className="text-white text-center md:text-left">
                <h2 className="text-xl font-bold mb-2">SPIDXR_Investor_Deck_2025.pdf</h2>
                <p className="text-gray-400 text-sm mb-3">Complete investment presentation • 24 pages • 8.5 MB</p>
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-xs bg-[#C3B091] text-white px-2 py-1 rounded mr-2">PRE-SEED</span>
                  <span className="text-xs bg-[#333] text-white px-2 py-1 rounded">£650K</span>
                </div>
              </div>
            </div>

            <div className="bg-[#252525] p-4 rounded mb-6">
              <h3 className="text-white font-medium mb-2 text-sm">Includes:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#C3B091] mr-2 text-xs"></i>
                  <span>Executive Summary</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#C3B091] mr-2 text-xs"></i>
                  <span>Market Analysis</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#C3B091] mr-2 text-xs"></i>
                  <span>Business Model</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#C3B091] mr-2 text-xs"></i>
                  <span>5-Year Financials</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#C3B091] mr-2 text-xs"></i>
                  <span>Team Profiles</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#C3B091] mr-2 text-xs"></i>
                  <span>Investor Terms</span>
                </li>
              </ul>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex justify-center"
            >
              <a 
                href="/files/SPIDXR_PITCH.pdf" 
                download="SPIDXR_Investor_Deck_2025.pdf"
                className="inline-block"
              >
                <Button 
                  className="bg-[#C3B091] hover:bg-[#b6a486] text-white px-8 py-3 rounded-md text-base flex items-center gap-2"
                >
                  <i className="fas fa-download"></i>
                  Download Investor Deck
                </Button>
              </a>
            </motion.div>
            
            <div className="mt-6 pt-6 border-t border-[#333] text-center">
              <p className="text-gray-400 text-sm mb-4">
                For additional information or to discuss investment opportunities:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/targets/schedule-meeting">
                  <Button 
                    variant="outline"
                    className="border-[#C3B091] text-[#C3B091] hover:bg-[#C3B091]/10 hover:text-white"
                  >
                    <i className="fas fa-calendar-check mr-2"></i>
                    Schedule Meeting
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline"
                    className="border-[#444] text-white hover:bg-white/10"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Contact the Team
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center mt-10">
            <Link href="/investors">
              <Button 
                variant="link" 
                className="text-[#C3B091] hover:text-white"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Investors Page
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default InvestorDeck;