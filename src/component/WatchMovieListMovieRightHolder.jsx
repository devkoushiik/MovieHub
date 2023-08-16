import MovieWatchListMovieRight from "./MovieWatchListMovieRight";

const WatchMovieListMovieRightHolder = ({ watched, onDeleteWatched }) => {
  return (
    <div>
      <ul className="list">
        {watched.map((movie, i) => (
          <MovieWatchListMovieRight
            movie={movie}
            key={i}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </div>
  );
};
export default WatchMovieListMovieRightHolder;
