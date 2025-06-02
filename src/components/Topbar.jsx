import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatDots size={30} className="mr-2" />
        <h1 className="text-xl font-bold text-gray-700">RUN travels</h1>
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2" />
          <p className="text-sm text-gray-700 ">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2" />
          <p className="text-sm text-gray-700 ">1-888-004-3453</p>
        </div>
        <button>Get a Free Ride</button>
      </div>
    </div>
  );
};

export default Topbar;
