import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activites from "./components/Activites";

const App = () => {
  return (
    <div className="">
      <Topbar />
      <Navbar />
      <Hero />
      <Activites />
    </div>
  );
};

export default App;
