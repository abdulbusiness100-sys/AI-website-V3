import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EarlyUserSignupModal from "@/components/EarlyUserSignupModal";
import faqBgImage from "@assets/download_(2)_1765824866615.png";
import executiveAssistanceImage from "@assets/download_(20)_1765903069669.png";
import airportSupportImage from "@assets/download_(21)_1765903313987.png";
import eventManagementImage from "@assets/download_(22)_1765903353671.png";
import propertyManagementImage from "@assets/download_(19)_1765903406612.png";
import personalShoppingImage from "@assets/download_(23)_1765903438897.png";
import wellnessImage from "@assets/download_(24)_1765903497020.png";
import transportImage from "@assets/download_(25)_1765903542559.png";
import petCareImage from "@assets/download_(26)_1765903624025.png";
import diningImage from "@assets/download_(27)_1765903727158.png";
import cleaningImage from "@assets/download_(28)_1765903752353.png";
import packageImage from "@assets/download_(29)_1765903970860.png";
import foodDeliveryImage from "@assets/download_(30)_1765903990644.png";
import pharmacyImage from "@assets/download_(31)_1765904153789.png";
import privateChefImage from "@assets/download_(33)_1765904361219.png";
import servicesWatermark from "@assets/download_(35)_1765922143678.png";

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

