import { Flex, List } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes, ListStyleTypes } from "react-hexa-dev";

const Hooks = () => {
  return (
    <div className="flex justify-center">
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        className={` pb-1 gap-y-9 w-3/5 mx-auto`}
      >
        <h2 className="text-4xl font-extrabold font-serif mt-10">Hooks Overview</h2>
        <p className="mt-4 text-lg max-md:p-10">
          This section provides a growing collection of reusable and customizable React
          hooks designed to streamline your development process. Each hook is crafted with
          flexibility in mind, allowing you to integrate it easily into different
          scenarios while maintaining a consistent codebase.
        </p>
        <Flex
          options={{
            direction: FlexDir.Col,
            align: FlexTypes.Start,
          }}
          className="gap-9"
        >
          <p className="mt-4 text-xl font-bold max-md:p-10">
            Use the sidebar to navigate through the various categories of hooks:
          </p>

          <List
            options={{
              listStyle: ListStyleTypes.Disc,
              items: [
                <div className="text-left gap-2">
                  <strong>Theme Management: </strong> Hooks that provides utilities for
                  managing themes, including toggling between light and dark modes,
                  customizing colors, and more.
                </div>,
                <div className="text-left gap-2">
                  <strong>Animation & Effects: </strong> Hooks that provide animations or
                  visual effects, adding an engaging layer to your UI.
                </div>,
                <div className="text-left gap-2">
                  <strong>Window & Browser Utilities: </strong> Hooks that help you manage
                  window dimensions or handle browser-specific events effectively.
                </div>,
                <div className="text-left gap-2">
                  <strong>Data Management: </strong> Hooks that make data handling,
                  pagination, and state management simpler and more maintainable.
                </div>,
              ],
              fontSize: Sizes.Lg,
              align: FlexTypes.Start,
              gap: 7,
            }}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default Hooks;
