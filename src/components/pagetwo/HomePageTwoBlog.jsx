import { ArrowRight, MessageCircle } from 'lucide-react';

const blogs = [
  {
    date: '09 DEC',
    author: 'MARKUS DANIEL',
    comments: 2,
    title: 'HOW RESTAURANTS FOSTER CONNECTIONS AND CREATE MEMORIES',
    img: null,
  },
  {
    date: '09 DEC',
    author: 'MARKUS DANIEL',
    comments: 2,
    title: 'DISCOVERING AFFORDABLE GOURMET EXPERIENCES IN YOUR CITY',
    img: null,
  },
];

const HomePageTwoBlog = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <button className="bg-[#D2411A] text-white text-xs font-semibold rounded px-3 py-1 mb-4">MAKE RESERVATION</button>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111] mb-2 text-center tracking-wide">LATEST BLOG INSIGHTS</h2>
      <div className="flex flex-col items-center mb-10">
        <span className="w-0.5 h-6 bg-[#D2411A] mb-2" />
        <span className="flex gap-1">
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
          <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
        </span>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
        {/* Blog 1 */}
        <div className="flex flex-col border-b border-[#eee]">
          {/* Image + date */}
          <div className="relative w-full h-[240px] bg-gray-200 flex items-start">
            <div className="absolute top-4 left-4 bg-[#D2411A] text-white text-xs font-bold px-4 py-2 rounded-none text-center leading-tight">
              <div className="text-lg font-extrabold">09</div>
              <div className="text-[10px] font-semibold">DEC</div>
            </div>
          </div>
          {/* Content */}
          <div className=" flex flex-col justify-center px-6 py-6 h-[240px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full inline-block" />
              <span className="text-xs font-bold text-[#222] uppercase tracking-widest">MARKUS DANIEL</span>
              <span className="flex items-center gap-1 text-xs text-[#D2411A] font-bold ml-2">
                <MessageCircle className="w-4 h-4" />
                2 COMMENT
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-extrabold text-[#111] mb-4 leading-snug">DISCOVERING AFFORDABLE GOURMET EXPERIENCES IN YOUR CITY</h3>
            <button className="flex items-center gap-2 border border-[#D2411A] text-[#D2411A] font-bold px-4 py-2 rounded-none text-xs hover:bg-[#D2411A] hover:text-white transition-all w-fit">
              READ MORE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          </div>
        {/* Blog 2 */}
        <div className="flex flex-col-reverse border-b border-r border-[#eee]">
          {/* Image + date */}
          <div className="relative w-full h-[240px] bg-gray-200 flex items-start">
            <div className="absolute top-4 left-4 bg-[#D2411A] text-white text-xs font-bold px-4 py-2 rounded-none text-center leading-tight">
              <div className="text-lg font-extrabold">09</div>
              <div className="text-[10px] font-semibold">DEC</div>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center px-6 py-6 h-[240px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full inline-block" />
              <span className="text-xs font-bold text-[#222] uppercase tracking-widest">MARKUS DANIEL</span>
              <span className="flex items-center gap-1 text-xs text-[#D2411A] font-bold ml-2">
                <MessageCircle className="w-4 h-4" />
                2 COMMENT
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-extrabold text-[#111] mb-4 leading-snug">HOW RESTAURANTS FOSTER CONNECTIONS AND CREATE MEMORIES</h3>
            <button className="flex items-center gap-2 border border-[#D2411A] text-[#D2411A] font-bold px-4 py-2 rounded-none text-xs hover:bg-[#D2411A] hover:text-white transition-all w-fit">
              READ MORE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        </div>
    </section>
  );
};

export default HomePageTwoBlog;
