
import React, { useEffect, useState } from 'react';
import { AlertCircle, Eye, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [reportsCount, setReportsCount] = useState(10548);
  const [solvedCount, setSolvedCount] = useState(2120);
  
  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      const randomReportIncrease = Math.floor(Math.random() * 3);
      const randomSolvedIncrease = Math.floor(Math.random() * 2);
      
      if (randomReportIncrease > 0) {
        setReportsCount(prev => prev + randomReportIncrease);
      }
      
      if (randomSolvedIncrease > 0 && Math.random() > 0.7) {
        setSolvedCount(prev => prev + randomSolvedIncrease);
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-clip">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-watch-dark/70 via-watch-dark/80 to-watch-dark/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618173745201-8e3bf8978acc?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        {/* Red police light effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-watch-red/5 mix-blend-overlay opacity-60 animate-pulse-soft"></div>
        <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-watch-red/30 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-watch-blue/20 blur-2xl animate-pulse-soft"></div>
      </div>
      
      <div className="container px-6 mx-auto relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-watch-red animate-blink mr-2"></span>
            <p className="text-white/90 text-sm font-medium">Empowering Communities, Ensuring Safety</p>
          </div>
          
          <h1 className="text-white font-bold leading-tight mb-6 animate-fade-in">
            Report Crime Anonymously.<br />Make Your City Safer.
          </h1>
          
          <p className="text-white/80 text-xl mb-10 max-w-2xl animate-fade-in">
            Join a trusted community-driven crime reporting system. Your reports matter. Stay informed, stay safe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto animate-fade-in">
            <a 
              href="#report" 
              className="shadow-button flex-1 sm:flex-none transition-all duration-300 ease-in-out text-white bg-watch-red hover:bg-red-600 px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center justify-center"
            >
              <AlertCircle className="h-5 w-5 mr-2" />
              Report a Crime
            </a>
            <a 
              href="#map" 
              className="shadow-button flex-1 sm:flex-none transition-all duration-300 ease-in-out text-watch-dark bg-white hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center justify-center"
            >
              <Eye className="h-5 w-5 mr-2" />
              View Reports
            </a>
          </div>
          
          <div className="glass-card-dark rounded-2xl py-4 px-8 mb-8 inline-flex items-center space-x-8 animate-fade-in">
            <div className="text-center">
              <p className="text-white/70 text-sm font-medium mb-1">Reports Filed</p>
              <span className="text-white text-2xl font-bold">{reportsCount.toLocaleString()}</span>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div className="text-center">
              <p className="text-white/70 text-sm font-medium mb-1">Cases Solved</p>
              <span className="text-white text-2xl font-bold">{solvedCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#how-it-works" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Learn More</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
