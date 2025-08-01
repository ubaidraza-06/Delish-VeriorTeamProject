import React from 'react'
import { useLocation } from 'react-router-dom'

const Intro = () => {
   const location = useLocation();

  const isAboutPage = location.pathname.includes('About');

  const heading = isAboutPage ? 'About Us' : ' Contact Us';
  const transparentText = isAboutPage ? 'ABOUT US' : ' GET IN TOUCH';
  const routeLabel = isAboutPage ?  'HOME / About PAGE':'HOME / Contact PAGE' ;
  return (
   <div className=" font-[Jost] text-[#111] ">
      {/* Header Section */}
      <div className="bg-[#0A0A0ABA] uppercase  py-16 relative flex flex-col items-center w-full">
  <h1 className="m-0 text-center text-4xl text-white font-bold z-10 tracking-wide">{heading}</h1>
  <p className="m-0 text-center text-xs text-white z-10 tracking-wider uppercase">{routeLabel}</p>
  <h1 className="m-0 text-[80px] max-sm:text-[50px] uppercase font-extrabold  text-[#FFFFFF03]  select-none pointer-events-none tracking-widest"
        style={{
          color: 'transparent', // Make the fill color transparent
          WebkitTextStroke: '2px #71717A', // Outline color and width (gray-500 equivalent)
          textStroke: '2px #71717A', // Standard property
        }}>
     {transparentText}
  </h1>
  
</div>
</div>

  )
}

export default Intro