import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="h-[573px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Add any additional content here if needed */}
        <h1 className="text-6xl font-bold text-white">Welcome to React</h1>
  
    </div>
  );
};

export default Banner;
