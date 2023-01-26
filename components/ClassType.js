import React from 'react'

function ClassType({ icon, physical, virtual, physicalAmt, virtualAmt }) {
  return (
    <>
      <div className='bg-vendiitPrimary rounded-2xl p-6 '>
        <div className='pb-4'>
          <img src={icon} alt='' />
        </div>

        <div className='flex items-center justify-between pb-2'>
          {physical ? (
            <p className='font-sora text-sm text-white font-normal leading-[24px]'>
              {physical}
            </p>
          ) : null}
          {physicalAmt ? (
            <p className='font-sora text-sm text-white font-normal leading-[24px]'>
              {physicalAmt}
            </p>
          ) : null}
        </div>
        <div className='flex items-center justify-between'>
          {virtual ? (
            <p className='font-sora text-sm text-white font-normal leading-[24px]'>
              {virtual}
            </p>
          ) : null}
          {virtualAmt ? (
            <p className='font-sora text-sm text-white font-normal leading-[24px]'>
              N150,000.00
            </p>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default ClassType
