import React from "react";
import Title from "./Title";
import CustomerCard from "./CustomerCard";

function Customers() {
  return (
    <div className="bg-red-50">
      <div className="container max-w-7xl px-4 lg:px-0 pb-16 lg:pb-32">
        <div className="flex flex-col space-y-12 lg:space-y-24">
          <Title text="OUR CUSTOMERS" />
          <div className="flex justify-center space-y-5 lg:space-5-0 md:space-y-0 lg:space-x-10 md:space-x-8 flex-col lg:flex-row md:flex-row">
            <CustomerCard
              img="/Ellipse 27.svg"
              name="Bianka P."
              location="Bratislava, Slovakia"
              opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            />
            <CustomerCard
              img="/Ellipse 28.svg"
              name="Jakub S."
              location="Bratislava, Slovakia"
              opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
