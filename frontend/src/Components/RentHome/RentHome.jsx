import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";

const RentHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const listing = ["Rent", "Buy", "New Projects", "Commercial"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:-mt-16 -mt-8 relative backdrop-blur-sm z-50 grid place-items-center">
      <div className="flex flex-col gap-8 pt-8 place-items-center rounded-xl sm:h-[226px] w-[88%] RentHome">
        <div className="bg-white rounded-xl w-[70%]">
          <div className="sm:flex place-items-center w-full">
            {listing.map((list, index) => (
              <button
                key={index}
                className={`py-[22px] w-full border-r text-[14px] md:text-[16px] ${
                  index === activeIndex
                    ? "bg-[#5C2289] text-white"
                    : "text-[#5C2289]"
                } ${
                  index === 0
                    ? "sm:rounded-tl-xl sm:rounded-bl-xl"
                    : index === listing.length - 1
                      ? "sm:rounded-tr-xl sm:rounded-br-xl"
                      : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {list}
              </button>
            ))}
          </div>
        </div>

        <form action="#" className="w-full grid place-items-center">
          <div className="hidden sm:flex place-items-center w-11/12 bg-white rounded-[22px]">
            <div className="flex place-items-center gap-2 p-4  w-[50%] border-r border-[#BBBBBB]">
              <CiSearch />
              <input
                type="text"
                placeholder="City, community or building"
                className="bg-transparent lg:text-[16px] text-[12px]  outline-none w-full"
              />
            </div>
            <div className="flex relative place-items-center p-4 border-r border-[#BBBBBB] w-[20%]">
              <select
                className="w-full  bg-transparent lg:text-[16px] text-[#BBBBBB] text-[12px] outline-none appearance-none"
                defaultValue="" 
              >
                <option value="" disabled>
                  Property type
                </option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Villa">Villa</option>
              </select>
              <FaChevronDown className=" absolute right-4 text-[#BBBBBB] text-[12px] md:text-[12px] lg:text-[16px] pointer-events-none" />
            </div>
            <div className="flex relative place-items-center p-4 border-r border-[#BBBBBB] w-[20%]">
              <select
                className="w-full bg-transparent lg:text-[16px] text-[#BBBBBB] text-[12px] outline-none appearance-none"
                defaultValue="" 
              >
                <option value="" disabled>
                Beds & Baths
                </option>
                <option value="House">1 bed </option>
                <option value="Apartment">2 bed</option>
                <option value="Condo">3 bed </option>
              </select>
              <FaChevronDown className="absolute right-4 text-[#BBBBBB] text-[12px] md:text-[12px] lg:text-[16px] pointer-events-none" />
            </div>
            <div className="w-[15%] bg-[#5C2289] text-white rounded-tr-[22px] rounded-br-[22px] p-4">
              <button className="w-full md:text-[16px] text-[12px] ">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RentHome;
