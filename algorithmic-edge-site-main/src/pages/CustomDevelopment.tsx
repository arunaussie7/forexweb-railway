import React from 'react';
import Navbar from '../components/Navbar';
import DevelopmentEcosystem from '../components/DevelopmentEcosystem';
import DevelopmentContactForm from '../components/DevelopmentContactForm';
import Footer from '../components/Footer';

const CustomDevelopment = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        {/* Development Ecosystem Section */}
        <DevelopmentEcosystem />
        
        {/* Contact Form Section */}
        <DevelopmentContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default CustomDevelopment; 