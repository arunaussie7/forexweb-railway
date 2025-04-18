import React, { useState } from 'react';
import { Mail, MessageSquare, Send, ChevronRight, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Show success message
      alert('Thank you for your message. We will get back to you shortly!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    }
  };

  return (
    <div>
      {/* Render your form here */}
    </div>
  );
};

export default ContactSection; 