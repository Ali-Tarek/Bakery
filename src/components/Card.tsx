import React from "react";
import Image from "next/image";
import Button from "./Button";

interface CardProps {
  img: string;
  title: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ img, title, description, price }) => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg p-4 bg-white mx-auto">
      <Image
        className="w-full h-48 object-cover md:h-56 lg:h-64"
        src={img}
        alt={title}
        width={400}
        height={400}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
          {title}
        </div>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl">
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-900 font-bold text-lg md:text-xl lg:text-2xl">
            {price}
          </p>
          <Button text="Add To Cart" />
        </div>
      </div>
    </div>
  );
};

export default Card;
