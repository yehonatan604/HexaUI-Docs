import { Flex, Hr, Button } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes } from "react-hexa-dev";
import { Link } from "react-router-dom";
import FeatureCard from "../../../../Components/Shared/FeatureCard";

const FormsComponentsPage = () => {
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
          React Hexa UI Form Components
        </h1>
        <p className="mt-4 text-xl max-w-3xl text-center">
          Discover powerful and customizable form components to make your UI forms more
          intuitive and user-friendly. React Hexa UI provides a variety of input elements,
          form handling utilities, and more.
        </p>
        <span className="text-sm mt-2">
          From basic inputs to advanced validation tools, React Hexa UI offers everything
          you need for efficient form creation.
        </span>

        <Hr options={{ width: "1/4" }} className="mt-12" />

        <h2 className="text-3xl font-bold mt-12 mb-6">Available Form Components</h2>
        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Stretch,
          }}
          className="gap-6 flex-wrap max-w-6xl"
        >
          <FeatureCard
            title="Text Input"
            description="A versatile input component for various input types like text, number, password, and more, with customizable styles."
          />
          <FeatureCard
            title="Label"
            description="A label component to provide context and accessibility to form elements, fully customizable to suit your needs."
          />
          <FeatureCard
            title="Checkbox"
            description="A customizable checkbox component that supports different states and styles, suitable for various use cases."
          />
          <FeatureCard
            title="Radio Button"
            description="A radio button component for selecting one option from a group, fully customizable with different styles."
          />
          <FeatureCard
            title="Range Input"
            description="A range input component for selecting numeric values within a specific range, with customizable appearance."
          />
          <FeatureCard
            title="Select"
            description="A dropdown select component for choosing from multiple options, with custom styles and easy integration."
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
            <Link to="/forms">Explore All Form Components</Link>
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

export default FormsComponentsPage;
