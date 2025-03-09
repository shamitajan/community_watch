
import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Filter, Bell, Info } from 'lucide-react';

const MapPlaceholder = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-gray-100 rounded-2xl aspect-w-16 aspect-h-9 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-watch-dark/20"></div>
        </div>
        
        {/* Map pins */}
        <div className="absolute top-1/4 left-1/3">
          <div className="relative">
            <div className="absolute -inset-2 bg-watch-red/20 rounded-full animate-pulse-soft"></div>
            <div className="w-6 h-6 bg-watch-red rounded-full flex items-center justify-center relative z-10">
              <MapPin className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-1/4">
          <div className="relative">
            <div className="absolute -inset-2 bg-watch-red/20 rounded-full animate-pulse-soft"></div>
            <div className="w-6 h-6 bg-watch-red rounded-full flex items-center justify-center relative z-10">
              <MapPin className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/3">
          <div className="relative">
            <div className="absolute -inset-2 bg-watch-blue/20 rounded-full animate-pulse-soft"></div>
            <div className="w-6 h-6 bg-watch-blue rounded-full flex items-center justify-center relative z-10">
              <MapPin className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Plus className="h-5 w-5 text-watch-dark" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Minus className="h-5 w-5 text-watch-dark" />
          </button>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-watch-red rounded-full mr-2"></div>
              <span>Recent</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-watch-blue rounded-full mr-2"></div>
              <span>Resolved</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay with coming soon message */}
      <div className="absolute inset-0 bg-watch-dark/60 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center max-w-md px-6 py-8">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-2">Interactive Crime Map</h3>
          <p className="text-white/80 mb-6">
            Our interactive map will be available soon, allowing you to view reported incidents and set up alerts for your area.
          </p>
          <button className="bg-white text-watch-dark font-medium px-6 py-3 rounded-lg shadow-button">
            Get Notified When Available
          </button>
        </div>
      </div>
    </div>
  );
};

// Custom Plus and Minus icons
const Plus = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Minus = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const LiveAlert = ({ alert, isVisible, delay }: { 
  alert: { type: string; location: string; time: string; }; 
  isVisible: boolean;
  delay: number;
}) => {
  return (
    <div 
      className={`flex items-center bg-white shadow-md rounded-lg p-3 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`flex-shrink-0 w-2 h-2 rounded-full ${alert.type === 'Burglary' ? 'bg-watch-red' : 'bg-yellow-500'} mr-3`}></div>
      <div className="flex-grow">
        <p className="text-sm">
          <span className="font-medium">{alert.type}</span>
          <span className="text-watch-gray"> near </span>
          <span className="font-medium">{alert.location}</span>
        </p>
      </div>
      <div className="flex-shrink-0 text-xs text-watch-gray">{alert.time}</div>
    </div>
  );
};

const CrimeMap = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const alerts = [
    { type: 'Burglary', location: 'Downtown', time: '5 mins ago' },
    { type: 'Suspicious Activity', location: 'Oak Hill Park', time: '12 mins ago' },
    { type: 'Burglary', location: 'Main Street', time: '25 mins ago' },
  ];
  
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
    <section id="map" ref={sectionRef} className="py-24 bg-watch-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-watch-blue/10 text-watch-blue rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium">Stay Informed</span>
          </div>
          <h2 className="text-watch-dark font-bold mb-4">Live Crime Map & Alerts</h2>
          <p className="text-watch-gray text-lg">
            Get real-time information about crime incidents in your area and stay updated with alerts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MapPlaceholder isVisible={isVisible} />
          </div>
          
          <div>
            <div 
              className={`glass-card rounded-xl p-6 mb-6 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Live Reports</h3>
                <button className="text-watch-blue">
                  <Filter className="h-4 w-4" />
                </button>
              </div>
              
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <LiveAlert 
                    key={index} 
                    alert={alert} 
                    isVisible={isVisible}
                    delay={300 + index * 100}
                  />
                ))}
              </div>
              
              <div className="mt-5 pt-4 border-t border-gray-100">
                <a href="#" className="text-watch-blue text-sm font-medium flex items-center">
                  <span>View all reports</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            
            <div 
              className={`glass-card rounded-xl p-6 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-watch-blue/10 rounded-full">
                    <Bell className="h-6 w-6 text-watch-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Get Neighborhood Alerts</h3>
                  <p className="text-watch-gray text-sm mb-4">
                    Subscribe to receive email or SMS alerts about crime incidents in your neighborhood.
                  </p>
                  
                  <div className="flex mt-2">
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="flex-grow px-4 py-2 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-watch-blue"
                    />
                    <button className="bg-watch-blue text-white px-4 py-2 rounded-r-lg">
                      Subscribe
                    </button>
                  </div>
                  
                  <div className="flex items-center mt-4 text-xs text-watch-gray">
                    <Info className="h-3 w-3 mr-1" />
                    <span>We'll never share your information with third parties.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrimeMap;
