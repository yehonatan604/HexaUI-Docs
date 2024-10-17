import { Flex, List } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes, ListStyleTypes } from "react-hexa-dev";

const ComponentsPage = () => {
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">Components Overview</h2>
        <p className="mt-4 text-lg max-md:p-10">
          This section provides a comprehensive collection of reusable and customizable UI
          components designed to streamline your development process. Each component is
          built with flexibility in mind, allowing you to adapt them to various use cases
          while maintaining a consistent design.
        </p>
        <Flex
          options={{
            direction: FlexDir.Col,
            align: FlexTypes.Start,
          }}
          className="gap-9 w-5/6"
        >
          <p className="mt-4 text-xl font-bold max-md:p-10">
            Use the sidebar to navigate through the various categories of components:
          </p>

          <List
            className="mt-4 space-y-2"
            options={{
              listStyle: ListStyleTypes.Disc,
              items: [
                <Flex className="text-left gap-2">
                  <strong>Common: </strong> Basic components like buttons, icons, cards,
                  and alerts that form the foundation of any user interface.
                </Flex>,
                <Flex className="text-left gap-2">
                  <strong>Forms: </strong> Interactive form elements such as inputs, text
                  areas, checkboxes, radios, and more, designed to handle form validation
                  and user input efficiently.
                </Flex>,
                <Flex className="text-left gap-2">
                  <strong>Layout: </strong> Layout components that help you structure your
                  application, including grids, containers, flexbox utilities, and more.
                </Flex>,
                <Flex className="text-left gap-2">
                  <strong>Navigation: </strong> Navigation elements such as menus, tabs,
                  pagination, and breadcrumbs that guide users through your application
                  smoothly.
                </Flex>,
                <Flex className="text-left gap-2">
                  <strong>Typography: </strong> Typography: A range of text-related
                  components, including headings, paragraphs, lists, and more, to ensure
                  readability and style consistency.
                </Flex>,
              ],
              fontSize: Sizes.Lg,
              align: FlexTypes.Start,
            }}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default ComponentsPage;
