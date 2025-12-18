import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const serviceBreakdown = [
  { name: 'Lightning Services', value: 45, price: '£2.99/task' },
  { name: 'Golden Membership', value: 35, price: '£250-500/month' },
  { name: 'Diamond Membership', value: 20, price: '£750-2,000/month with AI' },
];

const competitors = [
  {
    name: 'TaskRabbit',
    pricing: '£15-60/hr',
    model: 'Task-based platform',
    focus: 'One-off tasks'
  },
  {
    name: 'Airtasker',
    pricing: '10-20% fees',
    model: 'Bidding platform',
    focus: 'Project marketplace'
  },
  {
    name: 'Traditional',
    pricing: '£1.5K-150K/year',
    model: 'High-end concierge',
    focus: 'Wealthy clients only'
  },
  {
    name: 'SPIDXR',
    pricing: 'Lightning: £2.99/task',
    pricing2: 'Golden: £250-500/month',
    pricing3: 'Diamond: £750-2,000/month',
    focus: 'Everyday people',
    highlight: true,
    aiAccess: true
  }
];

const competitiveEdges = [
  {
    title: 'First in the UK',
    description: "No personal assistant service available to the general public across the UK. We're pioneering this market segment.",
    icon: 'fa-flag'
  },
  {
    title: 'Customer-Driven Innovation',
    description: "Services highly tailored to users' needs, combining the perfect blend of app-based simplicity with reliable service delivery.",
    icon: 'fa-lightbulb'
  },
  {
    title: 'Highly Scalable',
    description: "Our phased approach to growth ensures sustainable expansion, with clear pathways from exclusive service to widespread adoption.",
    icon: 'fa-chart-line'
  },
  {
    title: 'Community Integration',
    description: "Exclusive partnerships with apartment complexes build trust and loyalty, creating strong community foundations.",
    icon: 'fa-building'
  },
  {
    title: 'Market Demand',
    description: "High demand with zero supply in this specific segment. We're filling a critical gap in the market.",
    icon: 'fa-bullseye'
  },
  {
    title: "UK's First SuperApp",
    description: "Our mission is to become the UK's first SuperApp, delivering comprehensive concierge services to simplify urban living.",
    icon: 'fa-mobile-alt'
  }
];

const InvestorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePitchDeckRequest = () => {
    window.location.href = "mailto:info@spidxrservices.co.uk?subject=Pitch%20Deck%20Request&body=I%27d%20like%20to%20request%20the%20SPIDXR%20pitch%20deck%20and%20be%20updated%20with%20the%20latest%20information%20around%20the%20growth%20of%20SPIDXR%20and%20the%20SPIDXR%20innovations.";
  };

  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/abdulafolabi1-spidxrservices/spidxr-network-discover", "_blank");
  };
  
  return (
    <>
      {/* Fixed Parallax Background - Grayscale City */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("/images/manchester-skyline22.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)'
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section - Taller */}
        <section className="relative pt-40 pb-32 md:pt-52 md:pb-44 min-h-[70vh] flex items-center">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-3xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="inline-block mb-4 py-1 px-3 rounded-full bg-[#C3B091]/30 backdrop-blur-sm border border-[#C3B091]/50"
            >
              <span className="text-sm font-semibold text-[#C3B091]">PRE-SEED ROUND - £650K</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#C3B091]">
                The Future of Urban Concierge
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Revolutionizing personal assistant services across the UK, becoming the nation's first <span className="font-bold text-[#C3B091]">SuperApp</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                className="bg-[#C3B091] hover:bg-[#d3c0a1] text-black font-medium px-8 py-6 rounded-md text-base"
                size="lg"
                onClick={handlePitchDeckRequest}
                data-testid="button-request-pitch-deck"
              >
                <i className="fas fa-envelope mr-2"></i>
                Request Pitch Deck
              </Button>
              <Button 
                className="bg-transparent hover:bg-white/10 border-2 border-[#C3B091] text-[#C3B091] font-medium px-8 py-6 rounded-md text-base"
                size="lg"
                onClick={handleScheduleMeeting}
                data-testid="button-schedule-meeting"
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Schedule Meeting
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Investment Overview */}
      <section className="py-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Investment Opportunity</h2>
              <p className="text-gray-600 mb-8">
                SPIDXR sits at the intersection of high-growth urban services — key metrics below provide a concise view.
              </p>
              
              {/* Revenue Mix */}
              <div className="bg-[#F8F8F8] p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">Revenue Mix</h4>
                <p className="text-sm text-gray-500 mb-4">Share of revenue by product line (percent). This graph illustrates the distribution of revenue across different service categories, highlighting the most profitable segments.</p>
                <div className="space-y-3">
                  {serviceBreakdown.map((service, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{service.name}:<span className="text-[#C3B091] ml-1">{service.price}</span></span>
                        <span className="font-medium">{service.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div 
                          className="bg-[#C3B091] h-2 rounded-full" 
                          style={{ width: `${service.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Market Size Chart */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Market Size & Growth</h3>
                <div className="bg-[#F8F8F8] rounded-lg p-6 h-[320px]">
                  <div className="text-center mb-4 font-semibold text-sm">Urban Concierge Market Size (£ Millions)</div>
                  
                  <div className="flex flex-col h-[230px] relative">
                    <div className="flex h-full items-end justify-around mb-2 px-4">
                      {/* 2023 bar */}
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-medium mb-2 bg-[#333] text-white rounded px-2 py-1">
                          £249M
                        </div>
                        <div className="w-10 bg-[#C3B091] rounded-t-sm shadow-md" style={{ height: '35px' }}></div>
                        <div className="text-xs mt-2 text-gray-700 font-semibold">2023</div>
                      </div>
                      
                      {/* 2025 bar */}
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-medium mb-2 bg-[#333] text-white rounded px-2 py-1">
                          £392M
                        </div>
                        <div className="w-10 bg-[#C3B091]/70 rounded-t-sm shadow-md" style={{ height: '55px' }}></div>
                        <div className="text-xs mt-2 text-gray-700 font-semibold">2025</div>
                      </div>
                      
                      {/* 2027 bar */}
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-medium mb-2 bg-[#333] text-white rounded px-2 py-1">
                          £617M
                        </div>
                        <div className="w-10 bg-[#C3B091]/70 rounded-t-sm shadow-md" style={{ height: '90px' }}></div>
                        <div className="text-xs mt-2 text-gray-700 font-semibold">2027</div>
                      </div>
                      
                      {/* 2030 bar */}
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-medium mb-2 bg-[#333] text-white rounded px-2 py-1">
                          £1.4B
                        </div>
                        <div className="w-10 bg-[#C3B091]/70 rounded-t-sm shadow-md" style={{ height: '170px' }}></div>
                        <div className="text-xs mt-2 text-gray-700 font-semibold">2030</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center mr-6">
                      <div className="w-3 h-3 bg-[#C3B091] rounded-sm mr-2"></div>
                      <span className="text-sm">Current</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#C3B091]/60 rounded-sm mr-2"></div>
                      <span className="text-sm">Projected</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Business Model */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Business <span className="text-[#C3B091]">Model</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              How SPIDXR generates sustainable revenue and ensures long-term growth
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service Revenue Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-[#C3B091]">
                <h3 className="text-xl font-semibold mb-6 text-[#C3B091]">Service Revenue Breakdown</h3>
                <div className="space-y-4">
                  {serviceBreakdown.map((service, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{service.name}</span>
                      <span className="font-medium text-[#C3B091]">{service.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Revenue Streams */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-[#C3B091]">
                <h3 className="text-xl font-semibold mb-6 text-[#C3B091]">Revenue Streams</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#C3B091] border border-[#C3B091] mr-4 shrink-0">
                      <i className="fas fa-percentage"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Service Fees</h4>
                      <p className="text-gray-400 text-sm">
                        We charge a percentage fee on all services delivered through our platform, varying by service type and complexity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#C3B091] border border-[#C3B091] mr-4 shrink-0">
                      <i className="fas fa-user-tag"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Premium Memberships</h4>
                      <p className="text-gray-400 text-sm">
                        Subscribers to our premium tiers enjoy preferred rates, priority service, and exclusive benefits, creating a predictable revenue stream.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#C3B091] border border-[#C3B091] mr-4 shrink-0">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Business Partnerships</h4>
                      <p className="text-gray-400 text-sm">
                        We partner with local businesses, offering special rates for their customers and employees, generating additional revenue and expanding our customer base.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#C3B091] border border-[#C3B091] mr-4 shrink-0">
                      <i className="fas fa-building"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Corporate Accounts</h4>
                      <p className="text-gray-400 text-sm">
                        Companies can set up accounts for their staff, providing a convenient perk while creating bulk service contracts for SPIDXR.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Financial Projections */}
      <section className="py-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Financial <span className="text-[#C3B091]">Projections</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our path to profitability and growth
            </motion.p>
          </div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">5-Year Revenue Projection (£ Millions)</h3>
            <div className="bg-[#F8F8F8] rounded-lg p-6 h-[320px]">
              <div className="text-center mb-4 font-medium">Revenue Growth Projection</div>
              <div className="flex flex-col h-[220px] relative">
                <div className="flex h-full items-end justify-around mb-2 px-8">
                  {/* Year 1 bar */}
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium mb-1 bg-[#333] text-white rounded px-3 py-1">
                      £0.17M
                    </div>
                    <div className="w-16 bg-[#C3B091] rounded-t-sm shadow-md" style={{ height: '3px' }}></div>
                    <div className="text-sm mt-3 text-gray-700 font-semibold">Year 1</div>
                    <div className="text-xs text-gray-500 mt-1 text-center">Initial Launch</div>
                  </div>
                  
                  {/* Year 3 bar */}
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium mb-1 bg-[#333] text-white rounded px-3 py-1">
                      £7M
                    </div>
                    <div className="w-16 bg-[#C3B091] rounded-t-sm shadow-md" style={{ height: '80px' }}></div>
                    <div className="text-sm mt-3 text-gray-700 font-semibold">Year 3</div>
                    <div className="text-xs text-gray-500 mt-1 text-center">Market Expansion</div>
                  </div>
                  
                  {/* Year 5 bar */}
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium mb-1 bg-[#333] text-white rounded px-3 py-1">
                      £15M
                    </div>
                    <div className="w-16 bg-[#C3B091] rounded-t-sm shadow-md" style={{ height: '170px' }}></div>
                    <div className="text-sm mt-3 text-gray-700 font-semibold">Year 5</div>
                    <div className="text-xs text-gray-500 mt-1 text-center">Full Scale</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm mt-6 text-gray-500">
                Total Revenue by 2030: £40M at just 0.4% market share
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Growth Metrics */}
            <motion.div
              className="bg-[#F8F8F8] p-6 rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Key Growth Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Market Growth (UK CAGR)</span>
                  <span className="font-bold text-[#C3B091]">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Target Market Penetration</span>
                  <span className="font-bold text-[#C3B091]">1.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Avg. Monthly User Spend</span>
                  <span className="font-bold text-[#C3B091]">£25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Year 2 Active Users</span>
                  <span className="font-bold text-[#C3B091]">20,000</span>
                </div>
              </div>
            </motion.div>

            {/* Growth Strategy */}
            <motion.div
              className="bg-[#F8F8F8] p-6 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Growth Strategy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1"></i>
                  <span>Phase 1 (2025-2026): Focus on apartment complexes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1"></i>
                  <span>Phase 2 (2026-2027): Expansion to general public</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1"></i>
                  <span>Phase 3 (2027-2028): SpidxrWeb freelancer platform</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1"></i>
                  <span>Geographic expansion across 5 major UK cities</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#C3B091] mr-2 mt-1"></i>
                  <span>Strategic partnerships with property managers</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Investment Opportunity Box */}
          <motion.div
            className="mt-12 bg-[#1A1A1A] p-8 rounded-lg text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#C3B091] mb-2">£650K</h3>
            <p className="text-xl mb-4">Pre-Seed Round</p>
            <p className="text-gray-400 mb-6">Funding will accelerate growth, improve technology, and expand market reach</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-[#C3B091] font-bold">40% (£260K)</p>
                <p className="text-sm text-gray-400">Technology Development</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-[#C3B091] font-bold">30% (£195K)</p>
                <p className="text-sm text-gray-400">Marketing & Customer Acquisition</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-[#C3B091] font-bold">20% (£130K)</p>
                <p className="text-sm text-gray-400">Operations & Team Expansion</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-[#C3B091] font-bold">10% (£65K)</p>
                <p className="text-sm text-gray-400">Working Capital & Compliance</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <i className="fas fa-star text-[#C3B091] mr-2"></i>
                <span>First in the UK to provide personal assistant services to the general public</span>
              </div>
              <div className="flex items-center justify-center">
                <i className="fas fa-chart-line text-[#C3B091] mr-2"></i>
                <span>Highly scalable phased approach ensures sustainable expansion</span>
              </div>
              <div className="flex items-center justify-center">
                <i className="fas fa-bullseye text-[#C3B091] mr-2"></i>
                <span>Untapped market with high demand and zero supply</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Competition */}
      <section className="py-20 bg-[#F8F8F8]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Market <span className="text-[#C3B091]">Competition</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {competitors.map((comp, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg ${comp.highlight ? 'bg-[#1A1A1A] text-white border-2 border-[#C3B091]' : 'bg-white'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className={`text-xl font-bold mb-4 ${comp.highlight ? 'text-[#C3B091]' : ''}`}>{comp.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Pricing:</span> {comp.pricing}</p>
                  {comp.pricing2 && <p>{comp.pricing2}</p>}
                  {comp.pricing3 && <p>{comp.pricing3}</p>}
                  {comp.model && <p><span className="font-medium">Model:</span> {comp.model}</p>}
                  <p><span className="font-medium">Focus:</span> {comp.focus}</p>
                  {comp.aiAccess && (
                    <p className="text-[#C3B091] font-medium">AI Access in Diamond Tier</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Edge */}
      <section className="py-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our <span className="text-[#C3B091]">Competitive Edge</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitiveEdges.map((edge, index) => (
              <motion.div
                key={index}
                className="bg-[#F8F8F8] p-6 rounded-lg border-2 border-transparent hover:border-[#C3B091] transition-colors"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#C3B091]/20 rounded-full flex items-center justify-center text-[#C3B091] mb-4">
                  <i className={`fas ${edge.icon} text-lg`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">{edge.title}</h3>
                <p className="text-gray-600 text-sm">{edge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#C3B091]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Interested in Investing with SPIDXR?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join us on our journey to revolutionize urban concierge services and create value for customers and investors alike.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                className="bg-white text-[#C3B091] hover:bg-gray-100 font-medium px-8 py-3"
                size="lg"
                onClick={handlePitchDeckRequest}
                data-testid="button-request-pitch-deck-cta"
              >
                <i className="fas fa-envelope mr-2"></i>
                Request Pitch Deck
              </Button>
              <Button 
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium px-8 py-3"
                size="lg"
                onClick={handleScheduleMeeting}
                data-testid="button-schedule-meeting-cta"
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Schedule a Meeting
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
      </div>
    </>
  );
};

export default InvestorsPage;
