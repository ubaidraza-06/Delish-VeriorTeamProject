import categoryimg from "../../assets/homePageTwo/categoryimg.png";

const categories = [
  { label: "TEA & DRINKS", active: true },
  { label: "LUNCH MEAL", active: false },
  { label: "DINNER MEAL", active: false },
  { label: "DESSERTS MENU", active: false },
];

const HomePageTwoCategory = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 md:py-20 bg-white">
      <button className="bg-[#D2411A] text-white text-xs font-semibold rounded px-3 py-1 mb-4">
        MAKE RESERVATION
      </button>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111] mb-2 text-center tracking-wide">
        DISCOVER OUR CATEGORY
      </h2>
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
        {categories.map((cat, idx) => (
          <div key={cat.label} className="flex flex-col items-center group relative">
            <div className="w-[210px] h-[180px] relative flex flex-col items-center mb-2">
             
              <img
                src={categoryimg}
                alt={cat.label}
                className="w-[302px] h-[300px]"
              />
             
              {cat.active ? (
                <>
                
                  <div className="absolute left-0 right-0  -bottom-10 h-0.5 bg-[#D2411A]" />
                
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[72px] w-0.5 h-8 bg-[#D2411A]" />
                </>
              ) : (
                <>  
                  <div className="w-full h-0.5 bg-black absolute left-0 -bottom-10" />
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[72px] w-0.5 h-8 bg-black" />
                </>
              )}
            </div>
            
            <button
              className={`px-4 py-1 border text-xs font-bold tracking-wide uppercase mt-16
      ${
        cat.active
          ? "border-[#D2411A] text-[#D2411A]"
          : "border-black text-black"
      } 
      bg-white transition-all`}
            >
              {cat.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageTwoCategory;
