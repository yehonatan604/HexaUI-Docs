import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.page";
import Start from "../Pages/Start/Start.page";
import Components from "../Pages/Docs/Components/Components.page";
import AccordionPage from "../Pages/Docs/Components/Common/Accordion/Accordion.page";
import ButtonPage from "../Pages/Docs/Components/Common/Button/Button.Page";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={<Components />} />
        <Route path="/components/common/accordion" element={<AccordionPage />} />
        <Route path="/components/common/button" element={<ButtonPage />} />

        <Route path="/start" element={<Start />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRouter;
