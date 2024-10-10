import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.page";
import Start from "../Pages/Start/Start.page";
import Components from "../Pages/Docs/Components/Components.page";
import AccordionPage from "../Pages/Docs/Components/Common/Accordion/Accordion.page";
import ButtonPage from "../Pages/Docs/Components/Common/Button/Button.Page";
import PageHolder from "../Components/Shared/PageHolder";
import Hooks from "../Pages/Docs/Hooks/Hooks.page";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={<PageHolder of="components" />}>
          <Route index element={<Components />} />
          <Route path="/components/accordion" element={<AccordionPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
        </Route>

        <Route path="/hooks" element={<PageHolder of="hooks" />}>
          <Route index element={<Hooks />} />
        </Route>

        <Route path="/start" element={<Start />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRouter;
