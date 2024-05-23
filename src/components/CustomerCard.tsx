import React from "react";
import Image from "next/image";

interface CustomerCardProps {
  img: string;
  name: string;
  location: string;
  opinion: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  img,
  name,
  location,
  opinion,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center">
        <Image src={img} alt={name} width={100} height={100} />
        <div className="ml-4">
          <div className="font-bold">{name}</div>
          <div className="text-gray-500">{location}</div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{opinion}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
