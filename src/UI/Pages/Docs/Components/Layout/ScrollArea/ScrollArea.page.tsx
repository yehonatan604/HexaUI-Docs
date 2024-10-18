import { scrollAreaEx1, scrollAreaEx2 } from "./ScrollArea.code";
import { props } from "./ScrollArea.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import ScrollAreaExamples from "./ScrollArea.example";

const ScrollAreaPage = () => {
  return (
    <DocsPageGenerator
      title="Scroll Area"
      upperText={`
        The Scroll Area component allows you to create a container with a custom, theme-responsive scrollbar. It provides a scrollable content area that integrates seamlessly into your UI.
        This component is ideal for making certain sections of your page scrollable without relying on browser-default scrollbars, giving a more polished and visually integrated look.
      `}
      examples={<ScrollAreaExamples />}
      basicExample={scrollAreaEx1}
      customExample={scrollAreaEx2}
      customText={`
        You can easily customize the scrollbar style, scroll behavior, and other visual properties of the Scroll Area component using the options prop:
      `}
      tableProps={props}
    />
  );
};

export default ScrollAreaPage;
