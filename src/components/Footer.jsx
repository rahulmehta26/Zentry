/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const hoverIcon =
    " size-8 cursor-pointer transition-colors duration-500 ease-in-out hover:text-white ";

  return (
    <footer className=" w-screen py-5 px-10 bg-violet-300 text-[#000]">
      <div className=" container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row ">
        <div>
          <p className=" text-center text-[#fff] font-bold text-lg md:text-left ">
            &copy; Zentry 2024. All rights reserved
          </p>

          <p className=" text-center text-[#fff]  text-sm md:text-left ">
            Made by Rahul Mehta
          </p>
        </div>

        <div className="flex justify-center gap-4 md:justify-start ">
          <a href="https://github.com/rahulmehta26">
            <FaGithub className={hoverIcon} />
          </a>

          <a href="https://linkedin.com/in/rahulmehta26">
            <FaLinkedin className={hoverIcon} />
          </a>
        </div>

        <a
          href="#privacy-policy"
          className=" text-center text-sm text-[#fff] font-semibold hover:underline md:text-right "
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
