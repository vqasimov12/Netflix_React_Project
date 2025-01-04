import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from "react-i18next";
import { div } from "motion/react-client";

const GetStarted = ({ mainClass, inlineDivClass, buttonClass, id }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const { t } = useTranslation();
  const [errorShow, setErrorShow] = useState(false);
  const getStartedAction = () => {
    if (value === "") setErrorShow(true);
    else setErrorShow(false);
  };
  return (
    <div className="flex flex-col justify-center">
      <div className={`${mainClass}`}>
        <div className={`${inlineDivClass}`}>
          <input
            type="email"
            id={id}
            className={`w-full px-4  pb-[3px] sm:pb-[10px] bg-transparent text-[#ffffff] pt-5 border-none  opacity-[70%] ${
              errorShow
                ? "outline-[2px] outline-red-500"
                : isFocused || value !== ""
                ? "outline-[2px] outline-white"
                : "outline-none"
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(value !== "")}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label
            htmlFor={id}
            className={`absolute left-4 top-[15px] text-[16px] text-[#ffffff] transition-all opacity-[70%] ${
              isFocused || value !== ""
                ? "animate-floatUp text-[8px]"
                : "animate-focusLost text-[16px]"
            }`}
          >
            {t("emailPlaceholder")}
          </label>
        </div>
        <button
          className={`${buttonClass}`}
          onClick={() => {
            getStartedAction();
          }}
        >
          {t("getStartedButton")}
          <i className="fa-solid fa-angle-right"></i>{" "}
        </button>
      </div>
      {errorShow && (
        <div className="flex items-center gap-2 text-white mt-1 p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 text-[red] ml-2 fill-current"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
          </svg>
          <p className="text-sm text-[red]">{t("emailRequiredMessage")}</p>
        </div>
      )}
    </div>
  );
};

export default GetStarted;
