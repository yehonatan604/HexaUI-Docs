import { Flex, List } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes, ListStyleTypes } from "react-hexa-dev";

const Types = () => {
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">Types Overview</h2>
        <p className="mt-4 text-lg max-md:p-10">
          This section provides a comprehensive collection of reusable and customizable
          types designed to streamline your development process. Each type is crafted to
          provide consistency and scalability for different aspects of your application
          while maintaining a clear and structured codebase.
        </p>
        <Flex
          options={{
            direction: FlexDir.Col,
            align: FlexTypes.Start,
          }}
          className="gap-9"
        >
          <p className="mt-4 text-xl font-bold max-md:p-10">
            Use the sidebar to navigate through the various categories of types:
          </p>

          <List
            options={{
              listStyle: ListStyleTypes.Disc,
              items: [
                <div className="text-left gap-2">
                  <strong>Component Types: </strong> Types that are used across multiple
                  components, providing consistency in props and customization options.
                </div>,
                <div className="text-left gap-2">
                  <strong>Form & Input Types: </strong> Types that help define props for
                  forms, inputs, validation rules, and more, ensuring form consistency.
                </div>,
                <div className="text-left gap-2">
                  <strong>Layout & Positioning Types: </strong> Types that deal with
                  layout properties like alignment, direction, spacing, and other
                  utilities for positioning elements.
                </div>,
                <div className="text-left gap-2">
                  <strong>Styling Types: </strong> Types that manage styles such as
                  colors, gradients, themes, and other visual aspects of the application.
                </div>,
                <div className="text-left gap-2">
                  <strong>Miscellaneous Types: </strong> Types that don't fit into a
                  specific category, such as utility types like `TComponent`,
                  `TComponentOptions`, `TColor`, and others.
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

export default Types;
