import React from 'react'

function Team({ img, name, position, company }) {
  return (
    <>
      <div className='border rounded-2xl mb-8 md:mb-0'>
        <div className='pb-4'>
          <img className='rounded-t-2xl object-cover w-full' src={img} alt='' />
        </div>
        <div className='p-6'>
          <h3 className='font-clashDisplay font-semibold text-base text-[#081B49] pb-1'>
            {name}
          </h3>
          <p className='font-clashDisplay text-sm text-[#808080] leading-[17px]'>
            {position}
          </p>
          <p className='font-clashDisplay text-xs text-[#184CD1]'>{company}</p>
        </div>
      </div>
    </>
  )
}

export default Team
