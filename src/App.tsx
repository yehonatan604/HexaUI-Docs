import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/Components/Layout/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className={`max-h-[93vh] overflow-y-auto`}>{/* <AppRouter /> */}</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
