import { textInputEx1, textInputEx2 } from "./TextInput.code";
import { props, options } from "./TextInput.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import TextInputExamples from "./TextInput.example";

const TextInputPage = () => {
  return (
    <DocsPageGenerator
      title="Text Input"
      upperText={`
        The Text Input component allows users to enter text data into a field. 
        It comes with an optional ready functional label, which makes it easy to provide context or instructions for the input field. 
        It supports customization of appearance, including colors, sizes, and other visual properties, making it suitable for various UI contexts.
      `}
      examples={<TextInputExamples />}
      basicExample={textInputEx1}
      customExample={textInputEx2}
      customText={`
        You can easily customize the appearance and other visual properties of the Text Input component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
      dependsOnTheme
    />
  );
};

export default TextInputPage;
