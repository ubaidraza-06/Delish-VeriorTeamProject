import React from 'react'
import { CheckCircle } from 'lucide-react';
import bg from '../assets/bg.png'
const TrustedSection = () => {
  return (<>
     <section className="relative w-full min-h-screen   bg-black overflow-hidden flex items-center justify-center"  style={{ backgroundImage: `url(${bg})` }}>
      {/* Orange background box behind the card */}
      <div className="absolute bottom-0 w-full h-1/2 max-sm:hidden bg-[#CB3A1A] z-0" />

      {/* White card container */}
      <div className="relative z-10 text-start bg-white max-sm:w-[200px] border border-dashed border-gray-300 shadow-lg max-w-2xl w-full mr-[200px] mx-4 p-8 md:p-12">
        <button className="bg-red-600 text-white text-xs px-4 py-1  mb-4 font-semibold">
          MAKE RESERVATION
        </button>
        <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
          MOST TRUSTED RESTAURANT
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit rutus sagittis enim malesuada,
          velit sodales hendrerit lacus iaculis porta lobortis sollicitudin quisque dictum
          porttitor donec...
        </p>

        {/* List Items */}
        <ul className="space-y-3">
          {[
            'Analyzing Restaurant Customer Feedback for Enhanced Dining Experiences',
            'Leveraging Customer Reviews to Elevate Your Restaurant’s Reputation',
            'Decoding Online Reviews to Improve Your Restaurant’s Service and Menu',
          ].map((item, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700 bg-[#F4F1EF] p-3">
              <CheckCircle className="text-red-600 w-5 h-5 mt-0.5 mr-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
    </section>
    <div className='bg-[#CB3A1A] max-md:hidden flex p-x-10 pb-10 gap-x-20 text-white italic font-bold'>
<div className='ml-40 flex '>
          <h3 className="text-4xl font-bold ">15</h3>
          <p className="uppercase text-sm mt-2">NEW <br /> COOL PROJECTS</p>
        </div>
        <div className='flex'>
          <h3 className="text-4xl font-bold">15</h3>
          <p className="uppercase text-sm mt-2">TOTAL <br /> AWARDS WIN</p>
        </div>
        <div className='flex'>
          <h3 className="text-4xl font-bold">20</h3>
          <p className="uppercase text-sm mt-2">UNIQUE <br /> FOOD SPECIALITIES</p>
        </div>
        <div className='flex'>
          <h3 className="text-4xl font-bold">69</h3>
          <p className="uppercase text-sm mt-2">HARD <br /> TEAM MEMBERS</p>
        </div>
        </div>
        </>
  )
}

export default TrustedSection