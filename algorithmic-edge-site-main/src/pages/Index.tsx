import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PerformanceSection from '../components/PerformanceSection';
import LocationSection from '../components/LocationSection';

const Index = () => {
  // Initialize the scroll animation
  useScrollAnimation();
  
  // Set the title
  useEffect(() => {
    document.title = 'The Forex Company - Smart. Secure. Algorithmic.';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PerformanceSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
