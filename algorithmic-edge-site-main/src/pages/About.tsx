import React from 'react';
import { Eye, Target, Diamond, Bot, Cpu, Brain, ArrowRight, ChevronRight, Sparkles, LineChart, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about the visionary leaders behind The Forex Company
          </p>
        </div>

        {/* Founders Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">Our Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Founder Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="w-56 h-64 mx-auto mt-6 mb-4 rounded-xl overflow-hidden ring-4 ring-blue-100">
                <img
                  src="/arun.jpeg"
                  alt="Arun Chitragar"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Arun Chitragar</h3>
                <p className="text-md font-semibold text-blue-600 mb-4">Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  With 5+ years of trading experience in forex markets, Arun brings expertise in both trading 
                  and technical development. He handles the technology and maintenance aspects of our trading solutions, 
                  ensuring seamless operation and continuous improvement.
                </p>
              </div>
            </div>

            {/* Co-founder Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="w-56 h-64 mx-auto mt-6 mb-4 rounded-xl overflow-hidden ring-4 ring-blue-100">
                <img
                  src="/cofounder.jpeg"
                  alt="Naveenkumar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Naveenkumar</h3>
                <p className="text-md font-semibold text-blue-600 mb-4">Co-founder</p>
                <p className="text-gray-600 leading-relaxed">
                  With over 10 years of experience in the stock market and a strong background in investment banking 
                  and financial analysis, Naveenkumar brings deep market insights and strategic expertise to our trading solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values Section */}
        <div className="max-w-6xl mx-auto py-12 bg-gradient-to-br from-blue-50 to-emerald-50/50 backdrop-blur-sm rounded-3xl px-8 mb-24 shadow-lg border border-blue-100/50">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">A World Where Trading is for Everyone.</p>
            </div>

            {/* Mission Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-emerald-100/50 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <Target className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">Empowering You with Revolutionary Tools.</p>
            </div>

            {/* Values Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100/50 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <Diamond className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">Ethical, Transparent, Customer obsessed</p>
            </div>
          </div>
        </div>

        {/* Trading Bot Technology Section */}
        <div className="max-w-6xl mx-auto mb-24">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-emerald-500/10 rounded-3xl"></div>
            <div className="relative py-12 px-6">
              <h2 className="text-4xl font-bold text-black mb-4">
                Professional Trading Solution
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Enterprise-Grade Algorithmic Trading System
              </p>
            </div>
          </div>

          {/* Premium Product Display */}
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent)] rounded-3xl"></div>
            <div className="relative flex justify-center items-center py-16">
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.08)] p-12 max-w-5xl w-full border border-blue-100">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* Product Visual */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 flex items-center justify-center overflow-hidden group">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent)]"></div>
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(37,99,235,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-gradient"></div>
                    </div>

                    {/* Central Display */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                      {/* Main Visual Container */}
                      <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Outer Ring */}
                        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
                        
                        {/* Inner Ring */}
                        <div className="absolute inset-4 border border-blue-500/30 rounded-full animate-reverse-spin"></div>
                        
                        {/* Center Circle */}
                        <div className="relative w-48 h-48">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-blue-500/30 flex items-center justify-center shadow-2xl">
                            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                              TFC
                            </div>
                          </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-10 h-10 bg-gray-800/80 backdrop-blur rounded-lg flex items-center justify-center border border-blue-500/20">
                            <LineChart className="w-6 h-6 text-blue-500" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                          <div className="w-10 h-10 bg-gray-800/80 backdrop-blur rounded-lg flex items-center justify-center border border-emerald-500/20">
                            <Bot className="w-6 h-6 text-emerald-500" />
                          </div>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-10 h-10 bg-gray-800/80 backdrop-blur rounded-lg flex items-center justify-center border border-blue-500/20">
                            <Brain className="w-6 h-6 text-blue-500" />
                          </div>
                        </div>
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                          <div className="w-10 h-10 bg-gray-800/80 backdrop-blur rounded-lg flex items-center justify-center border border-emerald-500/20">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                          </div>
                        </div>
                      </div>

                      {/* Enterprise Label */}
                      <div className="mt-8">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2"></div>
                          <span className="text-sm font-medium text-blue-400">Enterprise Edition</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-10">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced Trading System</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Enterprise-grade algorithmic trading solution powered by advanced technology, featuring sophisticated risk management and real-time market analysis capabilities.
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-blue-50 p-3 rounded-xl">
                          <Bot className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">Intelligent Algorithms</h4>
                          <p className="text-gray-600">Advanced trading strategies with real-time market adaptation and pattern recognition</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-emerald-50 p-3 rounded-xl">
                          <LineChart className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">Market Analysis</h4>
                          <p className="text-gray-600">Comprehensive technical and fundamental analysis with predictive modeling</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-blue-50 p-3 rounded-xl">
                          <ShieldCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">Risk Management</h4>
                          <p className="text-gray-600">Advanced risk control and portfolio protection with real-time monitoring</p>
                        </div>
                      </div>
                    </div>

                    {/* System Requirements */}
                    <div className="pt-8 border-t border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">System Requirements</h4>
                      <div className="grid grid-cols-2 gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-gray-600">MetaTrader 4/5</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-gray-600">Windows/Mac OS</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-gray-600">4GB RAM</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-gray-600">Stable Internet</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Advanced Trading Process
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              Enterprise-Grade Workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.1)] p-8 h-full border border-blue-100">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Step 1
                </div>
                <div className="mb-6">
                  <LineChart className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Technical Analysis
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Pattern Recognition
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Market Trends
                  </li>
                </ul>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.1)] p-8 h-full border border-emerald-100">
                <div className="absolute -top-4 left-8 bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Step 2
                </div>
                <div className="mb-6">
                  <Brain className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy Execution</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-emerald-500" />
                    Risk Assessment
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-emerald-500" />
                    Position Sizing
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-emerald-500" />
                    Entry/Exit Points
                  </li>
                </ul>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <ChevronRight className="w-8 h-8 text-emerald-600" />
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.1)] p-8 h-full border border-blue-100">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Step 3
                </div>
                <div className="mb-6">
                  <Bot className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Trading</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Real-time Execution
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Performance Monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Risk Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 