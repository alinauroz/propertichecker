import React from "react";
import Image from "next/image";
const DownloadAppSection = () => {
  const downloadButtonsData = [
    {
      iconSrc: "/apple.svg",
      altText: "Download on iOS",
      label: "Download on iOS",
      iconWidth: 21,
      iconHeight: 26,
    },
    {
      iconSrc: "/android 1.svg",
      altText: "Download on Android",
      label: "Download on Android",
      iconWidth: 27,
      iconHeight: 31,
    },
  ];
  return (
    <div className="relative bottom-0 bg-[#F4E8FF] my-6">
      <div className="flex max-auto max-w-[1280px] mx-auto h-[370px]">
        <div className="flex-1 hidden ml-8 lg:flex justify-center md:justify-start">
          <Image
            src="/phone-image-en 1.svg"
            alt="Mobile App Screenshots"
            className="bottom-0 h-[530px] w-[522px] absolute"
            width={522}
            height={530}
          />
        </div>

        <div className="flex-1 items-center justify-center h-full flex flex-col text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-[600] text-black mb-4">
            Download the world’s most <br /> trusted AI property search App.
          </h2>
          <p className="text-[20px] text-[#000000] mb-8">
            Install the Properti checker app NOW.
          </p>
          <div className="flex flex-col gap-y-2 sm:flex-row justify-center sm:space-x-4">
            {downloadButtonsData.map((button, index) => (
              <button
                key={index}
                className="bg-[#F5F5F5]  text-[16px] font-[500] text-[#5C2289] px-4 py-2 rounded-lg flex items-center"
              >
                <Image
                  src={button.iconSrc}
                  alt={button.altText}
                  width={button.iconWidth}
                  height={button.iconHeight}
                  className="mr-2"
                />
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
