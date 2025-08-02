import React from 'react';
import {PhoneCallIcon,LocationEditIcon,TimerIcon,UserIcon,MailIcon,ArrowRightIcon,SquareChevronDown} from 'lucide-react'
import Bottom from '../components/Bottom'
const OfficeInformation = () => {
  return (<>
    <div className="flex left-[100px]  min-h-screen bg-[#D9D9D9] p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg p-8 max-w-md left-30 w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">OFFICE INFORMATION</h2>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Completely recapitalize 24/7 communities via standards compliant metrics whereas.
        </p>

        {/* Phone Number & Email */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex-shrink-0 mt-1">
            <PhoneCallIcon className='text-[#CB3A1A]'/>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">Phone Number & Email</h3>
            <p className="text-gray-600 text-sm">(+310) 2591 21563</p>
            <p className="text-gray-600 text-sm">help-delish@gmail.com</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-6" />

        {/* Our Office Address */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex-shrink-0 mt-1">
            <LocationEditIcon className='text-[#CB3A1A]'/>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">Our Office Address</h3>
            <p className="text-gray-600 text-sm">258 Dancing Street, Miland Line,</p>
            <p className="text-gray-600 text-sm">HUYI 21563, NewYork</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-6" />

        {/* Official Work Time */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
           <TimerIcon className='text-[#CB3A1A]'/>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">Official Work Time</h3>
            <p className="text-gray-600 text-sm">7:00am - 6:00pm ( Mon - Fri )</p>
            <p className="text-red-500 text-sm font-semibold">Sat, Sun & Holiday Closed</p>
          </div>
        </div>
      </div>
    </div>
     <div className="flex justify-center items-center min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="bg-[#EAEAEA]  shadow-lg p-8 max-w-4xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">LEAVE A MESSAGE</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit curae quis libero erat, justo in habitasse aliquet mi. Condimentum inceptos eu nunc ad nisl fermentum erat gravida
          </p>
        </div>

        <form className="space-y-6">
          {/* Name and Email Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                id="your-name"
                name="your-name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent pr-10"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <UserIcon className='text-gray-400'/>
              </div>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email-address"
                name="email-address"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent pr-10"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <MailIcon className='text-gray-400'/>
              </div>
            </div>
          </div>

          {/* Select Subject */}
          <div className="relative">
            <select
              id="select-subject"
              name="select-subject"
              className="w-full px-4 py-3 border border-gray-300 text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent pr-10 bg-white"
            >
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <SquareChevronDown className='text-gray-400'/>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              id="your-message"
              name="your-message"
              rows="6"
              placeholder="Type Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center space-x-2"
          >
            <span>SUBMIT MESSAGE</span>
            {/* Arrow icon */}
           <ArrowRightIcon/>
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default OfficeInformation;