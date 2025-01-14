import FilmCard from"common/components/FilmCard"
const Movies = ({movies}) => {
    
  return (
    <div className="flex mt-[160px] flex-wrap gap-12 pl-[30px] sm:pl-[50px] my-10 lg:pl-[90px] pr-[30px] w-full bg-[#000000]  ">
        {movies.map(movie=><FilmCard film={movie} type={"movie"}  style="mx-auto sm:mx-0"/>)}
        <div className="w-full h-[60px]"></div>
    </div>
  )
}

export default Movies