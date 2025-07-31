import React from "react";
import { Eye } from "lucide-react";
import foodGalleryImage from "../assets/foodgallery.png";
import ctaBanner from "../assets/ctabanner.jpg";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";

const Gallery = () => {
  const galleryItems = Array.from({ length: 6 });

  return (
    <div className="bg-[#FAFAFA] text-[#1D1D1D] relative overflow-hidden">
      {/* Top Section */}
      <div className="bg-[#383838] py-20 text-center text-white">
        <h1 className="text-4xl font-bold">GALLERY PAGE</h1>
        <p className="mt-2 text-sm">HOME / GALLERY PAGE</p>
        <br />
        <img
          src={foodGalleryImage}
          alt="Food Gallery"
          className="mx-auto w-auto h-[50px] object-contain"
        />
      </div>

      {/* Title Section */}
      <div className="text-center my-12 px-4">
        <span className="bg-[#CB3A1A] text-white text-xs px-4 py-1 inline-block uppercase tracking-wide mb-4">
          Food Gallery
        </span>
        <h2 className="text-3xl font-extrabold text-[#111111] mb-4">
          FOOD GALLERY POSTS
        </h2>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-[1px] h-10 bg-[#CB3A1A]" />
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#CB3A1A] transform rotate-45"
              ></div>
            ))}
          </div>
          <div className="w-[1px] h-10 bg-[#CB3A1A]" />
        </div>
      </div>

      {/* Vector Images beside Gallery Grid */}
      <img
        src={Vector1}
        alt="Vector1"
        className="absolute left-0 top-[40%] w-20 opacity-30 z-0"
      />
      <img
        src={Vector2}
        alt="Vector2"
        className="absolute left-0 bottom-10 w-20 opacity-30 z-0"
      />
      <img
        src={Vector3}
        alt="Vector3"
        className="absolute right-0 top-[30%] w-20 opacity-30 z-0"
      />

      {/* Gallery Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {galleryItems.map((_, index) => (
          <div
            key={index}
            className="relative group aspect-square bg-[#D9D9D9] border-2 border-[#D9D9D9] overflow-hidden"
          >
            <div className="absolute inset-4 bg-[#CB3A1A] opacity-0 group-hover:opacity-90 transition duration-300 flex items-center justify-center">
              <button className="bg-white p-2 rounded-sm">
                <Eye className="text-[#CB3A1A]" size={30} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div
        className="relative w-full h-[200px] flex items-center justify-between px-16 text-white mt-16"
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

export default Gallery;
