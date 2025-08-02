import { Phone } from 'lucide-react';

const HomePageTwoOpeningTime = () => {
  return (
    <section className="w-full bg-[#1D1F20] relative min-h-[442px] pt-20 pb-0 flex justify-center items-center">
      <div className="bg-[#FFFFFF] absolute left-1/2 -translate-x-1/2 max-w-md w-full sm:w-full lg:mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10
        lg:left-40 lg:translate-x-0 lg:px-6 lg:py-10">
        <div className="w-full flex justify-center">
          <button className="bg-[#D2411A] text-white text-xs  font-semibold rounded px-3 py-1 mb-4 ml-0">MAKE RESERVATION</button>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111] mb-2 text-center tracking-wide">OPENING TIME</h2>
        <div className="flex flex-col items-center mb-6">
          <span className="w-0.5 h-6 bg-[#D2411A] mb-2" />
          <span className="flex gap-1">
            <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
            <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
            <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
            <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          </span>
        </div>
        <div className="w-full border-t border-b border-gray-200 mb-8">
          <div className="flex w-full text-xs font-bold text-[#111] uppercase text-center">
            <div className="w-1/2 py-3 border-r border-gray-200">Monday to Friday</div>
            <div className="w-1/2 py-3">Friday to Sunday</div>
          </div>
          <div className="flex w-full text-2xl font-extrabold text-center">
            <div className="w-1/2 py-3 border-r border-gray-200">10:00</div>
            <div className="w-1/2 py-3">12:00</div>
          </div>
          <div className="flex w-full text-2xl font-extrabold text-center border-t border-gray-200">
            <div className="w-1/2 py-3 border-r border-gray-200">20:00</div>
            <div className="w-1/2 py-3">22:00</div>
          </div>
        </div>
        <button className="flex items-center gap-2 border-2 border-[#D2411A] text-[#D2411A] font-bold px-6 py-2 rounded-none text-base mt-2 hover:bg-[#D2411A] hover:text-white transition-all">
          <Phone className="w-5 h-5" />
          +256 1489 362
        </button>
      </div>
      
    </section>
  );
};

export default HomePageTwoOpeningTime;
