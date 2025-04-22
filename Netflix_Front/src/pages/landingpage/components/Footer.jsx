import React from "react";
import GetStarted from "landingComponents/GetStarted";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import CustomSelect from "landingComponents/CustomSelect";
import LanguageIcon from "images/LanguageIcon.svg";
import { Link } from "react-router";

const Footer = ({ canShow = true }) => {
  const { t } = useTranslation();
  const links = [
    [
      { text: t("faq"), link: "https://help.netflix.com/en/node/412" },
      {
        text: t("investorRelations"),
        link: "https://ir.netflix.net/ir-overview/profile/default.aspx",
      },
      { text: t("buyGiftCards"), link: "" },
      {
        text: t("cookiePreferences"),
        link: "https://help.netflix.com/legal/privacy?locale=en-AZ#cookies",
      },
      {
        text: t("legalNotices"),
        link: "https://help.netflix.com/legal/notices",
      },
    ],
    [
      { text: t("helpCenter"), link: "https://help.netflix.com/en" },
      { text: t("jobs"), link: "https://jobs.netflix.com/" },
      {
        text: t("waysToWatch"),
        link: "https://help.netflix.com/en/node/14361",
      },
      {
        text: t("corporateInfo"),
        link: "https://help.netflix.com/en/node/134094",
      },
      {
        text: t("onlyOnNetflix"),
        link: "https://www.netflix.com/az/browse/genre/839338",
      },
    ],
    [
      { text: t("account"), link: "/signin" },
      { text: t("netflixShop"), link: "" },
      {
        text: t("termsOfUse"),
        link: "https://help.netflix.com/legal/termsofuse",
      },
      { text: t("contactUs"), link: "https://help.netflix.com/en/contactus" },
      { text: t("doNotSell"), link: "" },
    ],
    [
      { text: t("mediaCenter"), link: "https://media.netflix.com/en/" },
      { text: t("redeemGiftCards"), link: "" },
      { text: t("privacy"), link: "https://help.netflix.com/legal/privacy" },
      { text: t("speedTest"), link: "https://fast.com/" },
      { text: t("adChoices"), link: "" },
    ],
  ];
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
        {canShow && (
          <h3 className="font-[Roboto] mt-20 text-[16px] leading-[16px] text-center text-white mb-[17px] ">
            {t("footer1")}
          </h3>
        )}
        {canShow && (
          <GetStarted
            mainClass={
              "flex items-center sm:justify-center w-full  lg:w-[784px] sm:gap-2 lg:gap-3 flex-wrap sm:flex-nowrap "
            }
            inlineDivClass={
              "relative h-12 sm:h-[56px] bg-transparent pb-1  w-full sm:w-[490px] lg:w-[570px] rounded-[5px] border-[1px] "
            }
            buttonClass={
              "bg-[#e50914] gap-2 sm:gap-3 px-4 h-[48px] mt-4 sm:mt-0 sm:h-[56px] rounded-[4px] text-[18px] text-white w-[156px] sm:w-[186px] lg:w-[207px] flex items-center justify-center"
            }
            id={"animated-input1"}
          />
        )}
        <div className="flex flex-col justify-center w-full  mt-[68px]">
          <div className="flex items-center gap-1">
            <p className="opacity-[70%] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white ">
              {t("footerContact")}
            </p>
            <Link
              to="https://help.netflix.com/en/contactus"
              className="opacity-[70%] w-[130px] font-[Roboto] text-[16px] leading-[20px] tracking-wide text-white underline"
            >
              {t("contactUs")}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full mt-11">
            {links.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-3">
                {column.map(({ text, link }, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link}
                    className="text-white font-roboto text-[16px] leading-[20px] tracking-wide opacity-70 underline hover:opacity-100 transition-opacity"
                    aria-label={text}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            ))}
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
