import { Flex, Hr, Button } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes } from "react-hexa-dev";
import { Link } from "react-router-dom";
import FeatureCard from "../../../../Components/Shared/FeatureCard";

const LayoutComponentsPage = () => {
  return (
    <div className="flex justify-center">
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        className={`pb-1 gap-y-9 mx-auto w-4/5`}
      >
        <h1 className="text-5xl font-extrabold text-select sm:text-6xl mt-8">
          React Hexa UI Layout Components
        </h1>
        <p className="mt-4 text-xl max-w-3xl text-center">
          Explore versatile layout components to organize your UI effectively. React Hexa
          UI provides a variety of layout elements that help you create responsive,
          dynamic, and feature-rich user interfaces.
        </p>
        <span className="text-sm mt-2">
          From flexible grid layouts to scrollable panels, React Hexa UI offers powerful
          layout tools to enhance your application's structure and user experience.
        </span>

        <Hr options={{ width: "1/4" }} className="mt-12" />

        <h2 className="text-3xl font-bold mt-12 mb-6">Available Layout Components</h2>
        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Stretch,
          }}
          className="gap-6 flex-wrap max-w-6xl"
        >
          <FeatureCard
            title="Flex"
            description="A flexible layout component that allows for arranging content in rows or columns, with full control over alignment, justification, and wrapping."
          />
          <FeatureCard
            title="DataGrid"
            description="A versatile grid component for displaying tabular data with support for sorting, filtering, and other advanced features."
          />
          <FeatureCard
            title="DocPanel"
            description="A draggable panel component that allows for dynamic placement, making it ideal for modular UIs."
          />
          <FeatureCard
            title="Scrollbar"
            description="A scrollable content wrapper with a themed scrollbar, providing a consistent and customizable scrolling experience."
          />
          <FeatureCard
            title="AutoGrid"
            description="An automatic grid layout component that intelligently arranges items based on available space, ideal for responsive and adaptive designs."
          />
          <FeatureCard
            title="Block"
            description="A simple block-level container component for creating sections, organizing content, and building flexible layouts with ease."
          />
        </Flex>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

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
              bgVariant: "info",
            }}
          >
            <Link to="/layouts">Explore All Layout Components</Link>
          </Button>
          <Button
            options={{
              size: Sizes.Lg,
              bgVariant: "success-d",
            }}
          >
            <Link to="/examples">View Examples</Link>
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default LayoutComponentsPage;
