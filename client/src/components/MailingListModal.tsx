import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MailingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailingListModal: React.FC<MailingListModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to join our mailing list.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // For now, we'll just simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In the future, this will send the data to your server
      console.log("Mailing list signup:", { name, email });
      
      setSubscribed(true);
      
      toast({
        title: "Success!",
        description: "You've been added to our mailing list.",
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setEmail("");
        setName("");
        setSubscribed(false);
        onClose();
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md mx-4 bg-white rounded-lg shadow-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Gold accent bar at top */}
            <div className="h-2 w-full bg-[#C3B091]"></div>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              {!subscribed ? (
                <>
                  <div className="text-center mb-6">
                    <img 
                      src="/images/spidxr-logo.png" 
                      alt="SPIDXR Logo" 
                      className="h-12 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800">
                      Join Our Mailing List
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Stay updated with our latest services and exclusive membership offers.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name (Optional)
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      By subscribing, you agree to receive emails from SPIDXR. You can unsubscribe at any time.
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C3B091] hover:bg-[#b6a486] text-white py-2 rounded-md transition-colors"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Subscribe"
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    You've successfully joined our mailing list. We'll keep you updated with the latest SPIDXR news and offers.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MailingListModal;