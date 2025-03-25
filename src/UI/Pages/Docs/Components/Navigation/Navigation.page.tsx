import { Flex, Hr, Button } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes } from "react-hexa-dev";
import { Link } from "react-router-dom";
import FeatureCard from "../../../../Components/Shared/FeatureCard";

const NavigationComponentsPage = () => {
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
          React Hexa UI Navigation Components
        </h1>
        <p className="mt-4 text-xl max-w-3xl text-center">
          Navigate through your application effortlessly with React Hexa UI's
          comprehensive set of navigation components. Whether you're building headers,
          menus, or more, these tools make it simple to guide users through your
          interface.
        </p>
        <span className="text-sm mt-2">
          Designed to provide flexible and easy-to-use navigation elements, React Hexa UI
          helps ensure a consistent and engaging user experience across your application.
        </span>

        <Hr options={{ width: "1/4" }} className="mt-12" />

        <h2 className="text-3xl font-bold mt-12 mb-6">Available Navigation Components</h2>
        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Stretch,
          }}
          className="gap-6 flex-wrap max-w-6xl"
        >
          <FeatureCard
            title="Navbar"
            description="A flexible navigation bar component that supports customizable menus, branding, and quick links."
          />
          <FeatureCard
            title="Footer"
            description="A footer component for displaying important links, copyright information, and other relevant content at the bottom of your application."
          />
          <FeatureCard
            title="Sidebar"
            description="A sidebar navigation component that provides additional menu options, ideal for complex layouts."
          />
          <FeatureCard
            title="DropDown"
            description="A drop-down menu component with optional nested menus, providing versatile navigation options for your application."
          />
          <FeatureCard
            title="Breadcrumbs"
            description="A breadcrumb navigation component to help users understand and navigate the hierarchy of your application."
          />
          <FeatureCard
            title="Pagination"
            description="A pagination component to efficiently navigate through multi-page data sets or lists with intuitive controls."
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
            <Link to="/navigation">Explore All Navigation Components</Link>
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

export default NavigationComponentsPage;
