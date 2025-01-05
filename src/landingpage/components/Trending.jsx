import { useEffect, useState } from "react";
import CustomSelect from "landingComponents/CustomSelect";
import { useTranslation } from "react-i18next";
import MovieCard from "landingComponents/MovieCard";
import Modal from "landingComponents/Modal";
import ScrollButton from "landingComponents/ScrollButton";
const Trending = ({ scrollY }) => {
  const { t } = useTranslation();
  const [films, setFilms] = useState([]);
  const [selectedContent, setSelectedContent] = useState({
    title: "Movie",
    value: "movie",
  });
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const contents = [
    { title: "Movie", value: "movie" },
    { title: "Tv Show", value: "tv" },
  ];

  const getFilms = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${selectedContent.value}/trending`
      );
      if (!response.ok) throw new Error("Can not get films");
      const data = await response.json();
      setFilms(data.content);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getFilms();
  }, [selectedContent]);

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedFilm(null);
  };
  useEffect(() => {
    if (selectedFilm) setModalOpen(true);
  }, [selectedFilm]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "scroll";
  }, [modalOpen]);

  return (
    <div className="w-full py-20 mt-[-50px] flex flex-col relative gap-[10px] overflow-y-hidden">
      <h2 className="font-[Roboto] text-[24px] tracking-wide font-bold text-white">
        {t("trendingNow")}
      </h2>
      <CustomSelect
        selectedOption={selectedContent}
        setSelectedOption={setSelectedContent}
        options={contents}
        size={"lg:w-[145px]"}
      />
      <div className="relative flex scrollbar-hide">
        <ScrollButton direction={"left"} />
        <div id="movie-card-container" className="flex overflow-x-auto scroll-smooth scrollbar-hide overflow-y-hidden py-5 pl-7 w-full gap-12 ">
          {films?.map((film, index) => (
            <MovieCard
              film={film}
              index={index}
              setSelectedFilm={setSelectedFilm}
            />
          ))}
        </div>
        <ScrollButton direction={"right"} />
      </div>
      {modalOpen && (
        <Modal
          scrollY={scrollY}
          handleModalClose={handleModalClose}
          data={selectedFilm}
        />
      )}
    </div>
  );
};

export default Trending;
