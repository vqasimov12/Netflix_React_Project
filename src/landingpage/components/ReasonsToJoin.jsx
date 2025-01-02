import React from "react";
import { useTranslation } from "react-i18next";
import Reasons from "./Reasons";
const ReasonsToJoin = () => {
  const { t } = useTranslation();
  return (
    <div className="gap-[16px] flex flex-col w-full ">
      <h3 className="font-[Roboto] leading-[27px] mt-20 text-[24px] font-bold text-white mb-[17px] ">
        {t("reasonsToJoinTitle")}
      </h3>
      <Reasons/>
    </div>
  );
};

export default ReasonsToJoin;
