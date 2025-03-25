import { Flex, List, Hr, Quote, Button, ScrollArea, useTheme } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes } from "react-hexa-dev";
import { TCite } from "react-hexa-dev";
import { Link } from "react-router-dom";
import FeatureCard from "../../Components/Shared/FeatureCard";

const Home = () => {
  const { mode } = useTheme();

  const cite: TCite = {
    url: "https://reactjs.org/",
    text: "React Official Website",
    placement: "start",
    variant: "info",
  };

  return (
    <ScrollArea maxHeight="fit">
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        className="pb-1 gap-y-9 h-[93vh]"
      >
        <h1 className="text-5xl font-extrabold text-select sm:text-6xl mt-8">
          React Hexa UI
        </h1>
        <p className="mt-4 text-xl max-w-3xl text-center">
          A powerful, modular, and highly customizable React UI framework built on top of
          Tailwind CSS.
        </p>
        <span className="text-sm mt-2">
          Elevate your web development with advanced components, hooks, and features.
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
              bgVariant: "success-d",
            }}
          >
            <Link to="/start">Get Started</Link>
          </Button>
          <Button
            options={{
              size: Sizes.Lg,
              bgVariant: "info",
            }}
          >
            <Link to="/docs">Documentation</Link>
          </Button>
        </Flex>

        <Hr options={{ border: { thickness: "w-3/4" } }} className="mt-12" />

        <h2 className="text-3xl font-bold mt-12 mb-6">Why Choose React Hexa UI?</h2>
        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Stretch,
          }}
          className="gap-6 flex-wrap max-w-6xl"
        >
          <FeatureCard
            title="Tailwind CSS Integration"
            description="Seamlessly integrates with Tailwind CSS, allowing for easy customization and consistent styling across your project."
          />
          <FeatureCard
            title="Advanced Components"
            description="Includes specialized components like DocPanel, DataGrid, 3D Logo, and more to accelerate your development process."
          />
          <FeatureCard
            title="Powerful Hooks"
            description="Utilizes custom hooks for forms, API requests, and routing, providing a NextJS-like experience."
          />
          <FeatureCard
            title="TypeScript Support"
            description="Built with TypeScript, offering robust type checking and improved developer experience."
          />
          <FeatureCard
            title="SSR Compatible"
            description="Supports Server-Side Rendering out of the box, powered by Vite for optimal performance."
          />
          <FeatureCard
            title="3D Components"
            description="Support for 3D elements such as GLTF and FBX models, enabling rich, interactive 3D experiences in your UI."
          />
        </Flex>

        <h2 className="text-3xl font-bold mt-16 mb-6">Key Features</h2>
        <List
          className="mt-4 space-y-3 max-w-2xl text-black"
          options={{
            textVariant: mode === "light" ? "black-l" : "white",
            items: [
              "🎨 Dynamic Tailwind classes with JIT mode and dark mode support",
              "🌈 Customizable themes for consistent styling",
              "🔔 Toast notifications and modal dialogs using React Portals",
              "🎉 Built-in confetti effects and animations",
              "🧩 3D component support with GLTF and FBX loaders",
              "📊 Flexible layout components like DocPanel and DataGrid",
              "🔄 Custom hooks for form handling and API requests",
              "🚀 Vite-powered build process for lightning-fast development",
            ],
            fontSize: Sizes.Lg,
            align: FlexTypes.Start,
          }}
        />

        <Flex
          options={{
            direction: FlexDir.Col,
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
          className="mt-16 gap-4 max-w-3xl"
        >
          <Hr options={{ border: { thickness: "w-1/2" } }} />
          <Quote
            cite={cite as TCite & string}
            options={{
              gap: 4,
            }}
          >
            React Hexa UI builds upon the power of React, providing a comprehensive
            toolkit for building modern, responsive, and feature-rich web applications. It
            combines the flexibility of React with the utility-first approach of Tailwind
            CSS, offering developers a powerful framework for creating stunning user
            interfaces.
          </Quote>
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
              bgVariant: "primary",
            }}
          >
            <Link to="/components">Explore Components</Link>
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
    </ScrollArea>
  );
};

export default Home;
