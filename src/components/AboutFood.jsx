import React from 'react';
import { EyeIcon} from 'lucide-react'
import bread from '../assets/menu1.png'
import cheese from '../assets/discovervector.png'
import juice from '../assets/juicehome.png'
const FoodGallery = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full relative">

        {/* Decorative background elements */}
        <div className="absolute top-10 left-10  hidden lg:block">
         <img src={bread} alt="" />
        </div>

        <div className="absolute top-8 right-10  hidden lg:block">
         <img src={juice} alt="" />
        </div>

        <div className="absolute bottom-[0] left-10  hidden lg:block">
          <img src={cheese} alt="" />
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1  tracking-wider mb-4">
            FOOD GALLERY
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">FOOD GALLERY POSTS</h2>
          <div className="flex justify-center space-x-2">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 m-16 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Red Highlighted Item */}
          <div className="relative  overflow-hidden shadow-lg border-8 border-[#D9D9D9] bg-[#CB3A1AED] h-60 flex items-center justify-center">
           <EyeIcon  className='w-8 h-8 text-[#CB3A1AED] bg-white'/>
             
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 4 4M5 12h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
              />
              <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
            
          </div>

          {/* 5 Gray Containers */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] max-sm:w-full shadow-lg h-60 flex items-center justify-center"
            >
              {/* Optional placeholder */}
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodGallery;