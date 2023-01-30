import Input from '@/components/Input'
import React from 'react'

function Signin() {
  return (
    <>
      <div>
        <div className='flex items-center justify-center mt-[27.37px]'>
          <img src='../images/logo_signup.png' alt='' />
        </div>
      </div>
      <div className='mx-8 mt-[80px] w-auto md:mx-auto p-8 border border-[#184cd11a] bg-white rounded-2xl  max-w-[576px] '>
        <div>
          <h1 className='font-clashDisplay text-vendiitPrimary font-bold text-[25px] pb-4 md:text-[44px] leading-126 '>
            Sign In
          </h1>
          <p className='font-sora font-light leading-32 text-base text-black pb-8 md:text-[20px] '>
            Get into your account
          </p>
        </div>
        <div>
          <form action=''>
            <div>
              <div className='pb-6'>
                <label
                  className='block pb-1 font-sora text-base text-black leading-24 font-semibold'
                  htmlFor='email'
                >
                  Email
                </label>
                <Input
                  type={'email'}
                  name={'email'}
                  id={'email'}
                  placeholder={'placeholder'}
                />
              </div>
              <div className='pb-6'>
                <div className='flex items-center justify-between pb-1'>
                  <label
                    className='font-sora text-base text-black leading-24 font-semibold'
                    htmlFor='password'
                  >
                    Password
                  </label>
                  <p className='font-sora text-xs leading-[16px] font-semibold text-vendiitPrimary'>
                    Forget Password
                  </p>
                </div>
                <Input
                  type={'password'}
                  name={'password'}
                  id={'password'}
                  placeholder={'placeholder'}
                />
              </div>
              <div className='flex items-center justify-center pb-8'>
                <button className='font-sm font-medium font-clashDisplay text-black px-8 py-4 border border-[#4EB729] h-[56px] w-full rounded-lg bg-[#66D540] hover:bg-[#4eb729] lg:font-base lg:font-semibold'>
                  Action
                </button>
              </div>
              <div className='pb-[150px] lg:pb-0'>
                <p className='font-sora font-normal text-sm leading-24 text-black lg:text-base'>
                  Create new account?{' '}
                  <span className='font-sora font-medium text-sm leading-24 text-vendiitPrimary lg:text-base lg:font-semibold'>
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
