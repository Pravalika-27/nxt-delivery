import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, MapPin, Clock, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingPlans = [
    {
      name: 'Local Delivery',
      price: '₹50',
      description: 'Within 10km radius',
      features: [
        'Same day delivery',
        'Real-time tracking',
        'SMS notifications',
        'Basic insurance coverage'
      ],
      popular: false
    },
    {
      name: 'Express Delivery',
      price: '₹80',
      description: 'Within 20km radius',
      features: [
        '2-4 hour delivery',
        'Priority handling',
        'Real-time tracking',
        'Full insurance coverage',
        'Photo confirmation'
      ],
      popular: true
    },
    {
      name: 'Premium Delivery',
      price: '₹120',
      description: 'Across Hyderabad',
      features: [
        '1-2 hour delivery',
        'White glove service',
        'Live GPS tracking',
        'Full insurance coverage',
        'Photo & signature confirmation',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the delivery option that best fits your needs and budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`card p-8 relative ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">starting from</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#book" 
                className={`btn w-full text-center ${
                  plan.popular ? 'btn-primary' : 'btn-outline'
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wide Coverage</h3>
            <p className="text-gray-600">Serving all major areas across Hyderabad with expanding coverage.</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Express delivery options available for urgent packages.</p>
          </div>
          <div className="text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Insured</h3>
            <p className="text-gray-600">All packages are insured and handled with utmost care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;