import { flexEx1, flexEx2 } from "./Flex.code";
import { props, options } from "./Flex.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import FlexExamples from "./Flex.example";

const FlexPage = () => {
  return (
    <DocsPageGenerator
      title="Flex"
      upperText={`
        The Flex component is a versatile layout container that provides flexible, responsive positioning for its child elements. 
        It allows you to easily control the direction, alignment, justification, and wrapping behavior of content.
        This component is particularly useful for creating responsive and adaptive designs with minimal code.
      `}
      examples={<FlexExamples />}
      basicExample={flexEx1}
      customExample={flexEx2}
      customText={`
        You can easily customize the direction, alignment, wrapping, and other visual properties of the Flex component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
    />
  );
};

export default FlexPage;
