import { Route } from "react-router-dom";
import PageHolder from "../Components/Shared/PageHolder";
import ComponentsPage from "../Pages/Docs/Components/Components.page";
import AccordionPage from "../Pages/Docs/Components/Core/Accordion/Accordion.page";
import ButtonPage from "../Pages/Docs/Components/Core/Button/Button.Page";
import CardPage from "../Pages/Docs/Components/Core/Card/Card.page";
import CommonComponentsPage from "../Pages/Docs/Components/Core/Common.page";
import RainbowBorderPage from "../Pages/Docs/Components/Core/RainbowBorder/RainbowBorder.page";
import RingPage from "../Pages/Docs/Components/Core/Ring/Ring.page";
import ThemeTogglerPage from "../Pages/Docs/Components/Core/ThemeToggler/ThemeToggler.page";
import CheckboxPage from "../Pages/Docs/Components/Forms/Checkbox/Checkbox.page";
import FormsComponentsPage from "../Pages/Docs/Components/Forms/Forms.page";

const ComponentRoutes = () => {
  return (
    <Route path="/components" element={<PageHolder of="components" />}>
      <Route index element={<ComponentsPage />} />
      <Route path="core" element={<CommonComponentsPage />} />
      <Route path="core/accordion" element={<AccordionPage />} />
      <Route path="core/button" element={<ButtonPage />} />
      <Route path="core/card" element={<CardPage />} />
      <Route path="core/rainbow-border" element={<RainbowBorderPage />} />
      <Route path="core/ring" element={<RingPage />} />
      <Route path="core/theme-toggler" element={<ThemeTogglerPage />} />

      <Route path="forms" element={<FormsComponentsPage />} />
      <Route path="forms/checkbox" element={<CheckboxPage />} />
    </Route>
  );
};

export default ComponentRoutes;
