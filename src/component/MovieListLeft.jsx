import Movie from "./Movie";

const MovieListLeft = ({ movies, onSelectMovie }) => {
  return (
    <div>
      {movies?.map((singleMovie) => (
        <Movie
          singleMovie={singleMovie}
          key={singleMovie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </div>
  );
};
export default MovieListLeft;
