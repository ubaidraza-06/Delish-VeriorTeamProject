import React from 'react'

import vector from '../assets/Homevector.png'
import Booking from '../components/BookingSection'
import FeaturesSection from '../components/Features'
import About from '../components/HomeAbout'
import Discover from '../components/Discover'
import HomethreeNav from '../components/homethreeNav'
import TrustedSection from '../components/TrustedSection'
import PagethreeMenu from '../components/PagethreeMenu'
import Delish from '../components/PagethreeDelish'
import Review from '../components/HomethreeReview'
import News from '../components/HomethreeNews'

const HomeThree = () => {
  return (
    <div className="bg-black max-h-full font-sans antialiased">
    
      <HomethreeNav/>

      <section className="relative w-full flex items-start justify-center overflow-hidden pb-16">
<img src={vector} className='max-md:w-[100px]' alt="" />
        
        <div className="container  relative z-20 flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 ml-5 text-center md:text-left pt-20 md:pt-40 pr-0 md:pr-10">
            <p className="text-white text-sm uppercase tracking-wider mb-2">
              We serve food, harmony, & laughter since 1998
            </p>
            <h1 className="text-3xl text-white md:text-4xl md:w-[450px] font-extrabold leading-tight mb-6">
              DELICIOUS FOODS <br  /> WITH WONDERFUL EATING
            </h1>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded hover:bg-orange-600 hover:text-black transition-colors duration-300 text-lg">
              VIEW FOOD MENU
            </button>
          </div>
        
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </section>

      <Booking/>
      <FeaturesSection/>
      <About/>
      <Discover/>
      <TrustedSection/>
      <PagethreeMenu/>
      <Delish/>
      <Review/>
      <News/>
    </div>
  );
}

export default HomeThree
