import React from 'react'
import { Star } from 'lucide-react';
const Card = ({title,description, price, rating, buttonText, showStars, showButton}) => {
  return (
  
 <div className="bg-white shadow-md text-center border border-gray-200 rounded overflow-hidden">
      
      {/* Placeholder Image Box */}
      <div className={`bg-[#D9D9D9] h-32 ${price && "h-56"} w-full flex items-center justify-center`}>
        {/* Optional: Add image or icon here */}
      </div>

      <div className="p-4">
        {/* Conditional Stars */}
        {showStars && rating > 0 && (
          <div className="flex justify-center mb-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Star key={index} className="h-4 w-4 text-red-600 fill-red-600" />
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-sm font-bold text-gray-800 ">{title}</h3>

        {/* Description (optional) */}
        {description && (
          <p className="text-gray-600 mb-2 text-sm">{description}</p>
        )}

        {/* Price (optional) */}
        {price && <p className="text-red-600 text-sm font-medium">{price}</p>}

        {/* Optional Button */}
        {showButton && buttonText && (
          <button className="mt-2 text-red-500 font-semibold text-sm hover:underline">
            {buttonText}
          </button>
        )}
        {description && <button className="text-red-500 font-semibold text-sm hover:underline">
          BOOK A TABLE
        </button>}
      </div>
      </div>
  )
}

export default Card