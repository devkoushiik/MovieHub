import { useState } from "react";
import MovieListBoxLeft from "./MovieListBoxLeft";
import MovieWatchListBoxRight from "./MovieWatchListBoxRight";
import MovieDetails from "./MovieDetails";

const Main = ({
  tempMovieData,
  tempWatchedData,
  average,
  movies,
  setMovies,
  isLoading,
  isError,
  selectedId,
  onSelectMovie,
  onCloseMovie,
  apiKey,
  watched,
  onHandleWatched,
}) => {
  return (
    <div>
      <main className="main">
        {isLoading && <Loader />}
        {!isError && !isLoading && (
          <MovieListBoxLeft
            movies={movies}
            setMovies={setMovies}
            onSelectMovie={onSelectMovie}
          />
        )}
        {isError && <Error isError={isError} />}
        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            apiKey={apiKey}
            onCloseMovie={onCloseMovie}
            onHandleWatched={onHandleWatched}
            watched={watched}
          />
        ) : (
          <MovieWatchListBoxRight
            tempWatchedData={tempWatchedData}
            average={average}
            onCloseMovie={onCloseMovie}
            watched={watched}
          />
        )}
      </main>
    </div>
  );
};

export function Loader() {
  return (
    <div>
      <p className="loader">Loading...</p>
    </div>
  );
}

export function Error({ isError }) {
  return (
    <div>
      <p className="error">{isError}</p>
    </div>
  );
}
export default Main;
