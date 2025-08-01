const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[90vh] px-2 md:px-8 lg:px-0 bg-[#555050] text-white overflow-hidden">
      <div
        className="relative border-2 border-[#FFFFFF1A] flex items-center justify-center pointer-events-none mx-4 md:mx-8 lg:mx-20 w-full"
        style={{ maxWidth: "100%", boxSizing: "border-box" }}
      >
        <div className="hidden md:flex flex-col items-center absolute -left-14 h-full justify-center z-10">
          <span className="text-xs tracking-widest rotate-[-90deg] whitespace-nowrap opacity-80">
            OPENING HOURS: 18.00 - 02.00
          </span>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto z-20 py-16">
          <div className="text-center w-full">
            <div className="text-lg md:text-xl font-medium mb-2 tracking-widest">
              THE GREAT
            </div>
            <div className="flex items-center justify-center w-full mb-2">
              <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide">
                FLAVORED FOOD
              </span>
            </div>
            <div className="flex items-center justify-center w-full mb-8">
              <span className="hidden md:block w-16 lg:w-24 border-t border-white opacity-30 mx-4"></span>
              <span className="text-lg md:text-2xl font-medium tracking-widest">
                PART OF US
              </span>
              <span className="hidden md:block w-16 lg:w-24 border-t border-white opacity-30 mx-4"></span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <button className="relative text-white px-4 py-2 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              BOOK A TABLE
            </button>
            <button className="relative text-white px-4 py-2 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              VIEW MENU
            </button>
          </div>

        
          <div className="absolute -bottom-4 lg:-bottom-7 flex items-center justify-center gap-4">
            <span className="w-8 lg:w-[55px] lg:h-[55px] h-8 rounded-full bg-[#D9D9D9] border border-white"></span>
            <span className="w-8 lg:w-[55px] lg:h-[55px] h-8 rounded-full bg-[#D9D9D9] border border-white"></span>
            <span className="w-8 lg:w-[55px] lg:h-[55px] h-8 rounded-full bg-[#D9D9D9] border border-white"></span>
          </div>
        </div>

        
        <div className="hidden md:flex flex-col items-center absolute -right-14 h-full justify-center z-10">
          <span className="text-xs tracking-widest rotate-90 whitespace-nowrap opacity-80">
            OPENING HOURS: 18.00 - 02.00
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
