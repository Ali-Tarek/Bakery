import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-red-50">
      <div className="border-t border-black border-solid border-opacity-50 mb-8"></div>
      <div className="container max-w-7xl flex flex-col lg:flex-row md:flex-row justify-between items-center px-4 lg:px-0">
        <div className="w-full lg:w-4/12 md:w-4/12 flex flex-col items-center lg:items-start md:items-start">
          <h3 className="text-3xl text-customPurple mb-8 self-center lg:self-auto md:self-auto">
            Bakery
          </h3>
          <p className="mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-3 justify-center lg:justify-start md:justify-start">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-gray-700 text-2xl cursor-pointer" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-gray-700 text-2xl cursor-pointer" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaSquareInstagram className="text-gray-700 text-2xl cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="flex lg:space-x-10 space-x-5 text-md mt-8">
          <div className="space-y-3 mb-6 lg:mb-0">
            <p className="font-bold">OUR STORES</p>
            <p>SLOVAKIA</p>
            <p>CZECH REPUBLIC</p>
            <p>FINLAND</p>
            <p>POLAND</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">USEFUL LINKS</p>
            <p>HOME</p>
            <p>PRIVACY POLICY</p>
            <p>TERMS CONDITIONS</p>
            <p>CONTACT US</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
