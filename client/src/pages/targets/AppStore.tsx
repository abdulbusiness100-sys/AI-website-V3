import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const AppStore = () => {
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
                        
                        <div className="bg-white rounded-lg shadow-md p-3 mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-[#C3B091] font-semibold text-sm">Track Your Request</div>
                            <div className="w-6 h-6 bg-[#C3B091] rounded-full flex items-center justify-center text-white text-xs">
                              <i className="fas fa-map-marker-alt"></i>
                            </div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-[#C3B091] rounded-full" style={{ width: "75%" }}></div>
                          </div>
                          <div className="text-xs text-gray-600 mt-2">Your order is on the way</div>
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
                  <img src="/images/app-store-icon.png" alt="App Store" className="w-12 h-12" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-3/5 text-white text-center md:text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-[#C3B091]/20 px-3 py-1 rounded-full border border-[#C3B091]/30 text-[#C3B091] text-sm font-medium mb-4">
                iOS APP
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Download the SPIDXR App on the <span className="text-[#C3B091]">App Store</span>
              </h1>
              
              <p className="text-gray-300 mb-6">
                Experience the convenience of SPIDXR's urban concierge services right from your iPhone or iPad. Our app makes it easy to request services, track progress, and manage your membership.
              </p>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mr-4 mt-0.5">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white mb-1">Quick Service Requests</h3>
                    <p className="text-gray-300 text-sm">
                      Request any service with just a few taps. Our intuitive interface makes it easy to get the help you need.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mr-4 mt-0.5">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white mb-1">Real-Time Tracking</h3>
                    <p className="text-gray-300 text-sm">
                      Follow your concierge's progress in real-time with our advanced GPS tracking system.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mr-4 mt-0.5">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white mb-1">Secure & Private</h3>
                    <p className="text-gray-300 text-sm">
                      Your data is protected with industry-leading security, including Face ID and Touch ID support.
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
                    href="https://apps.apple.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-[#C3B091] hover:bg-[#b6a486] text-white px-8 py-6 rounded-md flex items-center gap-3">
                      <i className="fab fa-apple text-3xl"></i>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-lg font-semibold">App Store</div>
                      </div>
                    </Button>
                  </a>
                </motion.div>
                
                <Link href="/targets/google-play">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 px-8 py-6 flex items-center gap-3"
                  >
                    <i className="fab fa-google-play text-2xl"></i>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
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
                App <span className="text-[#C3B091]">Features</span>
              </motion.h2>
              <motion.p 
                className="text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Designed to make your life easier and more efficient
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-[#1A1A1A] p-5 rounded-lg border border-gray-800 hover:border-[#C3B091] transition-colors">
                <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Schedule in Advance</h3>
                <p className="text-gray-400 text-sm">
                  Plan your services for the future to ensure support exactly when you need it.
                </p>
              </div>
              
              <div className="bg-[#1A1A1A] p-5 rounded-lg border border-gray-800 hover:border-[#C3B091] transition-colors">
                <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                  <i className="fas fa-bell"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Push Notifications</h3>
                <p className="text-gray-400 text-sm">
                  Stay informed with real-time updates about your service status.
                </p>
              </div>
              
              <div className="bg-[#1A1A1A] p-5 rounded-lg border border-gray-800 hover:border-[#C3B091] transition-colors">
                <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                  <i className="fas fa-history"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Service History</h3>
                <p className="text-gray-400 text-sm">
                  Access detailed records of all your past services and requests.
                </p>
              </div>
              
              <div className="bg-[#1A1A1A] p-5 rounded-lg border border-gray-800 hover:border-[#C3B091] transition-colors">
                <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">In-App Chat</h3>
                <p className="text-gray-400 text-sm">
                  Communicate directly with your concierge during service delivery.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/">
              <Button 
                variant="link" 
                className="text-[#C3B091] hover:text-white"
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

export default AppStore;