import { ChevronDown, Heart, MapPin, Menu, Search, ShoppingCart, User } from 'lucide-react';

const TopBarPageTwo = () => {
  return (
    <div className="w-full flex justify-center pt-2 px-2 sm:px-4 md:px-8 lg:px-16 pb-2 lg:pb-4 bg-transparent">
      <div className="bg-[#111111] w-full max-w-5xl mx-auto flex flex-col">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-2 sm:px-4 lg:px-4 pt-2 text-[11px] sm:text-xs lg:text-xs text-white opacity-80 gap-1 sm:gap-0">
          <span className="flex items-center gap-1">
            <span className="text-base sm:text-lg lg:text-lg"><MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-white font-normal" /></span>
            Silk St, Barbican, London EC2Y 8DS, UK
          </span>
          <div className="flex gap-3 sm:gap-6 mt-1 sm:mt-0">
            <a href="#" className="hover:underline font-medium whitespace-nowrap">Find a Store</a>
            <a href="#" className="hover:underline font-medium whitespace-nowrap">Order Tracking</a>
          </div>
        </div>
        {/* Middle row */}
        <div className="flex items-center justify-between px-2 sm:px-4 lg:px-4 py-1 sm:py-2 lg:py-2">
          {/* For lg and above, keep the original row layout. For sm and md, stack vertically. */}
          <div className="w-full flex flex-col lg:flex-row xs:flex-row bg-[#CB3A1A] px-2 sm:px-4 lg:px-4 py-2 sm:py-3 lg:py-3 items-center gap-2 lg:gap-0 xs:gap-0" style={{minHeight:'44px'}}>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-3 flex-shrink-0 w-full lg:w-auto xs:w-auto justify-between lg:justify-start xs:justify-start" style={{minWidth:'100px'}}>
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 text-white" />
              <span className="text-[11px] sm:text-xs lg:text-xs font-bold tracking-wider text-white">EN · IT</span>
            </div>
            <div className="flex-1 flex justify-center w-full">
              <span className="text-white font-extrabold text-lg sm:text-2xl lg:text-2xl tracking-wider">DELISH</span>
            </div>
            <div className="flex-shrink-0 flex items-center w-full lg:w-auto xs:w-auto justify-end" style={{minWidth:'100px'}}>
              <button className="border border-white text-white font-semibold px-4 sm:px-6 lg:px-6 py-1.5 sm:py-2 lg:py-2 hover:bg-white hover:text-[#CB3A1A] transition-all text-[11px] sm:text-xs lg:text-xs rounded-none">
                BOOK A TABLE
              </button>
            </div>
          </div>
        </div>
        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-2 sm:px-4 lg:px-4 mt-1 sm:mt-2 pb-2 text-[11px] sm:text-xs lg:text-xs text-white gap-2 sm:gap-0">
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center font-semibold">
            <a href="#" className="hover:underline">HOME</a>
            <div className="relative group">
              <button className="hover:underline flex items-center gap-1">PAGES <span><ChevronDown /></span></button>
            </div>
            <div className="relative group">
              <button className="hover:underline flex items-center gap-1">PAGES <span><ChevronDown /></span></button>
            </div>
            <div className="relative group">
              <button className="hover:underline flex items-center gap-1">SHOP <span><ChevronDown /></span></button>
            </div>
            <div className="relative group">
              <button className="hover:underline flex items-center gap-1">BLOG <span><ChevronDown /></span></button>
            </div>
            <a href="#" className="hover:underline">CONTACT</a>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
            <User className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
            <div className="relative">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
              <span className="absolute -top-2 -right-2 bg-[#CB3A1A] text-white text-[9px] sm:text-[10px] lg:text-[10px] rounded-full px-1">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarPageTwo;
