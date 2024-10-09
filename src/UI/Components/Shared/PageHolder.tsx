import { Flex } from "react-hexa-dev/components";
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
      <div className="h-[93vh] overflow-y-auto bg-zinc-700">
        <div className="w-[13.4vw]">{menu}</div>
      </div>
      <div className="max-h-[93vh] h-93vh w-[86vw] overflow-y-scroll">
        <Outlet />
      </div>
    </Flex>
  );
};

export default PageHolder;
