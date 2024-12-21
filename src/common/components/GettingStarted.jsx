import { useState } from "react";

const GettingStarted = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={`flex items-center justify-center w-[326px] sm:[432px] lg:w-[588px] sm:gap-2 flex-wrap sm:flex-nowrap `}>
      <div className="relative h-12 sm:h-[56px] bg-transparent pb-1  w-[326px] sm:w-[248px] lg:w-[343px] rounded-[5px] border-[1px] ">
        <input
          type="email"
          id="animated-input"
          className={`w-full px-4  pb-[3px] sm:pb-[10px] bg-transparent text-[#ffffff] pt-5 border-none  opacity-[70%] ${  isFocused || value !== ""?"outline-[2px] outline-white":"outline-none"}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(value !== "")}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label
          htmlFor="animated-input"
          className={`absolute left-4 top-[15px] text-[16px] text-[#ffffff] transition-all opacity-[70%] ${
            isFocused || value !== ""
              ? "animate-floatUp text-[8px]"
              : "animate-focusLost text-[16px]"
          }`}
        >
          Email address
        </label>
      </div>
      <button className="bg-[#e50914] px-[4px] h-[48px] mt-4 sm:mt-0 sm:h-[56px] rounded-[4px] text-[18px] text-white w-[156] sm:[176px] lg:w-[207px] flex items-center justify-center">
Getting Started
      </button>
    </div>
  );
};

export default GettingStarted;
