import { useState } from "react";
import MovieListLeft from "./MovieListLeft";

const MovieListBoxLeft = ({ tempMovieData }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && <MovieListLeft tempMovieData={tempMovieData} />}
      </div>
    </div>
  );
};
export default MovieListBoxLeft;
