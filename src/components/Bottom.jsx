import React from 'react'

const Bottom = () => {
  return (
     <div className="bg-[#D9D9D9] text-white w-full py-12 mt-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-white text-sm uppercase tracking-wide">
            BOOK A TABLE FOR YOUR AND FAMILY MEMBERS
          </p>
          <h2 className="text-3xl font-bold  mt-2">
            NEED A TABLE ON COFFEE HOUSE
          </h2>
        </div>
        <button className=" mt-20 font-semibold py-3 px-8 border-white border-2 shadow-md hover:bg-gray-100 transition duration-300 ease-in-out">
          BOOK A TABLE
        </button>
      </div>
  )
}

export default Bottom