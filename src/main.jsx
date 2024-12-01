import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import LocalStorage from "./localstorage/LocalStorage";
import "./localstorage/localstorage.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <LocalStorage />
  </StrictMode>
);
