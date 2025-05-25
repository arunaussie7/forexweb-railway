import React from 'react';

const PerformanceSection = () => {
  const screenshots = [
    '/acc performance/Unknown.jpeg',
    '/acc performance/Unknown-1.jpeg',
    '/acc performance/Unknown-2.jpeg',
    '/acc performance/Unknown-3.jpeg',
    '/acc performance/Unknown-4.jpeg'
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="absolute inset-0 bg-[url('/chart-pattern.svg')] opacity-5" />
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Account Performance
          </h2>
          <p className="text-gray-600 text-lg">Track our real-time trading performance and results</p>
        </div>

        {/* Performance Screenshots Single Row */}
        <div className="flex justify-center items-center gap-4 max-w-[1400px] mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="w-[200px] transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:border-forex-green/30 transition-all duration-300">
                <img 
                  src={screenshot} 
                  alt={`Account Performance ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Performance Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 italic max-w-2xl mx-auto">
            Note: Performance metrics are updated in real-time and vary month by month. 
            These screenshots show our current trading performance across different accounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection; 