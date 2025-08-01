
const starterMenu = [
  { name: 'Mushroom Arancini', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
  { name: 'Butternut Squash Soup', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
  { name: 'Braised Short Ribs', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
  { name: 'Braised Short Ribs', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
  { name: 'Mushroom Arancini', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
];

const mainDishes = [
  { name: 'Mushroom Arancini', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
  { name: 'Mushroom Arancini', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
  { name: 'Mushroom Arancini', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
  { name: 'Mushroom Arancini', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
  { name: 'Mushroom Arancini', desc: 'Ricotta, goat cheese, beetroot and dukkah.', price: '$15.00' },
];

const HomePageTwoDishes = () => {
  return (
    <section className="w-full flex justify-center items-center py-28 bg-[#F7F7F7]">
      <div className="w-full max-w-5xl bg-[#181818] rounded mx-auto shadow-lg px-2 sm:px-8 py-10 flex flex-col items-center">
        <button className="bg-[#D2411A] text-white text-xs font-semibold rounded px-3 py-1 mb-4">MAKE RESERVATION</button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 text-center tracking-wide">STARTERS &amp; MAIN DISHES</h2>
        <div className="flex flex-col items-center mb-6">
          <span className="w-0.5 h-6 bg-[#D2411A] mb-2" />
          <span className="flex gap-1">
            <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
            <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
            <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
            <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          </span>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 mt-6">
         
          <div className="flex-1 px-2 md:px-6 border-r border-[#333]">
            <div className="flex flex-col items-center mb-6">
              <span className="text-xs text-white/70 tracking-widest mb-1">BEST DRINKS</span>
              <h3 className="text-lg font-extrabold text-white tracking-wide border-b-2 border-[#fff2] pb-2 w-full text-center">STARTER MENU</h3>
            </div>
            <ul className="flex flex-col gap-5">
              {starterMenu.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <span className="w-14 h-14 rounded-full bg-[#E5E5E5] inline-block" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-base">{item.name}</span>
                      <span className="text-[#D2411A] font-bold text-base">{item.price}</span>
                    </div>
                    <span className="text-xs text-white/60">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 px-2 md:px-6">
            <div className="flex flex-col items-center mb-6">
              <span className="text-xs text-white/70 tracking-widest mb-1">BEST DRINKS</span>
              <h3 className="text-lg font-extrabold text-white tracking-wide border-b-2 border-[#fff2] pb-2 w-full text-center">MAIN DISHES</h3>
            </div>
            <ul className="flex flex-col gap-5">
              {mainDishes.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <span className="w-14 h-14 rounded-full bg-[#E5E5E5] inline-block" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-base">{item.name}</span>
                      <span className="text-[#D2411A] font-bold text-base">{item.price}</span>
                    </div>
                    <span className="text-xs text-white/60">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageTwoDishes;
