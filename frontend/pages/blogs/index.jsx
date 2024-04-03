/*import React from "react";
import HeaderHome2 from "@/Components/Elements/HeaderHome2";
import BlogsMainMenu from "@/Components/BlogsMainMenu/BlogsMainMenu";
import BlogsDetailsCard from "@/Components/BlogsMainMenu/BlogsDetailsCard";
const Blogs = () => {
  const blogData = [
    {
      src: "/blog-image.svg",
      title: "DWTC Dubai – A Venue for Thought-Provoking January Events",
      text: "DWTC Dubai – Dubai World Trade Centre – is welcoming the year 2024 with various transformative events in multiple fields and industries. Attending these events and conferences will open a portal to cosmopolitan commercial crossroads for the whole world...",
    },
  ];
  const blogs = Array(12).fill(blogData[0]);
  return (
    <div className="bg-[#F6F6F6] mb-3">
      <HeaderHome2 />
      <div className="max-w-[1280px] mx-auto mt-2">
        <BlogsMainMenu />
        <div className="grid grid-cols-12 gap-3  ">
          <div className="col-span-8  border-r-[1px] border-[#BBBBBB] pr-4 ">
            <div className="grid grid-cols-2 gap-3 mt-4">
              {blogs.map((blog, index) => (
                <BlogsDetailsCard
                  key={index}
                  src={blog.src}
                  title={blog.title}
                  text={blog.text}
                />
              ))}
            </div>
          </div>
          <div className="col-span-4 pl-4">dsdsdsd</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;*/

export default function () {
  return null;
}

