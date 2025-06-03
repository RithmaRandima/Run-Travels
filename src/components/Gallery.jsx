import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/14/22/58/monkeys-4550159_1280.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/10/14/22/58/monkeys-4550159_1280.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/10/14/22/58/monkeys-4550159_1280.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/10/14/22/58/monkeys-4550159_1280.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/10/14/22/58/monkeys-4550159_1280.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
