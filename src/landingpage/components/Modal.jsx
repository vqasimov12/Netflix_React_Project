import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import GenreItems from "landingComponents/GenreItems";
const Modal = ({ scrollY, data, handleModalClose }) => {
  return createPortal(
    <div
      style={{ top: scrollY }}
      onClick={handleModalClose}
      className="absolute left-0 w-screen h-screen bg-black/30 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <div className="size-[620px] border-px border-zinc-300 rounded-lg bg-zinc-900 overflow-scroll relative ">
          <button
            className="z-30 absolute top-4 right-4 size-[30px] hover:bg-zinc-500/25 hover:cursor-pointer"
            onClick={handleModalClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="relative"
          >
            <div className="absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-transparent via-55% flex items-end">
              <h3 className="text-white text-5xl font-bold ml-8 mb-6  ">
                {data.media_type === "movie" ? data.title : data.name}
              </h3>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              className="w-full h-full"
              alt=""
            />
          </div>

          <div
            className="px-8 pb-5"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {<GenreItems />}
            <p className="text-white">{data.overview}</p>
            <button className="flex items-center justify-center bg-[#e50914] hover:bg-[#ce272ffb] text-white h-full px-4 py-3 pr-6 gap-4 rounded-[4px] mt-5 ">
              Get Started
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                fill="#ffffff"
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>,
    document.getElementById("landing")
  );
};

export default Modal;
