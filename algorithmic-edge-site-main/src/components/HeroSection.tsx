import { ArrowDown, ChevronRight, ArrowRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import BackgroundVisuals from './BackgroundVisuals';
import styles from './HeroSection.module.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPricing = () => {
    navigate('/pricing');
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 pb-16 overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1623524713064-257294b0e34b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Professional Forex Trading Background"
          className="absolute w-full h-full object-cover"
          style={{ opacity: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/70"></div>
      </div>
      
      <div className="w-full relative z-10 mt-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium tracking-wide rounded-full bg-forex-green/20 text-forex-green mb-10">
              Algorithmic Trading Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight tracking-wide">
              <div className="text-white whitespace-nowrap mb-6">Automating Success in</div>
              <div className="text-forex-green relative inline-block">
                Forex Trading
                <span className="absolute bottom-1 left-0 w-full h-1 bg-forex-green/20"></span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Maximize profits while minimizing risk with our sophisticated algorithms that eliminate emotional trading decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <button 
                onClick={() => scrollToSection('products')}
                className="group relative px-10 py-4 rounded-full text-lg tracking-wide transition-all duration-500 transform hover:scale-[1.02] shadow-lg overflow-hidden bg-white"
              >
                <div className={`absolute inset-0 bg-white ${styles.animateGradient} group-hover:bg-gray-50`}></div>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_50%)] group-hover:${styles.animateRipple}`}></div>
                <span className="relative flex items-center justify-center text-gray-900 font-semibold">
                  Explore Products
                  <ArrowRight className="ml-3 transition-transform duration-500 group-hover:translate-x-1" size={20} />
                </span>
              </button>
              <button 
                onClick={goToPricing}
                className="group relative px-10 py-4 rounded-full text-lg tracking-wide transition-all duration-500 transform hover:scale-[1.02] overflow-hidden bg-white"
              >
                <div className="absolute inset-0 bg-white group-hover:bg-gray-50 transition-colors duration-500"></div>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(220,220,220,0.3)_0%,_transparent_50%)] group-hover:${styles.animateRipple}`}></div>
                <span className="relative flex items-center justify-center text-gray-900 font-semibold group-hover:text-gray-800 transition-colors duration-500">
                  View Pricing
                  <ArrowRight className="ml-3 transition-transform duration-500 group-hover:translate-x-1" size={20} />
                </span>
              </button>
            </div>
            <div className="flex items-center justify-center gap-16 mt-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-forex-green mb-2 tracking-wider">98%</span>
                <span className="text-sm font-medium text-gray-300 tracking-wider">Uptime</span>
              </div>
              <div className="w-px h-14 bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-forex-green mb-2 tracking-wider">250+</span>
                <span className="text-sm font-medium text-gray-300 tracking-wider">Active Users</span>
              </div>
              <div className="w-px h-14 bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-forex-green mb-2 tracking-wider">24/7</span>
                <span className="text-sm font-medium text-gray-300 tracking-wider">Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block animate-fade-down opacity-0" style={{ animationDelay: '0.8s' }}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button 
                onClick={() => scrollToSection('about')} 
                className="group animate-bounce bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-premium backdrop-blur-sm transition-all duration-500 hover:shadow-forex-green/20"
              >
                <ArrowDown className="text-forex-green group-hover:text-forex-green/80 transition-colors duration-500" size={28} />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto bg-white/10 backdrop-blur-md border-forex-green/20">
              <p className="text-sm tracking-wide text-white/90">Scroll down to learn more</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
