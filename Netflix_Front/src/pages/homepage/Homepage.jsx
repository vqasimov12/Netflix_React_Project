import { useEffect, useState } from "react";
import Navbar from "homeComponents/Navbar";
import Movies from "homeComponents/Movies";
import Shows from "homeComponents/Shows";
import Home from "homeComponents/Home";
import { useTranslation } from "react-i18next";
const Homepage = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState({
    title: t("home"),
    value: "home",
  });

  const [trendingMovies, SetTrendingMovies] = useState([]);
  const tabltems = [
    { title: t("Home"), value: " home" },
    { title: t("tvShows"), value: "tv" },
    { title: t("movies"), value: "movie" },
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
      case "movie":
        return <Movies movies={trendingMovies} />;
      case "tv":
        return <Shows />;
      default:
        return <Home topOneMovie={trendingMovies[0]} />;
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="relative flex flex-col bg-[#000000] w-full h-screen">
      <Navbar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabItems={tabltems}
      />
      {visibleTab()}{" "}
    </div>
  );
};

export default Homepage;
