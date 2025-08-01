import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";
import instaBoxImg from "../assets/footerinsta6img.png";
import leftFooterImg from "../assets/footerleftimg.png";
import rightFooterImg from "../assets/footerrightimg.png";

const foodMenu = [
  "White Castle",
  "Beef Sandwich",
  "Cherry Limeade",
  "Wendy's Frosty",
  "Pumpkin Spice",
];

const workingHours = [
  { day: "Monday - Friday", time: "09:00 - 22:00" },
  { day: "Saturday", time: "11:00 - 00:00" },
  { day: "Sunday", time: "11:00 - 23:00" },
  { day: "* Happy hour", time: "17:00 - 21:00" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#111111D9] text-white pt-16 pb-6 px-4 lg:px-0 overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 w-full h-full pointer-events-none px-4 lg:px-0">
          <img
            src={leftFooterImg}
            alt="left"
            className="hidden lg:block absolute -left-4 top-4 bottom-0 w-1/4 max-w-xs z-0"
          />
          <img
            src={rightFooterImg}
            alt="right"
            className="hidden lg:block absolute right-0 bottom-0 top-16 w-1/5 max-w-xs z-0"
            style={{ minWidth: "120px" }}
          />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 border-b border-[#232323] pb-6 px-0 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 z-50 justify-center">
              <div className="flex gap-2">
                <span className="w-8 h-8 bg-[#D9D9D9] rounded-full inline-block"></span>
                <span className="w-8 h-8 bg-[#D9D9D9] rounded-full inline-block"></span>
                <span className="w-8 h-8 bg-[#D9D9D9] rounded-full inline-block"></span>
              </div>
              <span className="text-sm text-[#D9D9D9]">
                Are You Want To Make A Reservation,{" "}
                <a href="#" className="underline text-white">
                  Get Your Table
                </a>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 justify-center">
              <span className="text-[#CB3A1A]">
                <MessageCircle size={24} />
              </span>
              <div className="text-xs md:text-sm">
                <span className="block text-[#D9D9D9]">Have Question?</span>
                <span className="font-bold text-white">
                  FREE +92 (8800)-9850
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-0 mt-10 text-center md:text-left">
            <div className="flex-1 flex flex-col md:flex-row gap-10 md:gap-0 relative z-10 items-center md:items-start">
              <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start">
                <h4 className="font-bold text-lg mb-4 border-b border-[#232323] pb-2 w-max">
                  GET IN TOUCH
                </h4>
                <div className="text-sm text-[#D9D9D9] mb-2">
                  Silk St, Barbican, London E2Y, UK
                </div>
                <div className="text-sm text-[#D9D9D9] mb-2">
                  +30-955-123456
                </div>
                <div className="text-sm text-[#D9D9D9] mb-4">
                  booking@webexample.com
                </div>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="bg-[#CB3A1A] p-2 rounded-full">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="bg-[#232323] p-2 rounded-full">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className="bg-[#232323] p-2 rounded-full">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="bg-[#232323] p-2 rounded-full">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
              {/* Food menu */}
              <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start">
                <h4 className="font-bold text-lg mb-4 border-b border-[#232323] pb-2 w-max">
                  FOOD MENU
                </h4>
                <ul className="space-y-2 text-sm">
                  {foodMenu.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[#D9D9D9]"
                    >
                      <span>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Working hours */}
              <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start">
                <h4 className="font-bold text-lg mb-4 border-b border-[#232323] pb-2 w-max">
                  WORKING HOURS
                </h4>
                <ul className="space-y-2 text-sm text-[#D9D9D9]">
                  {workingHours.map((item, i) => (
                    <li key={i}>
                      {item.day}
                      <span className="ml-2 text-white">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Instagram */}
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h4 className="font-bold text-lg mb-4 border-b border-[#232323] pb-2 w-max">
                  INSTAGRAM
                </h4>
                <div className="grid grid-cols-3 grid-rows-2 gap-2 w-36 h-24">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <img
                      src={instaBoxImg}
                      alt="insta"
                      key={i}
                      className="w-full h-full object-cover bg-[#D9D9D9] rounded"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
