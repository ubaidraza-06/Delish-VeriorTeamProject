import React from 'react'

const HomethreeReview = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      

      {/* Diagonal background element - top left to bottom right */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 100,100 0,100" fill="transparent" />
          {/* Example of diagonal lines or patterns */}
          <line x1="0" y1="0" x2="100" y2="100" stroke="#333" strokeWidth="0.5" />
          <line x1="0" y1="20" x2="80" y2="100" stroke="#333" strokeWidth="0.5" />
          <line x1="20" y1="0" x2="100" y2="80" stroke="#333" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Customer Feedbacks Tag */}
        <span className="bg-[#CB3A1A] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
          Customer Feedbacks
        </span>

        {/* Main Heading */}
        <h1 className="mt-4 text-4xl sm:text-4xl font-extrabold text-white leading-tight">
          SEE WHAT OUR CLIENTS HAVE TO SAY
        </h1>

        {/* Dots separator */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="block w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
          <span className="block w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
          <span className="block w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
        </div>

 
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-left flex flex-col">
            <div className="flex items-center space-x-4 mb-4">
              {/* Placeholder */}
              <div className="w-[100px] h-[100px]  max-sm:h-full bg-gray-200  flex-shrink-0"></div>
              <p className="text-gray-700 text-base leading-relaxed flex-grow">
                The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail. highly recommend it for anyone looking for a memorable dining experience.
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
              {/* Stars */}
              <div className="flex text-[#CB3A1A]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.207-6.001 5.852 1.416 8.292L12 18.897l-7.415 3.909 1.416-8.292-6.001-5.852 8.332-1.207L12 .587z" />
                  </svg>
                ))}
              </div>
              {/* Name and Title */}
              <div className="flex flex-col items-end">
                <h3 className="text-lg font-semibold max-sm:text-sm text-gray-900 uppercase">KUMAN TUNMAN</h3>
                <p className="text-sm text-gray-900">WAITER</p>
              </div>
              {/* Quote icon */}
              <div className="text-[#CB3A1A] text-7xl max-sm:text-5xl font-bold ml-4">”</div>
            </div>
          </div>

          {/* Testimonial Card 2  */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-left flex flex-col">
            <div className="flex items-center space-x-4 mb-4">
              {/* Placeholder for image/avatar */}
              <div className=" w-[100px]  h-[100px] max-sm:h-full bg-gray-200 flex-shrink-0"></div>
              <p className="text-gray-700 text-base leading-relaxed flex-grow">
                The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail. highly recommend it for anyone looking for a memorable dining experience.
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
              {/* Stars */}
              <div className="flex text-[#CB3A1A]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.207-6.001 5.852 1.416 8.292L12 18.897l-7.415 3.909 1.416-8.292-6.001-5.852 8.332-1.207L12 .587z" />
                  </svg>
                ))}
              </div>
              {/* Name and Title */}
              <div className="flex flex-col items-end">
                <h3 className="text-lg font-semibold text-gray-900 max-sm:text-sm uppercase">MADISON OLIVIA</h3>
                <p className="text-sm text-gray-900">WAITER</p>
              </div>
              {/* Quote icon */}
              <div className="text-[#CB3A1A] text-7xl max-sm:text-5xl font-bold ml-4">”</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomethreeReview