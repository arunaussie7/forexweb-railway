import React from 'react';

const LocationSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[700px]">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span>
                <span className="text-black">Any</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forex-green to-emerald-400">city,</span>
              </span>
              <br />
              <span>
                <span className="text-black">Any</span>{" "}
                <span className="text-blue-500">country,</span>
              </span>
              <br />
              <span>
                <span className="text-black">Any</span>{" "}
                <span className="text-red-500">device</span>
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 font-medium pl-4 border-l-4 border-forex-green">
              Trade from anywhere you want
            </p>
          </div>

          {/* World Map Container */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-10">
              <img 
                src="/worldmap.png" 
                alt="World Map showing global presence" 
                className="w-full h-full object-contain scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 