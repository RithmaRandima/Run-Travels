import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full py-4 m-auto  bg-amber-300">
      <div className="flex items-center m-auto justify-center mb-1">
        <BsChatSquareDots size={30} className="text-red-400 mr-2" />
        <h1 className="text-xl font-bold text-gray-700">RUN Travels</h1>
      </div>
      <p className="text-center mx-auto w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        explicabo amet magnam, eos aperiam!
      </p>
    </div>
  );
};

export default Footer;
