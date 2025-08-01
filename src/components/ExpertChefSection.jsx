import chefimg from "../assets/chefimg.png";

const chefs = [
  { name: "KUMAN TUNMAN", role: "WAITER" },
  { name: "KUMAN TUNMAN", role: "WAITER" },
  { name: "KUMAN TUNMAN", role: "WAITER" },
];

const ExpertChefSection = () => {
  return (
    <section>
      <div className="relative w-full bg-white pt-16 pb-0 px-4 md:px-8 lg:px-20 overflow-hidden">
        <div className="text-center mb-44">
          <button className="bg-[#CB3A1A] text-white px-4 py-1 rounded text-xs font-semibold mb-4">
            MAKE RESERVATION
          </button>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#222]">
            MEET THE EXPERT CHEF
          </h2>
          <div className="flex flex-col items-center gap-2">
            <span className="w-1 h-6 border-l border-[#CB3A1A] mb-1"></span>
            <span className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
              <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
              <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
              <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[300px] pb-0">
      
        <div className="absolute left-0 right-0 top-1/2 h-1/2 bg-[#111111] z-0" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {chefs.map((chef, idx) => (
            <div
              key={idx}
              className="flex flex-col w-full max-w-xs bg-white rounded-t-md overflow-visible shadow-md border "
              style={{ transform: 'translateY(-25%)', zIndex: 20 }}
            >
              <div className="w-full aspect-[4/5] bg-gray-200 flex items-center justify-center z-10 relative" style={{borderBottomLeftRadius:0,borderBottomRightRadius:0}}>
                <img
                  src={chefimg}
                  alt="Chef"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-[#222] text-white text-center py-4 z-20 relative" style={{borderTopLeftRadius:0,borderTopRightRadius:0}}>
                <div className="font-bold text-base">{chef.name}</div>
                <div className="text-xs text-gray-300 mt-1">{chef.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertChefSection;
