import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-4 shadow-md flex items-center space-x-6">
      <Link to="/" className="text-gray-800 font-medium hover:text-[#CB3A1A]">
        Blog
      </Link>
      <Link to="/blog-details" className="text-gray-800 font-medium hover:text-[#CB3A1A]">
        Blog Details
      </Link>
      <Link to="/gallery" className="text-gray-800 font-medium hover:text-[#CB3A1A]">
        Gallery
      </Link>
    </nav>
  );
};

export default Navbar;