import React from "react";
import Title from "./Title";
import Card from "./Card";
import ArticleCard from "./ArticleCard";

function Articles() {
  return (
    <div className="bg-red-50">
      <div className="container max-w-7xl px-4 lg:px-0 pb-16 lg:pb-32">
        <div className="flex flex-col space-y-12 lg:space-y-24">
          <Title text="OUR NEW ARTICLES" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard
              img="/Rectangle 335.svg"
              desc="How to make perfect cakes at home"
            />
            <ArticleCard
              img="/Rectangle 336.svg"
              desc="How to make perfect cakes at home"
            />
            <ArticleCard
              img="/Rectangle 337.svg"
              desc="How to make perfect cakes at home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
