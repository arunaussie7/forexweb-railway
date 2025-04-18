import { useState } from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface CustomBotFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomBotForm = ({ isOpen, onClose }: CustomBotFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    strategy: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/custom-bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      setIsSubmitted(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          mobile: '',
          strategy: ''
        });
        setIsSubmitted(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error sending request:', error);
      alert('Sorry, there was an error sending your request. Please try again later.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg relative animate-in fade-in duration-300">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close form"
        >
          <X size={24} />
        </button>
        
        <CardContent className="p-6">
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-semibold mb-6">Request Custom Bot</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-forex-black mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 focus:border-forex-green"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-forex-black mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 focus:border-forex-green"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="mobile" 
                    className="block text-sm font-medium text-forex-black mb-2"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 focus:border-forex-green"
                    placeholder="+1 (234) 567-8900"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="strategy" 
                    className="block text-sm font-medium text-forex-black mb-2"
                  >
                    Your Trading Strategy *
                  </label>
                  <textarea
                    id="strategy"
                    name="strategy"
                    value={formData.strategy}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 focus:border-forex-green"
                    placeholder="Please describe your trading strategy and requirements in detail..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-forex-green text-white py-3 px-6 rounded-lg hover:bg-forex-darkgreen transition-colors duration-300 font-medium"
                >
                  Submit Request
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-forex-green mb-4">
                <svg 
                  className="w-16 h-16 mx-auto"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-forex-gray">
                We've received your request and will get back to you soon.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomBotForm; 