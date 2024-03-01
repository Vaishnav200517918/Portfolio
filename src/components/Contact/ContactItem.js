import React from "react";

export const ContactItem = (props) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <img
        className="w-8 h-8 object-cover"
        src={props.source}
        alt="contact item"
      />
      <p className="text-lg font-thin text-center md:text-left">
        {props.title}
      </p>
      <p className="text-md font-medium text-center md:text-left">
        {props.item}
      </p>
    </div>
  );
};
