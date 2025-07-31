import React from 'react';

const products = [
  "Beef Bourguignon",
  "Spicy Tuna Tartare",
  "Margherita Pizza",
  "Braised Short Ribs",
  "Vegan Buddha Bowl",
  "Chicken Alfredo Pasta",
  "Classic Caesar Salad",
  "Roasted Vegetable Platter",
  "Pulled Pork Sandwich",
  "Ahi Poke Bowl",
  "Chocolate Lava Cake",
  "Lobster Bisque",
];

export default function Shop() {
  return (
    <div className="bg-[#F8F8F8] font-[Jost] text-[#111]">

      <div className="bg-[#74787C] text-white py-16 relative flex flex-col items-center w-full">
  <h1 className="m-0 text-center text-4xl font-bold z-10 tracking-wide">SHOP PAGE</h1>
  <p className="m-0 text-center text-xs text-gray-400 z-10 tracking-wider uppercase">HOME / SHOP PAGE</p>
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
    OUR SHOP PAGE
  </h1>
</div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm overflow-hidden"
            >
              <div className="h-36 bg-gray-200 w-full" />
              <div className="text-center py-4 px-2">
                <p className="text-[#E2572E] font-semibold text-xs mb-1 tracking-wide">★★★★★</p>
                <h3 className="font-semibold text-sm">{product}</h3>
                <p className="text-sm mt-1 text-[#E2572E] font-bold">$15.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
