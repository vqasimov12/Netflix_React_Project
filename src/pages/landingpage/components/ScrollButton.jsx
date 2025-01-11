import { useState } from "react";
import LeftIcon from "icons/leftIcon.svg";
import RightIcon from "icons/rightIcon.svg";

const ScrollButton = ({ direction }) => {
  const isRight = direction === "right";

  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => setIsHovered(false);
  const handleMouseLeave = () => setIsHovered(true);

  return (
    <button
      onClick={() =>
        document
          .querySelector("#movie-card-container")
          .scrollBy({ left: isRight ? 200 : -200, behavior: "smooth" })
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`absolute z-10 ${
        isRight ? "right-0" : "left-0"
      } top-24 hidden md:flex items-center justify-center h-28 p-2 rounded-full`}
      style={{
        background: isHovered
          ? "rgba(50, 50, 50, 0.8)" 
          : "linear-gradient(11.26deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.847) 17.25%, rgba(0, 0, 0, 0.835) 24.5%, rgba(0, 0, 0, 0.82) 31.75%, rgba(0, 0, 0, 0.796) 39%, rgba(0, 0, 0, 0.765) 46.25%, rgba(0, 0, 0, 0.725) 53.5%, rgba(0, 0, 0, 0.686) 60.75%, rgba(0, 0, 0, 0.655) 68%, rgba(0, 0, 0, 0.63) 75.25%, rgba(0, 0, 0, 0.616) 82.5%, rgba(0, 0, 0, 0.604) 89.75%, rgba(0, 0, 0, 0.6) 97%)",
        transition: "background 0.2s ease-in-out", 
      }}
    >
      <img src={isRight ? RightIcon : LeftIcon} alt="" />
    </button>
  );
};

export default ScrollButton;
