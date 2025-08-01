import React, { useState } from 'react';
import reservationImg from '../assets/reservation.png';

const Reservations = () => {
  const [formData, setFormData] = useState({
    numberOfGuests: '',
    selectDate: '',
    selectTime: '',
    yourName: '',
    emailAddress: '',
    phoneNumber: '',
    specialMessage: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    alert('Thank you for your reservation! We will confirm your booking soon.');
    setFormData({
      numberOfGuests: '',
      selectDate: '',
      selectTime: '',
      yourName: '',
      emailAddress: '',
      phoneNumber: '',
      specialMessage: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#383838] py-20 text-center text-white">
        <h1 className="text-6xl font-semibold mt-12">BOOK A TABLE</h1>
        <p class="text-white text-xl font-light tracking-wider uppercase mt-2 z-10">Home / BOOK A TABLE</p>
        <br />
        <img
          src={reservationImg}
          alt="Reservation Hero"
          className="pl-64 opacity-50 mt-12"
        />
      </div>

      {/* Reservation Form Section */}
      <section className="bg-black text-white py-20">
        <div className="container-custom">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 uppercase">NUMBER OF GUEST *</label>
                <input
                  type="number"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  style={{ backgroundColor: '#151515' }}
                  placeholder="Person"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 uppercase">SELECT DATE*</label>
                <input
                  type="date"
                  name="selectDate"
                  value={formData.selectDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  style={{ backgroundColor: '#151515' }}
                  placeholder="Person"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 uppercase">SELECT TIME*</label>
                <input
                  type="time"
                  name="selectTime"
                  value={formData.selectTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  style={{ backgroundColor: '#151515' }}
                  placeholder="Person"
                />
              </div>
            </div>
            
            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 uppercase">YOUR NAME*</label>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  style={{ backgroundColor: '#151515' }}
                  placeholder="Person"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 uppercase">EMAIL ADDRESS *</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  style={{ backgroundColor: '#151515' }}
                  placeholder="Person"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 uppercase">PHONE NUMBER *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  style={{ backgroundColor: '#151515' }}
                  placeholder="Person"
                />
              </div>
            </div>
            
            {/* Message Textarea */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2 uppercase">TYPE YOUR SPECIAL MESSAGE*</label>
              <textarea
                name="specialMessage"
                value={formData.specialMessage}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                style={{ backgroundColor: '#151515' }}
                placeholder="Tell us more about your special message"
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-4 font-semibold uppercase hover:bg-orange-600 transition-colors duration-200 flex items-center mx-auto"
              >
                <span>BOOK A TABLE</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom flex items-center justify-center">
          <div className="max-w-6xl w-full flex flex-row items-center justify-center gap-12">
            {/* Left Side - Image Placeholders */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="w-[22rem] h-[28rem] bg-gray-300 mb-4"></div>
              <div
                className="w-[12rem] h-[14rem] bg-gray-300 absolute"
                style={{ top: '60%', left: 'calc(100% - 6rem)', transform: 'translateY(-50%)', border: '10px solid #fff' }}
              ></div>
            </div>
            {/* Right Side - White Cards Stacked Vertically */}
            <div className="flex flex-col gap-6 w-full max-w-md items-center ml-40">
              {/* Opening Hours Card */}
              <div className="bg-white p-8 border border-gray-200 w-full">
                <h3 className="text-xl font-bold text-black mb-4 uppercase">OPENING HOURS</h3>
                <div className="space-y-2">
                  <p className="text-[#74787C]">Lunch: 12Pm - 3Pm</p>
                  <p className="text-[#74787C]">Diner: 7Pm - 2Am (Last Order At 11:30Pm)</p>
                </div>
              </div>
              {/* Visit Hours Card */}
              <div className="bg-white p-8 border border-gray-200 w-full">
                <h3 className="text-xl font-bold text-black mb-4 uppercase">VISIT HOUR RESTAURANT</h3>
                <div className="space-y-2">
                  <p className="text-[#74787C]">Eight avenue 487, NY,</p>
                  <p className="text-[#74787C]">T. +12 344 0567899</p>
                  <p className="text-[#74787C]">M. fidalgo@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;