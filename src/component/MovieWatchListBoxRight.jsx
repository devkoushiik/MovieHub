import { useState } from "react";
import MovieWatchBoxRightSummery from "./MovieWatchBoxRightSummery";
import MovieWatchListMovieRight from "./MovieWatchListMovieRight";
import WatchMovieListMovieRightHolder from "./WatchMovieListMovieRightHolder";

const MovieWatchListBoxRight = ({
  tempWatchedData,
  average,
  onCloseMovie,
  watched,
  onDeleteWatched,
}) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <MovieWatchBoxRightSummery watched={watched} average={average} />
            <WatchMovieListMovieRightHolder
              watched={watched}
              onDeleteWatched={onDeleteWatched}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default MovieWatchListBoxRight;
