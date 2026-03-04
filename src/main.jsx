import { createRoot } from "react-dom/client";
import "../src/css/index.css"
import App from "./App.jsx";
import "/src/App.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
