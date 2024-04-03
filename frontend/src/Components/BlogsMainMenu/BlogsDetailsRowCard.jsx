import Image from "next/image";
import React from "react";

const BlogsDetailsRowCard = ({ elem }) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className="relative w-[200px] h-[100px] ">
        <Image
          src={elem?.image}
          alt="DWTC Dubai"
          fill
          objectFit="cover"
          className="cover"
        />
      </div>

      <div>
        <h2 className="text-[16px] font-[500]">{elem?.meta_title}</h2>
      </div>
    </div>
  );
};

export default BlogsDetailsRowCard;
