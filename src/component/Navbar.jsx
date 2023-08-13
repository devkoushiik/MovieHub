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
        <SerachInput query={query} setQuery={setQuery} />
        <NavSearchResult />
      </nav>
    </div>
  );
};
export default Navbar;
