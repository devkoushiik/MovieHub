import { useState } from "react";
import Movie from "./Movie";

const MovieListLeft = ({ tempMovieData }) => {
  const [movies, setMovies] = useState(tempMovieData);
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
