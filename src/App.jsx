import { useState } from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import { useMovies } from "./services/useMovies";
import { useLocalStorageState } from "./services/useLocalStorageState";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: "2010",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    title: "The Matrix",
    year: "1999",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    title: "Parasite",
    year: "2019",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [selectedId, setSelectedId] = useState("");
  const [query, setQuery] = useState("");
  // const [watched, setWatched] = useState(tempWatchedData);

  // set and get local storage value
  const [watched, setWatched] = useLocalStorageState([], "watched");

  // fetching data
  const { movies, isError, isLoading, setMovies, API_KEY } = useMovies(
    query,
    handleCloseMovie
  );

  // movie id
  const handleSelectedMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };
  // handle close movie
  function handleCloseMovie() {
    setSelectedId(null);
  }
  // handle watchedMovieList
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }
  // handle delete watched
  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <Main
        tempMovieData={tempMovieData}
        tempWatchedData={tempWatchedData}
        average={average}
        movies={movies}
        setMovies={setMovies}
        isLoading={isLoading}
        isError={isError}
        selectedId={selectedId}
        onSelectMovie={handleSelectedMovie}
        onCloseMovie={handleCloseMovie}
        apiKey={API_KEY}
        watched={watched}
        onHandleWatched={handleAddWatched}
        onDeleteWatched={handleDeleteWatched}
      />
    </>
  );
}
