import React from 'react'
import navvector from '../assets/navvector.png'
import Rectangle from '../assets/Rectangle.png'
const homethreeNav = () => {
  return (
    <header className="bg-black text-white py-4 px-4 md:px-0 relative z-50"> {/* Higher z-index for header */}
      <div className="container mx-auto flex ">
        <div className="flex items-start space-x-2 ">
         <img src={navvector} className='mt-5' alt="" />
          <span className="text-xl font-bold mt-8">DELISH</span>
        </div>

        <nav className="hidden ml-10 md:flex space-x-6 items-center mt-8">
          <a href="#" className="hover:text-gray-300">HOME</a>
          <a href="#" className="hover:text-gray-300 flex items-center">PAGES <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
          <a href="#" className="hover:text-gray-300 flex items-center">SHOP <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
          <a href="#" className="hover:text-gray-300 flex items-center">BLOG <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
          <a href="#" className="hover:text-gray-300">CONTACT</a>
        </nav>
<div className="absolute top-0 right-0 w-full md:w-[450px] h-[400px] md:h-[542px] max-md:h-[100px] bg-[#D9D9D9] z-10 flex flex-col pt-4 md:pt-8 pr-4">
          <div className="flex justify-end space-x-4 mb-4 md:mb-8 mr-4"> {/* Buttons aligned right */}
            
            <button className="bg-white text-black px-5 py-2 border border-white rounded hover:bg-gray-100 transition whitespace-nowrap">
              ORDER ONLINE
            </button>
           
            <button className="bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-700 transition whitespace-nowrap">
              BOOK A TABLE
            </button>
          </div>
         
          <div className="flex-grow flex items-end  justify-center overflow-hidden">
            <img src={Rectangle} alt="Placeholder" className="w-full h-full object-cover" />
          </div>
        </div>
       
        
      </div>
    </header>
  
  )
}

export default homethreeNav