import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Settings, Code, GitBranch } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [, setLocation] = useLocation();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const navigateToPricing = () => {
    setLocation("/pricing");
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img 
                src="/covemind2.png" 
                alt="Covemind" 
                className="h-8 w-48 object-cover"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  Services
                  {isServicesDropdownOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {/* Services Dropdown */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50" ref={servicesDropdownRef}>
                    <div className="px-4 py-2">
                      <div className="text-sm font-medium text-gray-500 mb-3">Our Services</div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Settings className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Automation Captain</div>
                            <div className="text-sm text-gray-600">Strategy-led automation, without full-time cost</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Code className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Software Optimization</div>
                            <div className="text-sm text-gray-600">Select and maximize the right software</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <GitBranch className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Workflow Automation</div>
                            <div className="text-sm text-gray-600">Eliminate bottlenecks and human error</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => scrollToSection("what-we-can-do")}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("pipeline")}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Pipeline
              </button>
              <button
                onClick={() => scrollToSection("toolkit")}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Toolkit
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Book Consultation
              </button>
              <button
                onClick={navigateToPricing}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Pricing
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  Services
                  {isServicesDropdownOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {/* Mobile Services Dropdown */}
                {isServicesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="flex items-start gap-3 p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200 text-sm">Automation Captain</div>
                        <div className="text-xs text-slate-400">Strategy-led automation, without full-time cost</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200 text-sm">Software Optimization</div>
                        <div className="text-xs text-slate-400">Select and maximize the right software</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GitBranch className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200 text-sm">Workflow Automation</div>
                        <div className="text-xs text-slate-400">Eliminate bottlenecks and human error</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => scrollToSection("what-we-can-do")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("pipeline")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Pipeline
              </button>
              <button
                onClick={() => scrollToSection("toolkit")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Toolkit
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium"
              >
                Book Consultation
              </button>
              <button
                onClick={navigateToPricing}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Pricing
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
