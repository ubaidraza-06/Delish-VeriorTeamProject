import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-secondary text-white py-16 border-b border-gray-700">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 - Company Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <img src="/src/assets/Vector.png" alt="Delish Logo" className="w-8 h-8 mr-3 filter brightness-0 invert" />
                <span className="heading-4 font-bold">DELISH</span>
              </div>
              <p className="paragraph text-gray-300 mb-6">
                1234, Restaurant St, South City<br />
                New York 0124
              </p>
                             <div className="flex space-x-4">
                 <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full">
                   <img src="/src/assets/facebook.png" alt="Facebook" className="w-5 h-5" />
                 </div>
                 <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
                   <img src="/src/assets/instagram.png" alt="Instagram" className="w-5 h-5" />
                 </div>
                 <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
                   <img src="/src/assets/twitter.png" alt="Twitter" className="w-5 h-5" />
                 </div>
                 <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
                   <img src="/src/assets/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                 </div>
               </div>
            </div>

            {/* Column 2 - LINKS */}
            <div>
              <h3 className="heading-6 mb-4">LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Meet our team</a></li>
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Case stories</a></li>
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Latest News</a></li>
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3 - OTHER LINK */}
            <div>
              <h3 className="heading-6 mb-4">OTHER LINK</h3>
              <ul className="space-y-2">
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Creative Agency</a></li>
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Digital Agency</a></li>
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Digital Services</a></li>
              </ul>
            </div>

            {/* Column 4 - NEWSLETTER */}
            <div>
              <h3 className="heading-6 mb-4">NEWSLETTER</h3>
              <p className="paragraph text-gray-300 mb-4">
                Subscribe us & receive our offers and updates your inbox directly
              </p>
              <div className="flex">
                                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="flex-1 px-4 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                   style={{ backgroundColor: '#1D1C1C' }}
                 />
                <button className="bg-primary text-white px-4 py-3 hover:bg-red-700 transition-colors">
                  <img src="/src/assets/sendemail.png"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-secondary text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="paragraph text-gray-300">All rights received 2024. Delish Restaurant</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Terms Of Use</a>
              <a href="#" className="paragraph text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 