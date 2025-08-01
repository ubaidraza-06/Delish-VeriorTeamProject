
import fastfoodimg from '../assets/fastfoodimg.png';

const PopularFastFoodSection = () => {
  return (
    <section className="bg-[#393939] py-16 px-4 flex flex-col items-center justify-center text-center">
      <button className="bg-[#CB3A1A] text-white px-4 py-1 rounded text-xs font-semibold mb-6">CRISPY, EVERY BITE TASTE</button>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight relative inline-block">
        LOOKING FOR PO
       <span className="relative inline-block">

        P
          <img src={fastfoodimg} alt="fastfood" className="absolute left-1/2 -translate-x-1/2 lg:top-10 top-7 w-8 h-4 md:w-10 md:h-5 lg:w-12 lg:h-6 object-contain" />
       </span>
        ULAR<br />
      
          FAST FOOD
      </h2>
      <button className="mt-2 px-6 py-2 border border-white text-white text-xs font-semibold flex items-center gap-2 hover:bg-[#CB3A1A] hover:border-[#CB3A1A] transition-all">
        READ MORE
        <span className="ml-2">&rarr;</span>
      </button>
    </section>
  );
};

export default PopularFastFoodSection;
