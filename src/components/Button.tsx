import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-purple-800 text-white px-4 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-xl font-semibold text-xs md:text-md lg:text-lg transition duration-300 ease-in-out transform hover:scale-105">
      {text}
    </button>
  );
};

export default Button;
