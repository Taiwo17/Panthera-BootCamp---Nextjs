import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const router = useRouter()
  const currentLink = router.pathname
  const activeLink = 'text-vendiitPrimary font-sora font-semibold text-base'
  const inActiveLink = 'text-vendiitPrimary font-sora opacity-60 text-base'

  return (
    <nav className='fixed w-full flex flex-wrap items-center justify-between px-6 py-4 bg-[#ffffff] lg:h-[104px] lg:px-28 xl:px-32'>
      <div className='container flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link className='inline-block mr-4 py-2' href={'/'}>
            <img src='../images/Logo.png' alt='Vendiit Logo' />
          </Link>

          <button
            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1L13 13M1 13L13 1L1 13Z'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <svg
                width='18'
                height='14'
                viewBox='0 0 18 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 13H17M1 1H17H1ZM1 7H17H1Z'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            'lg:flex lg:items-center  my-3 lg:mt-0' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <ul className=' flex mt-4 flex-col lg:flex-row gap-7 md:gap-10'>
            <Link href={'/'}>
              <li className={currentLink === `/` ? activeLink : inActiveLink}>
                Home
              </li>
            </Link>
            <Link href={'/courses'}>
              <li className={currentLink === `/` ? activeLink : inActiveLink}>
                Courses
              </li>
            </Link>
            <Link href={'/schedule'}>
              <li className={currentLink === `/` ? activeLink : inActiveLink}>
                Schedule
              </li>
            </Link>
            <Link href={'/faq'}>
              <li className={currentLink === `/` ? activeLink : inActiveLink}>
                FAQ
              </li>
            </Link>
          </ul>
        </div>
        <ul className=''>
          <Link href={'/register'}>
            <li className='hidden lg:block font-clashDisplay font-medium  bg-[#184CD1] text-white border border-[#184CD1] px-6 py-3 rounded-lg'>
              Register
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
