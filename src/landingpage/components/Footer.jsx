import React from "react";
import GetStarted from "landingComponents/GetStarted";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import CustomSelect from "landingComponents/CustomSelect";
import LanguageIcon from "images/LanguageIcon.svg";

const Footer = () => {
  const { t } = useTranslation();

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState({
    title: "English",
    value: "en",
  });

  const languages = [
    { title: "English", value: "en" },
    { title: "Русский", value: "ru" },
  ];

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.value);
  }, [selectedLanguage]);
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex flex-col sm:items-center justify-center mt-[64px]">
        <h3 className="font-[Roboto] mt-20 text-[16px] leading-[16px] text-center text-white mb-[17px] ">
          {t("footer1")}
        </h3>
        <GetStarted
          mainClass={
            "flex items-center sm:justify-center w-full  lg:w-[784px] sm:gap-2 lg:gap-3 flex-wrap sm:flex-nowrap "
          }
          inlineDivClass={
            "relative h-12 sm:h-[56px] bg-transparent pb-1  w-full sm:w-[490px] lg:w-[570px] rounded-[5px] border-[1px] "
          }
          buttonClass={
            "bg-[#e50914] gap-2 sm:gap-3 px-4 h-[48px] mt-4 sm:mt-0 sm:h-[56px] rounded-[4px] text-[18px] text-white w-[156px] sm:w-[186px] lg:w-[207px] flex items-center justify-center"
          } id={"animated-input1"}
        />
        <div className="flex flex-col justify-center w-full  mt-[68px]">
          <div className="flex items-center gap-1">
            <p className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white ">
              {t("footerContact")}
            </p>
            <a
              href="#to"
              className="opacity-[70%] w-[130px] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
            >
              {t("contactUs")}
            </a>
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-7 xl:grid-cols-4 w-full mt-11">
            <div className="flex flex-col justify-center gap-3 ">
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("faq")}
              </a>
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("investorRelations")}
              </a>
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("buyGiftCards")}
              </a>
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("cookiePreferences")}
              </a>
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("legalNotices")}
              </a>
            </div>

            <div className="flex flex-col justify-center gap-3 ">
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("helpCenter")}
              </a>
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("jobs")}
              </a>
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("waysToWatch")}
              </a>
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("corporateInfo")}
              </a>
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("onlyOnNetflix")}
              </a>
            </div>

            <div className="flex flex-col justify-center gap-3 ">
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("account")}
              </a>

              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("netflixShop")}
              </a>

              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("termsOfUse")}
              </a>

              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("contactUs")}
              </a>

              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("doNotSell")}
              </a>
            </div>

            <div className="flex flex-col justify-center gap-3 ">
              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("mediaCenter")}
              </a>

              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("redeemGiftCards")}
              </a>

              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("privacy")}
              </a>

              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("speedTest")}
              </a>

              <a
                href="#to"
                className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
              >
                {t("adChoices")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[60px] mb-[90px]">
        <CustomSelect
          selectedOption={selectedLanguage}
          setSelectedOption={setSelectedLanguage}
          options={languages}
          logo={<img src={`${LanguageIcon}`} />}
          size={"w-[128px] h-[32px]"}
          pClass={"left-10"}
        />

        
      </div>
    </div>
  );
};

export default Footer;
