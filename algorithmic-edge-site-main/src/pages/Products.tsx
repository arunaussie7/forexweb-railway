import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { TrendingUp, BarChart, Shield, ArrowRightCircle, Bot, Code, Lock, Zap, Clock, Settings, LineChart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Expert Advisors
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
                Choose from our range of sophisticated trading bots, each designed with unique features
                to cater to different trading styles and risk profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* EDITH EA */}
              <Card className="premium-card group hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-forex-green to-emerald-400 rounded-t-xl"></div>
                <CardHeader className="pt-8 pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="mb-4 p-3 bg-forex-green/10 rounded-lg inline-block group-hover:bg-forex-green/20 transition-colors">
                        <Bot className="text-forex-green" size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">EDITH EA</h3>
                    </div>
                    <div className="bg-gradient-to-r from-forex-green to-emerald-400 text-white py-1 px-3 rounded-full text-xs font-medium">Flagship</div>
                  </div>
                  <p className="text-forex-gray mb-6">
                    Our flagship Expert Advisor powered by advanced rule-based algorithms,
                    designed for consistent performance across multiple currency pairs. Perfect for traders
                    seeking reliable, automated trading with built-in risk management.
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <h4 className="text-lg font-medium mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3 
                        group-hover:bg-forex-green/20 transition-colors">
                        <TrendingUp className="text-forex-green" size={14} />
                      </div>
                      <span className="text-forex-gray">Advanced trend detection algorithm with multi-timeframe analysis</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                        group-hover:bg-forex-green/20 transition-colors">
                        <BarChart className="text-forex-green" size={14} />
                      </div>
                      <span className="text-forex-gray">Dynamic risk management (0.5% to 3% per trade)</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                        group-hover:bg-forex-green/20 transition-colors">
                        <Shield className="text-forex-green" size={14} />
                      </div>
                      <span className="text-forex-gray">Smart trailing stop-loss and take-profit system</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                        group-hover:bg-forex-green/20 transition-colors">
                        <Clock className="text-forex-green" size={14} />
                      </div>
                      <span className="text-forex-gray">24/5 automated trading with market session filters</span>
                    </li>
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <div className="flex justify-center w-full">
                    <Link 
                      to="/contact"
                      className="button-primary shine-effect flex items-center group"
                    >
                      Get Started with EDITH
                      <ArrowRightCircle className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
              
              {/* Trade-X-Pert EA */}
              <Card className="premium-card group hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-xl"></div>
                <CardHeader className="pt-8 pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="mb-4 p-3 bg-blue-500/10 rounded-lg inline-block group-hover:bg-blue-500/20 transition-colors">
                        <Code className="text-blue-500" size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Trade-X-Pert EA</h3>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-1 px-3 rounded-full text-xs font-medium">Professional</div>
                  </div>
                  <p className="text-forex-gray mb-6">
                    A sophisticated Expert Advisor for professional traders seeking advanced customization
                    and detailed analytics. Features comprehensive market analysis and flexible trading parameters
                    for optimal performance.
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <h4 className="text-lg font-medium mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                        group-hover:bg-blue-500/20 transition-colors">
                        <LineChart className="text-blue-500" size={14} />
                      </div>
                      <span className="text-forex-gray">Advanced multi-timeframe analysis with custom indicators</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                        group-hover:bg-blue-500/20 transition-colors">
                        <Activity className="text-blue-500" size={14} />
                      </div>
                      <span className="text-forex-gray">Smart compounding with dynamic position sizing</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                        group-hover:bg-blue-500/20 transition-colors">
                        <Settings className="text-blue-500" size={14} />
                      </div>
                      <span className="text-forex-gray">Fully customizable trading parameters and strategies</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                        group-hover:bg-blue-500/20 transition-colors">
                        <Zap className="text-blue-500" size={14} />
                      </div>
                      <span className="text-forex-gray">Real-time performance monitoring and analytics</span>
                    </li>
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <div className="flex justify-center w-full">
                    <Link 
                      to="/contact"
                      className="button-primary shine-effect flex items-center group"
                    >
                      Get Started with Trade-X-Pert
                      <ArrowRightCircle className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Why Choose Our Expert Advisors</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 border border-blue-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-semibold mb-3 text-center text-blue-900">Safe Trading</h4>
                    <p className="text-sm text-blue-800/80 text-center">No dangerous strategies, only proven methods</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 hover:from-purple-500/20 hover:to-purple-600/10 border border-purple-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="text-purple-600" size={24} />
                    </div>
                    <h4 className="font-semibold mb-3 text-center text-purple-900">Smart Analysis</h4>
                    <p className="text-sm text-purple-800/80 text-center">Advanced pattern recognition and market analysis</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 hover:from-emerald-500/20 hover:to-emerald-600/10 border border-emerald-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart className="text-emerald-600" size={24} />
                    </div>
                    <h4 className="font-semibold mb-3 text-center text-emerald-900">Risk Control</h4>
                    <p className="text-sm text-emerald-800/80 text-center">Built-in protection for your trading capital</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 hover:from-amber-500/20 hover:to-amber-600/10 border border-amber-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="text-amber-600" size={24} />
                    </div>
                    <h4 className="font-semibold mb-3 text-center text-amber-900">Regular Updates</h4>
                    <p className="text-sm text-amber-800/80 text-center">Continuous improvements and optimizations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products; 