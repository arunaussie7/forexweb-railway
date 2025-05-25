import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    // Navigate to home page first
    navigate('/');
    
    // Wait for the page to load and then scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your trading journey. All plans include our powerful features and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-forex-green/30 transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-forex-green">$199</span>
                  <span className="text-gray-500 ml-2">/3 months</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Basic Trading Strategy</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>24/5 Customer Support</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Email Support</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Basic Risk Management</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Monthly Performance Reports</span>
                </li>
              </ul>
              <button 
                onClick={scrollToContact}
                className="w-full bg-forex-green hover:bg-forex-darkgreen text-white py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Gold Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-forex-green relative hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-forex-green text-white text-sm font-medium px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-forex-green">$199</span>
                  <span className="text-gray-500 ml-2">/6 months</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">+ 15% Profit Sharing</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Basic Trading Strategy</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>24/5 Customer Support</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Priority Email Support</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Enhanced Risk Management</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Weekly Performance Reports</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Basic Technical Analysis</span>
                </li>
              </ul>
              <button 
                onClick={scrollToContact}
                className="w-full bg-forex-green hover:bg-forex-darkgreen text-white py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Elite Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-forex-green/30 transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-forex-green">$249</span>
                  <span className="text-gray-500 ml-2">/year</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">+ 20% Profit Sharing</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Basic Trading Strategy</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>24/5 Customer Support</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Priority Email & Chat Support</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Advanced Risk Management</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Daily Performance Reports</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Advanced Technical Analysis</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-forex-green mr-2" size={20} />
                  <span>Market Sentiment Analysis</span>
                </li>
              </ul>
              <button 
                onClick={scrollToContact}
                className="w-full bg-forex-green hover:bg-forex-darkgreen text-white py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Plans Include</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-forex-green mb-4">
                <Check className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Equity Protection</h4>
              <p className="text-gray-600">Advanced risk management to protect your capital</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-forex-green mb-4">
                <Check className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">24/5 Support</h4>
              <p className="text-gray-600">Dedicated customer assistance</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-forex-green mb-4">
                <Check className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">MT4 Compatible</h4>
              <p className="text-gray-600">Works seamlessly with MetaTrader 4</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-forex-green mb-4">
                <Check className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Regular Updates</h4>
              <p className="text-gray-600">Continuous improvements and optimizations</p>
            </div>
          </div>
          <button 
            onClick={scrollToContact}
            className="mt-12 bg-forex-green hover:bg-forex-darkgreen text-white py-3 px-8 rounded-lg transition-colors duration-300 text-lg font-medium"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection; 