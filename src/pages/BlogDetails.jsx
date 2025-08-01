import React from "react";
import newsInsightsImage from "../assets/newsinsights.png";
import ctaBanner from "../assets/ctabanner.jpg"; 
import { CalendarDays, User, Mail, Facebook, Twitter, Instagram, Dribbble, CornerUpLeft } from "lucide-react";


const BlogDetails = () => {
  return (
    <div className="bg-white text-[#1D1D1D]">
      {/* Top Section */}
      <div className="bg-[#383838] py-20 text-center text-white">
        <h1 className="text-4xl font-bold">BLOG DETAILS</h1>
        <p className="mt-2 text-sm">HOME / BLOG DETAILS</p>
        <br />
        <img
          src={newsInsightsImage}
          alt="Latest News"
          className="mx-auto w-auto h-[50px] object-contain"
        />
      </div>

      {/* Blog Main Content + Sidebar Layout */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 py-20 px-4">
        {/* Blog Main Content */}
        <div className="lg:col-span-2">
          {/* Gray Background Banner */}
          <div className="bg-[#D9D9D9] h-[250px] flex items-center justify-center relative mb-6">
           
          </div>

          {/* Date + Author */}
          <div className="text-sm text-[#74787C] flex items-center gap-4 mb-6">
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-[#d42f2f]" />
              24 Feb, 2024
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#d42f2f]" />
              by admin
            </span>
          </div>

          {/* Main Article */}
          <div className="text-sm text-gray-700 leading-relaxed space-y-6">
            <h2 className="text-2xl font-bold mt-4">
              THE WORLD OF FOOD AND WINE MATCHING
            </h2>
            <p className="text-[#74787C]">
              Global business consultancies play a critical role in driving thought leadership and knowledge exchange on a global scale. Through industry reports, white papers, seminars, and conferences, these firms share insights, best practices, and emerging trends that shape the future of international business. By staying at the forefront of global trends and innovations, the consultancy provides clients with invaluable intelligence and foresight, empowering them to anticipate market shifts, capitalize on emerging opportunities, and stay ahead of the curve in an ever-changing global landscape.
            </p>
            <p className="text-[#74787C]">
              global business consultancy serves as a strategic partner and trusted advisor to organizations navigating the complexities of international commerce. By offering a comprehensive suite of services, deep industry expertise, and a global network of resources, these firms empower clients to seize opportunities.

            </p>

            {/* Quote Block */}
<div className="px-6 py-4 my-8 h-[330px]" style={{ backgroundColor: '#F6F6F6' }}>
  <br />
  {/* Red Circle with White 99 */}
  <div className="w-[80px] h-[80px] rounded-full bg-[#CB3A1A] flex items-center justify-center">
    <p className="text-white text-3xl font-bold">99</p>
  </div>

  <p className="mt-4 text-lg italic font-medium text-[#111111]">
    “We offer competitive pricing and deliver exceptional value for your investment our goal is to help you achieve the highest”
  </p>
  <br />
  <p className="mt-2 text-sm font-semibold text-[#CB3A1A]">William Benjamin</p>
  <p className="text-xs text-gray-500">Top Author</p>
</div>

{/* Additional Paragraph Section */}
<div className="text-[#74787C] text-sm leading-relaxed space-y-4">
  <p>
    Professionally pursue cutting-edge web-readiness vis-a-vis just in time infrastructures. Conveniently target client-based systems with turnkey sources. Collaboratively syndicate focused opportunities for interactive deliverables. Assertively initiate client-based infomediaries through collaborative mindshare. Completely create bleeding-edge meta-services through compelling functionalities.
  </p>
</div>

            {/* Image Grid */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
  {[1, 2, 3].map((_, i) => (
    <div
      key={i}
      className="h-[300px]"
      style={{ backgroundColor: '#D9D9D9' }}
    />
  ))}
</div>

<p className="mt-6" style={{ color: '#74787C' }}>
  Quickly build covalent data after turnkey content. Distinctively reconceptualize customized growth strategies via prospective potentialities. Professionally pursue cutting-edge web-readiness vis-a-vis just in time infrastructures. Conveniently target client-based systems with turnkey sources.
</p>

<p className="mt-6" style={{ color: '#74787C' }}>
  Collaboratively syndicate focused opportunities for interactive deliverables. Assertively initiate client-based infomediaries through collaborative mindshare create bleeding-edge meta-services
</p>



            {/* Tags & Share */}
<div className="flex justify-between items-center mt-10 text-sm">
  {/* Tags */}
  <div>
    <strong className="text-black">Tags</strong>{' '}
    <span className="text-[#74787C]">
      Business Solution, Growth Strength
    </span>
  </div>

  {/* Social Icons */}
  <div className="flex items-center space-x-4">
    <strong className="text-black">Social Icon</strong>
    <a href="#" className="text-[#74787C]" title="Facebook">
      <Facebook size={18} />
    </a>
    <a href="#" className="text-[#74787C]" title="Twitter">
      <Twitter size={18} />
    </a>
    <a href="#" className="text-[#74787C]" title="Instagram">
      <Instagram size={18} />
    </a>
    <a href="#" className="text-[#74787C]" title="Dribbble">
      <Dribbble size={18} />
    </a>
  </div>
</div>


            {/* Post Navigation */}
<div className="flex justify-between items-center mt-8 border-t border-b py-6">
  {/* Previous Post */}
  <div className="flex items-center space-x-3">
    <div className="w-[70px] h-[70px] bg-[#D9D9D9]" />
    <button className="text-sm font-semibold text-black">Previous Post</button>
  </div>

  {/* Center Grid Icon */}
  <div className="grid grid-cols-3 gap-[3px] opacity-30">
    {Array.from({ length: 9 }).map((_, i) => (
      <div key={i} className="w-[6px] h-[6px] bg-[#F0F0F0]" />
    ))}
  </div>

  {/* Next Post */}
  <div className="flex items-center space-x-3">
    <button className="text-sm font-semibold text-black">Next Post</button>
    <div className="w-[70px] h-[70px] bg-[#D9D9D9]" />
  </div>
</div>

</div>


         {/* Author Box */}
<div className="bg-[#F6F6F6] mt-16 p-6 flex gap-6 items-start">
  {/* Author Image Box */}
  <div className="w-[250px] h-[150px] bg-[#E3E3E3]" />
  
  {/* Author Info */}
  <div>
    <p className="font-semibold text-lg text-[#111111]">William Benjamin</p>
    <p className="text-xs text-[#CB3A1A] mb-2">Author</p>
    <p className="text-sm text-[#74787C]">
      Re-engineer multimedia based internal or “organic” sources for progressive vortals.
      Assertively leverage existing economically sound total linkage whereas global best practices.
    </p>
  </div>
</div>



{/* Comment Form */}
<div className="mt-12 bg-[#F6F6F6] px-6 py-10">
  <h2 className="text-2xl font-bold text-black mb-6">Leave a Reply</h2>
  <form className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-white border border-gray-300 px-4 py-3 pr-10 text-sm text-gray-600 placeholder-gray-500 focus:outline-none"
        />
        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
      </div>
      <div className="relative">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-white border border-gray-300 px-4 py-3 pr-10 text-sm text-gray-600 placeholder-gray-500 focus:outline-none"
        />
        <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
      </div>
    </div>
    <textarea
      rows="5"
      placeholder="Type Your Message"
      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-gray-600 placeholder-gray-500 focus:outline-none"
    ></textarea>
    <button
      type="submit"
      className="w-full bg-[#CB3A1A] text-white text-sm font-semibold py-4 uppercase"
    >
      Submit Comment
    </button>
  </form>
</div>

        </div>

        {/* SIDEBAR (copied from Blog.jsx) */}
        <div className="space-y-6">
          {/* Search */}
          <div className="bg-[#F6F6F6] p-6">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Keyword"
                className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none text-sm text-[#74787C]"
              />
              <button className="bg-[#CB3A1A] px-4 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-[#F6F6F6] p-6">
            <h3 className="font-bold text-[16px] mb-4">RECENT POSTS</h3>
            <div className="space-y-6">
              {[
                'Craftsmanship of Artisanal Foods in Restaurants',
                'Restaurants Are Adapting to Changing Dietary Trends',
                'Passion and Perseverance from Renowned Chefs',
              ].map((title, index) => (
                <div key={index} className="flex gap-4 items-start min-h-[60px]">
                  <div className="w-[60px] h-[60px] bg-[#D9D9D9] flex-shrink-0" />
                  <div className="text-sm leading-snug">
                    <p className="flex items-center gap-1 text-[#74787C] mb-[4px]">
                      <User className="w-4 h-4 text-[#74787C]" />
                      <span>by David Smith</span>
                    </p>
                    <p className="text-[#1D1D1D] font-semibold text-[16px]">{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="p-6 bg-[#F6F6F6]">
            <h3 className="font-bold text-lg mb-4">CATEGORIES</h3>
            {['Soups and Salads', 'Pasta and Noodles', 'Vegetarian and Vegan', 'Pizza and Flatbreads'].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border border-[#D9D9D9] py-2 px-4 mb-2 bg-white"
              >
                <span className="text-[#74787C] text-sm">{item}</span>
                <span className="text-[#CB3A1A] text-[24px]">&#8594;</span>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="bg-[#F6F6F6] p-6">
            <h3 className="font-bold text-lg mb-4">GALLERY</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array(6).fill().map((_, i) => (
                <div key={i} className="w-full h-[70px] bg-[#D9D9D9]"></div>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="bg-[#F6F6F6] p-6">
            <h3 className="font-bold text-lg mb-4">POPULAR TAGS</h3>
            <div className="text-sm font-bold space-y-3">
              <div className="flex flex-wrap gap-2">
                {['ADVICE', 'AUTHOR', 'CONSULTING'].map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 ${tag === 'ADVICE' ? 'bg-[#CB3A1A] text-white' : 'bg-white text-black'} border border-[#D9D9D9]`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['DELISH', 'FAMILY', 'HEALTH', 'TIP'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white text-black border border-[#D9D9D9]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['JUDGE', 'SOLUTION'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white text-black border border-[#D9D9D9]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="relative w-full h-[200px] flex items-center justify-between px-16 text-white mt-10"
        style={{
          backgroundImage: `url(${ctaBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <p className="text-sm font-semibold tracking-wide uppercase">
            BOOK A TABLE FOR YOUR AND FAMILY MEMBERS
          </p>
          <h2 className="text-[32px] font-extrabold leading-snug mt-2">
            NEED A TABLE ON COFFEE HOUSE
          </h2>
        </div>
        <button className="relative z-10 border border-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition">
          BOOK A TABLE
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;