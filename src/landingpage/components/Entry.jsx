import React from "react";
import bgImage from "../../assets/images/bgImage.png";
import GetStarted from "./GetStarted";
import { useTranslation } from "react-i18next";
const Entry = () => {
  const {t}=useTranslation()
  return (
    
    <div className="w-full h-screen relative px-5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      <div
        className="absolute inset-0 w-full"
        style={{
          background:
            "linear-gradient(11.26deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.847) 17.25%, rgba(0, 0, 0, 0.835) 24.5%, rgba(0, 0, 0, 0.82) 31.75%, rgba(0, 0, 0, 0.796) 39%, rgba(0, 0, 0, 0.765) 46.25%, rgba(0, 0, 0, 0.725) 53.5%, rgba(0, 0, 0, 0.686) 60.75%, rgba(0, 0, 0, 0.655) 68%, rgba(0, 0, 0, 0.63) 75.25%, rgba(0, 0, 0, 0.616) 82.5%, rgba(0, 0, 0, 0.604) 89.75%, rgba(0, 0, 0, 0.6) 97%)",
        }}
      ></div>

      <div className="relative z-4 flex flex-col items-center justify-center h-full pr-[32px] pl-[32px] sm:px-[0px]">
        <h1 className="text-white font-bold text-[32px] lg:text-[56px] lg:leading-[70px] lg:w-[567px] font-[roboto] w-[323px] text-center leading-[40px] ">
          {t("entryTitle")}
        </h1>
        <p className="text-white font-normal lg:font-medium mt-[8px] lg:mt-[16px] text-4 lg:text-[20px] font-[roboto] w-[326px]  md:w-[411px] lg:w-[285px] text-center leading-[19px] lg:leading-[24px] ">
        {t("entrySubtitle")}
        </p>
        <p className="text-white font-normal mt-[17px] lg:mt-[33px] text-[16px] font-[roboto] w-[326px] sm:w-[411px] lg:w-[508px] text-center leading-[24px]">
        {t("readyToWatch")}

        </p>
        <GetStarted />
      </div>
    </div>
  );
};

export default Entry;
