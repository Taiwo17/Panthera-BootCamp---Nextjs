import React from 'react'
function CardImage({
  img,
  title,
  desc,
  startDate,
  dateNow,
  price,
  amount,
  amountOne,
  btn,
  btnOne,
}) {
  return (
    <>
      <div className='border rounded-2xl mb-8 md:mb-0'>
        <div>
          <img className='rounded-t-xl md:w-full' src={img} alt='' />
        </div>
        <div className='p-6'>
          <div>
            <h3 className='text-base font-clashDisplay font-bold text-[#222222] pb-1'>
              {title}
            </h3>
            <p className='text-xs font-clashDisplay pb-4'>{desc}</p>
          </div>
          <div className='flex justify-between items-center pb-4'>
            <p className='font-clashDisplay text-sm text-[#222222]'>
              {startDate}
            </p>
            <p className='font-clashDisplay text-sm text-[#222222]'>
              {dateNow}
            </p>
          </div>
          <div className='flex justify-between items-center pb-4'>
            <p className='font-clashDisplay text-base text-[#222222]'>
              {price}
            </p>
            <p className='font-clashDisplay text-base text-[#222222]'>
              {amount}
              <span className='font-clashDisplay text-xs line-through text-[#222222]'>
                {amountOne}
              </span>
            </p>
          </div>
          <div className='flex justify-between items-center'>
            <button className='bg-[#66D540] border text-black border-[#4EB729] rounded-lg px-6 py-3 font-clashDisplay'>
              {btn}
            </button>
            <button className='bg-white border border-[#184CD1] text-[#184CD1] rounded-lg px-6 py-3 font-clashDisplay'>
              {btnOne}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardImage
