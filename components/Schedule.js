import React from 'react'

function Schedule() {
  return (
    <div className='bg-[#184CD1] h-[420px] rounded-2xl'>
      <div className='pt-16 p-6 md:pt-16  md:p-8 lg:p-16'>
        <h3 className='text-[24px] text-white font-clashDisplay pb-8 tracking-tight md:text-[30px] lg:text-[44px] lg:max-w-[650px] lg:leading-[52px]'>
          Now that you have seen what you stand to benefit for participating in
          this bootcamp
        </h3>
        <p className='font-sora leading-[24px] text-base text-white md:text-[18px] lg:text-[20px] pb-8'>
          What are you still waiting for?
        </p>
        <button className='bg-[#66D540] border text-black border-[#4EB729] rounded-lg px-6 py-3 font-clashDisplay'>
          Register
        </button>
      </div>
    </div>
  )
}

export default Schedule
