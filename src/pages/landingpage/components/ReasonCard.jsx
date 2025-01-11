import React from "react";
import { useTranslation } from "react-i18next";
const ReasonCard = ({logo,desc,title}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col px-3 pt-6 bg-gradient-to-br rounded-[16px] from-[#192247] to-[#210E17] h-[268px] w-full">
      <h3 className=" font-bold text-[23px] text-white">
        {t(`${title}`)}
      </h3>
      <p className="font-[Roboto] leading-[19px] text-[16px] mt-4 text-white opacity-[70%]">{t(`${desc}`)}</p>
    <div className="w-full h-20 mt-[60px] relative ">
    {logo}
        </div>  
    </div>
  );
};

export default ReasonCard;
