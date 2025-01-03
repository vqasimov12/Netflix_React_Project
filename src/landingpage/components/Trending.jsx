import { useEffect, useState } from "react";
import CustomSelect from"../components/CustomSelect"
import { useTranslation } from "react-i18next";

const Trending = () => {
  const { t } = useTranslation();

  const [films, setFilms] = useState([]);
  const [selectedContent, setSelectedContent] = useState({
    title: "Movie",
    value: "TV Show",
  });

  const contents = [
    { title: "Movie", value: "movie" },
    { title: "Tv Show", value: "tv" },
  ];

  const getFilms = async () => {
    try {
      const response = await fetch("");
      if (!response.ok) throw new Error("Can not get films");
      // const data = await response.json();
      // setFilms(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);
  return (
    <div className="w-full h-[60px] mt-[105px]">
      <h2 className="font-[Roboto] text-[24px] tracking-wide font-bold text-white mb-[17px]">{t("trendingNow") }</h2>
      <CustomSelect
        selectedOption={selectedContent}
        setSelectedOption={setSelectedContent}
        options={contents}
        size={"lg:w-[145px]"}
      />
    </div>
  );
};

export default Trending;
