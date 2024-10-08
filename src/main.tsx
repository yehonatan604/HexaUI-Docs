import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "react-datepicker/dist/react-datepicker.css";
import "./main.css";
import "react-hexa-dev/dist/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
