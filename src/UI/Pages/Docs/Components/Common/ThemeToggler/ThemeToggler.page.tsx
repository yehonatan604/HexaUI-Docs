import { RainbowBorder, Flex, Hr, ThemeToggler } from "react-hexa-dev";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import HighLighter from "../../../../../Components/Shared/HighLighter";
import PropsTable from "../../../../../Components/Shared/PropsTable";
import { themeTogglerEx1, themeTogglerEx2 } from "./ThemeToggler.code";
import { props } from "./ThemeToggler.props";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeTogglerPage = () => {
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">ThemeToggler</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The ThemeToggler component provides a simple and effective way to switch between
          light and dark themes in your application. It is highly customizable, allowing
          you to use custom icons, colors, and more, making it a great addition to any
          user interface that requires a dark/light mode toggle.
        </p>

        <ThemeToggler
          darkIcon={<MdOutlineDarkMode size={40} />}
          lightIcon={<MdOutlineLightMode size={40} />}
        />

        <p className="text-lg max-md:p-10 w-3/5">
          The ThemeToggler works seamlessly with the Tailwind CSS dark class. This means
          that you can easily define styles that change based on the theme by using
          classes like{" "}
          <code className="text-sm font-mono bg-gray-200 dark:bg-gray-700">
            dark:text-white
          </code>
          . For example:
        </p>

        <HighLighter>
          {`<p className="text-lg dark:text-white text-black">Text</p>`}
        </HighLighter>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the ThemeToggler component:
          </p>
          <HighLighter>{themeTogglerEx1}</HighLighter>
        </div>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing ThemeToggler Appearance</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the appearance of the ThemeToggler component,
            including the icons using the props:
          </p>
          <RainbowBorder className="text-sm mt-4">
            <HighLighter>{themeTogglerEx2}</HighLighter>
          </RainbowBorder>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="mb-9 gap-4">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">ThemeToggler Props</h2>
          </Flex>
          <PropsTable tableProps={props} />
        </Flex>
      </Flex>
    </div>
  );
};

export default ThemeTogglerPage;
