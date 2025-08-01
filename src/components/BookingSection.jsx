import React from 'react'

const BookingSection = () => {
  return (
    <section className="bg-black text-white pb-10 max-md:m-8">
      <div className="container mx-auto"> 
        <h2 className="text-3xl font-bold mb-8 text-start">Book a Table</h2>
        <hr className='opacity-40 mb-3'/>
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          {/* Number of Guest */}
          <div>
            <label htmlFor="numGuests" className="block text-gray-400 text-sm font-bold mb-2">NUMBER OF GUEST *</label>
            <div className="relative">
              <select
                id="numGuests"
                name="numGuests"
                className="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-600"
              >
                <option>Person</option>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
                <option>5+ Persons</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="selectDate" className="block text-gray-400 text-sm font-bold mb-2">SELECT DATE *</label>
            <div className="relative">
              <input
                type="date"
                id="selectDate"
                name="selectDate"
                className="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-600"
              />
            
            </div>
          </div>

          <div>
            <label htmlFor="selectTime" className="block text-gray-400 text-sm font-bold mb-2">SELECT TIME*</label>
            <div className="relative">
              <select
                id="selectTime"
                name="selectTime"
                className="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-600"
              >
                <option>Time</option> 
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
                <option>06:00 PM</option>
                <option>07:00 PM</option>
                <option>08:00 PM</option>
                <option>09:00 PM</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
              </div>
            </div>
          </div>

         
          <div className="md:col-span-1">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors duration-300 text-lg"
            >
              BOOK RESERVATION
            </button>
          </div>
        </form>
      </div>
    </section>
  
  )
}

export default BookingSection