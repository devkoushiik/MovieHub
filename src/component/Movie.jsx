const Movie = ({ singleMovie, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      <li
        key={singleMovie.imdbID}
        onClick={() => onSelectMovie(singleMovie.imdbID)}
      >
        <img src={singleMovie.Poster} alt={`${singleMovie.Title} poster`} />
        <h3>{singleMovie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{singleMovie.Year}</span>
          </p>
        </div>
      </li>
    </ul>
  );
};
export default Movie;
