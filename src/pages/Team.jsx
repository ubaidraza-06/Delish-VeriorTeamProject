import React from 'react';
import TeamExpertImg from '../assets/Team Expert.png';

const Team = () => {
  const teamMembers = [
    {
      name: "KUMAN TUNMAN",
      role: "WAITER"
    },
    {
      name: "BENJAMIN KENNETH",
      role: "WAITER"
    },
    {
      name: "MATTHEW NATHANIEL",
      role: "WAITER"
    },
    {
      name: "GEORGE JAMES",
      role: "WAITER"
    },
    {
      name: "EDWARD MAY",
      role: "WAITER"
    },
    {
      name: "PATRICK ROBERT",
      role: "WAITER"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
   <div className="bg-[#383838] py-20 text-center text-white">
        <h1 className="text-6xl font-semibold mt-12">OUR CHEF</h1>
        <p class="text-white text-xl font-light tracking-wider uppercase mt-2 z-10">Home / OUR CHEF</p>
        <br />
        <img
          src={TeamExpertImg}
          alt="Reservation Hero"
          className="pl-40 pr-40 opacity-50 mt-12 z-[-40]"
        />
      </div>



      {/* Team Members Grid */}
        <section className="bg-white py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {teamMembers.map((member, index) => (
                 <div key={index} className="text-center border border-gray-300 p-4">
                   <div className="w-64 h-64 bg-gray-200 border border-gray-300 mx-auto mb-4 flex items-center justify-center">
                     {/* Gray placeholder box - no image */}
                   </div>
                   <h3 className="text-lg font-bold uppercase text-black mb-2">{member.name}</h3>
                   <p className="text-sm uppercase text-black">{member.role}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>
    </div>
  );
};

export default Team; 