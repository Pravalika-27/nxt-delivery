import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Shield, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient text-white pt-24 pb-16 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <img src="/WhatsApp Image 2025-06-02 at 11.26.23 PM copy copy.jpeg" alt="NXT Delivery Logo" className="h-16 w-16 mr-4" />
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-2">NXT Delivery</h1>
                <p className="text-xl text-blue-100">Fast. Reliable. Secure.</p>
              </div>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-100">
              Driven by Safety. Delivered with Speed.
            </h2>
            
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              Experience lightning-fast delivery services across Hyderabad with unbeatable prices. 
              From parcels to food, documents to e-commerce - we deliver it all with complete safety and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#book" className="btn btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Book Delivery Now
              </a>
              <a href="#track" className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600">
                Track Your Order
              </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm text-blue-100">Fast Delivery</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm text-blue-100">On Time</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm text-blue-100">Secure</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm text-blue-100">Rated 5★</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg" 
                alt="Delivery Service" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 mr-4">
                    <img 
                      src="/founder copy copy.png" 
                      alt="Praveen Kumar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Praveen Kumar</p>
                    <p className="text-sm text-gray-600">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;