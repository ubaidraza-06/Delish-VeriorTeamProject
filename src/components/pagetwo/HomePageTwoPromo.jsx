import discountimg from '../../assets/homePageTwo/discountimg.png';
import saveimg from '../../assets/homePageTwo/saveimg.png';

const HomePageTwoPromo = () => {
  return (
    <section className="w-full flex justify-center items-center py-8 md:py-12 bg-white">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-2 lg:gap-4 px-2 sm:px-4">
      
        <div className="flex-1 bg-[#D2411A] mx-auto container  rounded-sm flex flex-col justify-between p-8 min-w-[260px] max-w-sm text-white shadow-md">
          <div>
            <h3 className="text-lg font-extrabold mb-2 tracking-wide">FIND FOOD LOUNGE</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex gap-1">
                <span className="w-2 h-2 bg-white rounded-full inline-block" />
                <span className="w-2 h-2 bg-white rounded-full inline-block" />
                <span className="w-2 h-2 bg-white rounded-full inline-block" />
                <span className="w-2 h-2 bg-white rounded-full inline-block" />
              </span>
              <span className="w-10 h-0.5 bg-white/60 inline-block" />
            </div>
            <div className="text-sm leading-relaxed mb-6">
              18/B, New Ave 1000 New York<br />
              999 888 999 00<br />
              office@webmailfree.com
            </div>
            <div className="text-xs leading-relaxed">
              Mon - Thu: 10 AM - 02 AM<br />
              Fri - Sun: 10 AM - 02 AM
            </div>
          </div>
        </div>
      
        <div className="flex-[2.7] bg-gradient-to-r from-[#181818] to-[#2a1818] rounded-sm flex items-center justify-center relative min-h-[320px] shadow-md overflow-hidden">
       
          <img src={saveimg} alt="Save 50%" className="absolute  top-6 w-20 md:w-24 lg:w-28 z-10" />
        
          <img src={discountimg} alt="Cheese Burgers Promo" className="absolute w-[220px]  lg:w-[300px] lg:h-[200px] max-w-xl right-4 z-20" />
        </div>
    
        <div className="flex-1 bg-[#181818] mx-auto container rounded-sm flex flex-col justify-between p-8 min-w-[260px] max-w-sm text-white shadow-md">
          <div>
            <h3 className="text-lg font-extrabold mb-2 tracking-wide">CONTACT US NOW</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex gap-1">
                <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
                <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
                <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
                <span className="w-2 h-2 bg-[#D2411A] rounded-full inline-block" />
              </span>
              <span className="w-10 h-0.5 bg-[#D2411A] inline-block" />
            </div>
            <div className="text-sm leading-relaxed mb-6 text-white/90">
              Sus nisi platea primis dignissim quam cras netus natoque vel senectus, quis fames praesent sapien...
            </div>
            <button className="border border-white text-white font-bold px-6 py-2 rounded-none text-sm hover:bg-white hover:text-[#181818] transition-all">BOOK A TABLE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageTwoPromo;
