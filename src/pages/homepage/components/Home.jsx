import React, { useState } from "react";
import top10 from "icons/top10Icon.png";
import playButton from "icons/playIcon.png";
import netflixIcon from "icons/NetflixIcon.png";
import infoButton from "icons/moreInfo.png";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Similar from "common/components/Similar";
import { useNavigate } from "react-router";

const Home = ({ topOneMovie }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    topOneMovie && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <div className={`flex flex-col w-full bg-[#000000] `}>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${topOneMovie.backdrop_path})`,
            }}
            className="min-h-screen w-full bg-cover bg-no-repeat bg-black/40 bg-blend-overlay flex flex-col "
          >
            <div className="flex flex-col mt-[290px] items-center sm:items-baseline  text-center w-full sm:px-[65px] lg:px-[90px]">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={netflixIcon}
                  className="h-5 w-[12px]"
                  alt="Netflix Icon"
                />
                <h4 className="font-bold text-white tracking-[7px] text-xs uppercase">
                  {t("series")}
                </h4>
              </div>

              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl w-fit leading-tight">
                {topOneMovie.title}
              </h2>

              <div className="flex items-center gap-2 my-5">
                <img src={top10} alt="" />
                <p className="text-white font-bold text-[20px]">
                  {t("#1_in_tv_shows_today")}
                </p>
              </div>
              <p className="text-white font-medium px-[25px] mx-auto sm:mx-0 sm:px-0 max-w-[450px] sm:text-[20px] sm:max-w-[400px]  text-left">
                {topOneMovie.overview.slice(0, 150)}...
              </p>
              <div className="flex items-center gap-4 my-6">
                <button
                  onClick={() => {
                    navigate("/details", {
                      state: {
                        id: topOneMovie.id,
                        type: topOneMovie.media_type,
                      },
                    });
                  }}
                  className="bg-white md:hover:opacity-85 h-[40px] text-black text-[20px] font-bold py-2 px-4 rounded-[5px] flex items-center gap-2"
                >
                  <img src={playButton} className="size-[13px]" alt="" />
                  {t("play")}
                </button>
                <button
                  onClick={() => {
                    navigate("/details", {
                      state: {
                        id: topOneMovie.id,
                        type: topOneMovie.media_type,
                      },
                    });
                  }}
                  className="bg-[#9a9a9a]/90 rounded-[5px] font-bold md:hover:opacity-90 h-[40px] text-20px text-white py-2 px-4 flex items-center gap-2 "
                >
                  <img src={infoButton} className="size-[15px]" alt="" />
                  {t("info")}
                </button>
              </div>
            </div>
          </div>
          <div className="sm:px-[90px]">
            <Similar type={topOneMovie.media_type} id={topOneMovie.id} />
          </div>
        </div>
      </motion.div>
    )
  );
};

export default Home;
