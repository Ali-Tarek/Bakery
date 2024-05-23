import React from "react";


function NavBar() {
  return (
    <div className="bg-red-100 sticky z-10">
      <div className="container max-w-7xl flex justify-between p-6 bg-white rounded-b-2xl custom-shadow items-center">
        <div className="text-3xl text-customPurple pl-6">
          <p>Bakery</p>
        </div>
        <div className="pr-6 text-xl">
          <a href="#">Home</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
