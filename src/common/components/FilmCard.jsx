import { useNavigate } from "react-router";

const FillmCard = ({ film, type, style="" }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/details", {
          state: {
            id: film.id,
            type: type,
          },
        });
      }}
      className={`relative min-w-[180px] h-[250px] hover:scale-110 transition duration-150 ease-in hover:cursor-pointer ${style}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
    </button>
  );
};

export default FillmCard;
