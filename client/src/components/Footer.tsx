import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="py-16 text-[#ffffff] bg-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#C3B091]">SPIDXR</h3>
            <p className="text-gray-400 mb-4">
              AI-powered urban concierge services. The neural network of community living.
            </p>
            <div className="inline-block px-3 py-1 bg-[#C3B091]/20 rounded-full border border-[#C3B091]/40 mb-4">
              <span className="text-[#C3B091] text-xs font-medium">Discovery in all Domains</span>
            </div>
            <p className="text-gray-500 text-sm">
              <i className="fas fa-map-marker-alt mr-2 text-[#C3B091]"></i> 
              Manchester GreenGate, UK
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#C3B091]">Pages</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-[#C3B091] transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-[#C3B091] transition-colors cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-[#C3B091] transition-colors cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <span className="text-gray-400 hover:text-[#C3B091] transition-colors cursor-pointer">How It Works</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-[#C3B091] transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#C3B091]">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#C3B091] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C3B091] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C3B091] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#C3B091]">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/spidxrservices/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#262626] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#C3B091] hover:bg-[#C3B091]/20 transition-all"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/spidxr-innovations/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#262626] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#C3B091] hover:bg-[#C3B091]/20 transition-all"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                <i className="fas fa-envelope mr-2 text-[#C3B091]"></i> info@spidxrservices.co.uk
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} SPIDXR Innovations. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Pioneering AI-powered concierge services from <span className="text-[#C3B091]">Manchester</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;