
import React, { useState, useEffect } from 'react';
import { Menu, X, Lock, AlertCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Lock className={`h-6 w-6 ${isScrolled ? 'text-watch-blue' : 'text-white'}`} />
                <span className={`ml-2 text-lg font-medium ${isScrolled ? 'text-watch-dark' : 'text-white'}`}>
                  CommunityWatch
                </span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#how-it-works" className={`${isScrolled ? 'text-gray-600 hover:text-watch-blue' : 'text-white/90 hover:text-white'} transition-colors duration-200 px-3 py-2 text-sm font-medium`}>
                How It Works
              </a>
              <a href="#trust" className={`${isScrolled ? 'text-gray-600 hover:text-watch-blue' : 'text-white/90 hover:text-white'} transition-colors duration-200 px-3 py-2 text-sm font-medium`}>
                Why Trust Us
              </a>
              <a href="#map" className={`${isScrolled ? 'text-gray-600 hover:text-watch-blue' : 'text-white/90 hover:text-white'} transition-colors duration-200 px-3 py-2 text-sm font-medium`}>
                Crime Map
              </a>
              <a href="#community" className={`${isScrolled ? 'text-gray-600 hover:text-watch-blue' : 'text-white/90 hover:text-white'} transition-colors duration-200 px-3 py-2 text-sm font-medium`}>
                Get Involved
              </a>
              <a 
                href="#report" 
                className={`ml-4 shadow-button transition-all duration-300 ease-in-out text-white bg-watch-red hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center`}
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                Report
              </a>
            </div>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-600' : 'text-white'} inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="glass-card mx-4 my-2 rounded-xl divide-y divide-gray-200/30">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#how-it-works" className="text-gray-600 hover:text-watch-blue block px-3 py-2 rounded-md text-base font-medium">
              How It Works
            </a>
            <a href="#trust" className="text-gray-600 hover:text-watch-blue block px-3 py-2 rounded-md text-base font-medium">
              Why Trust Us
            </a>
            <a href="#map" className="text-gray-600 hover:text-watch-blue block px-3 py-2 rounded-md text-base font-medium">
              Crime Map
            </a>
            <a href="#community" className="text-gray-600 hover:text-watch-blue block px-3 py-2 rounded-md text-base font-medium">
              Get Involved
            </a>
          </div>
          <div className="px-5 py-4">
            <a 
              href="#report" 
              className="shadow-button w-full flex items-center justify-center transition-all duration-300 ease-in-out text-white bg-watch-red hover:bg-red-600 px-4 py-3 rounded-lg text-base font-medium"
            >
              <AlertCircle className="h-5 w-5 mr-2" />
              Report a Crime
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
