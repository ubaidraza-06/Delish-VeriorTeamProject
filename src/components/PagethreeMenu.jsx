
 import React, { useState } from 'react';
import Card from './Card';
import pic1 from '../assets/menu1.png'
import burger from '../assets/burgerhome.png'
import cup from '../assets/cuphome.png'
import juice from '../assets/juicehome.png'
const tabs = ['BREAKFAST', 'LUNCH', 'DINNER'];

const foodItems = [
  { id: 1, title: 'Avocado Toast', price: '$8.00', rating: 4, category: 'BREAKFAST' },
  { id: 2, title: 'Pancakes with Maple Syrup', price: '$7.50', rating: 5, category: 'BREAKFAST' },
  { id: 3, title: 'Scrambled Eggs & Toast', price: '$6.00', rating: 4, category: 'BREAKFAST' },
  { id: 4, title: 'Fruit Parfait', price: '$5.00', rating: 5, category: 'BREAKFAST' },
  { id: 5, title: 'Oatmeal Bowl', price: '$4.50', rating: 4, category: 'BREAKFAST' },

  // LUNCH
  { id: 6, title: 'Grilled Chicken Sandwich', price: '$10.00', rating: 4, category: 'LUNCH' },
  { id: 7, title: 'Beef Burger & Fries', price: '$12.00', rating: 5, category: 'LUNCH' },
  { id: 8, title: 'Club Sandwich', price: '$9.50', rating: 4, category: 'LUNCH' },
  { id: 9, title: 'Greek Salad Bowl', price: '$8.00', rating: 4, category: 'LUNCH' },
  { id: 10, title: 'Chicken Quesadilla', price: '$11.00', rating: 5, category: 'LUNCH' },

  // DINNER
  { id: 11, title: 'Grilled Salmon & Veggies', price: '$17.00', rating: 5, category: 'DINNER' },
  { id: 12, title: 'Steak & Mashed Potatoes', price: '$19.00', rating: 5, category: 'DINNER' },
  { id: 13, title: 'Lamb Chops with Herbs', price: '$20.00', rating: 5, category: 'DINNER' },
  { id: 14, title: 'Vegetable Stir Fry', price: '$13.00', rating: 4, category: 'DINNER' },
  { id: 15, title: 'Pasta Carbonara', price: '$14.00', rating: 5, category: 'DINNER' },
  { id: 16, title: 'French Toast with Berries', price: '$7.00', rating: 5, category: 'BREAKFAST' },
{ id: 17, title: 'Cheese Omelette', price: '$6.50', rating: 4, category: 'BREAKFAST' },
{ id: 18, title: 'Banana Smoothie Bowl', price: '$5.50', rating: 4, category: 'BREAKFAST' },
];


const PagethreeMenu = () => {
  const [activeTab, setActiveTab] = useState('BREAKFAST');
  const filteredItems = foodItems.filter(item => item.category === activeTab);

  return (
    <section className="w-full py-16 bg-[#f9f9f9] relative">
      {/* Tabs */}
      <div className='max-sm:hidden'>
      <img
        src={pic1} 
        alt="Background Pattern"
        className="absolute top-20 left-10   z-0"
      />
      {/* Burger Icon */}
      <img
        src={burger}
        alt="Background Burger"
        className="absolute bottom-20 left-10  z-0"
       
      />
      {/* Drink Cup Icon */}
      <img
        src={juice}
        alt="Background Drink"
        className="absolute top-20 right-10   z-0"
       
      />
      {/* Coffee Cup Icon */}
      <img
        src={cup}
        alt="Background Coffee"
        className="absolute bottom-20 right-10  z-0"
       
      />
      </div>
      <div className="flex justify-center  items-center mb-8 space-x-10 text-sm font-semibold uppercase">
       
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2  ${
              activeTab === tab
                ? 'text-black border-b-2 border-red-600'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
        
      </div>

      <div className="max-w-7xl  md:mx-20 px-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
        
       <Card
  title={item.title}
  rating={item.rating}
  price={item.price}
  showStars={true}
/>
        ))}
      </div>

    </section>

  )
}

export default PagethreeMenu