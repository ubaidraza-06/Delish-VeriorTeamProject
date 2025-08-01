import { Eye } from 'lucide-react';

const stats = [
  { value: 15, label: 'NEW', sub: 'COOL PROJECTS' },
  { value: 15, label: 'TOTAL', sub: 'AWARDS WIN' },
  { value: 20, label: 'UNIQUE', sub: 'FOOD SPECIALITIES' },
  { value: 69, label: 'HARD', sub: 'TEAM MEMBERS' },
];

const gallery = [0, 1, 2, 3, 4];
const activeIdx = 1;

const FoodGallerySection = () => {
  return (
    <section className='mb-8'>
      <div className="bg-[#111] py-0 pt-12 pb-0 px-4 lg:px-20 w-full h-full overflow-hidden">
      <div className="flex flex-wrap  justify-between gap-y-6 gap-x-12 md:gap-x-20 lg:gap-x-32 mb-8 pt-4 pb-8 border-b border-white/20 max-w-7xl mx-auto">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-row items-center gap-3 ">
            <span className="text-4xl md:text-5xl font-bold text-white leading-none">{stat.value}</span>
            <div className='flex flex-col '>
            <span className="text-xs md:text-sm text-white font-semibold uppercase mt-1">{stat.label}</span>
            <span className="text-[10px] md:text-xs text-white/70 uppercase tracking-wide">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:justify-between gap-4 mt-16 ">
        <div className="flex flex-col md:flex-row gap-3">
          <button className="bg-[#CB3A1A] text-white px-4 py-1 rounded text-xs font-semibold mb-2 md:mb-0">VIEW OUR PROJECTS</button>
        </div>
        <div className="flex  justify-between gap-2 self-end md:self-auto">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white">OUR FOOD GALLERY</h2>
          <div className='flex items-center justify-between gap-2'>

          <button className="w-8 h-8 border border-white flex items-center justify-center text-white hover:bg-[#CB3A1A] hover:text-white transition-all"><span className="-mt-0.5">&#8592;</span></button>
          <button className="w-8 h-8 border border-white flex items-center justify-center text-white hover:bg-[#CB3A1A] hover:text-white transition-all"><span className="-mt-0.5">&#8594;</span></button>
          </div>
        </div>
      </div>
      </div>
      <div className="relative px-4 w-full z-10 top-12">
        <div className="absolute left-0 right-0 w-screen bg-white -z-10"/>
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 -mb-32 ">
            {gallery.map((_, idx) => (
              <div
                key={idx}
                className={`aspect-[1/1] flex items-center justify-center  transition-all duration-200 shadow-lg ${idx === activeIdx ? 'bg-[#CB3A1A]' : 'bg-[#ddd]'}`}
              >
                {idx === activeIdx && (
                  <span className="bg-white rounded p-2 flex items-center justify-center">
                    <Eye color="#CB3A1A" size={24} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodGallerySection;
