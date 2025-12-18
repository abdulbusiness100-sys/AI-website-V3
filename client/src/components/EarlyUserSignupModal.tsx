import { motion, AnimatePresence } from "framer-motion";

interface EarlyUserSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EarlyUserSignupModal: React.FC<EarlyUserSignupModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
          data-testid="modal-early-signup"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-gradient-to-b from-[#1A1A1A] to-[#2C2C2C] rounded-2xl shadow-2xl overflow-hidden border border-[#C3B091]/30"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#C3B091] via-[#D4C4A8] to-[#C3B091]"></div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white focus:outline-none transition-colors z-20"
              data-testid="button-close-modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#C3B091] to-[#A69B7B] flex items-center justify-center">
                  <i className="fas fa-gift text-xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Early User <span className="text-[#C3B091]">Exclusive</span>
                </h3>
                <div className="inline-block px-4 py-1.5 bg-[#C3B091]/20 rounded-full border border-[#C3B091]/40 mb-2">
                  <span className="text-[#C3B091] font-bold">50% OFF</span>
                  <span className="text-white/80 ml-2 text-sm">Lifetime Discount</span>
                </div>
                <p className="text-white/70 text-sm">
                  Be among the first to experience AI-powered concierge services
                </p>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden" style={{ minHeight: '450px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/0LA8hV1bkZgyySaTxXv5"
                  style={{
                    width: '100%',
                    height: '450px',
                    border: 'none'
                  }}
                  id="inline-0LA8hV1bkZgyySaTxXv5"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="SPIDXR Early Access"
                  data-height="450"
                  data-layout-iframe-id="inline-0LA8hV1bkZgyySaTxXv5"
                  data-form-id="0LA8hV1bkZgyySaTxXv5"
                  title="SPIDXR Early Access Signup"
                  data-testid="iframe-signup-form"
                />
              </div>
              
              <p className="text-white/50 text-xs text-center mt-3">
                Your data is secure and will never be shared
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EarlyUserSignupModal;
