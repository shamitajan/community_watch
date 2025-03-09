
import React, { useRef, useEffect, useState } from 'react';
import { UserCheck, Share2, Heart } from 'lucide-react';

const InvolvementCard = ({ icon: Icon, title, description, buttonText, isVisible, delay }: {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  isVisible: boolean;
  delay: number;
}) => {
  return (
    <div 
      className={`glass-card rounded-xl p-6 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-watch-blue/10 rounded-full">
          <Icon className="h-6 w-6 text-watch-blue" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-watch-gray text-sm mb-6">{description}</p>
      <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-watch-dark font-medium px-4 py-2 rounded-lg shadow-button">
        {buttonText}
      </button>
    </div>
  );
};

const GetInvolved = () => {
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
    <section id="community" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-watch-blue/5 rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-watch-blue/5 rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-watch-blue/10 text-watch-blue rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium">Community Action</span>
          </div>
          <h2 className="text-watch-dark font-bold mb-4">Get Involved</h2>
          <p className="text-watch-gray text-lg">
            Join our mission to create safer communities through active participation and awareness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <InvolvementCard 
            icon={UserCheck}
            title="Become a Verified Reporter"
            description="Join our network of trusted community members who help verify and validate reports."
            buttonText="Apply Now"
            isVisible={isVisible}
            delay={0}
          />
          
          <InvolvementCard 
            icon={Share2}
            title="Spread Awareness"
            description="Share our platform with your community and help others stay informed about local safety."
            buttonText="Share Community Watch"
            isVisible={isVisible}
            delay={100}
          />
          
          <InvolvementCard 
            icon={Heart}
            title="Donate & Support"
            description="Support our mission with a donation to help us expand our reach and improve our services."
            buttonText="Support Our Mission"
            isVisible={isVisible}
            delay={200}
          />
        </div>
        
        <div className={`mt-16 text-center transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          <a 
            href="#" 
            className="shadow-button inline-flex items-center justify-center transition-all duration-300 ease-in-out text-white bg-watch-blue hover:bg-blue-600 px-8 py-3 rounded-xl text-lg font-medium"
          >
            Join The Movement
          </a>
          <p className="mt-4 text-watch-gray text-sm">
            Already a member? <a href="#" className="text-watch-blue">Sign in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
