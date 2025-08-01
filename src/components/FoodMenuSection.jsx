import { useState } from 'react';

const menuList = [
  { name: 'Braised Short Ribs', desc: 'Non nisi est sit amet facilisis magna', price: 15 },
  { name: 'Roasted Vegetable Platter', desc: 'Non nisi est sit amet facilisis magna', price: 15 },
  { name: 'Classic Caesar Salad', desc: 'Non nisi est sit amet facilisis magna', price: 15 },
  { name: 'Szechuan Beef Stir-Fry', desc: 'Non nisi est sit amet facilisis magna', price: 15 },
  { name: 'Vegan Buddha Bowl', desc: 'Non nisi est sit amet facilisis magna', price: 15 },
  { name: 'Vegan Buddha Bowl', desc: 'Non nisi est sit amet facilisis magna', price: 15 },
];

const foodTabs = ['ALL FOOD', 'BREAKFAST', 'LUNCH', 'DINNER'];

const foodCards = [
  { name: 'Classic Caesar Salad', price: 15, rating: 5 },
  { name: 'Braised Short Ribs', price: 15, rating: 5 },
  { name: 'Chicken Masala', price: 15, rating: 5 },
  { name: 'Chicken Alfredo Pasta', price: 15, rating: 5 },
  { name: 'Vegan Buddha Bowl', price: 15, rating: 5 },
  { name: 'Chocolate Lava Cake', price: 15, rating: 5 },
];

const FoodMenuSection = () => {
  const [activeTab, setActiveTab] = useState('ALL FOOD');

  return (
    <section className="bg-white py-12 px-4 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Top label */}
        <button className="bg-[#CB3A1A] text-white px-4 py-2 rounded text-xs font-semibold mb-4">FOOD MENU</button>
        {/* Heading */}
        <div className='flex items-center justify-between w-full mb-6'>
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 text-[#222]">OUR DELICIOUS FOODS</h2>
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {foodTabs.map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 border text-xs font-semibold  border-[#E5E5E5] bg-white text-[#222] transition-all ${activeTab === tab ? 'border-[#CB3A1A] text-[#CB3A1A] bg-[#FFF5F0]' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Left menu list */}
          <div className="bg-[#F4F4F4]  shadow-sm w-full max-w-md mx-auto lg:mx-0 lg:w-1/3 flex flex-col">
            <div className="h-48 bg-gray-200 mb-0" />
            <div className="divide-y divide-[#E5E5E5]">
              {menuList.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start px-4 py-3">
                  <div>
                    <div className="font-bold text-sm text-[#222] mb-1">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                  <div className="text-[#CB3A1A] text-xs font-semibold mt-1">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right food cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {foodCards.map((card, idx) => (
              <div key={idx} className="bg-[#FFFFFF] border border-[#E5E5E5] flex flex-col items-center justify-between min-h-[180px]">
                <div className="w-full h-32 md:h-36 lg:h-40 bg-gray-200 " />
                <div className="w-full flex flex-col items-center py-3">
                  <div className="flex gap-1 mb-1">
                    {[...Array(card.rating)].map((_, i) => (
                      <span key={i} className="text-[#CB3A1A] text-xs">★</span>
                    ))}
                  </div>
                  <div className="font-semibold text-sm text-[#222] text-center mb-1">{card.name}</div>
                  <div className="text-xs text-[#CB3A1A]">${card.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenuSection;
