// pages/index.js
import Image from "next/image";
import React from "react";

const ContactForm = () => {
  const buttonsData = [
    {
      iconSrc: "/liveAgent.svg",
      label: "Live agent",
    },
    {
      iconSrc: "/whatsappIcon.svg",
      label: "WhatsApp",
    },
    {
      iconSrc: "/instaIcon.svg",
      label: "Telegram",
    },
  ];
  const inputFieldsData = [
    {
      iconSrc: "/user.svg",
      placeholder: "Name",
    },
    {
      iconSrc: "/circum_mobile-2.svg",
      placeholder: "Phone Number",
    },
    {
      iconSrc: "/gmailIcon.svg",
      placeholder: "Email",
    },
  ];
  return (
    <div className="bg-[#EEEEEE] lg:px-10 w-full mt-10 py-10">
    <div className="flex justify-center items-center max-w-[1280px] w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 items-center ">
        <div className="w-full md:w-1/2 md:h-[794px] rounded-[5px] relative md:right-[-10px]">
          <img
            src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4"
            alt="Buildings"
            className="w-full h-full object-cover rounded-[8px] hidden md:block"
          />
        </div>

        <div className="w-full contactP rounded-[5px] border-[2px] border-[#5C2289] md:w-1/2 sm:p-8  h-[770px] bg-white flex flex-col relative md:right-[10px]">
          <h2 className="text-[32px] font-semibold text-[#000000] mb-4">
            How can we help you?
          </h2>
          <form className="space-y-4">
            {inputFieldsData.map((field, index) => (
              <div key={index} className="relative mb-4">
                <Image
                  src={field.iconSrc}
                  alt={`${field.placeholder} Icon`}
                  width={24}
                  height={24}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full pl-14 mt-1 px-10 placeholder-[#000000] py-6 focus:outline-none"
                />
                <div className="h-1 w-full border-b border-[#BBBBBB]"></div>
              </div>
            ))}
            <div className="relative">
              <Image
                src="/testArea.svg"
                alt="User Icon"
                width={24}
                height={24}
                className="absolute left-1 top-[40%] transform -translate-y-1/2 "
              />
              <textarea
                placeholder="Comments"
                className="w-full pl-14  px-10  py-10 placeholder-[#000000]  focus:outline-none  "
              ></textarea>
              <div className="h-1 w-full border-b border-[#BBBBBB] "></div>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                type="submit"
                className="bg-[#5C2289] text-[22px] font-[700] text-white py-2 px-12 rounded-full hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mtTop md:mt-2 lg:mt-4 flex justify-evenly items-center sm:justify-between">
            {buttonsData.map((button, index) => (
              <div
                key={index}
                className="flex items-center bg-[#F5F5F5] font-[500] lg:px-4 lg:py-2 py-2 px-2  rounded-[8px] lg:text-[18px] text-[14px] text-[#5C2289]"
              >
                <Image
                  src={button.iconSrc}
                  alt={`${button.label} Icon`}
                  width={20}
                  height={20}
                  className="mr-1 lg:mr-2 "
                />
                <div className="hidden sm:block ">
                {button.label}
                </div>
              </div>
            ))}
          </div>

          <div className=" mtTop md:mt-2 lg:mt-4 gap-3 text-gray-500 text-sm flex  items-center">
            <Image
              src="/mapIcon.svg"
              alt="Map Icon"
              width={16}
              height={16}
              className=""
            />
            <div className="">
              Dubai International Financial Centre Gate Avenue - South Zone,
              Level 1
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ContactForm;
