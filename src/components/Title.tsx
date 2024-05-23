import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="flex-grow h-1 border-t border-dotted border-gray-600"></div>
      <h1 className="text-lg md:text-4xl lg:text-5xl text-indigo-900 font-bold">
        {text}
      </h1>
      <div className="flex-grow h-1 border-t border-dotted border-gray-600"></div>
    </div>
  );
};

export default Title;
