import React, { useState } from "react";
import logo from "./assets/Logo.png";
import "../index.css";

const Navbar = () => {
  let navLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "PORTFOLIO", link: "/" },
    { name: "SERVICE", link: "/" },
  ];

  let [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" w-full fixed top-0 left-0 z-10 ">
      <div className="md:flex items-center justify-between bg-white py-4 pl-0 md:pr-10 px-7 lg:pl-10 lg:pr-16">
        <div className="logo  min-w-fit">
          <img
            className="w-64 logo-img h-8 object-cover"
            src={logo}
            alt="Logo"
          ></img>
        </div>
        <div onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={!menuOpen ? 1.5 : 0}
            stroke="currentColor"
            className="w-6 h-6 absolute right-8 top-6 cursor-pointer md:hidden select-none "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={menuOpen ? 1.5 : 0}
            stroke="currentColor"
            className="w-6 h-6 absolute right-8 top-6 cursor-pointer md:hidden select-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul
          className={`md:flex md:items-center bg-white absolute md:static left-0 right-0 transition-all duration-500 md:z-auto z-[-1] md:pb-0 pb-8  shadow-xl md:shadow-none   ${
            menuOpen
              ? "top-20 opacity-100"
              : "top-[-500px] md:opacity-100 opacity-0"
          } `}
        >
          {navLinks.map((links) => {
            return (
              <li
                key={links.name}
                className="md:mr-8 text-l my-7 md:my-0 lg:mr-16 "
              >
                <a
                  className="text-gray-800 hover:text-gray-400 duration-300"
                  href={links.link}
                >
                  {links.name}
                </a>
              </li>
            );
          })}
          <button className="text-gray-800 text-lg rounded-full md:ml-0 border-gray-500 font-normal border-2  px-4 py-1 lg:ml-10 whitespace-nowrap flex items-center gap-2 mx-auto hover:bg-gray-800 hover:text-white hover:border-gray-800 duration-500">
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
