import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomScrollbar from "./CustomScrollbar.jsx";

createRoot(document.getElementById("root")).render(
  <CustomScrollbar>
    <App />
  </CustomScrollbar>
);
