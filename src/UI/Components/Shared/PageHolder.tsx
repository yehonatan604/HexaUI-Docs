import { Flex } from "react-hexa-dev";
import ComponentsMenu from "../Menus/ComponentsMenu/Components.menu";
import { Outlet } from "react-router-dom";
import HooksMenu from "../Menus/HooksMenu/Hooks.menu";
import HelpersMenu from "../Menus/HelpersMenu/Helpers.menu";
import TypesMenu from "../Menus/TypesMenu/Types.menu";

const PageHolder = ({ of }: { of: string }) => {
  let menu: JSX.Element;
  switch (of) {
    case "components":
      menu = <ComponentsMenu />;
      break;
    case "hooks":
      menu = <HooksMenu />;
      break;
    case "helpers":
      menu = <HelpersMenu />;
      break;
    case "types":
      menu = <TypesMenu />;
      break;
  }

  return (
    <Flex>
      <div className="h-[93vh] overflow-y-auto overflow-x-hidden">
        <div className="w-[17vw]">{menu}</div>
      </div>
      <div className="max-h-[93dvh] h-93vh w-full overflow-y-auto">
        <Outlet />
      </div>
    </Flex>
  );
};

export default PageHolder;
