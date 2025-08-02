import { ChevronRight } from 'lucide-react';

const chefs = [
  { name: 'MIKE HARDSON', role: 'CO-FOUNDER' },
  { name: 'KENNETH OLIVER', role: 'CO-FOUNDER' },
  { name: 'QUENTIN SAMUEL', role: 'CO-FOUNDER' },
  { name: 'PATRICK JAMES', role: 'CO-FOUNDER' },
];

const HomePageTwoChefs = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <button className="bg-[#D2411A] text-white text-xs font-semibold rounded px-3 py-1 mb-4">TEAM MEMBERS</button>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111] mb-2 text-center tracking-wide">OUR POPULAR CHEFS</h2>
      <div className="flex flex-col items-center mb-10">
        <span className="w-0.5 h-6 bg-[#D2411A] mb-2" />
        <span className="flex gap-1">
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8">
        {chefs.map((chef, idx) => (
          <div key={chef.name} className="flex flex-col w-[260px] sm:w-[220px] md:w-[240px] lg:w-[260px] bg-whit overflow-hidden">
            {/* Chef image placeholder */}
            <div className="w-full h-[300px] bg-gray-200" />
            {/* Info bar */}
            <div className="flex items-center justify-between bg-[#181818] px-4 py-3">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/70 tracking-widest mb-1">{chef.role}</span>
                <span className="text-white font-extrabold text-base leading-tight">{chef.name}</span>
              </div>
              <button className="bg-[#D2411A] w-7 h-7 flex items-center justify-center rounded-none">
                <ChevronRight className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageTwoChefs;
