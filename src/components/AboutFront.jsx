import React from 'react';
import burger from '../assets/burgerhome.png'
import check from '../assets/check.png'
import book from '../assets/book.png'
import union from '../assets/union.png'
const AboutFront = () => {
  return (
    <div className="flex  justify-center items-center  min-h-screen bg-white py-16 ">
      <div className="max-w-7xl mx-auto px-4 w-[950px] sm:px-6 lg:px-5 flex flex-col lg:flex-row items-start justify-between">
      
        <div className="lg:w-1/2 flex flex-col items-start text-start space-y-8 relative">
         
          <div className="absolute left-[-150px] top-1/2 -translate-y-1/2 ">
            <img src={burger} alt="burger" />

          </div>

          <span className="bg-red-600  text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wider">
            CRISPY, EVERY BITE TASTE
          </span>
          <h1 className=" items-start text-4xl font-bold text-gray-900 leading-tight">
            DELICIOUS FOOD FOR HEALTHY LIFE
          </h1>

          <div className="space-y-6">
           
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
               <img src={check} alt="" />
                 
              </div>
              <img src={union} alt="" />
              <div>
                <h3 className="text-lg  font-semibold text-gray-900">QUALITY FOOD</h3>
                <p className="mt-1 text-gray-600 text-sm">
                  The wise man therefore always holds in this principle information
                </p>
              </div>
            </div>

            {/* Supply Chain Maintain */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
               <img src={book} alt="" />
              </div>
              <img src={union} alt="" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  SUPPLY CHAIN MAINTAIN
                </h3>
                <p className="mt-1 text-gray-600 text-sm">
                  The wise man therefore always holds in this principle information
                </p>
              </div>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition duration-300">
            BOOK A TABLE
          </button>
        </div>


        <div className="lg:w-1/2 w-full mt-12  lg:mt-15 lg:ml-12">
          <div className="bg-[#00000014] border-4 border-white w-auto h-96  shadow-lg">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFront;