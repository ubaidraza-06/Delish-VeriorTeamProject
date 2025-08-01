import React from 'react'

const BottomBar = () => {
  return (
    <div className='bg-[#1A1A1A]'>
         <div className="max-w-5xl z-50  mx-auto w-full flex flex-col md:flex-row items-center justify-between border-t border-[#232323] p-4 text-xs text-[#D9D9D9] gap-2">
        <div>© Copyright Delish. All Rights Reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Terms Of Use</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default BottomBar