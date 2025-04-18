import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img 
              src="/TheforexCompany.png"
              alt="The Forex Company Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm">
              The Forex Company provides smart, secure algorithmic trading solutions to help traders automate their success in the forex market.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/development" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Risk Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@theforexcompany.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  info@theforexcompany.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} The Forex Company. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 text-gray-600 hover:text-emerald-600 transition-colors flex items-center"
            >
              Back to top <ArrowUp className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 