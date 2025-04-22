import React from "react";
import NetflixLogo from "images/Netflix.png";
import NetlixIcon from"icons/NetflixIcon.png"

const Navbar = ({ selectedTab, setSelectedTab, tabItems }) => {
  return (
    <div className="px-9 sm:px-[65px] lg:px-[90px] top-[20px] gap-[28px] lg:gap-[67px] w-full overflow-x-hidden absolute z-1 flex items-center sm:justify-normal">
      <img className="hidden sm:block w-[140px] h-[99px] " src={NetflixLogo} alt="" />
      <img className=" block sm:hidden w-7 h-[40px]" src={NetlixIcon} alt="" />
      <div className="gap-3 sm:gap-[28px] flex items-center justify-center">
        {tabItems.map((item) => (
          <button
            className={`${selectedTab.value === item.value ? "font-bold text-white " : "text-zinc-300"} w-fit text-[16px] sm:text-[20px] lg:text-[24px] fonr-[Roboto]`}
            onClick={() => {
              setSelectedTab(item);
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
