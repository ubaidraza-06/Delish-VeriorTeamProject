import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/team', label: 'TEAM' },
    { path: '/team-details', label: 'TEAM DETAILS' },
    { path: '/reservations', label: 'RESERVATIONS' },
  ];

  return (
    <header className="bg-secondary text-white">
      {/* Top Utility Bar */}
      <div className="py-2 border-b border-gray-700">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
                         <div className="flex items-center space-x-4">
               <span>Mon-Wed: 11a-9p</span>
               <span style={{ color: '#484848' }}>◆</span>
               <span>Thurs-Sat: 11a-10p</span>
             </div>
             <div className="flex items-center space-x-4">
               <span>reservations@delish.com</span>
               <span style={{ color: '#484848' }}>◆</span>
               <span>123 456 7899</span>
               <span style={{ color: '#484848' }}>◆</span>
               <span>296 Ridao Avenie Mor Berlin 251584</span>
             </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="py-4">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/src/assets/Vector.png" alt="Delish Logo" className="w-8 h-8 mr-3" />
              <span className="heading-4 font-bold">DELISH</span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center relative">
                <button
                  className="hover:text-primary font-medium transition-colors duration-200 flex items-center focus:outline-none"
                  onClick={() => setIsHomeDropdownOpen((open) => !open)}
                >
                  HOME
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-[999]">
                    <Link
                      to="/homepage-two"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Home Page Two
                    </Link>
                    <Link
                      to="/homepage-three"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Home Page Three
                    </Link>
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/team"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Our Team
                    </Link>
                    <Link
                      to="/team-details"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Team Details
                    </Link>
                    <Link
                      to="/reservations"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Book a Table
                    </Link>
                    <Link
                      to="/blog"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/blog-details"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Blog Details
                    </Link>
                    <Link
                      to="/gallery"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Gallery
                    </Link>
                    <Link
                      to="/menu"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Menu
                    </Link>
                    <Link
                      to="/shop"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Shop
                    </Link>
                    <Link
                      to="/shop-details"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Shop Details
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <span>PAGES</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
              <div className="flex items-center">
                <span>PAGES</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
              <div className="flex items-center">
                <span>SHOP</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
              <div className="flex items-center">
                <span>BLOG</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
              <div className="flex items-center">
                <span>CONTACT</span>
              </div>
            </nav>

            {/* CTA Button - Right Side */}
            <button className="hidden md:flex border border-primary text-white px-6 py-3 items-center hover:bg-primary transition-colors duration-200">
              <span>BOOK A TABLE</span>
              <div className="ml-2 flex items-center">
                <div className="w-4 h-0.5 bg-white mr-1"></div>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700 mt-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`paragraph font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="border border-primary text-white px-6 py-3 font-medium hover:bg-primary transition-colors duration-200 w-full flex items-center justify-center">
                  <span>BOOK A TABLE</span>
                  <div className="ml-2 flex items-center">
                    <div className="w-4 h-0.5 bg-white mr-1"></div>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 