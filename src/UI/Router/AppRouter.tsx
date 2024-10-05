import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Start from "../Pages/Start/Strart";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<></>} />
      <Route path="/register" element={<></>} />
      <Route path="/start" element={<Start></Start>} />
      <Route path="/" element={<Home></Home>} />
    </Routes>
  );
};

export default AppRouter;
