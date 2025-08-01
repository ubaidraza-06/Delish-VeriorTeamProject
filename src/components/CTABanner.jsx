import React from 'react';

const CTABanner = () => {
  return (
    <div className="py-16" style={{ backgroundColor: '#D9D9D9' }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="paragraph text-white mb-2">BOOK A TABLE FOR YOUR AND FAMILY MEMBERS</p>
            <h2 className="heading-2 text-white font-bold">NEED A TABLE ON COFFEE HOUSE</h2>
          </div>
          <button className="bg-transparent border border-white text-white px-8 py-4 mt-4 md:mt-0 hover:bg-white hover:text-gray-800 transition-colors">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTABanner; 