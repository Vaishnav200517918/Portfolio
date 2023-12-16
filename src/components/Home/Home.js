import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="md:home md:mt-40 mt-40  bg-white relative -z-30 overflow-hidden  ">
      <div className="md:text-[9vw] text-[13vw] font-normal leading-[1] relative">
        {/* <div className="bg-white w-[210%] h-[3.4vh] -rotate-45 -translate-x-[30vw] translate-y-20  mix-blend-difference  z-[-20]  "></div> */}
        VAISHNAV SAJEEV
      </div>
      <div className="flex items-center gap-[15vw] justify-evenly">
        <p className="md:text-[9vw] text-[13vw] font-normal leading-[1] md:translate-x-[50%] translate-x-[40%]">
          ASPIRING
        </p>
        <p className="text-[1.8vw] lg:text-xl md:lg   md:w-64 w-1/3">
          Paving the Digital Path as an Aspiring Web Developer, Crafting
          Innovative Solutions and Transforming Ideas into Seamless User
          Experiences."
        </p>
      </div>
      <div className="md:text-[9vw] text-[13vw] font-normal leading-[1]">
        WEB DEVELOPER
      </div>
      <div className="md:text-xl mt-5  ">
        Unleashing Creativity in Code Transforming Ideas into Interfaces
      </div>
      <div className="line bg-white top-[50%] left-[0%] md:left-[5%] md:w-[80%]  lg:w-[65%] lg:left-[24.5%] w-[105%] h-[2.4vw] -rotate-45 absolute mix-blend-difference hidden md:block"></div>
      <div className="line bg-white left-0 right-0 -translate-x-[40vw]  h-[.2vw] rotate-90 absolute mix-blend-difference overflow-hidden hidden md:block"></div>
      <div className="line bg-white left-0 right-0 -translate-x-[39.5vw]  h-[.4vw] rotate-90 absolute mix-blend-difference overflow-hidden hidden md:block"></div>
      <div className="line bg-white left-0 right-0 translate-x-[40vw]  h-[.2vw] rotate-90 absolute mix-blend-difference overflow-hidden hidden md:block"></div>
      <div className="line bg-white left-0 right-0 translate-x-[39.5vw]  h-[.4vw] rotate-90 absolute mix-blend-difference overflow-hidden hidden md:block"></div>
    </div>
  );
};

export default Home;
