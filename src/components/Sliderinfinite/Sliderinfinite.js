import React from "react";

const Sliderinfinite = (props) => {
  const slideItemList = [
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
    "VAISHNAV SAJEEV",
  ];
  return (
    <div
      className={` md:py-2 py-1 md:my-40 my-28 ${props.degree} overflow-hidden whitespace-nowrap bg-black -z-10`}
    >
      <div className="animate-slideRight bg-black text-white inline-block text-xs md:text-lg  ">
        {slideItemList.map((item) => {
          return <div class="inline-block mx-4 ">{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Sliderinfinite;
