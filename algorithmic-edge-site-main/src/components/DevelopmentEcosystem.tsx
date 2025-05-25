import React from 'react';
import { LineChart, Code2, Laptop2, BarChart3, Rocket, Settings } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const DevelopmentEcosystem = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Software Development Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
            Our development ecosystem is built to deliver <span className="font-semibold">high-performance trading solutions</span> that are reliable, scalable, and 
            completely customized. We follow a structured, client-first approach to ensure your trading ideas are transformed into 
            fully functional software that works seamlessly in real market conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Requirement Analysis */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-forex-green" />
                </div>
                <CardTitle className="text-2xl">Requirement Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Every project starts with a deep understanding of your trading goals, strategies, and target markets. 
                We listen, ask the right questions, and document every detail — from entry/exit logic to preferred 
                platforms and risk parameters.
              </p>
            </CardContent>
          </Card>

          {/* Strategy Design & Logic Mapping */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-forex-green" />
                </div>
                <CardTitle className="text-2xl">Strategy Design & Logic Mapping</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Our experts convert your strategy into clear technical logic. Whether it's indicator-based, price 
                action, or quantitative models, we design the system flow that will drive your bot or trading tool.
              </p>
            </CardContent>
          </Card>

          {/* Custom Software Development */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center">
                  <Laptop2 className="w-6 h-6 text-forex-green" />
                </div>
                <CardTitle className="text-2xl">Custom Software Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-600 leading-relaxed">
                <p className="mb-4">Using the latest technologies and frameworks, we develop:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Trading Bots (Auto, Semi-Auto)</li>
                  <li>Signal Generators</li>
                  <li>Custom Indicators</li>
                  <li>Web or Desktop Dashboards</li>
                  <li>API Integrations (e.g. TradingView, Zerodha, Binance, Fyers)</li>
                </ul>
                <p className="mt-4">Every line of code is written for performance, precision, and reliability.</p>
              </div>
            </CardContent>
          </Card>

          {/* Testing & Validation */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-forex-green" />
                </div>
                <CardTitle className="text-2xl">Testing & Validation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                We run extensive backtesting on historical data and perform live simulations to verify the 
                performance, accuracy, and execution of your system. This phase helps eliminate bugs and fine-tune 
                the logic for real-world market behavior.
              </p>
            </CardContent>
          </Card>

          {/* Deployment & Launch */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-forex-green" />
                </div>
                <CardTitle className="text-2xl">Deployment & Launch</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Once your system is tested and approved, we deploy it to your preferred environment — be it 
                cloud, desktop, mobile, or browser-based. We ensure the setup is smooth, and everything works 
                as expected in live markets.
              </p>
            </CardContent>
          </Card>

          {/* Post-Launch Support & Optimization */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-forex-green" />
                </div>
                <CardTitle className="text-2xl">Post-Launch Support & Optimization</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-600 leading-relaxed">
                <p className="mb-4">Our ecosystem doesn't end at delivery. We provide:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Technical Support & Bug Fixes</li>
                  <li>Strategy Tweaks and Enhancements</li>
                  <li>Performance Monitoring</li>
                  <li>Upgrades as per Market or Broker API Changes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentEcosystem; 