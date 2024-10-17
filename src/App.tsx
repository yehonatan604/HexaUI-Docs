import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/Components/Navbar/Navbar";
import { toast, useTheme } from "react-hexa-dev";
import AppRouter from "./UI/Router/AppRouter";
import { useEffect } from "react";

function App() {
  const { colors, mode } = useTheme();

  const textColor = mode === "dark" ? colors.textDark : colors.black;
  const bgColor = mode === "dark" ? colors.backgroundDark : colors.backgroundLight;

  useEffect(() => {
    toast.success("Welcome to HexaUI");
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className={`min-h-screen overflow-hidden text-${textColor} bg-${bgColor}`}>
          <Navbar />
          {<AppRouter />}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
