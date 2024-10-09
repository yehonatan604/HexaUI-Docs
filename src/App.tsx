import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/Components/Layout/Navbar/Navbar";
import { useTheme } from "react-hexa-dev";
import AppRouter from "./UI/Router/AppRouter";

function App() {
  const { colors, mode } = useTheme();

  const textColor = mode === "dark" ? colors.textDark : colors.black;
  const bgColor = mode === "dark" ? colors.backgroundDark : colors.backgroundLight;

  return (
    <div>
      <BrowserRouter>
        <div className={`min-h-screen overflow-y-auto text-${textColor} bg-${bgColor}`}>
          <Navbar />
          {<AppRouter />}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
