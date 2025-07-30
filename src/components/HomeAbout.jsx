import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded mb-4 hover:bg-orange-700 transition-colors duration-300">
            MAKE RESERVATION
          </button>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-800">
            ENJOY AN EXCEPTIONAL JOURNEY OF TASTE
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla litora proin purus varius, pulvinar diam netus volutpat morbi magnis. Porta semper potenti faucibus blandit torquent ad vehicula sociis integer, feugiat aptent netus gravida enim neque posuere penatibus, sed imperdiet maecenas venenatis scelerisque consequat tempus mauris.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors duration-300 text-lg">
            EXPLORE OUR CATEGORY
          </button>
        </div>

        {/* Right Image Placeholder with Nested Placeholder */}
        <div className="hidden lg:w-1/2 relative w-full h-[300px] md:h-[500px] bg-[#D9D9D9]  md:flex items-center justify-center">
         
          <div className="absolute bottom-14 -left-8 p-7 border-l-0 border-white border-8  md:-left-12 bg-[#D9D9D9]  md:w-60 md:h-80 flex items-center justify-center shadow-lg">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;