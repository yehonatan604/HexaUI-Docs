import { Flex } from "react-hexa-dev";
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
