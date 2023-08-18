import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { Loader } from "./Main";
import { useKey } from "../services/useKey";
const MovieDetails = ({
  selectedId,
  apiKey,
  onCloseMovie,
  onHandleWatched,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current = countRef.current + 1;
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Director: director,
    Genre: genre,
  } = movie;

  // movie object
  const functionAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDEcisions: countRef.current,
    };
    onHandleWatched(newWatchedMovie);
    onCloseMovie();
  };

  // useKey setting dom on body
  useKey("Escape", onCloseMovie);

  // fetching movie trough id
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.log(err.response);
      } finally {
        setIsLoading(false);
      }
    };
    // calling fetch
    getMovieDetails();

    // aborting function
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return () => (document.title = "MovieHub");
  }, [title]);

  return (
    <div className="details box">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating} IMDB rating
              </p>{" "}
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    onSetRating={setUserRating}
                    maxRating={10}
                    size={24}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={functionAdd}>
                      ➕ Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie {watchedUserRating}⭐</p>
              )}
              <p>
                <em>{plot}</em>
              </p>
              <p>Directed by {director}</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
