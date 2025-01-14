import React from "react";
import { useState, useEffect } from "react";
import { ThemeStore } from "common/Store.js";
import { useStore } from "zustand";
import ScrollButton from "common/components/ScrollButton";
import FilmCard from "common/components/FilmCard";

const Similar = ({ id, type}) => {
  const { accessToken } = useStore(ThemeStore);
  const [similarMovies, setSimilarMovies] = useState([]);
  const getSimilar = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${type}/${id}/similar`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) setSimilarMovies(data.similar);
    } catch (error) {}
  };

  useEffect(() => {
    getSimilar();
  }, [type, id]);

  return (
    <div className="relative flex scrollbar-hide px-[30px] my-10 overflow-hidden">
      <ScrollButton direction={"left"} />
      <div
        id="movie-card-container"
        className="flex overflow-x-scroll  scroll-smooth scrollbar-hide  pl-7 w-full gap-12"
      >
        {similarMovies.map((item) => (
          <FilmCard film={item} type={type} />
        ))}
      </div>
      <ScrollButton direction={"right"} />
    </div>
  );
};

export default Similar;
