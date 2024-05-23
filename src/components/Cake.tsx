import React from "react";
import Image from "next/image";

interface CakeProps {
  text: string;
  img: string;
}

const Cake: React.FC<CakeProps> = ({ text, img }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="flex items-center">
          <div className="transform h-16 border-dotted border-gray-300 border-l-2"></div>
        </div>
      </div>
      <div className="mb-4 bg-white rounded-full">
        <Image src={img} alt="cake" width={124} height={124} />
      </div>
      <p className="text-center lg:text-lg text-xs">{text}</p>
    </div>
  );
};

export default Cake;
