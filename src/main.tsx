import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import "react-hexa-dev/dist/index.css";
import { HexaUI } from "react-hexa-dev/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HexaUI>
      <App />
    </HexaUI>
  </StrictMode>
);
