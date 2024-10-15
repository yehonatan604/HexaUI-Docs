import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.page";
import Start from "../Pages/Start/Start.page";
import Components from "../Pages/Docs/Components/Components.page";
import AccordionPage from "../Pages/Docs/Components/Common/Accordion/Accordion.page";
import ButtonPage from "../Pages/Docs/Components/Common/Button/Button.Page";
import PageHolder from "../Components/Shared/PageHolder";
import Hooks from "../Pages/Docs/Hooks/Hooks.page";
import Helpers from "../Pages/Docs/Helpers/Helpers.page";
import Types from "../Pages/Docs/Types/Types.page";
import Themes from "../Pages/Themes/Themes.page";
import Main from "../Pages/Docs/Types/ComponentsTypes/Main.page";
import CardPage from "../Pages/Docs/Components/Common/Card/Card.page";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={<PageHolder of="components" />}>
          <Route index element={<Components />} />
          <Route path="/components/accordion" element={<AccordionPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/card" element={<CardPage />} />
        </Route>

        <Route path="/hooks" element={<PageHolder of="hooks" />}>
          <Route index element={<Hooks />} />
        </Route>

        <Route path="/helpers" element={<PageHolder of="helpers" />}>
          <Route index element={<Helpers />} />
        </Route>

        <Route path="/types" element={<PageHolder of="types" />}>
          <Route index element={<Types />} />
          <Route path="/types/main" element={<Main />} />
        </Route>

        <Route path="/start" element={<Start />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRouter;
