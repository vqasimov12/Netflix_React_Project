import { useLocation } from "react-router";
import { useStore } from "zustand";
import { ThemeStore } from "common/Store.js";
import { useEffect, useState } from "react";
import Similar from "common/components/Similar";

const Details = () => {
  const [detailsData, setDetailsData] = useState({});
  const [trailersData, setTrailersData] = useState({});
  const { accessToken } = useStore(ThemeStore);
  const { id, type } = useLocation()?.state;
  const getDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${type}/${id}/details`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setDetailsData(data.content);
      }
    } catch (error) {
    }
  };

  const getTrailers = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${type}/${id}/trailers`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTrailersData(data.trailers[0]);
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    getDetails();
    getTrailers();
  }, [id, type]);

  useEffect(() => {}, []);

  return (
    <div className="bg-[#000000] flex flex-col w-full overflow-x-hidden">
      <iframe
        className="px-[20px] min-h-[335px] sm:size-[400px] mt-[20px] md:w-[600px] md-h-[500px]  lg:w-[750px] mx-auto"
        src={`https://www.youtube.com/embed/${trailersData.key}`}
      ></iframe>

      <div className="p-10 mt-5 w-full flex flex-col">
        <h1 className="text-white text-4xl">
          {detailsData.name ? detailsData.name : detailsData.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 my-5">
          {detailsData?.genres?.map((item) => (
            <div className="text-white bg-zinc-800 w-fit p-3 rounded-[4px]">
              {item.name}
            </div>
          ))}
        </div>
        <p className="text-white">{detailsData.overview}</p>

        <Similar id={id} type={type} />
      </div>
    </div>
  );
};

export default Details;
