import { ArrowDown, ChevronRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import BackgroundVisuals from './BackgroundVisuals';
import TickerStrip from './TickerStrip';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 pb-16 overflow-hidden">
      {/* Background Visuals */}
      <BackgroundVisuals section="hero" />
      
      {/* Ticker Strip */}
      <div className="w-full fixed top-[64px] z-20">
        <div className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="w-full">
            <TickerStrip type="stocks" className="py-4" />
          </div>
        </div>
      </div>
      
      <div className="w-full relative z-10 mt-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium tracking-wide rounded-full bg-forex-green/10 text-forex-green mb-10">
              Algorithmic Trading Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight tracking-wide">
              <div className="text-forex-black whitespace-nowrap mb-6">Automating Success in</div>
              <div className="text-forex-green relative inline-block">
                Forex Trading
                <span className="absolute bottom-1 left-0 w-full h-1 bg-forex-green/20"></span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-forex-gray mb-14 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Maximize profits while minimizing risk with our sophisticated algorithms that eliminate emotional trading decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
              <button 
                onClick={() => scrollToSection('products')}
                className="button-primary group shine-effect flex items-center justify-center px-10 py-4 text-lg tracking-wide"
              >
                Explore Products
                <ChevronRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="button-secondary flex items-center justify-center px-10 py-4 text-lg tracking-wide"
              >
                Contact Us
              </button>
            </div>
            <div className="flex items-center justify-center gap-16 mt-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-forex-green mb-2 tracking-wider">98%</span>
                <span className="text-sm font-medium text-forex-gray tracking-wider">Uptime</span>
              </div>
              <div className="w-px h-14 bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-forex-green mb-2 tracking-wider">250+</span>
                <span className="text-sm font-medium text-forex-gray tracking-wider">Active Users</span>
              </div>
              <div className="w-px h-14 bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-forex-green mb-2 tracking-wider">24/7</span>
                <span className="text-sm font-medium text-forex-gray tracking-wider">Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block animate-fade-down opacity-0" style={{ animationDelay: '0.8s' }}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button 
                onClick={() => scrollToSection('about')} 
                className="animate-bounce bg-white p-3 rounded-full shadow-premium group"
              >
                <ArrowDown className="text-forex-green group-hover:text-forex-darkgreen transition-colors" size={28} />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto">
              <p className="text-sm tracking-wide">Scroll down to learn more</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
