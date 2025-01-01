import React from "react";
import Entry from "./components/Entry";
import Arch from "./components/Arch";
import Trending from "./components/Trending";
import Navbar from "./components/Navbar";
const Landingpage = () => {
  return (
    <div className="overflow-hidden relative bg-[#000000]">
      <Navbar/>
      <Entry />
      <Arch/>
      <Trending/>
    </div>
  );
};

export default Landingpage;
