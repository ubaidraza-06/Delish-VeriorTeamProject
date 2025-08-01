
import { useState } from 'react';
import logo from '../assets/logo.png';
import { ChevronDown } from 'lucide-react';

const menuItems = [
  { label: 'HOME' },
  { label: 'PAGES' },
  { label: 'PAGES' },
  { label: 'SHOP' },
  { label: 'BLOG' },
  { label: 'CONTACT' },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-[#111111] text-white flex flex-col lg:flex-row justify-between lg:items-center py-4 px-4 md:px-8 lg:px-20 relative">
    
      <div className="flex items-center gap-3 mb-3 lg:mb-0 z-20 left-0">
        <img src={logo} alt="Delish Logo" className="h-8 w-8 lg:h-10 lg:w-10 object-contain" />
        <span className="text-xl font-semibold">DELISH</span>
      </div>

      <button
        className="lg:hidden absolute right-4 top-5 z-30 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      <nav className="hidden lg:flex flex-1 justify-center">
        <ul className="flex flex-row gap-8 items-center">
          {menuItems.map((item, idx) => (
            <li key={idx} className="hover:text-[#CB3A1A] cursor-pointer text-base flex items-center ">
              {item.label}
              {(item.label === 'HOME' || item.label === 'PAGES' || item.label === 'SHOP' || item.label === 'BLOG') && (
                <span className="text-xs"> <ChevronDown className='mt-1'  /></span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:block">
        <button className="border border-[#CB3A1A] text-white px-4 py-2 flex items-center gap-2 hover:bg-[#CB3A1A] transition-all">
          BOOK A TABLE <span>&rarr;</span>
        </button>
      </div>

     
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-40 flex">
          <div className="w-64 bg-[#111111] h-full p-6 flex flex-col justify-between animate-slideInLeft">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <img src={logo} alt="Delish Logo" className="h-8 w-8 object-contain" />
                <span className="text-xl font-semibold">DELISH</span>
              </div>
              <ul className="flex flex-col gap-6">
                {menuItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-[#CB3A1A] cursor-pointer text-base flex items-center "
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.label}
                    {(item.label === 'HOME' || item.label === 'PAGES' || item.label === 'SHOP' || item.label === 'BLOG') && (
                      <span className="text-xs"><ChevronDown /></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="border border-[#CB3A1A] text-white px-4 py-2 flex items-center gap-2 hover:bg-[#CB3A1A] transition-all mt-8"
              onClick={() => setSidebarOpen(false)}
            >
              BOOK A TABLE <span>&rarr;</span>
            </button>
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
        </div>
      )}
    </header>
  );
};

export default Header;