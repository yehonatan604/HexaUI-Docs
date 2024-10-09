import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import "react-hexa-dev/css";
import { HexaUI, TColorPalette, TGradientPalette } from "react-hexa-dev";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HexaUI
      colors={{ primary: "blue-500" } as TColorPalette}
      gradients={
        { success: "from-blue-400 via-green-500 to-blue-700" } as TGradientPalette
      }
    >
      <App />
    </HexaUI>
  </StrictMode>
);
