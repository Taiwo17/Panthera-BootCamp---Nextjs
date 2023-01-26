import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import CardImage from '@/components/CardImage'
import Accordion from '@/components/Accordion'
import questions from '@/questions'
import Schedule from '@/components/Schedule'
import Footer from '@/components/Footer'

function Courses() {
  return (
    <>
      <Navbar />
      <div className='h-[750px] bg-white'>
        <div className='pt-[150px] px-8 md:px-12 lg:px-32 md:pt'>
          <h1 className='font-clashDisplay text-vendiitPrimary text-[30px] pb-4 md:text-[48px]'>
            Panthera Courses
          </h1>
          <p className='font-base font-sora font-light leading-tight tracking-wide md:text-[25px]'>
            This are the courses we offers at Panthera Tech School.
          </p>
        </div>
      </div>
      <div className='px-8 pb-32 -mt-[430px] md:px-12 lg:px-32'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:flex-wrap'>
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
          <CardImage
            img={'../cardstacks/cardTwo.jpg'}
            title={'Front-End Development'}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={'Start Date'}
            dateNow={`9 Jan, 2023`}
            price={'Price'}
            amount={'N0.00'}
            amountOne={'N0.00'}
            btn={'Register Now'}
            btnOne={'Preview'}
          />
        </div>
      </div>
      <article className='px-8 mb-32 md:px-12 lg:px-32'>
        <div>
          <h2 className='font-clashDisplay font-bold text-[20px] text-[#184CD1] pb-2'>
            Have question for us?
          </h2>
          <p className='font-sora font-light text-base text-black mb-12 lg:text-[20] lg:w-1/2'>
            We have currated some questions you might need answers to, here are
            some of them to get you informed about the boot camp.
          </p>
        </div>
        <div>
          <section>
            {questions.map((question) => {
              return <Accordion key={question.id} {...question} />
            })}
          </section>
        </div>
      </article>
      <div className='px-8 mb-32 md:px-12 lg:px-32'>
        <Schedule />
      </div>
      <Footer />
    </>
  )
}

export default Courses
