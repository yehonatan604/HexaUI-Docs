import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.page";
import Start from "../Pages/Start/Start.page";
import ComponentsPage from "../Pages/Docs/Components/Components.page";
import AccordionPage from "../Pages/Docs/Components/Common/Accordion/Accordion.page";
import ButtonPage from "../Pages/Docs/Components/Common/Button/Button.Page";
import PageHolder from "../Components/Shared/PageHolder";
import Hooks from "../Pages/Docs/Hooks/Hooks.page";
import Helpers from "../Pages/Docs/Helpers/Helpers.page";
import Types from "../Pages/Docs/Types/Types.page";
import Themes from "../Pages/Themes/Themes.page";
import Main from "../Pages/Docs/Types/ComponentsTypes/Main.page";
import CardPage from "../Pages/Docs/Components/Common/Card/Card.page";
import RainbowBorderPage from "../Pages/Docs/Components/Common/RainbowBorder/RainbowBorder.page";
import Docs from "../Pages/Docs/Docs.page";
import RingPage from "../Pages/Docs/Components/Common/Ring/Ring.page";
import ThemeTogglerPage from "../Pages/Docs/Components/Common/ThemeToggler/ThemeToggler.page";
import CommonComponentsPage from "../Pages/Docs/Components/Common/Common.page";
import FormsComponentsPage from "../Pages/Docs/Components/Forms/Forms.page";
import CheckboxPage from "../Pages/Docs/Components/Forms/Checkbox/Checkbox.page";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={<PageHolder of="components" />}>
          <Route index element={<ComponentsPage />} />
          <Route path="/components/core" element={<CommonComponentsPage />} />
          <Route path="/components/core/accordion" element={<AccordionPage />} />
          <Route path="/components/core/button" element={<ButtonPage />} />
          <Route path="/components/core/card" element={<CardPage />} />
          <Route path="/components/core/rainbow-border" element={<RainbowBorderPage />} />
          <Route path="/components/core/ring" element={<RingPage />} />
          <Route path="/components/core/theme-toggler" element={<ThemeTogglerPage />} />

          <Route path="/components/forms" element={<FormsComponentsPage />} />
          <Route path="/components/forms/checkbox" element={<CheckboxPage />} />
        </Route>

        <Route path="/docs" element={<Docs />} />

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
