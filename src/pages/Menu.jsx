import React, { useState } from 'react';

const menuItems = [
  {
    name: "Wild Mushroom Arancini",
    price: "$15.00",
    description: "Ricotta, goat cheese, beetroot and dahlia.",
    image: "https://via.placeholder.com/100x100.png?text=Arancini",
  },
  {
    name: "Truffle Mushroom Risotto",
    price: "$15.00",
    description: "Ricotta, goat cheese, beetroot and dahlia.",
    image: "https://via.placeholder.com/100x100.png?text=Risotto",
  },
  {
    name: "Braised Short Ribs",
    price: "$15.00",
    description: "Ricotta, goat cheese, beetroot and dahlia.",
    image: "https://via.placeholder.com/100x100.png?text=ShortRibs",
  },
  {
    name: "Honey Glazed Salmon",
    price: "$15.00",
    description: "Ricotta, goat cheese, beetroot and dahlia.",
    image: "https://via.placeholder.com/100x100.png?text=Salmon",
  },
  {
    name: "Mediterranean Quinoa Salad",
    price: "$15.00",
    description: "Ricotta, goat cheese, beetroot and dahlia.",
    image: "https://via.placeholder.com/100x100.png?text=Salad",
  },
  {
    name: "Roasted Vegetable Platter",
    price: "$15.00",
    description: "Ricotta, goat cheese, beetroot and dahlia.",
    image: "https://via.placeholder.com/100x100.png?text=Vegetables",
  },
];

export default function Menu() {
  const [person, setPerson] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Details: \nPersons: ${person} \nDate: ${date} \nTime: ${time}`);
  };

  const handleDateChange = (e) => {
    const formattedDate =(e.target.value);
    setDate(formattedDate);
  };

  return (
    <div>
      <div className="bg-[#74787C] text-white py-16 relative flex flex-col items-center w-full">
        <h1 className="m-0 text-center text-4xl font-bold z-10 tracking-wide">FOOD MENU PAGE</h1>
        <p className="m-0 text-center text-xs text-gray-400 z-10 tracking-wider uppercase">HOME / MENU</p>

        <h1 
          className="mt-12 text-[80px] font-bold select-none pointer-events-none tracking-widest"
          style={{
            WebkitTextStroke: '2px white',
            color: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            marginTop: '2rem',
          }}
        >
          OUR FOOD MENU
        </h1>
      </div>
<div className="bg-white py-16 w-full">


      <div className="bg-white py-16 w-full">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-4 mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg py-12 shadow-md p-6 flex items-center justify-between text-left">
              
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full mr-6" />
              
              <div className="flex flex-col justify-between flex-grow">
                <div className="flex items-center w-full">
                  <h3 className="text-sm font-semibold text-[#111] mr-4 whitespace-nowrap ">{item.name}</h3>
                  <div className="flex items-center w-full">
                    <div className="border-t border-dashed border-[#CB3A1A] w-4 mr-1" style={{ height: '3px' }}></div>
                    <p className="text-sm text-[#CB3A1A]">{item.price}</p> 
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">{item.description}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
</div>
    
      <div className="bg-[#111] text-white py-12">
        <div className="max-w-6xl mx-auto">

          <form onSubmit={handleSubmit} className="mt-5 flex items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-left mt-15">BOOK A TABLE</h2>
    
            <select
              className="p-2 text-sm rounded-md border border-gray-300 bg-black text-white"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              required
            >
              <option value="" disabled>Person</option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5">5 Persons</option>
            </select>

          
            <input
              type="date"
              className="p-2 text-sm rounded-md border border-gray-300 bg-black text-white"
              value={date}
              onChange={handleDateChange}
              required
            />

            <select
              className="p-2 text-sm rounded-md border border-gray-300 bg-black text-white"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="" disabled>Time</option>
              <option value="11:00 am">11:00 am</option>
              <option value="12:00 pm">12:00 pm</option>
              <option value="1:00 pm">1:00 pm</option>
              <option value="2:00 pm">2:00 pm</option>
              <option value="3:00 pm">3:00 pm</option>
            </select>

            
            <button
              type="submit"
              className=" bg-[#CB3A1A] text-white py-2 px-8 rounded-md text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

<div className="bg-[#ffffff] py-16">
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center mb-8">
      <button className="bg-[#CB3A1A] text-white py-2 px-8 rounded-md text-sm border border-[#CB3A1A] hover:bg-[#f1f1f1]">
        MAKE RESERVATION
      </button>
    </div>
    <div className="relative flex flex-col items-center justify-center mb-8">
      <h2 className="text-center text-4xl font-bold text-[#111] mb-2">
        OUR POPULAR CHEFS
      </h2>
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-[#CB3A1A]"></div>
        <span className="text-[#CB3A1A] mx-4 text-3xl">•</span>
        <div className="flex-grow border-t border-[#CB3A1A]"></div>
      </div>
    </div>
    
    <div className="flex flex-col gap-8 px-4 max-w-4xl mx-auto">
      
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-300 h-64 relative rounded-lg">
          <div className="absolute top-4 left-4 bg-[#CB3A1A] text-white px-3 py-2 rounded text-center">
            <div className="text-xl font-bold">09</div>
            <div className="text-xs">DEC</div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
            <div>
              <div className="text-xs font-semibold text-gray-700">MARKUS DANIEL</div>
              <div className="text-xs text-[#CB3A1A] flex items-center">
                <span className="mr-1">💬</span> 2 COMMENT
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
            HOW RESTAURANTS FOSTER CONNECTIONS AND CREATE MEMORIES
          </h3>
          <button className="text-gray-600 hover:text-[#CB3A1A] font-medium text-sm border border-gray-300 px-4 py-2 rounded">
            READ MORE →
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
            <div>
              <div className="text-xs font-semibold text-gray-700">MARKUS DANIEL</div>
              <div className="text-xs text-[#CB3A1A] flex items-center">
                <span className="mr-1">💬</span> 2 COMMENT
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
            DISCOVERING AFFORDABLE GOURMET EXPERIENCES IN YOUR CITY
          </h3>
          <button className="text-gray-600 hover:text-[#CB3A1A] font-medium text-sm border border-gray-300 px-4 py-2 rounded">
            READ MORE →
          </button>
        </div>
        
        <div className="bg-gray-300 h-64 relative rounded-lg">
          <div className="absolute top-4 left-4 bg-[#CB3A1A] text-white px-3 py-2 rounded text-center">
            <div className="text-xl font-bold">09</div>
            <div className="text-xs">DEC</div>
          </div>
        </div>
      </div>
      
    </div>
   
  </div>
</div>





  </div>
);
}
