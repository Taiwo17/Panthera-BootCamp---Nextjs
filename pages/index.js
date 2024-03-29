import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CardImage from "@/components/CardImage";
import Team from "@/components/Team";
import Slider from "@/components/Slider";
import Accordion from "@/components/Accordion";
import questions from "@/questions";
import Schedule from "@/components/Schedule";
import { testimonial } from "@/questions";
import Footer from "@/components/Footer";

export default function Home() {
  const [people, setPeople] = useState(testimonial);

  return (
    <>
      <Head>
        <title>
          Panthera Tech School | Best Tech School in Nigeria, Boyepanthera
          Coding Bootcamp
        </title>
        <meta
          name="description"
          content="Panthera Tech School | Best Tech School in Nigeria, Boyepanthera
          Coding Bootcamp"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <HeroSection
          backgroundColor={"#184CD1"}
          backgroundImage={"../images/hero.png"}
          title={"Go from a total beginner to expert in 4 months"}
          tech={"Panthera Tech Bootcamp"}
          desc={
            "Learn coding and tech Skills to become proficient with a full real life project to show in your portfolio."
          }
          btnTitle={"Start Learning"}
        />
        <div className="bg-[#E8EEFC] h-auto mx-8 mt-[-100px] mb-32 rounded-2xl px-8 md:px-12 lg:mx-32">
          <div className="flex flex-col gap-8 py-8 md:flex-row">
            <div className="">
              <h2 className="font-clashDisplay font-base text-[#184CD1] pb-4 tracking-wide md:text-[20]">
                Life-time mentorship
              </h2>
              <p className="font-sora font-light text-base text-[#05112E] tracking-wide ">
                Get a lifetime mentorship program with the founder of this
                bootcamp. You can reach out for help when you are stuck.
              </p>
            </div>
            <div className="">
              <h2 className="font-clashDisplay font-base text-[#184CD1] pb-4 tracking-wide md:text-[20]">
                Code Review
              </h2>
              <p className="font-sora font-light text-base text-[#05112E] tracking-wide">
                Get a lifetime mentorship program with the founder of this
                bootcamp. You can reach out for help when you are stuck.
              </p>
            </div>
            <div className="">
              <h2 className="font-clashDisplay font-base text-[#184CD1] pb-4 tracking-wide md:text-[20]">
                Developer Community
              </h2>
              <p className="font-sora font-light text-base text-[#05112E] tracking-wide">
                Get a lifetime mentorship program with the founder of this
                bootcamp. You can reach out for help when you are stuck.
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="px-8 mb-32 md:px-12 lg:px-32 ">
        <div>
          <h2 className="font-clashDisplay font-bold text-[20px] text-[#184CD1] pb-2">
            Beginner Coding Bootcamp
          </h2>
          <p className="font-sora font-light text-base text-black mb-12 lg:text-[20] lg:w-1/2">
            The bootcamp is divided into two tracks for you to chose your fight
            better. You will learn the following topics.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row ">
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"Front-End Development"}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"Front-End Development"}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"Front-End Development"}
            desc={`HTML, CSS, JS, React etc.`}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
        </div>
      </section>
      <section className="px-8 mb-32 md:px-12 lg:px-32">
        <div>
          <h2 className="font-clashDisplay font-bold text-[20px] text-[#184CD1] pb-2">
            Non-Coding Tech Bootcamp
          </h2>
          <p className="font-sora font-light text-base text-black mb-12 lg:text-[20] lg:w-1/2">
            The bootcamp is divided into two tracks for you to chose your fight
            better. You will learn the following topics.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row ">
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"UI/UX Design"}
            desc={`End to end practical `}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"Intro to Data Science "}
            desc={`Front-End Developer`}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"UI/UX Design"}
            desc={`Software Automation`}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
        </div>
      </section>
      <section className="px-8 mb-32 md:px-12 lg:px-32">
        <div>
          <h2 className="font-clashDisplay font-bold text-[20px] text-[#184CD1] pb-2">
            Non-Coding Tech Bootcamp
          </h2>
          <p className="font-sora font-light text-base text-black mb-12 lg:text-[20] lg:w-1/2">
            The bootcamp is divided into two tracks for you to chose your fight
            better. You will learn the following topics.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row ">
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"Advance Front-End Dev."}
            desc={`Software Automation`}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"Advance Back-End Dev."}
            desc={`Software Automation`}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
          <CardImage
            img={"../cardstacks/cardTwo.jpg"}
            title={"Advance Full Stack Dev."}
            desc={`Software Automation`}
            startDate={"Start Date"}
            dateNow={`9 Jan, 2023`}
            price={"Price"}
            amount={"N0.00"}
            amountOne={"N0.00"}
            btn={"Register Now"}
            btnOne={"Preview"}
          />
        </div>
      </section>
      <section className="px-8 mb-32 md:px-12 lg:px-32">
        <div>
          <h2 className="font-clashDisplay font-bold text-[20px] text-[#184CD1] pb-2">
            Non-Coding Tech Bootcamp
          </h2>
          <p className="font-sora font-light text-base text-black mb-12 lg:text-[20] lg:w-1/2">
            The bootcamp is divided into two tracks for you to chose your fight
            better. You will learn the following topics.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Team
            img={"../images/boye.png"}
            name={"Olanrewaju Olaboye"}
            position={"Founder/Software Engr."}
            company={"MegaStack Technologies"}
          />
          <Team
            img={"../images/gilbert.png"}
            name={"Gilbert Umeh"}
            position={"Product Designer"}
            company={"MegaStack Technologies"}
          />
          <Team
            img={"../images/boye.png"}
            name={"Malik Ayomide"}
            position={"Senior Software Engr."}
            company={"MegaStack Technologies"}
          />
          <Team
            img={"../images/gilbert.png"}
            name={"Shobo Taiwo Adefowope"}
            position={"Junior Software Engr."}
            company={"MegaStack Technologies"}
          />
        </div>
      </section>
      <section className="px-8 mb-32 md:px-12 lg:px-32 bg-[#184CD1] h-[744px]">
        <div className="pt-32">
          <div>
            <h2 className="font-clashDisplay font-bold text-[20px] text-white pb-2">
              Still, in doubt?
            </h2>
            <div className="flex items-center justify-between pb-8">
              <p className="font-sora font-light text-base text-white opacity-70 mb-8 lg:text-[20] lg:w-1/2">
                See what participants from the previous bootcamp saying about
                us.
              </p>
              <div className="flex items-center  gap-4">
                <button className="border border-white rounded-lg p-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6666 14.6668H12.5466L16.9466 10.2801C17.1977 10.029 17.3387 9.68849 17.3387 9.33342C17.3387 8.97835 17.1977 8.63782 16.9466 8.38675C16.6955 8.13568 16.355 7.99463 15.9999 7.99463C15.6449 7.99463 15.3043 8.13568 15.0533 8.38675L8.38661 15.0534C8.26522 15.1802 8.17007 15.3297 8.10661 15.4934C7.97325 15.818 7.97325 16.1821 8.10661 16.5068C8.17007 16.6704 8.26522 16.8199 8.38661 16.9468L15.0533 23.6134C15.1772 23.7384 15.3247 23.8376 15.4872 23.9053C15.6497 23.973 15.8239 24.0078 15.9999 24.0078C16.176 24.0078 16.3502 23.973 16.5127 23.9053C16.6752 23.8376 16.8227 23.7384 16.9466 23.6134C17.0716 23.4895 17.1708 23.342 17.2385 23.1795C17.3062 23.017 17.341 22.8428 17.341 22.6667C17.341 22.4907 17.3062 22.3165 17.2385 22.154C17.1708 21.9915 17.0716 21.844 16.9466 21.7201L12.5466 17.3334H22.6666C23.0202 17.3334 23.3594 17.1929 23.6094 16.9429C23.8595 16.6928 23.9999 16.3537 23.9999 16.0001C23.9999 15.6465 23.8595 15.3073 23.6094 15.0573C23.3594 14.8072 23.0202 14.6668 22.6666 14.6668Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="bg-[#A4BAF4] border border-[#184CD1] rounded-lg p-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8933 15.4934C23.8299 15.3297 23.7347 15.1802 23.6133 15.0534L16.9467 8.38675C16.8223 8.26243 16.6748 8.16382 16.5123 8.09654C16.3499 8.02926 16.1758 7.99463 16 7.99463C15.6449 7.99463 15.3044 8.13568 15.0533 8.38675C14.929 8.51107 14.8304 8.65866 14.7631 8.82109C14.6958 8.98351 14.6612 9.15761 14.6612 9.33342C14.6612 9.68849 14.8023 10.029 15.0533 10.2801L19.4533 14.6668H9.33333C8.97971 14.6668 8.64057 14.8072 8.39052 15.0573C8.14048 15.3073 8 15.6465 8 16.0001C8 16.3537 8.14048 16.6928 8.39052 16.9429C8.64057 17.1929 8.97971 17.3334 9.33333 17.3334H19.4533L15.0533 21.7201C14.9284 21.844 14.8292 21.9915 14.7615 22.154C14.6938 22.3165 14.6589 22.4907 14.6589 22.6667C14.6589 22.8428 14.6938 23.017 14.7615 23.1795C14.8292 23.342 14.9284 23.4895 15.0533 23.6134C15.1773 23.7384 15.3248 23.8376 15.4872 23.9053C15.6497 23.973 15.824 24.0078 16 24.0078C16.176 24.0078 16.3503 23.973 16.5128 23.9053C16.6752 23.8376 16.8227 23.7384 16.9467 23.6134L23.6133 16.9468C23.7347 16.8199 23.8299 16.6704 23.8933 16.5068C24.0267 16.1821 24.0267 15.818 23.8933 15.4934Z"
                      fill="#184CD1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`flex flex-col justify-between gap-8 md:flex-row`}>
            {people.map((person) => {
              return <Slider key={person.id} {...person} />;
            })}
            <Slider
              desc={`Helped me with my request, gave me advice through a new person's
          perspective regarding my coding style and was very helpful!`}
              img={"../images/testOne.png"}
              name={"Joey Leonardi"}
            />
            {/* <Slider
              desc={`Helped me with my request, gave me advice through a new person's
          perspective regarding my coding style and was very helpful!`}
              img={'../images/testOne.png'}
              name={'Joey Leonardi'}
            />
            <Slider
              desc={`Helped me with my request, gave me advice through a new person's
          perspective regarding my coding style and was very helpful!`}
              img={'../images/testOne.png'}
              name={'Joey Leonardi'}
            /> */}
          </div>
        </div>
      </section>
      <article className="px-8 mb-32 md:px-12 lg:px-32">
        <div>
          <h2 className="font-clashDisplay font-bold text-[20px] text-[#184CD1] pb-2">
            Have question for us?
          </h2>
          <p className="font-sora font-light text-base text-black mb-12 lg:text-[20] lg:w-1/2">
            We have currated some questions you might need answers to, here are
            some of them to get you informed about the boot camp.
          </p>
        </div>
        <div>
          <section>
            {questions.map((question) => {
              return <Accordion key={question.id} {...question} />;
            })}
          </section>
        </div>
      </article>
      <div className="px-8 mb-32 md:px-12 lg:px-32">
        <Schedule />
      </div>
      <div className="border border-[#184cd133]">
        <Footer />
      </div>
    </>
  );
}
