import React from "react";
import Hero_back from "../assets/heroBg.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img src={Hero_back} alt="" className="w-full h-full object-cover" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-amber-300 p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">Run With Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aspernatur nesciunt amet ipsum odit! Perferendis nobis dignissimos
            necessitatibus a fugiat maiores in blanditiis at veritatis ea?
            Numquam impedit delectus sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
