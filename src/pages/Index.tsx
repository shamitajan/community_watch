
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import TrustSection from '../components/TrustSection';
import CrimeMap from '../components/CrimeMap';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/layout/Footer';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');
      
      if (anchorElement) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img 
          src="/lovable-uploads/62758b85-523e-4ff8-864d-39087dfd6ed3.png" 
          alt="City landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-watch-dark/30 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <TrustSection />
        <CrimeMap />
        <GetInvolved />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
