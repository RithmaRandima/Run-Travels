import React from "react";
import gallery1 from "../assets/gallery-1.jpeg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpeg";
import gallery4 from "../assets/gallery-4.jpeg";
import gallery5 from "../assets/gallery-5.jpeg";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 font-bold">Gallery</h2>
      <p className="text-center text-shadow-black p-4 pt-0 font-bold text-amber-300 text-[40px]">
        Best Places to Visit
      </p>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img src={gallery1} className="w-full h-full object-cover" alt="" />
        </div>
        <div>
          <img src={gallery2} className="w-full h-full object-cover" alt="" />
        </div>
        <div>
          <img src={gallery3} className="w-full h-full object-cover" alt="" />
        </div>
        <div>
          <img src={gallery4} className="w-full h-full object-cover" alt="" />
        </div>
        <div>
          <img src={gallery5} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
