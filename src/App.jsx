import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
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

const API_KEY = "43687838";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedId, setSelectedId] = useState("");

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
  }
  // handle delete watched
  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchingData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );
        // checking for response
        if (!res.ok) {
          throw new Error("Something went wrong!!!❌");
        }
        const data = await res.json();
        // checking for unknown query
        if (data.Response === "False") throw new Error("Movie not found!!!❌");
        setMovies(data.Search);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
          setIsError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setIsError("");
      return;
    }
    handleCloseMovie();
    fetchingData();
    return () => controller.abort();
  }, [query]);

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
