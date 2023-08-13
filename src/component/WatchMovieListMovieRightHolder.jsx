import MovieWatchListMovieRight from "./MovieWatchListMovieRight";

const WatchMovieListMovieRightHolder = ({ watched }) => {
  return (
    <div>
      <ul className="list">
        {watched.map((movie, i) => (
          <MovieWatchListMovieRight movie={movie} key={i} />
        ))}
      </ul>
    </div>
  );
};
export default WatchMovieListMovieRightHolder;
