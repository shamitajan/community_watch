
import React, { useRef, useEffect, useState } from 'react';
import { FileText, Send, MapPin } from 'lucide-react';

const Step = ({ number, title, description, icon: Icon, isVisible, delay }: {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  isVisible: boolean;
  delay: number;
}) => {
  return (
    <div 
      className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-watch-blue/20 rounded-full animate-pulse-soft"></div>
        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-xl relative z-10">
          <Icon className="h-8 w-8 text-watch-blue" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-watch-blue rounded-full text-white font-bold text-sm">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-watch-gray max-w-xs">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-watch-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-watch-blue/10 text-watch-blue rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium">Simple. Secure. Anonymous.</span>
          </div>
          <h2 className="text-watch-dark font-bold mb-4">How It Works</h2>
          <p className="text-watch-gray text-lg">
            Our platform simplifies crime reporting while ensuring your security and anonymity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <Step 
            number={1}
            title="Submit a Report"
            description="Describe the crime & location anonymously or with your details."
            icon={FileText}
            isVisible={isVisible}
            delay={0}
          />
          
          <Step 
            number={2}
            title="Authorities Get Notified"
            description="Verified reports are forwarded to local law enforcement."
            icon={Send}
            isVisible={isVisible}
            delay={200}
          />
          
          <Step 
            number={3}
            title="Track & Stay Updated"
            description="Follow crime alerts and neighborhood updates in real time."
            icon={MapPin}
            isVisible={isVisible}
            delay={400}
          />
        </div>
        
        <div className={`mt-16 flex justify-center transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <a 
            href="#report" 
            className="shadow-button transition-all duration-300 ease-in-out text-white bg-watch-blue hover:bg-blue-600 px-8 py-3 rounded-xl text-lg font-medium"
          >
            Start Reporting
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
