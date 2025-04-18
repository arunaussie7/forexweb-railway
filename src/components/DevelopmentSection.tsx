import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CustomBotForm from './CustomBotForm';

const DevelopmentSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="development" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03] pointer-events-none"></div>
      <div className="blob-animation bg-forex-green/10 w-[500px] h-[500px] rounded-full -top-64 -left-64"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Development</h2>
          <div className="h-1 w-20 bg-forex-green mx-auto mb-6"></div>
          <p className="text-forex-gray max-w-3xl mx-auto">
            Need a custom trading solution? Our team of experts will work with you to develop
            a bot that matches your exact trading requirements.
          </p>
        </div>

        <Card className="premium-card animate-on-scroll opacity-0">
          <CardContent className="p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Initial Consultation</h4>
                  <p className="text-forex-gray">
                    We start with a detailed discussion of your trading strategy and requirements.
                    Our team will analyze your needs and propose the best approach for implementation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Strategy Analysis</h4>
                  <p className="text-forex-gray">
                    Our experts will analyze your strategy, identify key components,
                    and create a detailed plan for automation.
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
                onClick={() => setIsFormOpen(true)}
                className="button-primary shine-effect"
              >
                Request Custom Bot
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <CustomBotForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default DevelopmentSection; 