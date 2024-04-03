import React from "react";
import Image from "next/image";

const FindHome = () => {
  return (
    <section className="HomeLand z-0 my-4 relative rounded-xl">
        <div className="relative w-full sm:pb-[56.25%] pb-[300px] overflow-hidden">
        <Image
          src="/Home.svg"
          alt="Home"
          layout="fill"
          className="absolute inset-0 object-cover rounded-xl"
        />
      </div>
      <div className="absolute mobileP top-0 z-10 flex flex-col xl:gap-8 lg:gap-4  text-white w-full md:p-[3rem] lg:pt-20 lg:px-16 sm:p-4 ">
        <h1 className="xl:text-[72px] lg:text-[50px] sm:text-[20px] text-[16px] font-medium xl:leading-[85px] w-[60%]">
          Finding Your New Home Is Simple
        </h1>
        <p className="xl:w-[40%] lg:w-[60%] text-[12px] sm:text-[14px]  md:text-[16px] w-[80%]">
          Lorem ipsum dolor sit amet consectetur. Et nibh eu et interdum
          tristique nunc massa. Sed gravida nec massa leo nibh faucibus ipsum
          quisque. Enim eu accumsan risus erat quam et. Fames urna molestie
          porta fringilla.
        </p>
        <div className="flex flex-col md:space-y-4 lg:space-y-5 space-y-2">
        <div>
          <button className="Chate_btn mt-4 rounded-xl md:px-12 px-4 md:py-4 py-2 text-[14px] md:text-[20px] font-bold">
            Eye by ChatGPT
          </button>
        </div>
        <div className="bg-white md:py-[12px] py-2 hidden  md:px-[20px] text-black sm:flex md:gap-[40px] place-items-center rounded-xl w-max">
          <div>
            <h2 className="md:text-[40px] sm:text-[1.325rem] text-[16px] md:font-[500] md:leading-[48px] ">999+</h2>
            <p className="sm:text-[16px] text-[12px]">Close Deal</p>
          </div>
          <div>
            <h2 className="md:text-[40px] sm:text-[1.325rem] text-[16px] md:font-[500] md:leading-[48px]  ">2500+</h2>
            <p className="sm:text-[16px] text-[12px]">Available Space</p>
          </div>
          <div>
            <h2 className="md:text-[40px] sm:text-[1.325rem] text-[16px] md:font-[500] md:leading-[48px]  ">1200+</h2>
            <p className="sm:text-[16px] text-[12px]">Happy Buyers</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FindHome;