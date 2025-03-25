import { Flex, ScrollArea } from "react-hexa-dev";
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
      <ScrollArea maxHeight="fit">
        <div className="h-[93vh]">
          <div className="w-[15vw]">{menu}</div>
        </div>
      </ScrollArea>
      <ScrollArea maxHeight="fit">
        <div className="h-[93vh] h-93vh w-[85vw]">
          <Outlet />
        </div>
      </ScrollArea>
    </Flex>
  );
};

export default PageHolder;
