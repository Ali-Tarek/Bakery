import React from "react";
import Cake from "./Cake";

function Collection() {
  return (
    <div className="bg-red-50">
      <div className="container max-w-7xl py-32 flex flex-col justify-between lg:flex-row space-y-5 px-16 lg:px-0">
        <div>
          <p className="lg:text-xl">See Collection</p>
          <h2 className="lg:text-4xl text-red-400 font-semibold">
            OUR FINE HOME MADE CHOCOLATES
          </h2>
        </div>
        <div>
          <div className="border-t-2 border-dotted border-gray-400 -mb-2"></div>
          <div className="flex">
            <Cake
              img="/ce42594b-4343-4bbb-919e-933b1983b2cc-removebg-preview 1.svg"
              text="There are some redeeming factors in greeking text"
            />
            <Cake
              img="/Delicious_vanilla_cake_decorated_with_berries_-3-removebg-preview 1.svg"
              text="There are some redeeming factors in greeking text"
            />
            <Cake
              img="/Freshly_cupcake_-5-removebg-preview 1.svg"
              text="There are some redeeming factors in greeking text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
