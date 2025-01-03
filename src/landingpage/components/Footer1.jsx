import React from 'react'
import GetStarted from './GetStarted'
import { useTranslation } from 'react-i18next'
const Footer1 = () => {
    const {t}=useTranslation()
  return (
      <div className="flex flex-col sm:items-center justify-center mt-[64px]">
    <h3 className="font-[Roboto] mt-20 text-[16px] leading-[16px] text-center text-white mb-[17px] ">{t("footer1")}</h3>    
    <GetStarted  mainClass={"flex items-center sm:justify-center w-full  lg:w-[784px] sm:gap-2 lg:gap-3 flex-wrap sm:flex-nowrap "} inlineDivClass={"relative h-12 sm:h-[56px] bg-transparent pb-1  w-full sm:w-[490px] lg:w-[570px] rounded-[5px] border-[1px] " } buttonClass={"bg-[#e50914] gap-2 sm:gap-3 px-4 h-[48px] mt-4 sm:mt-0 sm:h-[56px] rounded-[4px] text-[18px] text-white w-[156px] sm:w-[186px] lg:w-[207px] flex items-center justify-center"}/>
  </div>  )
}

export default Footer1