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
const meetingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  investorType: z.enum(["angel", "vc", "corporate", "other"], {
    required_error: "Please select investor type",
  }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  message: z.string().optional(),
});

type MeetingFormValues = z.infer<typeof meetingSchema>;

const ScheduleMeeting = () => {
  const { toast } = useToast();
  const form = useForm<MeetingFormValues>({
    resolver: zodResolver(meetingSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      investorType: "angel",
      date: "",
      time: "",
      message: "",
    },
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (values: MeetingFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Meeting scheduled:", values);
    
    toast({
      title: "Meeting Request Received",
      description: "Our team will contact you shortly to confirm your meeting.",
    });
    
    form.reset();
  };

  // Get available dates (next 7 days)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    // Start from tomorrow
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-UK', { weekday: 'short', month: 'short', day: 'numeric' })
        });
      }
    }
    
    return dates;
  };

  // Available time slots
  const timeSlots = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
  ];

  return (
    <>
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#121212] to-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-10">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Schedule a <span className="text-[#C3B091]">Meeting</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Connect with our investment team to discuss opportunities and learn more about SPIDXR's vision for the future.
            </motion.p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] h-full">
                <h2 className="text-xl font-bold mb-4 text-[#C3B091]">Meeting Information</h2>
                
                <div className="space-y-5 text-gray-300">
                  <div>
                    <h3 className="text-white font-medium mb-2">About Our Meetings</h3>
                    <p className="text-sm text-gray-400">
                      Our investor meetings are scheduled for 30-minute slots where you'll meet with key members of our leadership team to discuss the SPIDXR investment opportunity.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-2">What to Expect</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Detailed overview of our business model</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Discussion of market opportunity and growth strategy</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Q&A with our leadership team</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>Next steps in the investment process</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-[#333]">
                    <h3 className="text-white font-medium mb-2">Have Questions?</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      If you need assistance or have questions before scheduling, our team is here to help.
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
              className="md:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-6 text-gray-800">Request a Meeting</h2>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company"
                        {...form.register("company")}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                        placeholder="Your company name"
                      />
                      {form.formState.errors.company && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.company.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="investorType" className="block text-sm font-medium text-gray-700 mb-1">
                        Investor Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="investorType"
                        {...form.register("investorType")}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                      >
                        <option value="angel">Angel Investor</option>
                        <option value="vc">Venture Capital</option>
                        <option value="corporate">Corporate Investor</option>
                        <option value="other">Other</option>
                      </select>
                      {form.formState.errors.investorType && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.investorType.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="date"
                        {...form.register("date")}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                      >
                        <option value="">Select a date</option>
                        {getAvailableDates().map((date) => (
                          <option key={date.value} value={date.value}>
                            {date.label}
                          </option>
                        ))}
                      </select>
                      {form.formState.errors.date && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.date.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="time"
                        {...form.register("time")}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                      {form.formState.errors.time && (
                        <p className="text-red-500 text-xs mt-1">{form.formState.errors.time.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      {...form.register("message")}
                      rows={3}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C3B091] focus:border-[#C3B091]"
                      placeholder="Let us know if you have any specific questions or topics you'd like to discuss."
                    ></textarea>
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
                        className="bg-[#C3B091] hover:bg-[#b6a486] text-white px-6 py-2 rounded-md"
                      >
                        {form.formState.isSubmitting ? (
                          <>
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-calendar-check mr-2"></i>
                            Request Meeting
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
          
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

export default ScheduleMeeting;