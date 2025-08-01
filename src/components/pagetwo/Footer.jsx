import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react';
import logo from '../../assets/homePageTwo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#000000F2] text-white  pt-12 pb-4 px-4 md:px-0 ">
        <div className='max-w-5xl  mx-auto'>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 border-b border-[#222] pb-10">
        {/* Logo & Address */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Delish Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-bold tracking-wide">DELISH</span>
          </div>
          <div className="h-px w-32 bg-[#333] my-2" />
          <div className="text-sm text-[#ccc]">1234, Restaurant St, South City<br />New York 0124</div>
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-[#D2411A] flex items-center justify-center text-white hover:bg-[#b32e0e] transition"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-black hover:text-white hover:bg-[#b32e0e] transition"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-black hover:text-white hover:bg-[#b32e0e] transition"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-black hover:text-white hover:bg-[#b32e0e] transition"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
        {/* Links */}
        <div className="flex-[0.8] flex flex-col sm:flex-row gap-8 md:gap-16">
          <div>
            <div className="font-bold mb-3 text-sm tracking-wider">LINKS</div>
            <ul className="space-y-2 text-[#ccc] text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Meet our team</a></li>
              <li><a href="#" className="hover:text-white transition">Case stories</a></li>
              <li><a href="#" className="hover:text-white transition">Latest News</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-3 text-sm tracking-wider">OTHER LINK</div>
            <ul className="space-y-2 text-[#ccc] text-sm">
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Creative Agency</a></li>
              <li><a href="#" className="hover:text-white transition">Digital Agency</a></li>
              <li><a href="#" className="hover:text-white transition">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">Digital Services</a></li>
            </ul>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="font-bold mb-3 text-sm tracking-wider">NEWSLETTER</div>
          <div className="text-sm text-[#ccc] mb-2">Subscribe us & receive our offers and updates your inbox directly</div>
          <form className="flex">
            <input type="email" placeholder="Email Address" className="flex-1 px-4 py-2 bg-[#222] text-white placeholder-[#aaa] outline-none" />
            <button type="submit" className="bg-[#D2411A] px-4 flex items-center justify-center text-white text-lg hover:bg-[#b32e0e] transition"><Send className="w-4 h-4" /></button>
          </form>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center pt-4 text-xs text-[#aaa] gap-2">
        <div>All rights received 2024. Delish Restaurant</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Terms Of Use</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
        </div>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
