import React from "react";
import Image from "next/image";
import Button from "./Button";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Hero() {
  return (
    <div className="relative bg-red-100">
      <div className="container max-w-7xl py-14 flex flex-col lg:flex-row justify-around items-center">
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <p className="leading-tight bg-gradient-to-r from-purple-800 to-purple-600 text-transparent bg-clip-text font-bold text-5xl pb-10">
            Sweet moments, freshly baked with love
          </p>
          <p className="text-gray-600 text-lg pb-6">
            Customized cakes, treats and every thing sweet for all your special
            moments.
          </p>
          <Button text="Shop Now" />
          <div className="flex justify-center lg:justify-start pt-4 space-x-3 ml-0 lg:ml-3">
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
        <div className="w-full lg:w-auto max-w-full h-auto mt-8 lg:mt-0">
          <Image
            src="/donuts.svg"
            alt="donuts"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.69,22.35,103.77,35.35,167.48,35.35,86.85,0,172.82-24.82,252.66-24.82S551,85.29,629.09,85.29c45.21,0,101.27-6.32,165.08-17.54C880.29,48.52,958.58,27.4,1040,27.4c58.42,0,111.86,6.82,160,18.67V0Z"
            opacity=".5"
            className="fill-red-300"></path>
          <path
            d="M0,0V15.81C47.69,33.21,103.77,45.29,167.48,45.29c86.85,0,172.82-24.82,252.66-24.82S551,56,629.09,56c45.21,0,101.27-6.32,165.08-17.54C880.29,19.52,958.58-1.6,1040-1.6c58.42,0,111.86,6.82,160,18.67V0Z"
            opacity=".5"
            className="fill-red-300"></path>
          <path
            d="M0,0V5.63C47.69,15.37,103.77,21.29,167.48,21.29c86.85,0,172.82-4.82,252.66-4.82S551,26,629.09,26c45.21,0,101.27-6.32,165.08-17.54C880.29-7.48,958.58-28.6,1040-28.6c58.42,0,111.86,6.82,160,18.67V0Z"
            className="fill-red-300"></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
