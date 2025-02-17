import React from 'react'
import { useTranslation } from 'react-i18next';
import { useEffect,useState } from 'react';
import NetflixLogo from"images/Netflix.png"
import CustomSelect from"landingComponents/CustomSelect"
import LanguageIcon from 'images/LanguageIcon.svg';
import {useNavigate} from"react-router"

const Navbar = () => {
  const {t}=useTranslation()
  const navigate= useNavigate()

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
    <div className="top-[24px] px-6 sm:px-9 lg:px-[140px] absolute z-10 flex items-center justify-between h-20 w-full">
    <img
      src={NetflixLogo}
      className="w-[90px] lg:w-[160px]"
      alt="Netflix Logo"
    />
  
    <div className="flex items-center space-x-4">
      <CustomSelect
        selectedOption={selectedLanguage}
        setSelectedOption={setSelectedLanguage}
        options={languages}
        logo={<img src={`${LanguageIcon}`}/>}
          size={"w-[62px] sm:w-[128px] h-[32px]"}
          pClass={"left-10 hidden sm:block"}
      />
      <button onClick={()=>{navigate("/signin")}} className="w-[75px] h-8 bg-[#E50914] rounded-[4px] font-bold text-[14px] text-white">{t("signInButton")}</button>
    </div>
  </div>
  
  );
}

export default Navbar