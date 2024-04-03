// components/EventCard.js
import Image from 'next/image';

const BlogsDetailsCard = ({elem}) => {
  return (
    <div className="rounded-[12px] overflow-hidden shadow-lg  bg-white">
      <Image 
        src={elem?.image}
        alt="DWTC Dubai Event"
        width={400} 
        height={300}
        className="w-full h-[218px] object-cover"
      />
      <div className="p-4">
        <h2 className="text-[16px] font-[500] mb-2">
          {elem?.meta_title}
        </h2>
        <p className="text-gray-600 font-[400] text-sm">
         <>{elem?.meta_description
         }</>
        </p>
      </div>
    </div>
  );
};

export default BlogsDetailsCard;
