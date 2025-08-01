import feedbackleafimg from '../assets/feedbackleafimg.png';
import feedbackrightimg from '../assets/feedbackrightimg.png';
import fdprofileimg from '../assets/fdprofileimg.png';
import feedbackcardimg from '../assets/feedbackcardimg.png';

const feedbacks = [
  {
    text: `The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.`,
    name: 'Amanda Martin',
    role: 'Food Reviewer',
  },
  {
    text: `The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.`,
    name: 'Amanda Martin',
    role: 'Food Reviewer',
  },
];

const FeedbackSection = () => {
  return (
    <section className="relative bg-white px-4 md:px-8 lg:px-20 pt-72 overflow-hidden">
     
      <img src={feedbackleafimg} alt="leaf" className="absolute left-0 top-96 w-16 h-16 lg:w-28 lg:h-28 object-contain z-0" />
      <img src={feedbackrightimg} alt="right" className="absolute right-0 top-96 w-16 h-16 lg:w-28 lg:h-28 object-contain z-0" />
      <div className="text-center mb-10">
        <button className="bg-[#CB3A1A] text-white px-4 py-1 rounded text-xs font-semibold mb-4">CLIENT TESTIMONIAL</button>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#222]">OUR CUSTOMER FEEDBACKS</h2>
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
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-4xl mx-auto">
        {feedbacks.map((fb, idx) => (
          <div key={idx} className="relative bg-white border border-[#F2C6B3]  p-6 md:p-8 flex-1 min-w-[260px] max-w-xl flex flex-col justify-between shadow-sm">
            <p className="text-gray-700 text-sm mb-6">{fb.text}</p>
            <div className="flex items-center gap-4 mt-auto">
              <img src={fdprofileimg} alt="profile" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <div className="font-bold text-sm text-[#222]">{fb.name}</div>
                <div className="text-xs text-gray-400">{fb.role}</div>
              </div>
              <div className='flex items-center justify-end ml-auto'>
              <img src={feedbackcardimg} alt="quote" className="ml-auto w-10 h-10 object-contain " />
              <img src={feedbackcardimg} alt="quote" className="ml-auto w-10 h-10 object-contain " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;