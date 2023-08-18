import { useEffect, useState } from "react";
const API_KEY = "43687838";

export function useMovies(query, cb) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    cb?.();
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
    fetchingData();
    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, isError, setMovies, API_KEY };
}
