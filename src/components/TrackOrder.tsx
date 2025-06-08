import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const TrackOrder: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleTrack = () => {
    if (!trackingId.trim()) {
      alert('Please enter a tracking ID');
      return;
    }
    
    // For demo purposes, show an alert. In real implementation, this would query the tracking system
    alert(`Tracking order: ${trackingId}\n\nFor real-time tracking, please contact us on WhatsApp: +91 93913 32253`);
  };

  const trackingSteps = [
    {
      icon: Package,
      title: 'Order Placed',
      description: 'Your delivery request has been received and confirmed.',
      status: 'completed'
    },
    {
      icon: Truck,
      title: 'In Transit',
      description: 'Your package is on the way to the destination.',
      status: 'active'
    },
    {
      icon: CheckCircle,
      title: 'Delivered',
      description: 'Package successfully delivered to the recipient.',
      status: 'pending'
    }
  ];

  return (
    <section id="track" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Track Your Order</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with real-time tracking of your delivery. Enter your tracking ID to see the current status.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your tracking ID (e.g., NXT123456)"
                  className="input-field"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <button
                onClick={handleTrack}
                className="btn btn-primary flex items-center justify-center"
              >
                <Search className="w-4 h-4 mr-2" />
                Track Order
              </button>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <Clock className="w-4 h-4 inline mr-2" />
                For real-time updates and support, contact us on WhatsApp: 
                <a href="https://wa.me/919391332253" className="font-medium hover:underline ml-1">
                  +91 93913 32253
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Delivery Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {trackingSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    step.status === 'completed' ? 'bg-green-100 text-green-600' :
                    step.status === 'active' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-400'
                  }`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrackOrder;