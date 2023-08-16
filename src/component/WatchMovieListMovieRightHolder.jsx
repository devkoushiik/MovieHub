import MovieWatchListMovieRight from "./MovieWatchListMovieRight";

const WatchMovieListMovieRightHolder = ({ watched, onDeleteWatched }) => {
  return (
    <div>
      {watched.map((movie, i) => (
        <MovieWatchListMovieRight
          movie={movie}
          key={i}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </div>
  );
};
export default WatchMovieListMovieRightHolder;
