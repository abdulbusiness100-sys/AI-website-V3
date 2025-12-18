import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { initEmailJs, sendEmail } from "@/lib/emailService";
import EarlyUserSignupModal from "@/components/EarlyUserSignupModal";
import findUsImage from "@assets/download_(1)_1765824646177.png";
import contactWatermark from "@assets/download_(34)_1765917392867.png";

const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  
  const openSignupModal = () => setIsSignupModalOpen(true);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize EmailJS with your public key
    // Replace with your actual EmailJS public key
    initEmailJs("YOUR_EMAILJS_PUBLIC_KEY");
  }, []);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  
  async function onSubmit(values: ContactFormValues) {
    try {
      setIsSubmitting(true);
      
      // Replace these with your actual EmailJS service ID and template ID
      const serviceId = "YOUR_EMAILJS_SERVICE_ID";
      const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
      
      const result = await sendEmail(serviceId, templateId, {
        name: values.name,
        email: values.email,
        phone: values.phone || '',
        subject: values.subject,
        message: values.message
      });
      
      if (result) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly via email.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <>
      <img 
        src={contactWatermark} 
        alt="" 
        className="fixed inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10">
        <Navbar onOpenSignup={openSignupModal} />
        
        {/* Hero Section - Taller */}
        <section className="relative pt-40 pb-32 md:pt-52 md:pb-44 min-h-[70vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full md:w-3/4 lg:w-2/3 mx-auto text-white text-center">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold leading-tight mb-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[#C3B091]">Contact Us</span>
                </motion.h1>
                
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Let's Connect
                </motion.h2>
                
                <motion.p
                  className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Have questions about our services or need assistance? We're here to help you simplify your life and amplify your time.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="border-b-2 border-[#C3B091] pb-1">Get in Touch</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We value your feedback and inquiries. Use any of the following methods to reach us or fill out the contact form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#C3B091]/20 p-2 rounded-full mr-3">
                    <i className="fas fa-map-marker-alt text-[#C3B091] text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Our Location</h3>
                    <p className="text-muted-foreground text-xs">Anywhere you need us</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#C3B091]/20 p-2 rounded-full mr-3">
                    <i className="fas fa-envelope text-[#C3B091] text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Email Us</h3>
                    <p className="text-muted-foreground text-xs">admin@spidxr.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#C3B091]/20 p-2 rounded-full mr-3">
                    <i className="fas fa-clock text-[#C3B091] text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Business Hours</h3>
                    <p className="text-muted-foreground text-xs">Monday - Friday: 11am - 4am</p>
                    <p className="text-muted-foreground text-xs">Weekend: 7am - 3am</p>
                    <p className="text-muted-foreground text-xs font-semibold mt-1">24/7 DIAMOND MEMBERS ONLY</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-sm mb-3">Connect With Us</h3>
                <div className="flex space-x-3">
                  <motion.a 
                    href="#" 
                    className="bg-[#C3B091]/20 w-8 h-8 flex items-center justify-center rounded-full text-[#C3B091] hover:bg-[#C3B091] hover:text-white transition-all"
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 0 10px rgba(195, 176, 145, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <i className="fab fa-facebook-f text-xs"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-[#C3B091]/20 w-8 h-8 flex items-center justify-center rounded-full text-[#C3B091] hover:bg-[#C3B091] hover:text-white transition-all"
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 0 10px rgba(195, 176, 145, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <i className="fab fa-twitter text-xs"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-[#C3B091]/20 w-8 h-8 flex items-center justify-center rounded-full text-[#C3B091] hover:bg-[#C3B091] hover:text-white transition-all"
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 0 10px rgba(195, 176, 145, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <i className="fab fa-instagram text-xs"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-[#C3B091]/20 w-8 h-8 flex items-center justify-center rounded-full text-[#C3B091] hover:bg-[#C3B091] hover:text-white transition-all"
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 0 10px rgba(195, 176, 145, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <i className="fab fa-linkedin-in text-xs"></i>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-[#1A1A1A] p-8 rounded-lg border-2 border-[#C3B091] shadow-md relative overflow-hidden">
                {/* SPIDXR Logo in right corner */}
                <div className="absolute top-6 right-6 w-16 h-16 opacity-50">
                  <img 
                    src="/images/spidxr-logo.png" 
                    alt="SPIDXR Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-6 text-white">
                  <span className="border-b-2 border-[#C3B091] pb-1">Send Us a Message</span>
                </h2>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        {...form.register("name")}
                        className="w-full px-3 py-2 text-sm border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091]"
                        placeholder="Enter your name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-400 text-xs mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        className="w-full px-3 py-2 text-sm border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091]"
                        placeholder="Enter your email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-400 text-xs mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...form.register("phone")}
                        className="w-full px-3 py-2 text-sm border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091]"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="subject"
                        {...form.register("subject")}
                        className="w-full px-3 py-2 text-sm border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091]"
                        placeholder="Enter subject"
                      />
                      {form.formState.errors.subject && (
                        <p className="text-red-400 text-xs mt-1">{form.formState.errors.subject.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      {...form.register("message")}
                      rows={5}
                      className="w-full px-3 py-2 text-sm border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091]"
                      placeholder="Type your message here..."
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-xs mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-[#1E3A5F] text-[#C3B091] text-sm font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:animate-[shake_0.5s_ease-in-out]"
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section 
        className="py-12 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${findUsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-2xl font-bold mb-2 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Find <span className="text-[#C3B091] border-b-2 border-[#C3B091] pb-1">Us</span>
            </motion.h2>
            <motion.p 
              className="text-white/80 text-sm max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our office is located in the heart of Manchester, easily accessible by public transport or car.
            </motion.p>
          </div>
          
          <motion.div 
            className="p-4 rounded-lg shadow-md border-2 border-[#C3B091] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ 
              boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)",
              borderColor: "#d3c0a1",
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Find Us section with attached image */}
            <div 
              className="w-full h-[350px] rounded flex items-center justify-center bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${findUsImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <motion.div 
                className="bg-white/90 p-5 rounded-lg shadow-lg backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <p className="text-gray-800 text-center">
                  <motion.i 
                    className="fas fa-map-marker-alt text-3xl text-[#C3B091] mb-3 block"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  ></motion.i>
                  <span className="font-bold block mb-2">SPIDXR Headquarters</span>
                  <span className="text-sm block">Greengate Manchester, United Kingdom  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white/95 backdrop-blur-sm relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Frequently Asked <span className="text-[#C3B091]">Questions</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Find answers to common questions about contacting us
            </p>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              className="border-2 border-[#C3B091] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="bg-[#C3B091]/10 px-5 py-4">
                <h3 className="font-semibold text-gray-800">How quickly will I receive a response to my inquiry?</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our customer service line for immediate assistance.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="border-2 border-[#C3B091] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="bg-[#C3B091]/10 px-5 py-4">
                <h3 className="font-semibold text-gray-800">What are your delivery times?</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-600">
                  For in-house eServices (SPIDXR established in apartment complexes), deliveries are ASAP. All task times are dependent on the specific request, but our goal is to complete your task before you can say buttercup! Diamond Members enjoy 24/7 priority service every day of the year.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="border-2 border-[#C3B091] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="bg-[#C3B091]/10 px-5 py-4">
                <h3 className="font-semibold text-gray-800">Is there a weight limit for packages?</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-600">
                  There are absolutely no weight limits! Whatever it weighs, we will move it, bring it, or ship it. Our team is equipped to handle packages and items of all sizes and weights to meet your needs. No job is too small or too big for SPIDXR.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="border-2 border-[#C3B091] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="bg-[#C3B091]/10 px-5 py-4">
                <h3 className="font-semibold text-gray-800">How do I report an issue with a delivery?</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-600">
                  For delivery issues, the fastest way to get assistance is through the "Help" section in our app. Alternatively, you can email our dedicated support team at support@spidxrservices.co.uk with your order details.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Action Buttons - Royal Blue, Rounded */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  className="bg-[#1E3A5F] text-[#C3B091] rounded-full transition-all shadow-md hover:shadow-lg text-sm py-2 px-8 w-full sm:w-auto hover:animate-[shake_0.5s_ease-in-out]"
                  onClick={openSignupModal}
                >
                  <i className="fas fa-handshake mr-2"></i>
                  Connect with SPIDXR
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  className="bg-[#1E3A5F] text-[#C3B091] rounded-full transition-all shadow-md hover:shadow-lg text-sm py-2 px-8 w-full sm:w-auto hover:animate-[shake_0.5s_ease-in-out]"
                  onClick={openSignupModal}
                >
                  <i className="fas fa-crown mr-2"></i>
                  Become a Member
                </Button>
              </motion.div>
            </div>
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

export default ContactPage;