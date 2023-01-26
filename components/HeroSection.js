import React from 'react'

function HeroSection({
  backgroundColor,
  backgroundImage,
  title,
  tech,
  desc,
  btnTitle,
}) {
  return (
    <section
      className={`bg-[#184CD1] h-[750px] pt-[180px] px-8 md:px-12 lg:px-32 md:pt-[220px] md:h-[891px] lg:h-[750px]`}
    >
      <div className='flex flex-col '>
        {tech ? (
          <p className='font-sora text-base font-thin text-white mb-6 md:text-[20px]'>
            {tech}
          </p>
        ) : null}
        <div className='flex flex-col w-full lg:flex-row lg:justify-between md:gap-16'>
          <div className='lg:w-[55%]'>
            {title ? (
              <h1 className='font-clashDisplay text-[30px] text-white leading-110 tracking-wide mb-6 md:mb-0 md:text-[56px]'>
                Go from a total beginner to expert in 4 months
              </h1>
            ) : null}
          </div>
          <div className='lg:w-[45%] lg:mt-6'>
            {desc ? (
              <p className='text-white font-sora font-light text-base leading-tight tracking-wide mb-6 md:mb-8 md:text-[25px] lg:font-thin'>
                Learn coding and tech Skills to become proficient with a full
                real life project to show in your portfolio.
              </p>
            ) : null}
            {btnTitle ? (
              <button className='bg-[#66D540] border-solid border-[#4EB729] text-base rounded-lg h-[56px] px-8 py-4 text-black font-clashDisplay leading-[24px] md:text-[20px]'>
                Start Learning
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
