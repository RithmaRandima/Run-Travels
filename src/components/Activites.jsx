import React from "react";
import resort01 from "../assets/resort-1.jpg";
import resort02 from "../assets/resort-2.jpg";
import resort03 from "../assets/resort-3.jpg";
import ActivityCard from "./ActivityCard";

const Activites = () => {
  return (
    <div className="max-w-[1140px]  m-auto w-full md:flex mt-[-75px] gap-4">
      <ActivityCard name={"Resort L3"} image={resort01} />
      <ActivityCard name={"The Kip"} image={resort02} />
      <ActivityCard name={"BoBO Resort"} image={resort03} />
    </div>
  );
};

export default Activites;
