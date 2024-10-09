import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import "react-hexa-dev/css";
import { HexaUI } from "react-hexa-dev";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HexaUI>
      <App />
    </HexaUI>
  </StrictMode>
);
