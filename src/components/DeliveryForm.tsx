import React, { useState } from 'react';
import { PackageCheck, MapPin, ShoppingBag, Weight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const DeliveryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    items: '',
    weight: '',
  });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newFormData = { ...formData, [id]: value };
    setFormData(newFormData);
    
    // Check if all fields have values
    setIsValid(Object.values(newFormData).every(field => field.trim() !== ''));
  };

  const sendToWhatsApp = () => {
    if (!isValid) {
      alert('Please fill in all fields.');
      return;
    }

    const message = `*NXT Delivery Request*\n\nFrom: ${formData.from}\nTo: ${formData.to}\nItems: ${formData.items}\nWeight: ${formData.weight} kg`;
    const encodedMsg = encodeURIComponent(message);
    const phone = '9391332253';

    window.open(`https://wa.me/91${phone}?text=${encodedMsg}`, '_blank');
  };

  return (
    <section id="book" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Book Your Delivery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill in the details below and instantly connect with us on WhatsApp to confirm your delivery.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-secondary p-6 md:p-8 text-white flex flex-col justify-center">
                <div className="mb-8">
                  <PackageCheck className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">NXT Delivery</h3>
                  <p className="opacity-90">
                    Driven by Safety.<br />
                    Delivered with Speed.<br />
                    Fast. Reliable. Secure.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-medium text-lg mb-4 border-b border-white/20 pb-2">Our Founder</h4>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary mr-4">
                      <img 
                        src="./nxt-delivery/founder.png" 
                        alt="Praveen Kumar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Praveen Kumar</p>
                      <p className="text-sm opacity-90">Founder & CEO</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-4 border-b border-white/20 pb-2">We Deliver</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <img 
                      src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg" 
                      alt="Parcel Delivery" 
                      className="w-full h-16 object-cover rounded-lg"
                    />
                    <img 
                      src="https://images.pexels.com/photos/7706409/pexels-photo-7706409.jpeg" 
                      alt="Food Delivery" 
                      className="w-full h-16 object-cover rounded-lg"
                    />
                    <img 
                      src="https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg" 
                      alt="Document Delivery" 
                      className="w-full h-16 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Delivery Details
                </h3>

                <div className="space-y-4">
                  <div className="form-group">
                    <label htmlFor="from" className="block text-gray-700 mb-2 font-medium">
                      <MapPin className="w-4 h-4 inline-block mr-2" />
                      From:
                    </label>
                    <input 
                      type="text" 
                      id="from" 
                      className="input-field" 
                      placeholder="Enter pickup location"
                      value={formData.from}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="to" className="block text-gray-700 mb-2 font-medium">
                      <MapPin className="w-4 h-4 inline-block mr-2" />
                      To:
                    </label>
                    <input 
                      type="text" 
                      id="to" 
                      className="input-field" 
                      placeholder="Enter drop location"
                      value={formData.to}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="items" className="block text-gray-700 mb-2 font-medium">
                      <ShoppingBag className="w-4 h-4 inline-block mr-2" />
                      Items:
                    </label>
                    <input 
                      type="text" 
                      id="items" 
                      className="input-field" 
                      placeholder="List the items"
                      value={formData.items}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="weight" className="block text-gray-700 mb-2 font-medium">
                      <Weight className="w-4 h-4 inline-block mr-2" />
                      Weight (in kg):
                    </label>
                    <input 
                      type="number" 
                      id="weight" 
                      className="input-field" 
                      placeholder="Enter total weight"
                      value={formData.weight}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <button 
                    onClick={sendToWhatsApp}
                    className={`btn btn-primary w-full flex items-center justify-center mt-6 ${
                      !isValid ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    disabled={!isValid}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send to WhatsApp
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By clicking "Send to WhatsApp", you'll be redirected to WhatsApp to confirm your delivery request.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryForm;
