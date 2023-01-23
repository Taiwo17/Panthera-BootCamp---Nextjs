import React, { useState } from 'react'

function Slider({ desc, img, name }) {
  return (
    <div>
      <div className={` border rounded-2xl bg-[#D1DDFA] p-8 md:max-w-[526px] `}>
        <p className='font-sora font-light text-base text-[#184CD1] pb-[144px] md:text-[20px]'>
          {desc}
        </p>
        <div className='flex items-center gap-4'>
          <img
            className='block w-[40px] h-[40px] rounded-full'
            src={img}
            alt=''
          />
          <p className='font-clashDisplay text-base text-[#184CD1]'>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default Slider
