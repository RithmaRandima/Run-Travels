import React from "react";

const ActivityCard = ({ name, image }) => {
  return (
    <div className="relative w-full h-[350px] md:h-[280px] mb-[30px] md:mb-0">
      <div className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white hover:bg-white/30 transition w-[80%] text-center p-1">
        <h3 className=" text-2xl font-bold">{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          maiores?
        </p>
      </div>
      <img
        className="w-full h-full object-cover relative border-4 border-white shadow-lg"
        src={image}
        alt=""
      />
    </div>
  );
};

export default ActivityCard;
