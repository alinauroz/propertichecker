import Image from "next/image";
import Link from "next/link";

const PropertyCard = ({ ele }) => {
  return (
    <Link href={`/properties-details/${ele.slug_id}`}>
      <div className="p-3 grid md:grid-cols-2 gap-4 bg-white rounded-t-[12px] shadow-lg overflow-hidden">
        <div className="relative h-[212px] ">
          <Image
            src={ele?.title_image}
            alt="Property"
            fill
            className="fill rounded-[12px]"
          />
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            <div className="bg-[#00CB95] text-white gap-2 flex text-xs font-semibold px-2 py-1 rounded">
              <Image src="/checkIcon.svg" alt="icon" height={10} width={10} />
              <div>Verified Property</div>
            </div>
            <div className=" bg-[#5C2289] text-white gap-2 flex text-xs font-semibold px-2 py-1 rounded">
              <Image src="/agent.svg" alt="icon" height={8} width={10} />
              <div>Verified Agent</div>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="bg-white flex justify-center items-center rounded w-[32px] h-[32px]">
              <Image src={"/heart.svg"} alt="no_img" width={16} height={16} />
            </button>
            <button className="bg-white flex justify-center items-center  rounded w-[32px] h-[32px]">
              <Image src={"/map.svg"} alt="no_img" width={16} height={16} />
            </button>
          </div>
          <div className="absolute bottom-4 right-4 bg-white text-gray-600 text-sm font-semibold px-2 py-1 rounded">
            3 days ago
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-start">
            <h2 className="text-[24px] font-semibold text-[#5C2289]">
              {ele?.title}
            </h2>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="text-xs text-[#FF0000] font-[400]">PREMIUM</div>
              <Image
                src={"/propertyLogo.svg"}
                alt="no_img"
                width={64}
                height={32}
              />
            </div>
          </div>

          <div className="text-[16px] font-semibold text-[#000000] mt-2">
          $ {ele?.price}
          </div>

          <div className="text-[#BBBBBB] text-[16px] font-[400] flex flex-col gap-y-3 mt-3">
            <div className="flex items-center space-x-2">
              {/* "/homeIcon.svg" */}
              <Image
                src={ele?.category && ele?.category.image}
                alt="no_img"
                width={24}
                height={24}
              />
              <span>{ele?.category && ele?.category.category}</span>
            </div>

            <div className="flex items-start space-x-2 mt-2">
              <Image src={"/mapIcon.svg"} alt="no_img" width={24} height={24} />
              <span className="text-[14px]">
                
                
                  {ele?.city} {ele?.city ? "," : null} {ele?.state}
                  {ele?.state ? "," : null} {ele?.country}
                
              </span>
            </div>
            <div className="flex items-center   mt-2">
              <span className="text-[#BBBBBB] font-[400] text-[12px]">
                3 days ago
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#BBBBBB] border-b"></div>
    </Link>
  );
};

export default PropertyCard;
