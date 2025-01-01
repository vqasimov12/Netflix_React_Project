import React from "react";
const CustomSelect = ({ selectedOption, setSelectedOption, options, logo,size }) => {
  return (
    <div
      className={`border-[1px] border-zinc-400 rounded-[4px] hover:border-white relative bg-transparent ${size}`}
    >
      {logo && (
        <div className="absolute z-4 top-[10px] left-2 flex items-center justify-center ">
          {logo}
        </div>
      )}{" "}
      <select
        onChange={(e) => {
          const selectedItem = options.find(
            (item) => item.value === e.target.value
          );
          setSelectedOption({
            title: selectedItem.title,
            value: e.target.value,
          });
        }}
        className="w-full h-full opacity-0 bg-transparent hover:cursor-pointer pb-[10px]"
      >
        {options?.map((item) => (
          <option
            className="bg-transparent"
            key={item.value}
            value={item.value}
          >
            {item.title}
          </option>
        ))}
      </select>
      <p
        className={`absolute top-1 ${
          logo ? "left-10 hidden sm:block" : "left-2"
        } text-white bg-transparent pointer-events-none`}
      >
        {selectedOption.title}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-3 right-3 w-[10px] pointer-events-none"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </div>
  );
};

export default CustomSelect;
