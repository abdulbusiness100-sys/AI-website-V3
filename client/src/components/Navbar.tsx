import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  onOpenSignup?: () => void;
}

const Navbar = ({ onOpenSignup }: NavbarProps) => {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleGetEarlyAccess = () => {
    closeMobileMenu();
    if (onOpenSignup) {
      onOpenSignup();
    }
  };

  return (
    <header className={cn(
      "fixed top-0 w-full bg-background dark:bg-background z-50 transition-all duration-300",
      scrolled ? "shadow-md py-3" : "shadow-sm py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center cursor-pointer">
                <div className="h-10 flex items-center text-2xl font-bold">
                  <span className="text-[#C3B091]">SPIDXR</span>
                </div>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about">
              <span className={cn("font-medium transition-colors cursor-pointer text-foreground", 
                 location === "/about" ? "text-[#C3B091]" : "hover:text-[#C3B091]")}>
                About
              </span>
            </Link>
            <Link href="/services">
              <span className={cn("font-medium transition-colors cursor-pointer text-foreground", 
                 location === "/services" ? "text-[#C3B091]" : "hover:text-[#C3B091]")}>
                Services
              </span>
            </Link>
            <Link href="/contact">
              <span className={cn("font-medium transition-colors cursor-pointer text-foreground", 
                 location === "/contact" ? "text-[#C3B091]" : "hover:text-[#C3B091]")}>
                Contact
              </span>
            </Link>
            <Link href="/how-it-works">
              <span className={cn("font-medium transition-colors cursor-pointer text-foreground", 
                 location === "/how-it-works" ? "text-[#C3B091]" : "hover:text-[#C3B091]")}>
                How It Works
              </span>
            </Link>
            <Button 
              variant="brand" 
              className="rounded-full"
              onClick={handleGetEarlyAccess}
              data-testid="button-navbar-early-access"
            >
              Get Early Access
            </Button>
            <button 
              onClick={toggleTheme}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-[#C3B091] transition-colors"
              aria-label="Toggle theme"
              data-testid="button-toggle-theme"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </nav>

          <button 
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-[#C3B091]"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className={`md:hidden mt-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-1">
            <Link href="/about">
              <span 
                onClick={closeMobileMenu} 
                className={cn(
                  "block px-3 py-2 rounded-md font-medium cursor-pointer",
                  location === "/about" 
                    ? "bg-[#F5F5F5] text-[#C3B091]" 
                    : "hover:bg-[#F5F5F5] hover:text-[#C3B091]"
                )}
              >
                About
              </span>
            </Link>
            <Link href="/services">
              <span 
                onClick={closeMobileMenu} 
                className={cn(
                  "block px-3 py-2 rounded-md font-medium cursor-pointer",
                  location === "/services" 
                    ? "bg-[#F5F5F5] text-[#C3B091]" 
                    : "hover:bg-[#F5F5F5] hover:text-[#C3B091]"
                )}
              >
                Services
              </span>
            </Link>
            <Link href="/contact">
              <span 
                onClick={closeMobileMenu} 
                className={cn(
                  "block px-3 py-2 rounded-md font-medium cursor-pointer",
                  location === "/contact" 
                    ? "bg-[#F5F5F5] text-[#C3B091]" 
                    : "hover:bg-[#F5F5F5] hover:text-[#C3B091]"
                )}
              >
                Contact
              </span>
            </Link>
            <Link href="/how-it-works">
              <span 
                onClick={closeMobileMenu} 
                className={cn(
                  "block px-3 py-2 rounded-md font-medium cursor-pointer",
                  location === "/how-it-works" 
                    ? "bg-[#F5F5F5] text-[#C3B091]" 
                    : "hover:bg-[#F5F5F5] hover:text-[#C3B091]"
                )}
              >
                How It Works
              </span>
            </Link>
            <span 
              onClick={handleGetEarlyAccess} 
              className="block px-3 py-2 rounded-full font-medium text-white bg-[#C3B091] hover:bg-[#b6a486] mt-4 cursor-pointer text-center"
              data-testid="button-mobile-early-access"
            >
              Get Early Access
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
