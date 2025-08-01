import page2heroimg from '../../assets/homePageTwo/page2heroimg.png';
import TopBarPageTwo from './TopBarPageTwo';

const Hero = () => {
  return (
    <div className=' bg-gradient-to-r from-[#111111] to-[#727171] '>
        <div className='container mx-auto'>

      <TopBarPageTwo />
      <section
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center px-24  justify-start overflow-hidden bg-transparent"
        >
        {/* Large red circle bg (right) */}
        <div className="hidden md:block absolute right-[-8vw] bottom-[-10vw] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-[#CB3A1A] opacity-90 z-0" />
        {/* Left image */}
        <img
          src={page2heroimg}
          alt="wrap"
          className="absolute left-[-4vw] bottom-[-2vw] w-44 sm:w-60 md:w-80 lg:w-[25vw] xl:w-[22vw] z-10 opacity-80 select-none pointer-events-none"
          style={{ maxWidth: '22vw', minWidth: '120px' }}
        />
        {/* Content */}
        <div className="relative  container  z-20  flex flex-col items-start justify-center px-2 sm:px-4 py-16 md:py-24 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight">
            <span className="block">LUNCH <span className="text-[#CB3A1A]">&amp;</span></span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-wide">HAPPY HOUR</h2>
          <p className="text-white text-xs sm:text-sm md:text-base mb-8 opacity-80 tracking-widest">CHECK OUR LATEST SEASONAL PROMOTIONS</p>
          <button className="flex items-center gap-2 border border-[#CB3A1A] text-white px-6 py-2  transition-all hover:bg-[#CB3A1A] hover:text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide shadow-md" style={{boxShadow:'0 2px 8px 0 #19171644'}}>
            BOOK A TABLE <span className="ml-2">→</span>
          </button>
        </div>
      </section>
          </div>
    </div>
  );
};

export default Hero;