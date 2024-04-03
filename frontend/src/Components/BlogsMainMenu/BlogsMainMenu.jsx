import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; 

const BlogsMainMenu = ({ Categorydata }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#FFFFFF] marginX1 md:mx-4 relative px-3 sm:px-4 lg:px-10 py-4 rounded-[12px]">
      <div className="flex justify-between items-center ">
        <Link className="text-[#BBBBBB] font-[500] text-[14px]" href="#">
          General
        </Link>
        <button
          onClick={handleToggle}
          className="text-[#BBBBBB] md:hidden  font-[500] text-[14px]"
        >
          <FiMenu size={24} /> 
        </button>
        {Categorydata.map((elem, index) => (
          <Link
            key={index}
            className="text-[#BBBBBB] hidden md:block font-[500] text-[14px] sm:mx-2 "
            href="#"
          >
            {elem.category}
          </Link>
        ))}
      </div>
      <div className="flex flex-col ">
      {isOpen && (
        <div className="md:hidden mx-4 absolute w-[300px] top-full right-2  bg-white shadow-lg rounded-md mt-2">
          <ul className="flex flex-col gap-2 p-4">
            {Categorydata.map((elem, index) => (
              <li key={index}>
                <Link
                  className="text-[#BBBBBB] font-[500] text-[14px]"
                  href="#"
                >
                  {elem.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
        </div>
    </div>
  );
};

export default BlogsMainMenu;
