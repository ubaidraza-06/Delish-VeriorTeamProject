import React from 'react'
import vector from '../assets/discovervector.png'
 const menuItems = [
    {
      title: "Wild Mushroom Arancini",
      description: "Ricotta, goat cheese, beetroot and dateline.",
      price: "15.00"
    },
    {
      title: "Honey Glazed Salmon",
      description: "Ricotta, goat cheese, beetroot and dateline.",
      price: "15.00"
    },
    {
      title: "Truffle Mushroom Risotto",
      description: "Ricotta, goat cheese, beetroot and dateline.",
      price: "15.00"
    },
    {
      title: "Mediterranean Quinoa Salad",
      description: "Ricotta, goat cheese, beetroot and dateline.",
      price: "15.00"
    },
    {
      title: "Braised Short Ribs",
      description: "Ricotta, goat cheese, beetroot and dateline.",
      price: "15.00"
    },
    {
      title: "Roasted Vegetable Platter",
      description: "Ricotta, goat cheese, beetroot and dateline.",
      price: "15.00"
    },
  ];

  const MenuItem = ({ title, description, price }) => {
  return (
    <div className="flex items-center  justify-between py-4 px-4 border-b bg-white border-gray-200 last:border-b-0">
      <div className="flex items-center">
        {/* Placeholder Circle */}
        <div className="bg-[#D9D9D9] rounded-full w-16 h-16 flex-shrink-0 mr-4"></div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <div className="flex items-center">
        {/* Dotted Line */}
        <div className="hidden sm:block border-b border-dotted border-gray-400 flex-grow mx-4 max-w-[100px] md:max-w-[200px]"></div>
        <span className="text-orange-600 font-bold text-lg">${price}</span>
      </div>
    </div>
  );
};

const Discover = () => {
  return (<>
     <section className="bg-gray-800 text-white py-20 px-4 text-center">
      <div className="container mx-auto">
     
        <p className="text-orange-600 uppercase text-sm font-semibold mb-4">CRISPY, EVERY BITE TASTE</p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          LOOKING FOR POPULAR <br className="md:hidden" /> FAST FOOD
        </h2>
        <button className="bg-transparent border border-white text-white px-6 py-3  flex items-center justify-center mx-auto hover:bg-white hover:text-gray-800 transition-colors duration-300">
          READ MORE
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </section>
     <section className="bg-gray-50 py-16 px-4 relative">
      {/* Left decorative cheese icon */}
      <div className="absolute top-16 left-4 md:left-16 ">
      <img src={vector} alt="" />
        
      </div>

      <div className="container mx-auto text-center relative z-10">
        <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded mb-4 hover:bg-orange-700 transition-colors duration-300">
          MAKE RESERVATION
        </button>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-gray-800">
          DISCOVER OUR CATEGORY
        </h2>
        {/* Decorative dots */}
        <div className="w-[1px] md:ml-[515px] md:block hidden mb-[20px] h-6 bg-orange-600"></div>

        <div className="flex justify-center space-x-2 mb-12">
          <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
          <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
          <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
          <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 text-left">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index} // Use a unique ID from data if available
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Discover