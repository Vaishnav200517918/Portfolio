import React from "react";
import ProjectItem from "./ProjectItem";
import WardrobeManager from "../assets/WardrobeManager.jpg";
import Portfolio from "../assets/Portfolio.jpg";
import WatchShop from "../assets/WatchDemo.jpg";

const Project = () => {
  return (
    <div className="bg-black w-full h-[546px]  relative  mb-96 ">
      <div className=" bg-white absolute md:top-[165px] top-[80px] md:left-16 md:right-16 left-4 right-4 grid md:grid-cols-12 grid-cols-1 customBoxShadow md:p-11 p-6 gap-5  ">
        <ProjectItem
          source={WardrobeManager}
          link="https://wardrobeforge.onrender.com/"
          title="Wardrobe Manager"
          description="WardrobeManager is a website made using NodeJs, ExpressJs, MongoDB"
        />
        <ProjectItem
          source={Portfolio}
          link="https://vaishnav-l1qi.onrender.com"
          title="Portfolio Website"
          description="My Personal Portfolio website is made using ReactJs and Tailwind CSS"
        />
        <ProjectItem
          source={WatchShop}
          link="https://demowebsitestripe.onrender.com/shops"
          title="Mock E-commerce Website"
          description="This is a demo website of an e-commerce website made using NodeJs, ExpressJs"
        />
      </div>
    </div>
  );
};

export default Project;
