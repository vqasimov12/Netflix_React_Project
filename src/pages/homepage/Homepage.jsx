import { useEffect, useState } from "react";
import Navbar from "homeComponents/Navbar";
import Movies from "homeComponents/Movies";
import Shows from "homeComponents/Shows";
import Home from "homeComponents/Home";
const Homepage = () => {
  const [selectedTab, setSelectedTab] = useState({
    title: "Home",
    value: "home",
  });

  const [trendingMovies, SetTrendingMovies] = useState([]);
  const tabltems = [
    { title: "Home", value: " home" },
    { title: "TV Shows", value: "tv" },
    { title: "Movies", value: "movie" },
  ];

  const getMovies = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/v1/movie/trending"
      );
      if (!response.ok) throw new Error("Failed to get movies");
      const data = await response.json();
      SetTrendingMovies(data.content);
    } catch (error) {
      console.error(error);
    }
  };

  const visibleTab = () => {
    switch (selectedTab.value) {
      case "home":
        return <Movies />;
      case "tv":
        return <Shows />;
      case "home":
        return <Home />;
      default:
        return <Home topOneMovie={trendingMovies[0]} />;
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="relative bg-[#000000] w-full h-screen">
    <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabItems={tabltems} />
    {visibleTab()} </div>;
};

export default Homepage;
