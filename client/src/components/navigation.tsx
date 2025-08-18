import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Argon18
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Services
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
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Book Consultation
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
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Services
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
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
