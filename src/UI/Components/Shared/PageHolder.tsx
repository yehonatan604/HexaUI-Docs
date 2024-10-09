import ComponentsMenu from "../Menus/ComponentsMenu/Components.menu";
import { Outlet } from "react-router-dom";

const PageHolder = ({ of }: { of: string }) => {
  let menu: JSX.Element;
  switch (of) {
    case "Components":
      menu = <ComponentsMenu />;
      break;
    default:
      menu = <ComponentsMenu />;
      break;
  }

  return (
    <div className="flex justify-center">
      <div className="sticky top-0 h-[93vh] overflow-y-auto overflow-x-hidden bg-zinc-700">
        {menu}
      </div>
      <Outlet />
    </div>
  );
};

export default PageHolder;
