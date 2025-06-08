import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Coverage from './components/Coverage';
import TrackOrder from './components/TrackOrder';
import DeliveryForm from './components/DeliveryForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Coverage />
      <TrackOrder />
      <DeliveryForm />
      <Footer />
    </div>
  );
}

export default App;