const services = [
  {
    id: 1,
    title: "Executive Assistance",
    description: "Dedicated professional support for busy executives, including calendar management, meeting coordination, and strategic planning assistance.",
    icon: "briefcase",
    features: [
      "Calendar & schedule management",
      "Meeting preparation & coordination",
      "Document management & filing",
      "Research & market analysis",
      "Priority task handling"
    ],
    premium: true,
    image: executiveAssistanceImage
  },
  {
    id: 2,
    title: "Airport Support",
    description: "Comprehensive airport assistance including flight booking, transfer arrangements, luggage help, check-in support, navigation guidance, and fast track services for seamless travel.",
    icon: "plane",
    features: [
      "Flight booking & reservations",
      "Transfer arrangement & coordination",
      "Luggage handling & porter services",
      "Check-in assistance & support",
      "Airport navigation & guidance",
      "Fast track & lounge access"
    ],
    premium: true,
    image: airportSupportImage
  },
  {
    id: 3,
    title: "Event Management & Planning",
    description: "Full-service event planning for personal celebrations, corporate functions, and special occasions with meticulous attention to detail.",
    icon: "calendar",
    features: [
      "Venue selection & booking",
      "Catering coordination",
      "Guest management",
      "Vendor coordination",
      "Day-of event execution"
    ],
    premium: true,
    image: eventManagementImage
  },
  {
    id: 4,
    title: "Property Management",
    description: "Comprehensive management of residential or commercial properties including maintenance, repairs, and tenant coordination.",
    icon: "home",
    features: [
      "Maintenance scheduling",
      "Contractor coordination",
      "Repair management",
      "Inspection coordination",
      "Emergency response"
    ],
    premium: true,
    image: propertyManagementImage
  },
  {
    id: 5,
    title: "Personal Shopping & Styling",
    description: "Expert personal shopping, wardrobe consultation, and styling services for personal and professional settings.",
    icon: "shopping-bag",
    features: [
      "Wardrobe consultation",
      "Fashion-forward selections",
      "Personal shopping",
      "Styling for events",
      "Brand & boutique access"
    ],
    premium: true,
    image: personalShoppingImage
  },
  {
    id: 6,
    title: "Wellness & Spa Services",
    description: "Curated wellness experiences including spa bookings, fitness coaching, nutrition planning, and wellness consultations.",
    icon: "spa",
    features: [
      "Spa & wellness bookings",
      "Fitness training coordination",
      "Wellness consultations",
      "Health tracking assistance",
      "Relaxation experience curation"
    ],
    premium: true,
    image: wellnessImage
  },
  {
    id: 7,
    title: "Transport & Valet Services",
    description: "Premium transportation solutions including luxury vehicle options, airport transfers, and dedicated valet services.",
    icon: "car",
    features: [
      "Professional drivers",
      "Luxury vehicle options",
      "Airport transfers",
      "Event transportation",
      "24/7 availability"
    ],
    premium: true,
    image: transportImage
  },
  {
    id: 8,
    title: "Pet Care Services",
    description: "Comprehensive pet care including walking, grooming, veterinary coordination, and pet sitting services.",
    icon: "paw",
    features: [
      "Dog walking & exercise",
      "Grooming coordination",
      "Vet appointment management",
      "Pet sitting services",
      "Pet supply shopping"
    ],
    premium: false,
    image: petCareImage
  },
  {
    id: 9,
    title: "Dining & Restaurant Services",
    description: "VIP dining experiences with exclusive reservations at top-rated restaurants and private dining arrangements.",
    icon: "utensils",
    features: [
      "Restaurant reservations",
      "VIP table access",
      "Menu pre-planning",
      "Wine pairing coordination",
      "Private dining arrangements"
    ],
    premium: false,
    image: diningImage
  },
  {
    id: 10,
    title: "Home Cleaning & Organization",
    description: "Professional home cleaning, organization, and decluttering services to maintain your living spaces in pristine condition.",
    icon: "sparkles",
    features: [
      "Regular cleaning service",
      "Deep cleaning available",
      "Organization & decluttering",
      "Window cleaning",
      "Eco-friendly options"
    ],
    premium: false,
    image: cleaningImage
  },
  {
    id: 11,
    title: "Package Collection & Deliveries",
    description: "We collect your packages from pickup points, post offices, or stores and deliver them right to your doorstep with care.",
    icon: "box",
    features: [
      "Collection from any location",
      "Real-time tracking",
      "Secure handling",
      "Flexible scheduling",
      "Photo confirmation"
    ],
    premium: false,
    image: packageImage
  },
  {
    id: 12,
    title: "Food Delivery & Errands",
    description: "Order from your favorite local restaurants, cafes, or shops that don't deliver, and we'll bring your items directly to your door.",
    icon: "door-open",
    features: [
      "Contactless delivery",
      "Temperature control",
      "Order verification",
      "Local restaurant access",
      "Rapid delivery times"
    ],
    premium: false,
    image: foodDeliveryImage
  },
  {
    id: 13,
    title: "Grocery Shopping",
    description: "Personal shopping service for groceries with item selection, fresh produce curation, and same-day delivery.",
    icon: "shopping-basket",
    features: [
      "Personal shopper",
      "Fresh produce selection",
      "Multiple store options",
      "Substitution communication",
      "Same-day available"
    ],
    premium: false,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    title: "Pharmacy & Medical Support",
    description: "Pharmacy pickups, prescription management, medical appointment coordination, and health-related errands.",
    icon: "pills",
    features: [
      "Prescription pickup",
      "Medication management",
      "Medical appointments",
      "Health consultation coordination",
      "Insurance coordination"
    ],
    premium: false,
    image: pharmacyImage
  },
  {
    id: 15,
    title: "Private Chef Service",
    description: "Bespoke culinary experiences with personalized meal planning, nutritional customization, and optional assigned personal assistant for premium lifestyle management.",
    icon: "chef-hat",
    features: [
      "Customized meal plans",
      "Nutritional customization",
      "Assigned personal assistant (if requested)",
      "Dietary accommodation",
      "Premium ingredient sourcing"
    ],
    premium: true,
    image: privateChefImage
  },
  {
    id: 16,
    title: "Childcare & Family Services",
    description: "Reliable childcare coordination, school pickup assistance, and family event management services.",
    icon: "child",
    features: [
      "Childcare coordination",
      "School pickup service",
      "Activity enrollment",
      "Family event planning",
      "Emergency backup care"
    ],
    premium: false,
    image: "https://images.unsplash.com/photo-1503454537688-e47a34cbb798?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const ServicesPage = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  
  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <img 
        src={servicesWatermark} 
        alt="" 
        className="fixed inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10">
        <Navbar onOpenSignup={openSignupModal} />
        
        {/* Hero Section - Taller */}
        <section className="relative pt-40 pb-32 md:pt-52 md:pb-44 min-h-[70vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto text-white">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Premium <span className="text-[#C3B091]">Services</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We provide a range of concierge services designed to make your life easier and more convenient. From package collection to food delivery and custom errands, we've got you covered.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4"
              >
                <Button 
                  size="lg" 
                  className="bg-[#1E3A5F] text-[#C3B091] rounded-full px-8 transition-all duration-300 hover:animate-[shake_0.5s_ease-in-out]"
                  onClick={() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Services
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      
      {/* Services Section */}
      <section id="services-section" className="py-12 bg-white/95 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="text-[#C3B091]">Premium</span> Services
            </motion.h2>
            <motion.p 
              className="text-base text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience luxury concierge services tailored to your lifestyle
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 15).map((service) => (
              <motion.div 
                key={service.id} 
                className="rounded-2xl overflow-hidden shadow-md border-2 border-transparent hover:shadow-[0_0_20px_rgba(30,58,95,0.4)] transition-all duration-300"
                style={{ boxShadow: '0 0 15px rgba(30, 58, 95, 0.2)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <motion.div 
                  className="h-44 overflow-hidden bg-gray-100"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={service.image}
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <motion.div 
                      className="w-10 h-10 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mr-3"
                      whileHover={{ scale: 1.15, backgroundColor: "rgba(195, 176, 145, 0.3)" }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <i className={`fas fa-${service.icon}`}></i>
                    </motion.div>
                    <h2 className="text-lg font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 text-xs mb-3">
                    {service.description}
                  </p>
                  
                  <h3 className="text-sm font-semibold mb-2">What's Included:</h3>
                  <ul className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs">
                        <i className="fas fa-check text-[#C3B091] mt-1 mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    {service.premium && (
                      <div className="flex items-center bg-[#C3B091]/10 text-[#C3B091] px-2 py-1 rounded-full text-xs font-medium">
                        <i className="fas fa-star mr-1 text-xs"></i>
                        Premium
                      </div>
                    )}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        className="bg-[#1E3A5F] text-[#C3B091] text-xs px-4 py-1 rounded-full transition-all duration-300 hover:animate-[shake_0.5s_ease-in-out]"
                        onClick={openSignupModal}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Personal Concierge Highlight */}
          <motion.div
            className="rounded-lg overflow-hidden border-2 border-[#C3B091] mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)",
              borderColor: "#d3c0a1",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <div className="bg-gradient-to-r from-[#222222] to-[#333333] text-white p-8 md:p-10">
              <div className="md:flex items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(195, 176, 145, 0.5)",
                      transition: { duration: 0.3 }
                    }}
                    className="rounded-lg overflow-hidden border-2 border-[#C3B091]"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Personal Concierge" 
                      className="w-full h-56 object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <motion.div 
                    className="inline-block bg-[#C3B091] px-4 py-1 rounded-full text-xs text-white font-bold mb-4"
                    whileHover={{ scale: 1.05, backgroundColor: "#d3c0a1" }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    EXCLUSIVE OFFERING
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4 text-[#C3B091]">Personal Concierge Service</h2>
                  <p className="text-white/90 mb-6">
                    Experience the ultimate in personalized service with your own dedicated Personal Concierge. Available exclusively for our most discerning clients, this premium service offers bespoke solutions tailored to your unique lifestyle needs.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 500 }}>
                      <motion.div 
                        className="bg-[#C3B091] rounded-full p-1 mr-3 mt-1"
                        whileHover={{ scale: 1.2, backgroundColor: "#d3c0a1" }}
                      >
                        <i className="fas fa-check text-white text-xs"></i>
                      </motion.div>
                      <div>
                        <h3 className="text-[#C3B091] font-semibold text-sm">24/7 Dedicated Support</h3>
                        <p className="text-white/80 text-xs">Round-the-clock access to your personal concierge</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 500 }}>
                      <motion.div 
                        className="bg-[#C3B091] rounded-full p-1 mr-3 mt-1"
                        whileHover={{ scale: 1.2, backgroundColor: "#d3c0a1" }}
                      >
                        <i className="fas fa-check text-white text-xs"></i>
                      </motion.div>
                      <div>
                        <h3 className="text-[#C3B091] font-semibold text-sm">Bespoke Solutions</h3>
                        <p className="text-white/80 text-xs">Custom services designed specifically for your needs</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 500 }}>
                      <motion.div 
                        className="bg-[#C3B091] rounded-full p-1 mr-3 mt-1"
                        whileHover={{ scale: 1.2, backgroundColor: "#d3c0a1" }}
                      >
                        <i className="fas fa-check text-white text-xs"></i>
                      </motion.div>
                      <div>
                        <h3 className="text-[#C3B091] font-semibold text-sm">Exclusive Access</h3>
                        <p className="text-white/80 text-xs">VIP privileges at restaurants, events, and venues</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 500 }}>
                      <motion.div 
                        className="bg-[#C3B091] rounded-full p-1 mr-3 mt-1"
                        whileHover={{ scale: 1.2, backgroundColor: "#d3c0a1" }}
                      >
                        <i className="fas fa-check text-white text-xs"></i>
                      </motion.div>
                      <div>
                        <h3 className="text-[#C3B091] font-semibold text-sm">Personalized Planning</h3>
                        <p className="text-white/80 text-xs">Assistance with events, travel, and lifestyle management</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button className="bg-[#C3B091] hover:bg-[#d3c0a1] text-white transition-colors">
                      <i className="fas fa-crown mr-2"></i>
                      Inquire About Membership
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Membership Plans */}
      <section className="py-16 backdrop-blur-sm text-white bg-[transparent]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Choose Your <span className="text-[#C3B091]">Plan</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We offer flexible membership options to suit your lifestyle and needs
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Plan 1 */}
            <motion.div 
              className="bg-white text-black p-6 rounded-lg shadow-md border border-[#eaeaea] transition-all"
              variants={fadeUp}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)",
                borderColor: "#C3B091",
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1 text-gray-800">
                  <span className="inline-flex items-center">
                    <i className="fas fa-bolt text-[#C3B091] mr-2"></i> Lightning Services
                  </span>
                </h3>
                <p className="text-gray-600 text-sm">Pay as you go</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
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
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  className="w-full bg-[#C3B091] hover:bg-[#b6a486] text-white transition-all duration-300 text-sm py-2 shadow-sm hover:shadow-md"
                >
                  <span className="relative">
                    Become a Member
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Plan 2 */}
            <motion.div 
              className="bg-white text-black p-6 rounded-lg shadow-md border-2 border-[#C3B091] transition-all relative"
              variants={fadeUp}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)",
                borderColor: "#d3c0a1",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#C3B091] text-white px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1 text-gray-800">
                  <span className="inline-flex items-center">
                    <i className="fas fa-crown text-[#C3B091] mr-2"></i> Golden Membership
                  </span>
                </h3>
                <p className="text-gray-600 text-sm">Monthly subscription</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
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
                  <span>Priority service (within 60 minutes)</span>
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
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  className="w-full bg-[#C3B091] hover:bg-[#b6a486] text-white transition-all duration-300 text-sm py-2 shadow-sm hover:shadow-md"
                  onClick={openSignupModal}
                >
                  <span className="relative">
                    Become a Member
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Plan 3 */}
            <motion.div 
              className="bg-white text-black p-6 rounded-lg shadow-md border border-[#eaeaea] transition-all"
              variants={fadeUp}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)",
                borderColor: "#C3B091",
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1 text-gray-800">
                  <span className="inline-flex items-center">
                    <i className="fas fa-gem mr-2 text-[#c3b091]"></i> Diamond Membership
                  </span>
                </h3>
                <p className="text-gray-600 text-sm">Premium subscription</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
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
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  className="w-full bg-[#C3B091] hover:bg-[#b6a486] text-white transition-all duration-300 text-sm py-2 shadow-sm hover:shadow-md"
                  onClick={openSignupModal}
                >
                  <span className="relative">
                    Become a Member
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section with Background Image */}
      <section 
        className="py-12 relative bg-[#1d1d1d]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)), url(${faqBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 text-white">
              Frequently Asked <span className="text-[#C3B091]">Questions</span>
            </h2>
            <p className="text-white/80 text-sm">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            <motion.div 
              className="border-2 border-[#C3B091] rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                borderColor: "#d3c0a1",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div 
                className="bg-[#C3B091]/10 px-5 py-3 border-b border-[#C3B091]"
                whileHover={{ backgroundColor: "rgba(195, 176, 145, 0.2)" }}
              >
                <h3 className="font-semibold text-sm text-white">How quickly can you deliver my package?</h3>
              </motion.div>
              <div className="px-5 py-3">
                <p className="text-white/80 text-sm">
                  Our standard delivery time is within 2-3 hours of receiving your request. For urgent deliveries, we offer an express option that aims to deliver within 60-90 minutes, depending on distance and traffic conditions.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="border-2 border-[#C3B091] rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                borderColor: "#d3c0a1",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div 
                className="bg-[#C3B091]/10 px-5 py-3 border-b border-[#C3B091]"
                whileHover={{ backgroundColor: "rgba(195, 176, 145, 0.2)" }}
              >
                <h3 className="font-semibold text-sm text-white">Is there a weight limit for packages?</h3>
              </motion.div>
              <div className="px-5 py-3">
                <p className="text-white/80 text-sm">
                  Our standard service covers packages up to 20kg. For heavier items, we offer a special heavy-item service with appropriate transportation options. Please contact us for specific requirements.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="border-2 border-[#C3B091] rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                borderColor: "#d3c0a1",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div 
                className="bg-[#C3B091]/10 px-5 py-3 border-b border-[#C3B091]"
                whileHover={{ backgroundColor: "rgba(195, 176, 145, 0.2)" }}
              >
                <h3 className="font-semibold text-sm text-white">How does the food delivery service work?</h3>
              </motion.div>
              <div className="px-5 py-3">
                <p className="text-white/80 text-sm">
                  Simply tell us what you'd like and from which restaurant. We'll place the order on your behalf, collect it when it's ready, and deliver it straight to you. We use thermal bags to ensure your food arrives hot and fresh.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="border-2 border-[#C3B091] rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                borderColor: "#d3c0a1",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div 
                className="bg-[#C3B091]/10 px-5 py-3 border-b border-[#C3B091]"
                whileHover={{ backgroundColor: "rgba(195, 176, 145, 0.2)" }}
              >
                <h3 className="font-semibold text-sm text-white">What areas do you cover?</h3>
              </motion.div>
              <div className="px-5 py-3">
                <p className="text-white/80 text-sm">
                  We currently serve the Greater Manchester area, including the city center, Salford, Trafford, and surrounding suburbs. We're expanding our service areas regularly, so please check the app for the most up-to-date coverage information.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-[transparent]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Experience Our Services?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join our waitlist today and be among the first to experience SPIDXR's revolutionary urban concierge services. Early users enjoy a lifetime 50% discount!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-white text-[#C3B091] hover:bg-gray-100 transition-all duration-300 text-sm py-3 px-8 rounded-full shadow-md hover:shadow-lg"
                  onClick={openSignupModal}
                >
                  <i className="fas fa-arrow-right mr-2"></i>
                  Get Started Now
                </Button>
              </motion.div>
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

export default ServicesPage;