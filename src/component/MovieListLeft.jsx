import Movie from "./Movie";

const MovieListLeft = ({ movies }) => {
  return (
    <div>
      <ul className="list">
        {movies?.map((movie, i) => (
          <Movie movie={movie} key={i} />
        ))}
      </ul>
    </div>
  );
};
export default MovieListLeft;
