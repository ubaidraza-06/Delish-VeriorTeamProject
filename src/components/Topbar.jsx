
const Topbar = () => {
    return (
      <div className="bg-[#111111] text-white text-xs lg:text-sm flex flex-col lg:flex-row justify-between items-center py-2 px-4 lg:px-20">
        <div className="flex gap-4">
          <span>Mon-Wed: 11a-9p</span>
          <span>Thurs-Sat: 11a-10p</span>
        </div>
        <div className="flex gap-4 mt-1 lg:mt-0">
          <span>reservations@delish.com</span>
          <span>123 456 7899</span>
          <span>296 Ridao Avenie Mor Berlin 251584</span>
        </div>
      </div>
    );
  };
  
  export default Topbar;