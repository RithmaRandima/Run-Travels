import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activites from "./components/Activites";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="">
      <Topbar />
      <Navbar />
      <Hero />
      <Activites />
      <Booking />
      <Gallery />
      <Contact />
    </div>
  );
};

export default App;
