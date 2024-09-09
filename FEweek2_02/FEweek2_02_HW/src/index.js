import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PartContext from "./contexts/PartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PartContext.Provider value={"프론트엔드"}>
      <App />
    </PartContext.Provider>
  </React.StrictMode>
);
