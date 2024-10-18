import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.page";
import Start from "../Pages/Start/Start.page";
import PageHolder from "../Components/Shared/PageHolder";
import Hooks from "../Pages/Docs/Hooks/Hooks.page";
import Helpers from "../Pages/Docs/Helpers/Helpers.page";
import Types from "../Pages/Docs/Types/Types.page";
import Themes from "../Pages/Themes/Themes.page";
import Main from "../Pages/Docs/Types/ComponentsTypes/Main.page";
import Docs from "../Pages/Docs/Docs.page";
import ComponentRoutes from "./Components.routes";
import ComponentsPage from "../Pages/Docs/Components/Components.page";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/docs" element={<Docs />} />

        {/* Components Routes */}
        <Route path="/components" element={<PageHolder of="components" />}>
          <Route path="/components/" element={<ComponentsPage />} />
          <Route path="*" element={<ComponentRoutes />} />
        </Route>

        {/* Hooks Routes */}
        <Route path="/hooks" element={<PageHolder of="hooks" />}>
          <Route index element={<Hooks />} />
        </Route>

        {/* Helpers Routes */}
        <Route path="/helpers" element={<PageHolder of="helpers" />}>
          <Route index element={<Helpers />} />
        </Route>

        {/* Types Routes */}
        <Route path="/types" element={<PageHolder of="types" />}>
          <Route index element={<Types />} />
          <Route path="/types/main" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
