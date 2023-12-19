import React from "react";
import "./About.css";
import MyImage from "../assets/MyImage.jpg";
const About = () => {
  return (
    <div className="bg-black w-full h-[546px]  relative  md:mb-96 mb-[130vw]">
      <div className=" bg-white absolute md:top-[165px] top-[80px] md:left-16 md:right-16 left-4 right-4 grid md:grid-cols-12 grid-cols-1 customBoxShadow  ">
        <div className=" md:col-span-5 md:p-11 p-1 object-cover md:h-[540px] ">
          <img
            className="object-cover object-left w-full h-full   "
            src={MyImage}
            alt=""
          />
        </div>
        <div className="md:col-span-7 md:p-11 p-6  text-left flex flex-col justify-center gap-9">
          <h2 className="text-4xl">
            Hello
            <br />
            I'm Vaishnav
          </h2>
          <p className="md:text-xl md:leading-10 text-gray-800 ">
            I'm an aspiring web developer passionate about creating interactive
            and user-friendly websites. I'm dedicated to continuous learning in
            front-end and back-end technologies like HTML, CSS, JavaScript,
            React, Tailwind CSS, NodeJs, ExpressJs, MongoDB, MySQL When not
            coding, you'll find me learning new things. Let's connect and
            explore exciting opportunities together!
          </p>
          <button className="text-gray-800 text-lg rounded-full  border-gray-500 font-normal border-2  px-4 py-1 whitespace-nowrap flex items-center gap-2  hover:bg-gray-800 hover:text-white hover:border-gray-800 duration-500 w-fit">
            Let's talk
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.9}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
