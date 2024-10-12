import { Button, Flex, List, RainbowBorder } from "react-hexa-dev";
import { FlexDir, FlexTypes, ListStyleTypes, Sizes } from "react-hexa-dev";
import { installEx, buttonEx, styleEx } from "../../../Data/Constants/CodeExamples/Start";
import HighLighter from "../../Components/Shared/HighLighter";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <Flex
      options={{
        direction: FlexDir.Col,
        justify: FlexTypes.Start,
        align: FlexTypes.Center,
      }}
      className={` pb-1 gap-y-9`}
    >
      <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl mt-4">
        Getting Started
      </h1>
      <p className="mt-4 text-lg ">
        Follow these simple steps to install and start using the library in your React
        project.
      </p>

      <div className="mt-10 w-1/2">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="mt-4 text-lg ">
          To install Rainbow Plus UI, run the following command in your terminal:
        </p>
        <RainbowBorder className="text-sm ml-4 mt-4">
          <HighLighter>{installEx}</HighLighter>
        </RainbowBorder>
      </div>

      <div className="w-1/2">
        <h2 className="text-2xl font-bold">Usage</h2>
        <p className="mt-4 text-lg">
          After installation, you can start using the components in your project like
          this:
        </p>
        <RainbowBorder className="ml-4 text-sm mt-4">
          <HighLighter>{buttonEx}</HighLighter>
        </RainbowBorder>
      </div>

      <div className="w-1/2">
        <h2 className="text-2xl font-bold">Customization</h2>
        <p className="mt-4 text-lg ">
          Rainbow Plus UI components are designed with Tailwind CSS at their core,
          offering an unparalleled level of customization. Whether you're aiming for quick
          design adjustments or a fully personalized interface, the flexibility of our
          library ensures that you can adapt it to meet your specific needs.
        </p>
        <h2 className="text-2xl font-bold my-6">Key Customization Methods</h2>
        <List
          options={{
            gap: 4,
            listStyle: ListStyleTypes.Decimal,
            fontSize: Sizes.Lg,
            items: [
              <p
                className=""
                style={{
                  textAlign: "start",
                }}
              >
                <span className="font-bold">
                  Utility-First Customization with Tailwind Classes:{" "}
                </span>
                Each component in Rainbow Plus UI is built with Tailwind's utility-first
                CSS framework, allowing you to easily override styles by passing in your
                own Tailwind classes. This approach lets you modify specific design
                elements—such as colors, margins, typography, and more—on the fly,
                ensuring that your UI remains flexible and dynamic without writing custom
                CSS.{" "}
              </p>,
              <p
                className=""
                style={{
                  textAlign: "start",
                }}
              >
                <span className="font-bold">Extending Tailwind’s Theme: </span> For more
                comprehensive and project-wide style adjustments, you can leverage
                Tailwind’s theme extension capabilities. By extending the Tailwind
                configuration, you can introduce new color schemes, spacing scales, and
                other design tokens that will be applied consistently across all Rainbow
                Plus UI components. This method provides a scalable approach to building
                cohesive and branded UIs while maintaining control over the global design
                system.{" "}
              </p>,
              <p
                className=""
                style={{
                  textAlign: "start",
                }}
              >
                <span className="font-bold">Built-in Variant Support: </span> Rainbow Plus
                UI introduces Variants—pre-configured, reusable style options within
                components that allow you to select different visual presentations without
                needing to pass individual style classes each time. Variants provide an
                easy and consistent way to apply predefined styles (e.g., button sizes,
                color modes) across your application, making it simple to maintain
                uniformity while enabling quick adjustments for different use cases.{" "}
              </p>,
              <p
                className=""
                style={{
                  textAlign: "start",
                }}
              >
                <span className="font-bold">Overriding Component Themes: </span> If your
                project demands a more tailored look and feel, Rainbow Plus UI allows you
                to override the default themes of its components. With our theming system,
                you can define custom themes that apply globally across your app, giving
                you full control over component behavior and appearance. This method
                ensures that your UI adheres to your brand's identity while still
                utilizing the efficiency of pre-built, maintainable components.
              </p>,
            ],
          }}
        />
        <Flex className="gap-4 my-5" options={{ justify: FlexTypes.SpaceEvenly }}>
          <Button options={{ bgVariant: "info" }}>info</Button>
          <Button options={{ bgVariant: "success" }}>success</Button>
          <Button options={{ bgVariant: "failure" }}>failure</Button>
        </Flex>
        <RainbowBorder className=" ml-4 text-sm mt-4">
          <HighLighter>{styleEx}</HighLighter>
        </RainbowBorder>
      </div>

      <div className="pb-9">
        <Link to={"/components"}>
          <Button options={{ size: Sizes.Lg, bgVariant: "success-d" }}>
            Explore Components
          </Button>
        </Link>
      </div>
    </Flex>
  );
};

export default Start;
