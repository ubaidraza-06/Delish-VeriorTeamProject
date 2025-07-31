import React from 'react'
import {User,Briefcase} from "lucide-react"


const HomethreeNews = () => {

return(
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        {/* Make Reservation Tag */}
        <span className="bg-[#CB3A1A] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
          Make Reservation
        </span>

        {/* Main Heading */}
        <h1 className="mt-4 text-4xl sm:text-4xl font-extrabold text-gray-900 leading-tight text-center">
          LATEST NEWS INSIGHTS
        </h1>

        {/* Dots separator */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="block w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
          <span className="block w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
          <span className="block w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
          <span className="block w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
        </div>
      </div>

      {/* News Cards Section */}
      <div className="flex-grow flex justify-center px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-7xl w-full">
          {/* News Card 1 */}
          <div className="bg-white  md:col-span-1  shadow-md overflow-hidden border border-gray-200">
            <div className="w-full h-48 bg-[#D9D9D9]">
              {/* Placeholder for image */}
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <User />
                  <span>by Smith</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Briefcase />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                How Restaurants Are Adapting to Changing Dietary Trends"
              </h3>
              <a href="#" className="mt-4 inline-flex items-center text-red-500 font-semibold text-sm group">
                LEARN MORE
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-white md:col-span-2 md:ml-9 shadow-md overflow-hidden border border-gray-200">
            <div className="w-full h-48 bg-[#D9D9D9]">
              {/* Placeholder for image */}
            </div>
            <div className="p-6 ">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <User />
                  <span>by Smith</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Briefcase />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                Craftsmanship of Artisanal Foods in Restaurants
              </h3>
              <p className="mt-2 text-gray-600 text-base leading-relaxed line-clamp-3">
                Praesent tempor mollis aliquet rhoncus vestibulum ridiculus vivamus, donec vehicula interdum congue scelerisque duis lacinia, conubia egestas...
              </p>
              <a href="#" className="mt-4 inline-flex items-center text-red-500 font-semibold text-sm group">
                LEARN MORE
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="bg-white md:col-span-1   shadow-md overflow-hidden border border-gray-200">
            <div className="w-full h-48 bg-[#D9D9D9]">

            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <User />
                  <span>by Smith</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Briefcase />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                How Visual Appeal Enhances the Dining Experience"
              </h3>
              <a href="#" className="mt-4 inline-flex items-center text-red-500 font-semibold text-sm group">
                LEARN MORE
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Call-to-Action Section */}
      <div className="bg-[#D9D9D9] text-white w-full py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-white text-sm uppercase tracking-wide">
            BOOK A TABLE FOR YOUR AND FAMILY MEMBERS
          </p>
          <h2 className="text-3xl font-bold  mt-2">
            NEED A TABLE ON COFFEE HOUSE
          </h2>
        </div>
        <button className="  font-semibold py-3 px-8 border-white border-2 shadow-md hover:bg-gray-100 transition duration-300 ease-in-out">
          BOOK A TABLE
        </button>
      </div>
    </div>

  )
}

export default HomethreeNews