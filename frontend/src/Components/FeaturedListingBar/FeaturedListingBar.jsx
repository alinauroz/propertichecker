import Image from "next/image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const FeaturedListingBar = ({ title, icon, onPrevClick, onNextClick }) => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <div className="md:text-[32px] text-[16px] sm:text-[18px] font-semibold text-[#000000]">{title}</div>
       {icon&&  <Image src={icon} alt="no_img" width={30} height={28} />}
      </div>
      <div className="flex items-center space-x-2">
        {/* <button onClick={onPrevClick} className="p-2 bg-white rounded-full feature-listing-shadow ">
        <Image src={"/downArrow1.svg"} alt="no_img" width={24} height={24} />
        </button> */}
        <button
          onClick={onPrevClick}
          className="p-2 hover:text-[#ffff] hover:bg-[#8D278E] rounded-full feature-listing-shadow "
        >
          <FaArrowLeftLong className=" sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] " />

          {/* <Image src={"/leftArrow.svg"} alt="no_img" width={24} height={24} /> */}
        </button>
        <button
          onClick={onNextClick}
          className="p-2 hover:text-[#ffff]  hover:bg-[#8D278E]  rounded-full feature-listing-shadow"
        >
          {/* <Image src={"/rightArrow.svg"}  alt="no_img" width={24} height={24} /> */}
          <FaArrowRightLong className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]" />
        </button>
      </div>
    </div>
  );
};
export default FeaturedListingBar;
