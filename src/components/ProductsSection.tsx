import { TrendingUp, BarChart, Shield, ArrowRightCircle, Bot, Code, Lock, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import BackgroundVisuals from './BackgroundVisuals';

const ProductsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="relative section-padding">
      <BackgroundVisuals section="products" />
      
      <div className="section-container relative z-10">
        // ... existing code ...

            <CardFooter>
              <div className="flex justify-center w-full">
                <button 
                  onClick={scrollToContact}
                  className="button-primary shine-effect flex items-center group"
                >
                  Contact for More
                  <ArrowRightCircle className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
            </CardFooter>
          </Card>
          
          {/* Product 2 - Trade-X-Pert */}
          // ... existing code ...

            <CardFooter>
              <div className="flex justify-center w-full">
                <button 
                  onClick={scrollToContact}
                  className="button-primary shine-effect flex items-center group"
                >
                  Contact for More
                  <ArrowRightCircle className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        // ... rest of existing code ...
      </div>
    </section>
  );
};

export default ProductsSection; 