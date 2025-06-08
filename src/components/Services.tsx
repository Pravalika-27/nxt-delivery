import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, ShoppingBag, FileText, Building, Utensils, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Package,
      title: 'Parcel Delivery',
      description: 'Safe and secure delivery of your packages with real-time tracking.',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg'
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce Delivery',
      description: 'Specialized delivery solutions for online businesses and marketplaces.',
      image: 'https://images.pexels.com/photos/7706409/pexels-photo-7706409.jpeg'
    },
    {
      icon: Utensils,
      title: 'Food Delivery',
      description: 'Hot and fresh food delivery from your favorite restaurants.',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg'
    },
    {
      icon: Building,
      title: 'Corporate Delivery',
      description: 'Reliable delivery services for businesses and corporate clients.',
      image: 'https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg'
    },
    {
      icon: FileText,
      title: 'Document Delivery',
      description: 'Secure and confidential delivery of important documents.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg'
    },
    {
      icon: Clock,
      title: 'Express Delivery',
      description: 'Ultra-fast delivery for urgent packages and time-sensitive items.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg'
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive delivery solutions tailored to meet all your needs with unmatched reliability and speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;