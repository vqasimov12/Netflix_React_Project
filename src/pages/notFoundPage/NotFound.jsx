import React from "react";
import bgImage from "images/bgImage.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#010101] h-full flex flex-col items-center justify-center ">
      <div
        className="w-full h-screen relative items-center justify-center bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          className="absolute z-1 flex inset-0 w-full h-screen items-center justify-center"
          style={{
            background:
              "linear-gradient(11.26deg, rgba(0, 0, 0, 0.55) 10%, rgba(0, 0, 0, 0.57) 17.25%, rgba(0, 0, 0, 0.55) 24.5%, rgba(0, 0, 0, 0.55) 31.75%, rgba(0, 0, 0, 0.56) 39%, rgba(0, 0, 0, 0.55) 46.25%, rgba(0, 0, 0, 0.55) 53.5%, rgba(0, 0, 0, 0.50) 60.75%, rgba(0, 0, 0, 0.55) 68%, rgba(0, 0, 0, 0.53) 75.25%, rgba(0, 0, 0, 0.36) 82.5%, rgba(0, 0, 0, 0.34) 89.75%, rgba(0, 0, 0, 0.3) 97%)",
          }}
        >
          <div className='"h-[370px] mt-20  pt-[48px] flex flex-col gap-5 rounded-[4px]'>
            <h1 className="text-[35px] md:text-[46px] lg:text-[56px] text-white  ">
              {" "}
              {t("lostYourWay")}
            </h1>
            <div className="flex items-center gap-10 w-full">
              <hr className="bg-[#e50914]  h-[56px] w-[1px] border-none " />
              <p className="text-white text-[20px]">{t("error404")}</p>
            </div>
            <button
              className={`bg-[#e50914] font-bold tracking-wide font-[Roboto] h-[48px] mt-3 sm:h-[56px] rounded-[4px] text-[18px] lg:text-[24px] text-white w-[156px] sm:w-[176px] lg:w-[207px] flex items-center justify-center`}
              onClick={() => {
                navigate("/");
              }}
            >
              {t("homeLabel")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
