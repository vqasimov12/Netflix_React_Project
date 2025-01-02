import React from "react";
import ReasonCard from "./ReasonCard";
import televisionIcon from"../../assets/images/televisionIcon.svg"
import telescopeIcon from"../../assets/images/telescopeIcon.svg"
import profilesIcon from"../../assets/images/profilesIcon.svg"
import DownArrowIcon from"../../assets/images/DownArrowIcon.svg"

const Reasons = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 items-center gap-4">
      <ReasonCard logo={<img className="absolute z-4 bottom-4 right-4" src={`${televisionIcon}`}></img>} desc={"reason1Desc"} title={"reason1Title"}/>
      <ReasonCard logo={<img className="absolute z-4 bottom-4 right-4" src={`${DownArrowIcon}`}></img>} desc={"reason2Desc"} title={"reason2Title"}/>
      <ReasonCard logo={<img className="absolute z-4 bottom-4 right-4" src={`${telescopeIcon}`}></img>} desc={"reason3Desc"} title={"reason3Title"}/>
      <ReasonCard logo={<img className="absolute z-4 bottom-4 right-4" src={`${profilesIcon}`}></img>} desc={"reason4Desc"} title={"reason4Title"}/>
    </div>
  );
};

export default Reasons;
