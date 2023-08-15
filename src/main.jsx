import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./component/StarRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // {/* <StarRating
  //   maxRating={5}
  //   messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
  // /> */}
);
