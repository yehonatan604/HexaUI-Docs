import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "react-datepicker/dist/react-datepicker.css";
import "./main.css";
import { ThemeProvider, ColorPaletteProvider } from "rainbow-plus-ui/src";
import "rainbow-plus-ui/dist/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ColorPaletteProvider>
        <App />
      </ColorPaletteProvider>
    </ThemeProvider>
  </StrictMode>
);
