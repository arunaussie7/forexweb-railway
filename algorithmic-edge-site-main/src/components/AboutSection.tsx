import { Target, ArrowUp, LineChart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent)] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">About Us</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Crafting innovative algorithmic trading solutions for traders worldwide since 2018
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-100">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over five years of trading experience, I began exploring automation and algorithmic strategies alongside my brother, a seasoned financial analyst. While a delayed academic transition gave me an unexpected six-month gap, it became the perfect window to turn vision into reality.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              During that time, we launched our startup, combining my passion for trading with my brother's industry insight. Despite early setbacks in the forex market, we used those lessons to build a more resilient and strategic foundation.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Today, our company reflects that journey — one of learning, persistence, and a shared mission to make trading smarter and more accessible.
            </p>
            
            <div className="flex items-center justify-center gap-8 bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-xl border border-emerald-100/50">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll opacity-0">
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 
                  group-hover:bg-blue-500/30 transition-all duration-300">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-blue-900">Our Vision</h4>
                <p className="text-blue-800/80">
                  To revolutionize forex trading through innovative algorithms that deliver consistent results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4
                  group-hover:bg-purple-500/30 transition-all duration-300">
                  <ArrowUp className="text-purple-600" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-purple-900">Our Mission</h4>
                <p className="text-purple-800/80">
                  Providing transparent, technology-driven solutions that automate trading strategies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="sm:col-span-2 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4
                  group-hover:bg-emerald-500/30 transition-all duration-300">
                  <LineChart className="text-emerald-600" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-emerald-900">Our Expertise</h4>
                <p className="text-emerald-800/80">
                  With over 5 years of combined experience in forex markets and algorithmic development, 
                  our team brings technical expertise and market knowledge to every solution we create.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
