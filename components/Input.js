import React from 'react'

function Input({ type, name, id, placeholder }) {
  return (
    <>
      <div className='border rounded-lg border-[#B9BECA] flex gap-2 items-center bg-[#F5F5F5]'>
        <div className='w-6 h-6 ml-4 bg-[#D7D7D7] rounded'></div>
        <input
          className='h-[56px] text-base font-sora text-[#333333] font-normal leading-24 bg-[#F5F5F5] w-full border-0 focus:outline-none'
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
        />
        <div className='w-6 h-6 mr-4 bg-[#D7D7D7] rounded'></div>
      </div>
    </>
  )
}

export default Input
