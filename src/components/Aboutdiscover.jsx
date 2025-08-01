import React from 'react';
import Bottom from '../components/Bottom'
const CategorySection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wider mb-4">
            MAKE RESERVATION
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">DISCOVER OUR CATEGORY</h2>
           <div className="w-[1px] lg:ml-[540px] lg:block hidden mb-[20px] h-6 bg-orange-600"></div>
          <div className="flex justify-center space-x-2">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
          </div>
          
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Item 1: Quality Chees */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#D9D9D9] w-full h-64 shadow-md mb-6">
              {/* Image placeholder */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">QUALITY CHEES</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus
            </p>
          </div>

          {/* Category Item 2: Crunchy French Fry */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#D9D9D9] w-full h-64  shadow-md mb-6">
              {/* Image placeholder */}
            </div>
            <h3 className="text-xl  font-bold text-gray-900 mb-2">CRUNCHI FRENCH FRY</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus
            </p>
          </div>

          {/* Category Item 3: 100% Halal Meat */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#D9D9D9] w-full h-64  shadow-md mb-6">
              {/* Image placeholder */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% HALAL MEAT</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;