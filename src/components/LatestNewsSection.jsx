import { ArrowRight, ArrowUpRight, Command, MessageCircle } from 'lucide-react';

const news = [
  {
    date: '20',
    month: 'Feb',
    category: 'FOOD MENU',
    title: 'HOW TO ENSURE DIRECT FOR THE HASSLE-FREE VISA PROCESS',
    comments: '02 Comments',
  },
  {
    date: '20',
    month: 'Feb',
    category: 'FOOD MENU',
    title: 'HOW TO ENSURE DIRECT FOR THE HASSLE-FREE VISA PROCESS',
    comments: '02 Comments',
  },
  {
    date: '20',
    month: 'Feb',
    category: 'FOOD MENU',
    title: 'HOW TO ENSURE DIRECT FOR THE HASSLE-FREE VISA PROCESS',
    comments: '02 Comments',
  },
];

const LatestNewsSection = () => {
  return (
    <section className="bg-white w-full py-16 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6 md:gap-0">
          <button className="bg-[#CB3A1A] text-white px-4 py-1 rounded text-xs font-semibold w-max">CRISPY, EVERY BITE TASTE</button>
          <button className="border border-black px-6 py-2  text-sm font-semibold flex items-center gap-2 w-max self-end md:self-auto mt-2 md:mt-0 hover:bg-[#CB3A1A] hover:text-white hover:border-[#CB3A1A] transition-all">
            VIEW ALL POSTS <ArrowRight size={18} />
          </button>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#181818] mb-10">LATEST NEWS INSIGHTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="bg-white  shadow-md overflow-hidden flex flex-col">
              <div className="relative bg-gray-200 h-48 md:h-52 lg:h-56 w-full flex items-end">
                <div className="absolute left-0 bottom-0">
                  <div className="flex items-center">
                    <span className="bg-[#CB3A1A] text-white px-4 py-2 text-lg font-bold rounded-tr-full rounded-tl-none rounded-br-none rounded-bl-none leading-none flex items-end">
                      {item.date}
                      <span className="text-xs font-normal ml-1 mb-0.5">{item.month}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="bg-[#F2EDEA] text-xs text-[#393939] px-3 py-1  font-semibold w-max mb-2">{item.category}</span>
                <h3 className="text-base md:text-lg lg:text-xl font-extrabold text-[#181818] mb-4 leading-snug">{item.title}</h3>
                <div className="flex items-center justify-between mt-auto pt-2 text-xs text-[#393939]">
                  <span className="flex items-center gap-1">
                    <span className="text-[#CB3A1A]  rounded-full p-1">
                      <MessageCircle />
                    </span>{' '}
                    {item.comments}
                  </span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
