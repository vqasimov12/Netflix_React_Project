import { useState } from "react";
import FAQItem from "landingComponents/FAQItem";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: `${t("faq1")}`,
      desc: `${t("faq1Desc")}`,
    },
    {
      id: 2,
      title: `${t("faq2")}`,
      desc: `${t("faq2Desc")}`,
    },
    {
      id: 3,
      title: `${t("faq3")}`,
      desc: `${t("faq3Desc")}`,
    },
    {
      id: 4,
      title: `${t("faq4")}`,
      desc: `${t("faq4Desc")}`,
    },
    {
      id: 5,
      title: `${t("faq5")}`,
      desc: `${t("faq5Desc")}`,
    },
    {
      id: 6,
      title: `${t("faq6")}`,
      desc: `${t("faq6Desc")}`,
    },
    {
      id: 7,
      title: `${t("faq7")}`,
      desc: `${t("faq7Desc")}`,
    },
  ];
  const [openItem,setOpenItem]=useState(null)
  return (
    <div className="flex flex-col justify-center gap-2  w-full mt-[17px]">
       <h3 className="font-[Roboto] text-left leading-[27px] mt-[60px] text-[24px] font-bold text-white mb-[17px] ">
        {t("faqTitle")}
      </h3>
        {data.map((item) => (
      <FAQItem key={item.id} title={item.title} id={item.id} desc={item.desc} openItem={openItem} setOpenItem={setOpenItem} />
    ))} </div>
  );
};

export default FAQ;
