import { useState } from "react";
import MovieListBoxLeft from "./MovieListBoxLeft";
import MovieWatchListBoxRight from "./MovieWatchListBoxRight";

const Main = ({
  tempMovieData,
  tempWatchedData,
  average,
  movies,
  setMovies,
  isLoading,
  isError,
}) => {
  return (
    <div>
      <main className="main">
        {/* {isError ? (
          <Error />
        ) : isLoading ? (
          <Loader />
        ) : (
          <MovieListBoxLeft movies={movies} setMovies={setMovies} />
        )} */}
        {isLoading && <Loader />}
        {!isError && !isLoading && (
          <MovieListBoxLeft movies={movies} setMovies={setMovies} />
        )}
        {isError && <Error />}
        <MovieWatchListBoxRight
          tempWatchedData={tempWatchedData}
          average={average}
        />
      </main>
    </div>
  );
};

function Loader() {
  return (
    <div>
      <p className="loader">Loading...</p>
    </div>
  );
}

function Error() {
  return (
    <div>
      <p className="error">Something went wrong!!!❌</p>
    </div>
  );
}
export default Main;
