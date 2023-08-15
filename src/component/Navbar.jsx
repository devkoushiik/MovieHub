import { useState } from "react";
import SerachInput from "./SerachInput";
import Navlogo from "./Navlogo";
import NavSearchResult from "./NavSearchResult";
const Navbar = ({ movies, query, setQuery }) => {
  return (
    <div>
      <nav className="nav-bar">
        <Navlogo />
        <SerachInput>
          <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SerachInput>
        <NavSearchResult movies={movies} />
      </nav>
    </div>
  );
};
export default Navbar;
