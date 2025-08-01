import { Quote, Star } from 'lucide-react';
import img from '../../assets/homePageTwo/customersays.png'
const feedbacks = [
  {
    name: 'KUMAN TUNMAN',
    role: 'WAITER',
    text: 'The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef’s attention to detail. Highly recommend it for anyone looking for a memorable dining experience.',
    rating: 5,
  },
  {
    name: 'MADISON OLIVIA',
    role: 'WAITER',
    text: 'The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef’s attention to detail. Highly recommend it for anyone looking for a memorable dining experience.',
    rating: 5,
  },
];

const HomePageTwoFeedback = () => {
  return (
    <section className="w-full py-16 bg-[#FFF9F6]  bg-repeat relative flex flex-col items-center">
      <button className="bg-[#D2411A] text-white text-xs font-semibold rounded px-3 py-1 mb-4">CLIENTS FEEDBACK</button>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111] mb-2 text-center tracking-wide">WHAT OUR CUSTOMER SAYS</h2>
      <div className="flex flex-col items-center mb-10">
        <span className="w-0.5 h-6 bg-[#D2411A] mb-2" />
        <span className="flex gap-1">
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 px-2 md:px-0">
        {feedbacks.map((fb, idx) => (
          <div key={fb.name} className="bg-white rounded shadow-md max-w-xl w-full flex flex-col p-0 relative border-b-4 border-[#D2411A] overflow-hidden">
            <div className="flex flex-col md:flex-row gap-0 md:gap-6 p-6 pb-2">
              <div className="w-28 h-28 bg-gray-200 rounded mb-4 md:mb-0 md:mr-2 flex-shrink-0" />
              <p className="text-lg text-[#666] leading-relaxed md:pt-2">{fb.text}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between px-6 pb-4 pt-2 gap-2 md:gap-0">
              <div className="flex items-center gap-1 md:gap-2">
                {[...Array(fb.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#D2411A] fill-[#D2411A]" fill="#D2411A" />
                ))}
              </div>
              <div className="flex flex-col md:items-start items-center flex-1 md:ml-6">
                <span className="text-lg font-extrabold text-[#222] uppercase tracking-wide">{fb.name}</span>
                <span className="text-xs text-black font-semibold uppercase tracking-widest">{fb.role}</span>
              </div>
              <div className="flex flex-row gap-4 items-end">
                <img src={img} alt="Customer says" className=" mb-2" />
                <img src={img} alt="Customer says" className=" mb-2" />

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageTwoFeedback;
