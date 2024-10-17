import { Flex, Hr, Button } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes } from "react-hexa-dev";
import { Link } from "react-router-dom";
import FeatureCard from "../../../../Components/Shared/FeatureCard";

const CommonComponentsPage = () => {
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
          React Hexa UI Core Components
        </h1>
        <p className="mt-4 text-xl max-w-3xl text-center">
          Explore a range of reusable components that are highly customizable, built to
          streamline your UI development with React and Tailwind CSS.
        </p>
        <span className="text-sm mt-2">
          From buttons and cards to advanced tools like accordions and theme togglers,
          React Hexa UI offers everything you need.
        </span>

        <Hr options={{ width: "1/4" }} className="mt-12" />

        <h2 className="text-3xl font-bold mt-12 mb-6">Available Components</h2>
        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Stretch,
          }}
          className="gap-6 flex-wrap max-w-6xl"
        >
          <FeatureCard
            title="Button"
            description="A versatile button component with customizable colors, sizes, and variants to suit your needs."
          />
          <FeatureCard
            title="Card"
            description="A flexible card component that supports headers, footers, and customizable content areas."
          />
          <FeatureCard
            title="Accordion"
            description="A collapsible accordion component, ideal for organizing content into expandable sections."
          />
          <FeatureCard
            title="Theme Toggler"
            description="A theme toggler component for easily switching between light and dark themes, complete with customizable icons."
          />
          <FeatureCard
            title="Rainbow Border"
            description="A decorative border component with a colorful gradient effect, perfect for adding flair to your elements."
          />
          <FeatureCard
            title="Ring"
            description="A ring component that adds a colorful, customizable ring around any element, drawing attention to key areas."
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
            <Link to="/components">Explore All Components</Link>
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

export default CommonComponentsPage;
