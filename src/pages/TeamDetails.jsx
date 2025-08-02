import React from 'react';
import TeamExpertImg from '../assets/Team Expert.png';

const TeamDetails = () => {
  return (
    <div style={{ backgroundColor: '#F6F6F6' }}>
      {/* Hero Section */}
      <div className="bg-[#383838] py-20 text-center text-white">
        <h1 className="text-6xl font-semibold mt-12">CHEF DETAILS</h1>
        <p class="text-white text-xl font-light tracking-wider uppercase mt-2 z-10">Home / CHEF DETAILS</p>
        <br />
        <img
          src={TeamExpertImg}
          alt="Reservation Hero"
          className="pl-40 pr-40 opacity-50 mt-12"
        />
      </div>

      {/* Chef Profile Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-100 p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side - Text Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Richard John</h2>
                  <p className="text-primary font-medium mb-6">Founder & CEO</p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  
                  {/* Contact Details Grid */}
                  <div className="bg-gray-100 border border-gray-200 p-6 mb-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                          <svg className="w-4 h-4 text-white" fill="red" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Experience</p>
                          <p className="font-semibold text-black">More Than 10 Years</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                          <svg className="w-4 h-4 text-white" fill="red" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-semibold text-black">info@agency.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                          <svg className="w-4 h-4 text-white" fill="red" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-semibold text-black">+(256) 58621-69581</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                          <svg className="w-4 h-4 text-white" fill="red" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H6V8l8 5 8-5v10z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Fax</p>
                          <p className="font-semibold text-black">+2568145632</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-red-500 text-white px-8 py-4 font-semibold uppercase hover:bg-red-600 transition-colors duration-200">
                    CONTACT ME
                  </button>
                </div>
                
                {/* Right Side - Image Placeholder */}
                <div className="flex items-center justify-center h-full">
                  <div className="w-[28rem] h-[32rem] bg-gray-300 border border-gray-300 flex items-center justify-center">
                    {/* Gray placeholder box - no image */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetails; 