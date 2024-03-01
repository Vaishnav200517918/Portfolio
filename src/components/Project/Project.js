import React from "react";
import ProjectItem from "./ProjectItem";
import WardrobeManager from "../assets/WardrobeManager.jpg";
import Portfolio from "../assets/Portfolio.jpg";
import WatchShop from "../assets/WatchDemo.jpg";
import Dmag from "../assets/DMAG.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./Project.css";

import { Grid, Pagination } from "swiper/modules";

const Project = () => {
  return (
    <>
      <div
        id="ProjectSection"
        className="bg-black w-full h-[546px] px-4 md:px-16   relative max-w-[1408px] mx-auto  mb-[800px] flex items-center justify-start flex-col swiper-bottom"
      >
        <p className="text-4xl text-white mt-16">Projects</p>

        <div className="bg-white w-full md:p-16 relative  h-[1000px] xl:h-[1100px] max-w-[1408px] translate-y-20 customBoxShadow swiper-container">
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 2,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                },
              },
              1024: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                },
              },
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProjectItem
                source={Dmag}
                link="https://dmag.ae/"
                title="DMAG"
                description="This is a website of a Real Estate Agency in Dubai"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectItem
                source={WardrobeManager}
                link="https://wardrobeforge.onrender.com/"
                title="Wardrobe Manager"
                description="WardrobeManager is a website made using NodeJs, ExpressJs, MongoDB"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectItem
                source={Portfolio}
                link="https://vaishnav200517918.github.io/Portfolio/"
                title="Portfolio Website"
                description="My Personal Portfolio website is made using ReactJs and Tailwind CSS"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectItem
                source={WatchShop}
                link="https://demowebsitestripe.onrender.com/shops"
                title="Mock E-commerce Website"
                description="This is a demo website of an e-commerce website made using NodeJs, ExpressJs"
              />
            </SwiperSlide>
            <SwiperSlide>Project Hidden</SwiperSlide>
            <SwiperSlide>Project Hidden</SwiperSlide>
            {/* <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Project;
