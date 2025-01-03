import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from "react-i18next";

const GetStarted = ({ mainClass, inlineDivClass, buttonClass }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  return (
    <div className={`${mainClass}`}>
      <div className={`${inlineDivClass}`}>
        <input
          type="email"
          id="animated-input"
          className={`w-full px-4  pb-[3px] sm:pb-[10px] bg-transparent text-[#ffffff] pt-5 border-none  opacity-[70%] ${
            isFocused || value !== ""
              ? "outline-[2px] outline-white"
              : "outline-none"
          }`}
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
          {t("emailPlaceholder")}
        </label>
      </div>
      <button className={`${buttonClass}`}>
        {t("getStartedButton")}
        <i className="fa-solid fa-angle-right"></i>{" "}
      </button>
    </div>
  );
};

export default GetStarted;
