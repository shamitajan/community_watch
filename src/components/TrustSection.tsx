
import React, { useRef, useEffect, useState } from 'react';
import { Lock, Shield, Filter, Users } from 'lucide-react';

const TrustFeature = ({ icon: Icon, title, description, isVisible, delay }: {
  icon: React.ElementType;
  title: string;
  description: string;
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
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 flex items-center justify-center bg-watch-blue/10 rounded-full">
            <Icon className="h-6 w-6 text-watch-blue" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-watch-gray text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const TrustSection = () => {
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
    <section id="trust" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="inline-flex items-center bg-watch-blue/10 text-watch-blue rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm font-medium">Why Trust Us?</span>
              </div>
              <h2 className="text-watch-dark font-bold mb-4">Security is our top priority</h2>
              <p className="text-watch-gray text-lg mb-6">
                We've built our platform from the ground up with security and privacy in mind, ensuring your safety while reporting.
              </p>
              
              <div 
                className={`relative mt-10 rounded-xl overflow-hidden transition-all duration-700 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center rounded-xl shadow-lg subtle-rotate overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-watch-dark/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-watch-blue flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white font-medium">Police Chief Johnson</p>
                    </div>
                    <p className="text-white/90 text-sm">
                      "The Community Watch platform has become an essential tool for our department, helping us respond more effectively to community needs."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrustFeature 
              icon={Lock}
              title="100% Anonymous Reporting"
              description="Submit reports without revealing your identity. We don't collect personal data unless you choose to provide it."
              isVisible={isVisible}
              delay={0}
            />
            
            <TrustFeature 
              icon={Shield}
              title="Secure & Encrypted"
              description="All data is protected with end-to-end encryption, ensuring that your information remains confidential and secure."
              isVisible={isVisible}
              delay={100}
            />
            
            <TrustFeature 
              icon={Filter}
              title="Verified Reports Only"
              description="Our AI-powered filtering system removes false reports and ensures that only credible information reaches authorities."
              isVisible={isVisible}
              delay={200}
            />
            
            <TrustFeature 
              icon={Users}
              title="Partnered with Local Authorities"
              description="We work directly with law enforcement agencies to ensure that your reports lead to action and results."
              isVisible={isVisible}
              delay={300}
            />
            
            <div 
              className={`md:col-span-2 glass-card rounded-xl p-8 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-xl font-semibold mb-4">Trusted by communities across the nation</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4">
                {['Chicago PD', 'NYC Safety', 'LA Connect', 'Miami Watch'].map((partner, index) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <Shield className="h-8 w-8 text-watch-blue/70" />
                    </div>
                    <p className="text-watch-gray text-sm font-medium">{partner}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
