import React, { useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const CoverageMap: React.FC = () => {
  useEffect(() => {
    // We'll check if the Leaflet script has been loaded
    if (typeof window.L === 'undefined') {
      return;
    }

    const L = window.L;
    
    // Create the map centered on Hyderabad (example location)
    const map = L.map('coverage-map').setView([17.3850, 78.4867], 11);
    
    // Add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add a marker for the central location
    const centralIcon = L.divIcon({
      html: `<div style="background-color:#25D366; width:14px; height:14px; border-radius:50%; border:3px solid white;"></div>`,
      className: 'custom-div-icon',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
    
    L.marker([17.3850, 78.4867], {icon: centralIcon}).addTo(map)
      .bindPopup("NXT Delivery Hub");
    
    // Add a circle to show the coverage area
    L.circle([17.3850, 78.4867], {
      color: '#25D366',
      fillColor: '#25D366',
      fillOpacity: 0.1,
      radius: 15000 // 15km radius
    }).addTo(map);

    // Cleanup function to remove the map instance when component unmounts
    return () => {
      map.remove();
    };
  }, []);

  // List of areas we serve
  const areasServed = [
    "Warangal", "karimnagar","Hyderabad", "Secunderabad", "Madhapur", "Gachibowli", 
    "HITEC City", "Kondapur", "Kukatpally", "Ameerpet",
    "Banjara Hills", "Jubilee Hills", "Begumpet", "Somajiguda" "Across India"
  ];

  return (
    <section id="coverage" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-primary-light text-primary-dark text-sm font-medium px-4 py-1 rounded-full mb-3">Coverage Area</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Areas We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We currently operate in Hyderabad and surrounding areas, with plans to expand to more cities soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md h-[400px] md:h-[500px]">
              <div id="coverage-map" className="w-full h-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-xl p-6 h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Locations We Cover</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 mb-8">
                {areasServed.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-primary-light/50 rounded-lg">
                <h4 className="font-medium text-primary-dark mb-2">Outside Coverage Area?</h4>
                <p className="text-gray-700 text-sm mb-3">
                  We can still arrange deliveries outside our primary coverage area for an additional fee.
                </p>
                <a 
                  href="https://wa.me/919391332253" 
                  className="text-primary font-medium text-sm hover:underline flex items-center"
                  target="_blank" 
                  rel="noreferrer"
                >
                  Contact us for details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
