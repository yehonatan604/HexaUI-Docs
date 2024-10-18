import { rangeInputEx1, rangeInputEx2 } from "./RangeInput.code";
import { props, options } from "./RangeInput.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import RangeInputExamples from "./RangeInput.example";

const RangeInputPage = () => {
  return (
    <DocsPageGenerator
      title="Range Input"
      upperText={`
        The Range Input component allows users to select a value from a given range by adjusting a slider. 
        It supports customization of appearance, including colors, sizes, and thumb styles, making it suitable for various UI contexts.
      `}
      examples={<RangeInputExamples />}
      basicExample={rangeInputEx1}
      customExample={rangeInputEx2}
      customText={`
        You can easily customize the range, appearance, and other visual properties of the Range Input component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
    />
  );
};

export default RangeInputPage;
