import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

// Form schema
const membershipSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address is required" }),
  membershipType: z.enum(["lightning", "golden", "diamond"], {
    required_error: "Please select a membership type",
  }),
  paymentMethod: z.enum(["credit", "debit", "paypal"], {
    required_error: "Please select a payment method",
  }),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to terms and conditions",
  }),
});

type MembershipFormValues = z.infer<typeof membershipSchema>;

const MembershipPage = () => {
  const { toast } = useToast();
  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      membershipType: "lightning",
      paymentMethod: "credit",
      agreeTerms: false,
    },
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (values: MembershipFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Membership application:", values);
    
    toast({
      title: "Application Submitted Successfully",
      description: "Our team will contact you shortly to complete your membership setup.",
    });
    
    form.reset();
  };

  return (
    <>
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Become a <span className="text-[#C3B091]">SPIDXR Member</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join our exclusive community and enjoy premium urban concierge services tailored to your needs.
            </motion.p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] shadow-md">
                <h2 className="text-xl font-bold mb-6 text-[#C3B091]">Membership Benefits</h2>
                
                <div className="space-y-5 text-gray-300">
                  <div>
                    <h3 className="text-white font-medium mb-2">Lightning Services</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Essential everyday services</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Standard delivery times</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Regular business hours support</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>£19.99/month</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-2">Golden Membership</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>All Lightning services plus premium options</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Priority service (60 min response)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Extended hours support</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>£250-500/month</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-2">Diamond Membership</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>All Golden services plus exclusive offerings</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Dedicated personal concierge</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>24/7 service availability</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>£750-2,000/month with AI assistant</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-[#333]">
                    <h3 className="text-white font-medium mb-2">Questions?</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      If you need more information before joining, feel free to contact our membership team.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-[#C3B091] text-[#C3B091] hover:bg-[#C3B091]/10 text-sm">
                        <i className="fas fa-envelope mr-2"></i>
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-6 text-gray-800">Membership Application</h2>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        {...form.register("name")}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                        placeholder="Enter your full name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                        placeholder="your@email.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        {...form.register("phone")}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                        placeholder="Your phone number"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="address"
                        {...form.register("address")}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                        placeholder="Your address"
                      />
                      {form.formState.errors.address && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.address.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Membership <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className={`border rounded-md p-4 flex flex-col cursor-pointer transition-all ${
                          form.watch("membershipType") === "lightning" 
                            ? "border-[#C3B091] bg-[#C3B091]/5" 
                            : "border-gray-200 hover:border-[#C3B091]/50"
                        }`}
                        onClick={() => form.setValue("membershipType", "lightning")}
                      >
                        <div className="flex items-center mb-2">
                          <input
                            type="radio"
                            id="membership-lightning"
                            value="lightning"
                            {...form.register("membershipType")}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border ${
                            form.watch("membershipType") === "lightning" 
                              ? "bg-[#C3B091] border-[#C3B091]" 
                              : "border-gray-400"
                          }`}>
                            {form.watch("membershipType") === "lightning" && (
                              <div className="w-2 h-2 rounded-full bg-white mx-auto mt-[3px]"></div>
                            )}
                          </div>
                          <label htmlFor="membership-lightning" className="ml-2 text-sm font-medium text-gray-700">
                            Lightning Services
                          </label>
                        </div>
                        <span className="text-[#C3B091] font-bold">£19.99/month</span>
                        <span className="text-xs text-gray-500 mt-1">Essential services</span>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-4 flex flex-col cursor-pointer transition-all ${
                          form.watch("membershipType") === "golden" 
                            ? "border-[#C3B091] bg-[#C3B091]/5" 
                            : "border-gray-200 hover:border-[#C3B091]/50"
                        }`}
                        onClick={() => form.setValue("membershipType", "golden")}
                      >
                        <div className="flex items-center mb-2">
                          <input
                            type="radio"
                            id="membership-golden"
                            value="golden"
                            {...form.register("membershipType")}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border ${
                            form.watch("membershipType") === "golden" 
                              ? "bg-[#C3B091] border-[#C3B091]" 
                              : "border-gray-400"
                          }`}>
                            {form.watch("membershipType") === "golden" && (
                              <div className="w-2 h-2 rounded-full bg-white mx-auto mt-[3px]"></div>
                            )}
                          </div>
                          <label htmlFor="membership-golden" className="ml-2 text-sm font-medium text-gray-700">
                            Golden Membership
                          </label>
                        </div>
                        <span className="text-[#C3B091] font-bold">£250-500/month</span>
                        <span className="text-xs text-gray-500 mt-1">Priority service</span>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-4 flex flex-col cursor-pointer transition-all ${
                          form.watch("membershipType") === "diamond" 
                            ? "border-[#C3B091] bg-[#C3B091]/5" 
                            : "border-gray-200 hover:border-[#C3B091]/50"
                        }`}
                        onClick={() => form.setValue("membershipType", "diamond")}
                      >
                        <div className="flex items-center mb-2">
                          <input
                            type="radio"
                            id="membership-diamond"
                            value="diamond"
                            {...form.register("membershipType")}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border ${
                            form.watch("membershipType") === "diamond" 
                              ? "bg-[#C3B091] border-[#C3B091]" 
                              : "border-gray-400"
                          }`}>
                            {form.watch("membershipType") === "diamond" && (
                              <div className="w-2 h-2 rounded-full bg-white mx-auto mt-[3px]"></div>
                            )}
                          </div>
                          <label htmlFor="membership-diamond" className="ml-2 text-sm font-medium text-gray-700">
                            Diamond Membership
                          </label>
                        </div>
                        <span className="text-[#C3B091] font-bold">£750-2,000/month</span>
                        <span className="text-xs text-gray-500 mt-1">24/7 service with AI assistant</span>
                      </div>
                    </div>
                    {form.formState.errors.membershipType && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.membershipType.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment Method <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className={`border rounded-md p-4 flex items-center cursor-pointer transition-all ${
                          form.watch("paymentMethod") === "credit" 
                            ? "border-[#C3B091] bg-[#C3B091]/5" 
                            : "border-gray-200 hover:border-[#C3B091]/50"
                        }`}
                        onClick={() => form.setValue("paymentMethod", "credit")}
                      >
                        <input
                          type="radio"
                          id="payment-credit"
                          value="credit"
                          {...form.register("paymentMethod")}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border ${
                          form.watch("paymentMethod") === "credit" 
                            ? "bg-[#C3B091] border-[#C3B091]" 
                            : "border-gray-400"
                        }`}>
                          {form.watch("paymentMethod") === "credit" && (
                            <div className="w-2 h-2 rounded-full bg-white mx-auto mt-[3px]"></div>
                          )}
                        </div>
                        <label htmlFor="payment-credit" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                          <i className="far fa-credit-card mr-2 text-gray-500"></i>
                          Credit Card
                        </label>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-4 flex items-center cursor-pointer transition-all ${
                          form.watch("paymentMethod") === "debit" 
                            ? "border-[#C3B091] bg-[#C3B091]/5" 
                            : "border-gray-200 hover:border-[#C3B091]/50"
                        }`}
                        onClick={() => form.setValue("paymentMethod", "debit")}
                      >
                        <input
                          type="radio"
                          id="payment-debit"
                          value="debit"
                          {...form.register("paymentMethod")}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border ${
                          form.watch("paymentMethod") === "debit" 
                            ? "bg-[#C3B091] border-[#C3B091]" 
                            : "border-gray-400"
                        }`}>
                          {form.watch("paymentMethod") === "debit" && (
                            <div className="w-2 h-2 rounded-full bg-white mx-auto mt-[3px]"></div>
                          )}
                        </div>
                        <label htmlFor="payment-debit" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                          <i className="fas fa-credit-card mr-2 text-gray-500"></i>
                          Debit Card
                        </label>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-4 flex items-center cursor-pointer transition-all ${
                          form.watch("paymentMethod") === "paypal" 
                            ? "border-[#C3B091] bg-[#C3B091]/5" 
                            : "border-gray-200 hover:border-[#C3B091]/50"
                        }`}
                        onClick={() => form.setValue("paymentMethod", "paypal")}
                      >
                        <input
                          type="radio"
                          id="payment-paypal"
                          value="paypal"
                          {...form.register("paymentMethod")}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border ${
                          form.watch("paymentMethod") === "paypal" 
                            ? "bg-[#C3B091] border-[#C3B091]" 
                            : "border-gray-400"
                        }`}>
                          {form.watch("paymentMethod") === "paypal" && (
                            <div className="w-2 h-2 rounded-full bg-white mx-auto mt-[3px]"></div>
                          )}
                        </div>
                        <label htmlFor="payment-paypal" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                          <i className="fab fa-paypal mr-2 text-gray-500"></i>
                          PayPal
                        </label>
                      </div>
                    </div>
                    {form.formState.errors.paymentMethod && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.paymentMethod.message}</p>
                    )}
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        {...form.register("agreeTerms")}
                        className="focus:ring-[#C3B091] h-4 w-4 text-[#C3B091] border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium text-gray-700">
                        I agree to SPIDXR's terms and conditions <span className="text-red-500">*</span>
                      </label>
                      <p className="text-gray-500">
                        By checking this box, you agree to our <a href="#" className="text-[#C3B091] hover:underline">Terms of Service</a> and <a href="#" className="text-[#C3B091] hover:underline">Privacy Policy</a>.
                      </p>
                      {form.formState.errors.agreeTerms && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.agreeTerms.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={form.formState.isSubmitting}
                        className="bg-[#C3B091] hover:bg-[#b6a486] text-white px-8 py-3 rounded-md"
                      >
                        {form.formState.isSubmitting ? (
                          <>
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Processing...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-check-circle mr-2"></i>
                            Submit Application
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button 
                variant="link" 
                className="text-[#C3B091] hover:text-white"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default MembershipPage;