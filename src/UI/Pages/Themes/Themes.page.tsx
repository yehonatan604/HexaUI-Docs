import { Flex, Button, useTheme } from "react-hexa-dev";
import HighLighter from "../../Components/Shared/HighLighter";

const Themes = () => {
  const { mode, toggleTheme, colors, gradients } = useTheme();

  return (
    <Flex options={{ justify: "center" }} className="max-h-[93vh] overflow-y-auto">
      <Flex
        options={{
          direction: "col",
          justify: "start",
          align: "center",
        }}
        className={`pb-1 gap-12 w-3/5 mx-auto`}
      >
        <h2 className="text-4xl font-extrabold font-serif pt-10">Theme Overview</h2>
        <p className="mt-4 text-lg max-md:p-10">
          This section demonstrates how to use the <strong>useTheme</strong> hook for
          managing light/dark modes and customizing color palettes. The{" "}
          <strong>ThemeToggle</strong> component allows users to easily switch between
          themes, providing a flexible and consistent user experience.
        </p>

        <div className="">
          <Button onClick={toggleTheme}>
            Toggle to {mode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </div>

        <div className="">
          <h3 className="text-2xl font-bold">Current Theme Details:</h3>
          <p className="mt-2 text-lg">Mode: {mode}</p>
          <p className="mt-2 text-lg">Primary Color: {colors.primary}</p>
        </div>

        <div className="w-4/5">
          <h3 className="text-2xl font-bold">
            Using the <code>useTheme</code> Hook
          </h3>
          <p className="mt-4 text-lg">
            The <strong>useTheme</strong> hook provides an easy way to access and modify
            theme settings, including light/dark mode and color palettes. Here is an
            example of how to use it:
          </p>
        </div>
        <HighLighter lang="js" className="">
          {`import { useTheme } from 'react-hexa-dev';

 const MyComponent = () => {
   const { mode, toggleTheme, colors, setColors, gradients, setGradients } = useTheme();

   return (
     <div>
       <button onClick={toggleTheme}>Toggle Theme</button>
       <p>Current Mode: {mode}</p>
       <p>Primary Color: {colors.primary}</p>
     </div>
   );
};`}
        </HighLighter>

        <div className="mt-10">
          <h3 className="text-2xl font-bold">Color Palette</h3>
          <p className="mt-4 text-lg">
            Below is the color palette available in the theme. You can use these colors to
            ensure consistency across your application:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg">
            <li>
              <strong>Primary:</strong> {colors.primary}
            </li>
            <li>
              <strong>Secondary:</strong> {colors.secondary}
            </li>
            <li>
              <strong>Info:</strong> {colors.info}
            </li>
            <li>
              <strong>Success:</strong> {colors.success}
            </li>
            <li>
              <strong>Warning:</strong> {colors.warning}
            </li>
            <li>
              <strong>Failure:</strong> {colors.failure}
            </li>
            <li>
              <strong>Black:</strong> {colors.black}
            </li>
            <li>
              <strong>White:</strong> {colors.white}
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold">Gradients</h3>
          <p className="mt-4 text-lg">
            The theme also provides several gradients that can be used to enhance the
            visual appeal of your application:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg">
            <li>
              <strong>Primary Gradient:</strong> {gradients.primary}
            </li>
            <li>
              <strong>Secondary Gradient:</strong> {gradients.secondary}
            </li>
            <li>
              <strong>Standard Gradient:</strong> {gradients.standrad}
            </li>
            <li>
              <strong>Info Gradient:</strong> {gradients.info}
            </li>
            <li>
              <strong>Select Gradient:</strong> {gradients.select}
            </li>
            <li>
              <strong>Cancel Gradient:</strong> {gradients.cancel}
            </li>
            <li>
              <strong>Approve Gradient:</strong> {gradients.approve}
            </li>
            <li>
              <strong>Success Gradient:</strong> {gradients.success}
            </li>
            <li>
              <strong>Warning Gradient:</strong> {gradients.warning}
            </li>
            <li>
              <strong>Failure Gradient:</strong> {gradients.failure}
            </li>
          </ul>
        </div>
      </Flex>
    </Flex>
  );
};

export default Themes;
