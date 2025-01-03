import React from "react";
import Entry from "./components/Entry";
import Arch from "./components/Arch";
import Trending from "./components/Trending";
import Navbar from "./components/Navbar";
import ReasonsToJoin from "./components/ReasonsToJoin";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
const Landingpage = () => {
  return (
    <div className="overflow-hidden relative bg-[#000000]">
      <Navbar />
      <Entry />
      <Arch />
      <div className="px-6 sm:px-8 lg:px-[148px] flex flex-col">
        <Trending />
        <ReasonsToJoin />
        <FAQ />
      <Footer/>
      </div>
    </div>
  );
};

export default Landingpage;
