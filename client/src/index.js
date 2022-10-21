import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App1";
import App2 from "./App2.js";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="map">
        <App1 />
      </div>

      <App2 />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
