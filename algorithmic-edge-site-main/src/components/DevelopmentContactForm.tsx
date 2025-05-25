import React, { useState } from 'react';
import { Send } from 'lucide-react';

const DevelopmentContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    strategy: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const subject = `New Custom Development Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Trading Strategy:
${formData.strategy}

---
Sent from TheForexCompany Website Custom Development Form
    `.trim();

    // Open Gmail compose in a new tab
    window.open(
      `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=theforexcompany388@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      strategy: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get Started with Custom Development
          </h2>
          <p className="text-lg text-gray-300">
            Tell us about your trading strategy and requirements. Our team will get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-black rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-900 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 text-white placeholder-gray-400 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-900 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 text-white placeholder-gray-400 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 text-white placeholder-gray-400 transition-colors"
              placeholder="Your phone number (optional)"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="strategy" className="block text-sm font-medium text-gray-200 mb-2">
              Your Strategy
            </label>
            <textarea
              id="strategy"
              name="strategy"
              value={formData.strategy}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-neutral-900 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 text-white placeholder-gray-400 transition-colors resize-none"
              placeholder="Describe your trading strategy and requirements..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-forex-green text-white rounded-lg font-medium transition-all duration-300 hover:bg-forex-darkgreen hover:shadow-lg hover:shadow-forex-green/20 transform hover:-translate-y-0.5"
            >
              Submit Request
              <Send className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DevelopmentContactForm; 