import React from 'react';
import { useState } from 'react';

export default function Shopdetails() {
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setValue(prevValue => prevValue > 1 ? prevValue - 1 : 1); 
  };
  return (
    <div className="bg-white font-[Jost] text-[#111] w-full">
  
  <div className="bg-[#74787C] text-white py-16 flex flex-col items-center w-full">
  <h1 className="m-0 text-center text-4xl font-bold z-10 tracking-wide">SHOP DETAILS</h1>
  <p className="m-0 text-center text-xs text-gray-400 z-10 tracking-wider uppercase">HOME / SHOP DETAILS</p>
  
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
    SHOP DETAILS
  </h1>


</div>


  <div className="w-full py-16 px-4 md:px-6 lg:px-10">
    <div className="flex flex-col lg:flex-row gap-12 w-full">
      
      <div className="flex-1 bg-[#E5E5E5] h-96">
        <span className="absolute top-[560px] left-[200px] bg-[#E2572E] text-white text-xs px-3 py-1 rounded-full">SALE</span>
      </div>

      
      <div className="flex-1">
        
        <div className="text-left ml-[-4px]">
          <h3 className="text-[24px] font-semibold">Grilled Lemon Herb Chicken</h3>

          <div className="mt-2 mb-4 flex items-center">
            <span className="text-[#E2572E] text-sm font-semibold">★★★★★</span>
            <span className="text-sm text-[#666] ml-2">(1 customer review)</span>
          </div>

          <p className="text-xl font-bold mb-4">$260.00 - $360.00</p>
        </div>

        
        <p className="text-[#666] mb-6 border-t border-b border-[#E5E5E5] py-4 text-sm leading-relaxed">
          Eget toxic odio cum habitant egestas conubia turpis phasellus, ante parturient donec duis primis nam faucibus augue malesuada venenatis
        </p>

        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16">
            <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => setValue(Math.max(1, parseInt(e.target.value) || 1))} // Ensure value doesn't go below 1
        className="w-full border border-black bg-black text-white px-2 py-1 appearance-none text-center"
      />
            
            <div className="absolute right-0 top-0 h-full flex flex-col justify-between items-center py-1 pr-1">
              <button className="text-white text-[10px] leading-none hover:opacity-80" type="button" onClick={increment}>▲</button>
              <button className="text-white text-[10px] leading-none hover:opacity-80" type="button" onClick={decrement}>▼</button>
            </div>
          </div>

          <button className="bg-[#E2572E] text-white px-6 py-2 uppercase text-sm font-semibold hover:opacity-90">
            Add to cart
          </button>
        </div>

        
        <div className="text-left ml-[-4px] text-sm text-[#666] space-y-1">
          <p><strong>SKU:</strong> 17</p>
          <p><strong>Categories:</strong> Light Bulb, Table</p>
          <p><strong>Tags:</strong> Illuminate, Textured</p>
        </div>
      </div>
    </div>

    
    <div className="mt-16">
      <div className="flex gap-8 border-b border-[#E5E5E5] mb-4 text-sm font-semibold">
        <button className="border-b-2 border-[#E2572E] pb-2 text-[#111]">Description</button>
        <button className="text-[#999] pb-2">Additional Information</button>
        <button className="text-[#999] pb-2">Review (03)</button>
      </div>
      <p className="text-[#666] leading-7 text-sm">
        Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric success platforms schemas. Distinctively develop future-proof outsourcing without multimedia based portals. Progressively coordinate generation architectures for collaborative solutions. Professionally restore backward-compatible quality vectors before customer directed metrics. Holistically restore technically sound internal or "organic" sources before client-centered human capital underwhelm holistic mindshare for prospective innovation.
        <br /><br />
        Seamlessly target fully tested infrastructures whereas just in time process improvements. Dynamically exploit team driven functionalities via a via global total linkage readily synthesize just in time technology rather than open-source strategic theme areas.
      </p>
    </div>
  </div>
</div>

  );
}
