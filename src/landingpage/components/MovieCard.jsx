import React from "react";

const MovieCard = ({ film, index, setSelectedFilm }) => {
  return (
    <div
      onClick={() => {
        setSelectedFilm(film);
      }} className="relative min-w-[180px] h-[250px] hover:scale-110 transition duration-150 ease-in hover:cursor-pointer "
    >
        <p className="absolute left-[-28px] bottom-[16px]  text-[100px] drop-shadow-[0_0_4px_#fff] font-bold ">{index+1}</p>
        <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt="" className="w-full h-full object-cover rounded-lg" />
    </div>
  );
};

export default MovieCard;
