import React from 'react';
import FeatureCard from './Card';
const FeatureItems =[
    {
    title: "FRESH PRODUCTS",
    description: "For each dish, the growth of every element & the selection",
  },
  {
    title: "SKILLED CHEFS",
    description: "For each dish, the growth of every element & the selection",
  },
  {
    title: "DRINKS & WINE",
    description: "For each dish, the growth of every element & the selection",
  },
  {
    title: "FRESH FOODS",
    description: "For each dish, the growth of every element & the selection",
  }
]



const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FeatureItems.map((item, index) => (
          <FeatureCard
            key={index} 
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;