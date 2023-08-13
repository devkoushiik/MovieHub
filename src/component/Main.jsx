import { useState } from "react";
import MovieListBoxLeft from "./MovieListBoxLeft";
import MovieWatchListBoxRight from "./MovieWatchListBoxRight";

const Main = ({
  tempMovieData,
  tempWatchedData,
  average,
  movies,
  setMovies,
}) => {
  return (
    <div>
      <main className="main">
        <MovieListBoxLeft movies={movies} setMovies={setMovies} />
        <MovieWatchListBoxRight
          tempWatchedData={tempWatchedData}
          average={average}
        />
      </main>
    </div>
  );
};
export default Main;
