import burger from '../../assets/homePageTwo/burger.png';
import foodimg from '../../assets/homePageTwo/foodimg.png';
import qualityfood from '../../assets/homePageTwo/qualityfood.png';
import supplychaing from '../../assets/homePageTwo/supplychaing.png';

const HomePageTwoFeature = () => {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-20 bg-white">
      <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 md:px-0 gap-8">
       
        <div className="flex-1 flex flex-col items-start max-w-xl">
          <span className="bg-[#CB3A1A] text-white text-xs font-semibold rounded px-3 py-1 mb-4">CRISPY, EVERY BITE TASTE</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111] mb-6 leading-tight">DELICIOUS FOOD FOR<br />HEALTHY LIFE</h2>
          <div className="flex flex-col gap-6 w-full mb-8">
          
            <div className="flex items-start gap-4 relative">
              <img src={qualityfood} alt="Quality Food" className="w-10 h-10 object-contain z-10" />
            
              <div className="flex flex-col items-center justify-center h-12 mx-1">
                <div className="w-px h-full bg-gray-300 relative">
            
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base md:text-lg text-[#111] mb-1">QUALITY FOOD</h4>
                <p className="text-gray-500 text-xs md:text-sm">The wise man therefore always holds Indies matters this principle information</p>
              </div>
            </div>
          
            <div className="flex items-start gap-4 relative">
              <img src={supplychaing} alt="Supply Chain" className="w-10 h-10 object-contain z-10" />
            
              <div className="flex flex-col items-center justify-center h-12 mx-1">
                <div className="w-px h-full bg-gray-300 relative">
                 
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base md:text-lg text-[#111] mb-1">SUPPLY CHAIN MAINTAIN</h4>
                <p className="text-gray-500 text-xs md:text-sm">The wise man therefore always holds Indies matters this principle information</p>
              </div>
            </div>
          </div>
          <button className="border-2 border-[#111] text-[#111] font-bold px-8 py-3 rounded-none text-sm md:text-base relative group overflow-hidden">
            BOOK A TABLE
            <span className="absolute left-0 bottom-0 w-8 h-1 bg-[#111] group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>
      
        <img src={burger} alt="Burger Icon" className="absolute -left-28  top-48 -translate-y-1/2 w-24 hidden  md:block pointer-events-none select-none z-50" />
      
        <div className="flex-1 flex justify-center items-center relative z-10">
          <div  >
            <img src={foodimg} alt="Food" className=" object-cover rounded w-[320px] h-[260px] sm:w-[400px] sm:h-[320px] md:w-[420px] md:h-[340px] lg:w-[652px] lg:h-[478px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageTwoFeature;
