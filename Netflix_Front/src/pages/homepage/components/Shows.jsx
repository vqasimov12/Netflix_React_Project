import React, { useState,useEffect } from "react";
import FilmCard from"common/components/FilmCard"


const Shows = () => {

const [trendingShows, setTrendingShows] = useState([]);

const getShows = async () => {
  try {
    const response = await fetch("http://localhost:5001/api/v1/tv/trending");
    if (!response.ok) throw new Error("Failed to get movies");
    const data = await response.json();
    setTrendingShows(data.content);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  getShows();
}, []);

  return (
    <div className="flex mt-[160px] flex-wrap gap-12 pl-[30px] sm:pl-[50px] my-10 lg:pl-[90px] pr-[30px] w-full bg-[#000000]  ">
      {trendingShows.map((movie) => (
        <FilmCard film={movie} type={"tv"} style="mx-auto sm:mx-0" />
      ))}
      <div className="w-full h-[60px]"></div>
    </div>
  );
};

export default Shows;
