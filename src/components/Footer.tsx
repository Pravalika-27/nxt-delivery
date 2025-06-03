import React from 'react';
import { Package, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src="/WhatsApp Image 2025-06-02 at 11.26.23 PM.jpeg" alt="NXT Delivery Logo" className="h-12 w-12 mr-2" />
              <span className="text-xl font-semibold">NXT Delivery</span>
            </div>
            <p className="text-gray-400 mb-6">
              Fast, reliable and secure delivery service at unbeatable prices. Driven by safety, delivered with speed.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nxt_delivery_/?hl=en" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#coverage" className="text-gray-400 hover:text-primary transition-colors">Coverage Area</a></li>
              <li><a href="#track" className="text-gray-400 hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#book" className="text-gray-400 hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Parcel Delivery</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">E-commerce Delivery</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Food Delivery</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Corporate Delivery</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Document Delivery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 shrink-0" />
                <a href="tel:+919391332253" className="text-gray-400 hover:text-primary transition-colors">+91 93913 32253</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 shrink-0" />
                <a href="mailto:info@nxtdelivery.com" className="text-gray-400 hover:text-primary transition-colors">info@nxtdelivery.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NXT Delivery. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;