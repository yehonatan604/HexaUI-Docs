import HighLighter from "../../../../../Components/Shared/HighLighter";
import { themeTogglerEx1, themeTogglerEx2 } from "./ThemeToggler.code";
import { props } from "./ThemeToggler.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import ThemeTogglerExamples from "./ThemeToggler.example";

const ThemeTogglerPage = () => {
  return (
    <DocsPageGenerator
      title="ThemeToggler"
      upperText={`
        The ThemeToggler component provides a simple and effective way to switch between
        light and dark themes in your application. It is highly customizable, allowing
        you to use custom icons, colors, and more, making it a great addition to any
        user interface that requires a dark/light mode toggle.
      `}
      extraUpperContent={
        <>
          <h1 className="text-xl font-bold">Tailwind CSS Dark Mode</h1>
          <p className="text-lg max-md:p-10 w-3/5">
            The ThemeToggler works seamlessly with the Tailwind CSS dark class. This means
            that you can easily define styles that change based on the theme by using
            classes like{" "}
            <code className="text-sm font-mono bg-gray-200 dark:bg-gray-700">
              dark:text-white.
            </code>
            <br />
            For example:
          </p>

          <HighLighter>
            {`<p className="text-lg dark:text-white text-black">Text</p>`}
          </HighLighter>
        </>
      }
      examples={<ThemeTogglerExamples />}
      basicExample={themeTogglerEx1}
      customExample={themeTogglerEx2}
      customText={`
        You can easily customize the appearance of the ThemeToggler component,
        including the icons using the props:
      `}
      tableProps={props}
    />
  );
};

export default ThemeTogglerPage;
