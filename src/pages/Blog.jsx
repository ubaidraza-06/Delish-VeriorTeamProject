import React from 'react';
import { CalendarDays, User } from 'lucide-react';
import newsInsightsImage from '../assets/newsinsights.png';
import ctaBanner from '../assets/ctabanner.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'FOODIES',
      date: '24 Feb, 2024',
      author: 'admin',
      title: 'ICONIC ESTABLISHMENTS ARE REINVENTING',
      excerpt:
        'Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reinvestment client based materials...',
    },
    {
      id: 2,
      category: 'FOODIES',
      date: '24 Feb, 2024',
      author: 'admin',
      title: 'EXPLORING THE WORLD OF FOOD AND WINE',
      excerpt:
        'Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reinvestment client based materials...',
    },
    {
      id: 3,
      category: 'FOODIES',
      date: '24 Feb, 2024',
      author: 'admin',
      title: 'WHAT IT TAKES TO ACHIEVE EXCELLENCE',
      excerpt:
        'Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reinvestment client based materials...',
    },
    {
      id: 4,
      category: 'FOODIES',
      date: '24 Feb, 2024',
      author: 'admin',
      title: 'AFFORDABLE GOURMET EXPERIENCES',
      excerpt:
        'Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reinvestment client based materials...',
    },
  ];

  return (
    <div className="bg-white text-[#1D1D1D]">
      {/* Top Section */}
      <div className="bg-[#383838] py-20 text-center text-white">
        <h1 className="text-4xl font-bold">LATEST NEWS</h1>
        <p className="mt-2 text-sm">HOME / LATEST NEWS</p>
        <br />
        <img
          src={newsInsightsImage}
          alt="Latest News"
          className="mx-auto w-auto h-[50px] object-contain"
        />
      </div>

      {/* Main Content Section */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 py-20 px-4">
        {/* Left Side - Blog Posts */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="border border-[#D9D9D9]">
              <div className="bg-[#D9D9D9] h-[250px] relative">
                <span className="absolute top-3 left-3 bg-[#d42f2f] text-white text-xs px-3 py-1 font-semibold">
                  {post.category}
                </span>
              </div>
              <div className="p-6 bg-[#F6F6F6]">
                <div className="flex items-center text-sm gap-4 mb-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4 text-[#d42f2f]" />
                    <span className="text-[#74787C]">{post.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-[#d42f2f]" />
                    <span className="text-[#74787C]">by {post.author}</span>
                  </span>
                </div>
                <h2 className="text-xl font-extrabold mb-2">{post.title}</h2>
                <p className="text-[#7A7A7A] mb-4">{post.excerpt}</p>
                <div className="border-t border-[#D9D9D9] pt-3">
                  <button className="text-[#d42f2f] font-semibold text-sm flex items-center gap-2">
                    READ DETAILS <span className="text-base">&#187;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex gap-2 mt-6">
            <button className="w-10 h-10 bg-[#d42f2f] text-white font-semibold">1</button>
            <button className="w-10 h-10 border border-[#D9D9D9]">2</button>
            <button className="w-10 h-10 border border-[#D9D9D9]">3</button>
            <button className="w-10 h-10 border border-[#D9D9D9]">&rarr;</button>
          </div>
        </div>

        {/* Right Side - Sidebar */}
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
                    className={`px-3 py-1 ${
                      tag === 'ADVICE' ? 'bg-[#CB3A1A] text-white' : 'bg-white text-black'
                    } border border-[#D9D9D9]`}
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

      {/* CTA Banner  */}
<div
  className="relative w-full h-[200px] flex items-center justify-between px-16 text-white mt-10"
  style={{
    backgroundImage: `url(${ctaBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
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

export default Blog;