import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const GooglePlay = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A0A0A] to-[#1E1E1E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="relative mx-auto md:mx-0 w-[270px] h-[550px]">
                <div className="bg-black rounded-[40px] w-full h-full overflow-hidden border-[8px] border-[#222] shadow-2xl">
                  <div className="absolute top-0 w-full h-6 bg-black z-10 flex justify-center items-end pb-1">
                    <div className="w-24 h-1 bg-[#333] rounded-full"></div>
                  </div>
                  
                  <div className="h-full overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="bg-[#C3B091] h-32 w-full flex items-center justify-center">
                        <div className="text-white text-center">
                          <img 
                            src="/images/spidxr-logo.png" 
                            alt="SPIDXR Logo" 
                            className="h-14 mx-auto mb-1 object-contain"
                          />
                          <div className="text-sm">Urban Concierge</div>
                        </div>
                      </div>
                      
                      <div className="flex-1 bg-gray-100 p-3">
                        <div className="bg-[#C3B091]/10 p-2 rounded-lg mb-3">
                          <div className="text-xs font-medium mb-1 text-[#C3B091]">Hello, Alex</div>
                          <div className="text-sm font-semibold mb-2">What can we do for you today?</div>
                          <div className="flex space-x-1">
                            <div className="bg-white rounded-full px-2 py-1 text-xs border border-[#C3B091]/20">
                              <i className="fas fa-shopping-bag text-[#C3B091] mr-1"></i> Shopping
                            </div>
                            <div className="bg-white rounded-full px-2 py-1 text-xs border border-[#C3B091]/20">
                              <i className="fas fa-utensils text-[#C3B091] mr-1"></i> Food
                            </div>
                          </div>
                        </div>
                      
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-2">
                              <i className="fas fa-box text-sm"></i>
                            </div>
                            <div className="text-xs font-semibold">Package Collection</div>
                          </div>
                          <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-2">
                              <i className="fas fa-utensils text-sm"></i>
                            </div>
                            <div className="text-xs font-semibold">Food Delivery</div>
                          </div>
                          <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-2">
                              <i className="fas fa-shopping-basket text-sm"></i>
                            </div>
                            <div className="text-xs font-semibold">Grocery Shopping</div>
                          </div>
                          <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-2">
                              <i className="fas fa-tasks text-sm"></i>
                            </div>
                            <div className="text-xs font-semibold">Custom Errands</div>
                          </div>
                        </div>
                        
                        <div className="bg-[#C3B091] text-white rounded-lg p-3 flex items-center justify-center">
                          <div className="mr-2"><i className="fas fa-plus-circle"></i></div>
                          <div className="text-sm font-semibold">Request New Task</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-12 right-[-20px] w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                  <img src="/images/google-play-icon.png" alt="Google Play" className="w-12 h-12" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-3/5 text-white text-center md:text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-[#3DDC84]/20 px-3 py-1 rounded-full border border-[#3DDC84]/30 text-[#3DDC84] text-sm font-medium mb-4">
                ANDROID APP
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Download the SPIDXR App on <span className="text-[#3DDC84]">Google Play</span>
              </h1>
              
              <p className="text-gray-300 mb-6">
                Bring the power of SPIDXR's urban concierge services to your Android device. Our app provides an effortless way to request services, track progress in real-time, and manage your membership.
              </p>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#3DDC84]/20 rounded-full flex items-center justify-center text-[#3DDC84] mr-4 mt-0.5">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white mb-1">Android Optimized</h3>
                    <p className="text-gray-300 text-sm">
                      Fully optimized for all Android devices with Material Design interface for a seamless experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#3DDC84]/20 rounded-full flex items-center justify-center text-[#3DDC84] mr-4 mt-0.5">
                    <i className="fas fa-battery-full"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white mb-1">Energy Efficient</h3>
                    <p className="text-gray-300 text-sm">
                      Designed to minimize battery consumption while still providing real-time updates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#3DDC84]/20 rounded-full flex items-center justify-center text-[#3DDC84] mr-4 mt-0.5">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white mb-1">Enhanced Security</h3>
                    <p className="text-gray-300 text-sm">
                      Built with Google Play Protect security and fingerprint authentication support.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a 
                    href="https://play.google.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-[#3DDC84] hover:bg-[#32b76e] text-black px-8 py-6 rounded-md flex items-center gap-3">
                      <i className="fab fa-google-play text-2xl"></i>
                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-lg font-semibold">Google Play</div>
                      </div>
                    </Button>
                  </a>
                </motion.div>
                
                <Link href="/targets/app-store">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 px-8 py-6 flex items-center gap-3"
                  >
                    <i className="fab fa-apple text-3xl"></i>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* App Features */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Android <span className="text-[#3DDC84]">Exclusive Features</span>
              </motion.h2>
              <motion.p 
                className="text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Take advantage of these Android-exclusive features
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-[#1A1A1A] p-5 rounded-lg border border-gray-800 hover:border-[#3DDC84] transition-colors">
                <div className="w-12 h-12 bg-[#3DDC84]/20 rounded-full flex items-center justify-center text-[#3DDC84] mb-4">
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Home Screen Widgets</h3>
                <p className="text-gray-400 text-sm">
                  Quick-access widgets for your most frequently used services.
                </p>
              </div>
              
              <div className="bg-[#1A1A1A] p-5 rounded-lg border border-gray-800 hover:border-[#3DDC84] transition-colors">
                <div className="w-12 h-12 bg-[#3DDC84]/20 rounded-full flex items-center justify-center text-[#3DDC84] mb-4">
                  <i className="fas fa-share-alt"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Share Requests</h3>
                <p className="text-gray-400 text-sm">
                  Easily share service requests with family and friends.
                </p>
              </div>
              
              <div className="bg-[#1A1A1A] p-5 rounded-lg border border-gray-800 hover:border-[#3DDC84] transition-colors">
                <div className="w-12 h-12 bg-[#3DDC84]/20 rounded-full flex items-center justify-center text-[#3DDC84] mb-4">
                  <i className="fas fa-sliders-h"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Advanced Customization</h3>
                <p className="text-gray-400 text-sm">
                  Customize your experience with themes and layout options.
                </p>
              </div>
              
              <div className="bg-[#1A1A1A] p-5 rounded-lg border border-gray-800 hover:border-[#3DDC84] transition-colors">
                <div className="w-12 h-12 bg-[#3DDC84]/20 rounded-full flex items-center justify-center text-[#3DDC84] mb-4">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Voice Commands</h3>
                <p className="text-gray-400 text-sm">
                  Control the app hands-free with Google Assistant integration.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/">
              <Button 
                variant="link" 
                className="text-[#3DDC84] hover:text-white"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default GooglePlay;