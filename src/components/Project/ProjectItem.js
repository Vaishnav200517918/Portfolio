import React from "react";

const ProjectItem = (props) => {
  return (
    <div className="md:col-span-4  grid grid-flow-row grid-row-2 border-2 border-gray-400 rounded-sm">
      <div className="row-span-1  ">
        <img src={props.source} alt="ssasa" />
      </div>
      <div className="p-2 pb-4 row-span-1 flex flex-col items-center justify-end">
        <h3 className="text-xl mb-1 ">{props.title}</h3>
        <p className="mb-4 text-sm">{props.description}</p>
        <a
          className="  border-2 px-6 py-1  rounded-full border-black  hover:bg-gray-800 hover:text-white hover:border-gray-800 duration-500 w-fit "
          href={props.link}
        >
          Vist
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
