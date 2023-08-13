import { useState } from "react";
import MovieListBoxLeft from "./MovieListBoxLeft";
import MovieWatchListBoxRight from "./MovieWatchListBoxRight";

const Main = ({ tempMovieData, tempWatchedData, average }) => {
  return (
    <div>
      <main className="main">
        <MovieListBoxLeft tempMovieData={tempMovieData} />
        <MovieWatchListBoxRight
          tempWatchedData={tempWatchedData}
          average={average}
        />
      </main>
    </div>
  );
};
export default Main;
