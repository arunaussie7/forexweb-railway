import { Code, Shield, LineChart, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const DevelopmentSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="development" className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-forex-green/20 via-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse transform -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-forex-green/20 via-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse transform translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.07]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-24 animate-on-scroll opacity-0">
          <div className="inline-block relative">
            <span className="absolute -left-6 -top-6">
              <Sparkles className="w-5 h-5 text-forex-green animate-pulse" />
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-forex-green via-emerald-400 to-forex-green animate-gradient bg-300% leading-tight">Custom Development</h2>
            <div className="h-1.5 w-40 bg-gradient-to-r from-forex-green via-emerald-400 to-forex-green rounded-full mx-auto mt-6 animate-gradient bg-300%"></div>
            <span className="absolute -right-6 -bottom-6">
              <Sparkles className="w-5 h-5 text-forex-green animate-pulse" />
            </span>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg md:text-xl leading-relaxed">
            We build custom algorithmic trading solutions tailored to your specific strategy and requirements. 
            Our development process ensures secure, efficient, and profitable trading bots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <Card className="group hover:scale-105 transform transition-all duration-500 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90 hover:from-slate-800 hover:via-slate-800/90 hover:to-slate-900 border-forex-green/20 hover:border-forex-green/40 backdrop-blur-xl animate-on-scroll opacity-0 rounded-2xl hover:shadow-lg hover:shadow-forex-green/10">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-forex-green/20 to-forex-green/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                <Code className="text-forex-green w-10 h-10 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-forex-green transition-colors duration-300">MQL Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Custom development using the MetaQuotes Language (MQL4/MQL5) for MT4 and MT5 platforms, 
                ensuring compatibility with the most popular trading platforms.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transform transition-all duration-500 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90 hover:from-slate-800 hover:via-slate-800/90 hover:to-slate-900 border-forex-green/20 hover:border-forex-green/40 backdrop-blur-xl animate-on-scroll opacity-0 rounded-2xl hover:shadow-lg hover:shadow-forex-green/10">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-forex-green/20 to-forex-green/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                <Shield className="text-forex-green w-10 h-10 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-forex-green transition-colors duration-300">Risk Management</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced risk management features including stop-loss, take-profit, 
                and position sizing to protect your capital.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transform transition-all duration-500 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90 hover:from-slate-800 hover:via-slate-800/90 hover:to-slate-900 border-forex-green/20 hover:border-forex-green/40 backdrop-blur-xl animate-on-scroll opacity-0 rounded-2xl hover:shadow-lg hover:shadow-forex-green/10">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-forex-green/20 to-forex-green/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                <LineChart className="text-forex-green w-10 h-10 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-forex-green transition-colors duration-300">Performance Testing</h3>
              <p className="text-gray-300 leading-relaxed">
                Rigorous backtesting and optimization using historical data to ensure 
                reliable performance across different market conditions.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90 border-forex-green/20 backdrop-blur-xl animate-on-scroll opacity-0 rounded-2xl hover:shadow-xl hover:shadow-forex-green/10 transition-all duration-500">
          <CardContent className="p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-forex-green via-emerald-400 to-forex-green animate-gradient bg-300%">Our Development Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="group flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-forex-green/20 to-forex-green/5 rounded-2xl flex items-center justify-center mt-1 mr-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                  <span className="text-forex-green font-bold text-2xl group-hover:animate-pulse">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-forex-green transition-colors duration-300">Strategy Analysis</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We begin by understanding your trading strategy, risk tolerance, and specific requirements.
                    Our team of experts will analyze your trading methodology and suggest improvements.
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-forex-green/20 to-forex-green/5 rounded-2xl flex items-center justify-center mt-1 mr-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                  <span className="text-forex-green font-bold text-2xl group-hover:animate-pulse">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-forex-green transition-colors duration-300">Algorithm Design</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Our team designs the algorithm with optimal entry/exit conditions, risk management, and error handling.
                    We create detailed specifications and performance expectations.
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-forex-green/20 to-forex-green/5 rounded-2xl flex items-center justify-center mt-1 mr-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                  <span className="text-forex-green font-bold text-2xl group-hover:animate-pulse">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-forex-green transition-colors duration-300">Development & Testing</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We develop and test your bot against historical data to optimize performance.
                    Our rigorous testing process ensures your strategy performs as expected across various market conditions.
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-forex-green/20 to-forex-green/5 rounded-2xl flex items-center justify-center mt-1 mr-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                  <span className="text-forex-green font-bold text-2xl group-hover:animate-pulse">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-forex-green transition-colors duration-300">Deployment & Support</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We help you deploy the bot and provide ongoing support and updates as needed.
                    Our team remains available for optimization and adjustments as market conditions evolve.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <Link 
                to="/custom-development"
                className="group relative bg-gradient-to-r from-forex-green via-emerald-500 to-forex-green hover:from-emerald-500 hover:via-forex-green hover:to-emerald-500 text-white px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-forex-green/20 inline-flex items-center gap-3 text-lg font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Request Custom Bot
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-forex-green via-emerald-500 to-forex-green opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DevelopmentSection;
