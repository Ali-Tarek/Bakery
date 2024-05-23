import React from "react";
import Image from "next/image";

interface ArticleProps {
  img: string;
  desc: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ img, desc }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg p-4 bg-white mx-auto">
      <div className="relative">
        <Image src={img} alt="Article" width={365} height={473} />
        <div className="absolute inset-0 bg-gray-500 opacity-30"></div>
        <p className="absolute bottom-4 text-2xl left-2 px-4 text-white font-bold">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
