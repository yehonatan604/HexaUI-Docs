import { Flex, Button, Hr, Scrollbar } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes } from "react-hexa-dev";
import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <Scrollbar maxHeight="fit">
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        className="pb-1 gap-y-9 mx-auto w-4/5 h-[93vh]"
      >
        <h1 className="text-5xl font-extrabold text-select sm:text-6xl mt-8">
          React Hexa UI Documentation
        </h1>
        <p className="mt-4 text-xl max-w-3xl text-center">
          Explore the full potential of React Hexa UI with our comprehensive
          documentation, detailing all components, hooks, and utilities.
        </p>
        <span className="text-sm mt-2">
          Get started quickly, customize your experience, and leverage powerful
          components.
        </span>

        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
          className="mt-8 gap-4"
        >
          <Button
            options={{
              size: Sizes.Lg,
              bgVariant: "primary",
            }}
          >
            <Link to="/components">Explore Components</Link>
          </Button>
        </Flex>

        <Hr options={{ border: { thickness: "w-3/4" } }} className="mt-12" />

        <h2 className="text-3xl font-bold mt-12 mb-6">What You'll Find Here</h2>
        <p className="text-lg max-w-3xl text-center mb-8">
          Our documentation includes a wide range of guides, examples, and references to
          help you get the most out of React Hexa UI.
        </p>

        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Stretch,
          }}
          className="gap-6 flex-wrap max-w-6xl"
        >
          <Button options={{ bgVariant: "black-d", textVariant: "standard-l" }}>
            <Link to="/components">Components Reference</Link>
          </Button>
          <Button options={{ bgVariant: "success", textVariant: "white" }}>
            <Link to="/helpers">Helpers</Link>
          </Button>
          <Button options={{ bgVariant: "warning", textVariant: "black" }}>
            <Link to="/hooks">Custom Hooks</Link>
          </Button>
          <Button options={{ bgVariant: "info", textVariant: "white" }}>
            <Link to="/types">Type Definitions</Link>
          </Button>
        </Flex>

        <Hr options={{ border: { thickness: "w-1/2" } }} className="mt-16" />

        <Flex
          options={{
            direction: FlexDir.Col,
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
          className="mt-16 gap-4 max-w-3xl"
        >
          <p className="text-lg text-center">
            React Hexa UI provides everything you need to build sleek, modern, and
            responsive interfaces. Whether you're a beginner or an experienced developer,
            our tools and guides make your development journey easier.
          </p>
          <Hr options={{ border: { thickness: "w-1/2" } }} />
        </Flex>

        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
          className="mt-12 gap-4"
        >
          <Button
            options={{
              size: Sizes.Lg,
              bgVariant: "success-d",
            }}
          >
            <Link to="/start">Get Started</Link>
          </Button>
          <Button
            options={{
              size: Sizes.Lg,
              bgVariant: "secondary",
            }}
          >
            <Link to="/examples">View Examples</Link>
          </Button>
        </Flex>
      </Flex>
    </Scrollbar>
  );
};

export default Docs;
