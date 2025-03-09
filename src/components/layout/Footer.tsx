
import React from 'react';
import { Lock, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-watch-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-white mr-2" />
              <span className="text-lg font-medium">CommunityWatch</span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Empowering communities to take control of their safety through anonymous reporting and real-time alerts.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Our Mission</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">How It Works</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Success Stories</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Safety Tips</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-white/70 mr-2" />
                <a href="mailto:info@communitywatch.org" className="text-white/70 hover:text-white transition-colors text-sm">info@communitywatch.org</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-white/70 mr-2" />
                <a href="tel:+1800SAFECOM" className="text-white/70 hover:text-white transition-colors text-sm">+1 800 SAFE-COM</a>
              </li>
            </ul>
            
            <div className="mt-6 bg-white/10 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Need Immediate Help?</h4>
              <p className="text-white/70 text-sm mb-3">
                For emergencies, always call your local emergency number first.
              </p>
              <a 
                href="tel:911" 
                className="inline-flex items-center justify-center w-full bg-watch-red text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Emergency: 911
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Community Watch. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
