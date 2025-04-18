import { Code, Shield, LineChart, GitBranch, Cpu, BarChart4, Lock, Zap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';

const DevelopmentSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="development" className="section-padding bg-forex-lightgray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-premium opacity-70 transform rotate-180 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forex-green/5 rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Development</h2>
          <div className="h-1 w-20 bg-forex-green mx-auto mb-6"></div>
          <p className="text-forex-gray max-w-3xl mx-auto">
            We build custom algorithmic trading solutions tailored to your specific strategy and requirements. 
            Our development process ensures secure, efficient, and profitable trading bots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="premium-card p-8 animate-on-scroll opacity-0 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-forex-green/10 rounded-full flex items-center justify-center mb-6">
              <Code className="text-forex-green" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">MQL Development</h3>
            <p className="text-forex-gray">
              Custom development using the MetaQuotes Language (MQL4/MQL5) for MT4 and MT5 platforms, 
              ensuring compatibility with the most popular trading platforms.
            </p>
          </Card>

          <Card className="premium-card p-8 animate-on-scroll opacity-0 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-forex-green/10 rounded-full flex items-center justify-center mb-6">
              <Lock className="text-forex-green" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Licensing</h3>
            <p className="text-forex-gray">
              Our custom bots come with robust security measures and licensing systems to protect your 
              intellectual property and trading strategy.
            </p>
          </Card>

          <Card className="premium-card p-8 animate-on-scroll opacity-0 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-forex-green/10 rounded-full flex items-center justify-center mb-6">
              <BarChart4 className="text-forex-green" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Backtesting & Optimization</h3>
            <p className="text-forex-gray">
              Comprehensive backtesting across multiple timeframes and market conditions to verify 
              the effectiveness of your trading strategy before deployment.
            </p>
          </Card>
        </div>

        <Card className="premium-card p-8 animate-on-scroll opacity-0">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold mb-8 text-center">Our Development Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Strategy Analysis</h4>
                  <p className="text-forex-gray">
                    We begin by understanding your trading strategy, risk tolerance, and specific requirements.
                    Our team of experts will analyze your trading methodology and suggest improvements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Algorithm Design</h4>
                  <p className="text-forex-gray">
                    Our team designs the algorithm with optimal entry/exit conditions, risk management, and error handling.
                    We create detailed specifications and performance expectations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Development & Testing</h4>
                  <p className="text-forex-gray">
                    We develop and test your bot against historical data to optimize performance.
                    Our rigorous testing process ensures your strategy performs as expected across various market conditions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Deployment & Support</h4>
                  <p className="text-forex-gray">
                    We help you deploy the bot and provide ongoing support and updates as needed.
                    Our team remains available for optimization and adjustments as market conditions evolve.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={scrollToContact}
                className="button-primary shine-effect"
              >
                Request Custom Bot
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DevelopmentSection;
