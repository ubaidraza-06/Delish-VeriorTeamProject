import { PhoneCall } from 'lucide-react';
import burger from '../assets/burger.png';
import squareimg from '../assets/squareimg.png';
import veg from '../assets/veg.jpg';

const WelcomeSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-[60vh] px-4 md:px-8 lg:px-20 py-12 bg-white overflow-hidden">
     
      <img src={veg} alt="Veg" className="absolute left-0  top-8 w-20  h-20 lg:w-[200px] lg:h-[200px] object-contain z-10" />
     
      <img src={burger} alt="Burger" className="absolute right-0 top-8 w-20 h-20 lg:w-32 lg:h-32 object-contain z-10" />
      <div className="flex flex-col xl:flex-row items-center justify-center w-full max-w-6xl mx-auto z-20">
      
        <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
          <img src={squareimg} alt="Restaurant" className="w-64 h-64 lg:w-80 2xl:w-[570px] 2xl:h-[493px] lg:h-80 object-cover rounded-md bg-gray-200" />
        </div>
       
        <div className="flex flex-col items-start justify-center w-full max-w-xl">
          <button className="bg-[#CB3A1A] text-white px-4 py-2 rounded text-xs font-semibold mb-4">MAKE RESERVATION</button>
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-[#222]">WELCOME TO OUR<br />LUXURY RESTAURANT</h2>
          <p className="text-gray-700 mb-6">
            The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.
          </p>
          <div className="flex items-center gap-3">
            <span className="bg-[#CB3A1A] text-white rounded-full p-2 w-12 h-12 flex items-center justify-center text-lg">
              <PhoneCall />
            </span>
            <div>
              <div className="text-xs text-gray-500">HOTLINE 24/7</div>
              <div className="font-bold text-lg text-[#222]">+256 3254-2568</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;