import { useRef } from "react";
import { useKey } from "../services/useKey";
const SerachInput = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  // setting up kep press.
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </div>
  );
};
export default SerachInput;
