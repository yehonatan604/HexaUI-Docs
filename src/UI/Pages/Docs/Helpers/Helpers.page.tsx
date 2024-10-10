import { Flex, List } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes, ListStyleTypes } from "react-hexa-dev";

const Helpers = () => {
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">Helpers Overview</h2>
        <p className="mt-4 text-lg max-md:p-10">
          This section provides a growing collection of reusable and customizable helper
          functions designed to simplify common development tasks. Each helper is crafted
          with efficiency and flexibility in mind, allowing you to easily integrate them
          into various parts of your project.
        </p>
        <Flex
          options={{
            direction: FlexDir.Col,
            align: FlexTypes.Start,
          }}
          className="gap-9"
        >
          <p className="mt-4 text-xl font-bold max-md:p-10">
            Use the sidebar to navigate through the various categories of helpers:
          </p>

          <List
            options={{
              listStyle: ListStyleTypes.Disc,
              items: [
                <div className="text-left gap-2">
                  <strong>String Utilities: </strong> Helpers for managing and
                  manipulating strings, such as generating random strings or formatting
                  text.
                </div>,
                <div className="text-left gap-2">
                  <strong>Data Transformation: </strong> Helpers that assist in
                  transforming data, such as converting formats, filtering arrays, or
                  mapping values.
                </div>,
                <div className="text-left gap-2">
                  <strong>Validation: </strong> Helpers to validate input data, sanitize
                  strings, and ensure your data meets specific criteria.
                </div>,
                <div className="text-left gap-2">
                  <strong>Utility Functions: </strong> General-purpose helpers that
                  simplify common coding tasks, like generating unique keys, handling
                  debouncing, and more.
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

export default Helpers;
