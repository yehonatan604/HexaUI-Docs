import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/Components/Navbar/Navbar";
import { toast } from "react-hexa-dev";
import AppRouter from "./UI/Router/App.routes";
import { useEffect } from "react";

function App() {
  //const textColor = mode === "dark" ? colors.textDark : colors.black;
  //const bgColor = mode === "dark" ? colors.backgroundDark : colors.backgroundLight;

  useEffect(() => {
    toast.success("Welcome to HexaUI");
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div
          className={`min-h-screen overflow-hidden dark:bg-black bg-white-d text-black dark:text-standard-l`}
        >
          <Navbar />
          {<AppRouter />}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
