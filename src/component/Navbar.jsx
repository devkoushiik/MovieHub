import SerachInput from "./SerachInput";
import Navlogo from "./Navlogo";
import NavSearchResult from "./NavSearchResult";
const Navbar = ({ movies, query, setQuery }) => {
  return (
    <div>
      <nav className="nav-bar">
        <Navlogo />
        <SerachInput query={query} setQuery={setQuery} />

        <NavSearchResult movies={movies} />
      </nav>
    </div>
  );
};
export default Navbar;
