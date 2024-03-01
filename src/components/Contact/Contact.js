import React from "react";
import { ContactItem } from "./ContactItem";
import EmailIcon from "../assets/Email-icon.png";
import LinkedInIcon from "../assets/LinkedIn-icon.png";
import GithubIcon from "../assets/Github-icon.png";
import PhoneIcon from "../assets/Phone-icon.png";

const Contact = () => {
  return (
    <div
      id="ContactSection"
      className="bg-black w-full h-[546px]  relative  md:mb-96 mb-[130vw]"
    >
      <div className=" bg-white absolute md:top-[165px] top-[80px] md:left-16 md:right-16 left-4 right-4  customBoxShadow  ">
        {/* <p className="text-4xl py-4 tex">Contact Me</p> */}
        <div className="grid md:grid-cols-12 grid-cols-1 p-4 ">
          <div className="bg-white col-span-6 py-4 px-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-4xl mb-4">CONTACT ME</p>
              <p className="text-2xl mb-1">LETS WORK TOGETHER</p>
              <p className=" text-center md:text-left">
                Want to get in touch? I'd Love to hear from you. Contact me for
                more information about working with me!
              </p>
            </div>

            <ContactItem
              source={EmailIcon}
              title="EMAIL"
              item="vaishnav.sajeevkumar05@gmail.com"
            ></ContactItem>
            <ContactItem
              source={LinkedInIcon}
              title="LINKEDIN"
              item="https://www.linkedin.com/in/vaishnav-sajeev-9917b72a3"
            ></ContactItem>
            <ContactItem
              source={GithubIcon}
              title="GITHUB"
              item="https://github.com/Vaishnav200517918"
            ></ContactItem>
            <ContactItem
              source={PhoneIcon}
              title="PHONE"
              item="+1(249)-733-1410"
            ></ContactItem>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-2xl mb-2">FOLLOW ME</p>
              <div className="flex gap-4 ">
                <a href="https://www.instagram.com/vaishnav_s.v?igsh=aWoyaDlrMDM4M2ww">
                  <img
                    className="w-8 h-8 object-cover"
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100010797284918&mibextid=ZbWKwL">
                  <img
                    className="w-8 h-8 object-cover"
                    src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://www.linkedin.com/in/vaishnav-sajeev-9917b72a3">
                  <img
                    className="w-8 h-8 object-cover"
                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                    alt="Linkedin"
                  />
                </a>
                <a href="https://github.com/Vaishnav200517918">
                  <img
                    className="w-8 h-8 object-cover"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white col-span-6 px-8 ">
            <img
              className="object-cover h-full "
              src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
