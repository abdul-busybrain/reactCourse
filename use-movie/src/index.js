import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="red" maxRating={10} onSetRating={setMovieRating} />;
//       <p>This movie is rated {movieRating} star</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/*     <StarRating
      maxRating={5}
      messages={["one", "two", "three", "four", "five"]}
      defaultRating={3}
    />
    <StarRating maxRating={7} color="blue" className="test" />
    <StarRating maxRating={"fff"} color="red" className="test" /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
