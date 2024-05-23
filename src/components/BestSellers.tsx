import React from "react";
import Title from "./Title";
import Card from "./Card";

function BestSellers() {
  return (
    <div className="bg-red-50">
      <div className="container max-w-7xl px-4 lg:px-0 pb-16 lg:pb-32">
        <div className="flex flex-col space-y-12 lg:space-y-24">
          <Title text="OUR BEST SELLERS" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              img="/Rectangle 332.svg"
              title="3-tier red velvet cake"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              price="45.90€"
            />
            <Card
              img="/Rectangle 333.svg"
              title="3-tier red velvet cake"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              price="45.90€"
            />
            <Card
              img="/Rectangle 334.svg"
              title="3-tier red velvet cake"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              price="45.90€"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
