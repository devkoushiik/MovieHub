import { useState } from "react";
import SerachInput from "./SerachInput";
import Navlogo from "./Navlogo";
import NavSearchResult from "./NavSearchResult";
const Navbar = () => {
  const [query, setQuery] = useState("");
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
        <NavSearchResult />
      </nav>
    </div>
  );
};
export default Navbar;
