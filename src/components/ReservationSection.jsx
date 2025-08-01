import burger from '../assets/burger.png';
import reservationcardimg from '../assets/reservationcardimg.png';
import reservationrightimg from '../assets/reservationrightimg.png';

const ReservationSection = () => {
  return (
    <section className="relative bg-white py-20 px-2 md:px-8 lg:px-0 flex justify-center overflow-hidden">
      
      <img src={burger} alt="burger" className="absolute left-0 top-12 w-16 h-16 lg:w-28 lg:h-28 object-contain z-0" />
      <img src={reservationrightimg} alt="right" className="absolute right-0 top-20 w-16 h-16 lg:w-28 lg:h-28 object-contain z-0" />
      <div className="w-full max-w-4xl bg-[#F6F6F6] flex flex-col gap-4 lg:flex-row items-center justify-between px-4 md:px-12 py-10 mx-2">
      
        <div className="flex-1 flex flex-col items-center  text-center lg:text-left mb-10 lg:mb-0">
          <button className="bg-[#CB3A1A] text-white px-4 py-1 rounded-md   text-xs font-semibold mb-4">BOOK A TABLE</button>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#222]">MAKE RESERVATION</h2>
          <div className="flex flex-col items-center  gap-2 mb-6">
            <span className="w-1 h-6 border-l border-[#CB3A1A] mb-1"></span>
            <span className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
              <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
              <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
              <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
            </span>
          </div>
          <form className="w-full max-w-xs flex flex-col gap-4">
            <select className="border border-gray-200  px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CB3A1A]">
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
              <option>4 Persons</option>
              <option>5+ Persons</option>
            </select>
            <input type="date" className="border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CB3A1A]" />
            <select className="border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CB3A1A]">
              <option>09:00 am</option>
              <option>10:00 am</option>
              <option>11:00 am</option>
              <option>12:00 pm</option>
              <option>01:00 pm</option>
              <option>02:00 pm</option>
              <option>03:00 pm</option>
              <option>04:00 pm</option>
              <option>05:00 pm</option>
              <option>06:00 pm</option>
              <option>07:00 pm</option>
              <option>08:00 pm</option>
            </select>
            <button type="submit" className="bg-[#CB3A1A] text-white font-semibold py-3  mt-2">BOOK NOW</button>
          </form>
        </div>
     
        <div className="flex-1 flex items-center justify-center w-full">
          <img src={reservationcardimg} alt="reservation card" className="w-full max-w-md h-auto border-8 border-white   bg-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;