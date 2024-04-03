import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="p-3 grid md:grid-cols-2 gap-4 bg-white rounded-t-[12px] shadow-lg overflow-hidden">
      <div className="relative h-[212px] ">
        <Image
          src={project?.image}
          alt="Project"
          fill
          className="fill rounded-[12px]"
        />
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <div className="bg-[#00CB95] text-white gap-2 flex text-xs font-semibold px-2 py-1 rounded">
            <Image src="/checkIcon.svg" alt="icon" height={10} width={10} />
            <div>Verified Project</div>
          </div>
        <span className="bg-[#5C2289] inline-block text-center text-capitalize text-white text-xs font-semibold px-2 py-1 rounded">
          {project?.type}
        </span>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-start">
          <h2 className="text-[24px] font-semibold text-[#5C2289]">
            {project?.title}
          </h2>
        </div>
        <div className="text-gray-600 text-md font-medium py-1 rounded">
          {project?.location}
        </div>
        {
        <div className="text-gray-600 text-md font-medium py-1 rounded">
          {project?.city}, {project?.state}, {project?.country}
        </div>
        }
      </div>
    </div>
  );
};

export default ProjectCard;

